//Control Component for Game 5 - TH-Quiz
import React, { useEffect, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import nodeCGStore, { replicate } from '../../../stores/NodecgStore'
import '../css/game9.css'

export function Controls() {

  const [replicants, setReplicants] = useState(NCGStore.getReplicants())
  const [toggleColor, setToggleColor] = useState("#fff")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [studPoint, setStudPoint] = useState(0)
  const [profPoint, setProfPoint] = useState(0)

  var savedPointsStudents = 0
  var savedPointsProfs = 0

  const gameNumber = 9




  useEffect(() => {
    replicate("currentOverlay")
    replicate("firstTeamPoints") //Student Points
    replicate("secondTeamPoints") // Prof Points
    replicate("questionCounter")
    replicate("resultCounter")
    replicate("ordnungSolution")
    replicate("folgenCounter")

    if (replicants.currentOverlay == gameNumber) {
      setToggleColor('lightgreen')
    } else {
      setToggleColor("#fff")
    }

    NCGStore.on("change", () => {
      setReplicants(NCGStore.getReplicants())

      setCurrentQuestion(replicants.questionCounter)
      setStudPoint(replicants.firstTeamPoints)
      setProfPoint(replicants.secondTeamPoints)

      if (replicants.currentOverlay == gameNumber) {
        setToggleColor('lightgreen')
      } else {
        setToggleColor("#fff")
      }
    })
  }, [])

  const reset = () => {
    nodecg.Replicant('questionCounter').value = 0
    nodecg.Replicant('resultCounter').value = false
    nodecg.Replicant('firstTeamPoints').value = 0
    nodecg.Replicant('secondTeamPoints').value = 0
    nodecg.Replicant('ordnungSolution').value = 0
    nodecg.Replicant('folgenCounter').value = 0
  }

  const toggleOverlay = () => {
    nodecg.Replicant('currentOverlay').value = (nodecg.Replicant('currentOverlay').value == gameNumber ? 0 : gameNumber)
    if (replicants.currentOverlay == gameNumber) {
      setToggleColor('lightgreen')
    } else {
      setToggleColor("#fff")
    }
  }

  return (
    <div>
      <button className='toggle-button' style={{ backgroundColor: toggleColor }} onClick={() => toggleOverlay()}>Toggle Overlay</button>

      <div>Question</div>
      <div className='questions'>
        <button className='button' onClick={() => {
          nodecg.Replicant('folgenCounter').value = 0
          nodecg.Replicant('ordnungSolution').value = 0
          var tmp = nodecg.Replicant('questionCounter').value
          nodecg.Replicant('questionCounter').value = 0;
          nodecg.Replicant('questionCounter').value = (tmp <= 0 ? 0 : tmp - 1)
          nodecg.Replicant('resultCounter').value = false
        }
        }>Prev</button>
        <button className='button' onClick={() => {
          nodecg.Replicant('folgenCounter').value = 0
          if (nodecg.Replicant('questionCounter').value < 11) {
            nodecg.Replicant('ordnungSolution').value = 0
            var tmp = nodecg.Replicant('questionCounter').value
            nodecg.Replicant('questionCounter').value = 0;
            nodecg.Replicant('questionCounter').value = tmp + 1
            nodecg.Replicant('resultCounter').value = false
          }
        }
        }>Next</button>

        <button className='button' onClick={() => nodecg.Replicant('resultCounter').value = !nodecg.Replicant('resultCounter').value}>Lösung</button>

        <div className='button'>{currentQuestion}</div>

      </div>

      <div>Single Round</div>
      <div className='questions'>
        <button className='button' onClick={() => {
          nodecg.Replicant('folgenCounter').value = (replicants.folgenCounter <= 0 ? 0 : replicants.folgenCounter - 1)
        }
        }>Prev</button>
        <button className='button' onClick={() => {
          if (nodecg.Replicant('folgenCounter').value < 5) {
            nodecg.Replicant('folgenCounter').value = replicants.folgenCounter + 1
          }
        }
        }>Next</button>
      </div>
      <div>Stud</div>
      <div className='points'>

        <button className='button' onClick={() => nodecg.Replicant('firstTeamPoints').value = (nodecg.Replicant('firstTeamPoints').value <= 0 ? 0 : nodecg.Replicant('firstTeamPoints').value - 1)}>--</button>
        <button className='button' onClick={() => nodecg.Replicant('firstTeamPoints').value = nodecg.Replicant('firstTeamPoints').value + 1}>++</button>
        <div className='button'>{studPoint}</div>
      </div>

      <div>Prof</div>
      <div className='points'>
        <button className='button' onClick={() => nodecg.Replicant('secondTeamPoints').value = (nodecg.Replicant('secondTeamPoints').value <= 0 ? 0 : nodecg.Replicant('secondTeamPoints').value - 1)}>--</button>
        <button className='button' onClick={() => nodecg.Replicant('secondTeamPoints').value = nodecg.Replicant('secondTeamPoints').value + 1}>++</button>
        <div className='button'>{profPoint}</div>
      </div>
      <div className='reset'>
        <button className='reset-button' onClick={() => reset()}>Reset</button>
      </div>
    </div>
  );
}