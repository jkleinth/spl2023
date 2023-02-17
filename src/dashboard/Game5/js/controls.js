//Control Component for Game 5 - TH-Quiz
import React, { useEffect, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import nodeCGStore, { replicate } from '../../../stores/NodecgStore'
import '../css/game5.css'

export function Controls() {

  const [replicants, setReplicants] = useState(NCGStore.getReplicants())
  const [toggleColor, setToggleColor] = useState("#fff")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [studPoint, setStudPoint] = useState(0)
  const [profPoint, setProfPoint] = useState(0)

  var savedPointsStudents = 0
  var savedPointsProfs = 0

  const gameNumber = 5




  useEffect(() => {
    replicate("currentOverlay")
    replicate("firstTeamPoints") //Student Points
    replicate("secondTeamPoints") // Prof Points
    replicate("questionCounter")
    replicate("resultCounter")
    replicate("ordnungSolution")
    replicate("livesOrdnungStud")
    replicate("livesOrdnungProf")

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
    nodecg.Replicant('livesOrdnungStud').value = 0
    nodecg.Replicant('livesOrdnungProf').value = 0
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

          nodecg.Replicant('ordnungSolution').value = 0
          var tmp = nodecg.Replicant('questionCounter').value
          nodecg.Replicant('questionCounter').value = 0;
          nodecg.Replicant('questionCounter').value = (tmp <= 0 ? 0 : tmp - 1)
          nodecg.Replicant('resultCounter').value = false
          nodecg.Replicant('livesOrdnungStud').value = 0
          nodecg.Replicant('livesOrdnungProf').value = 0
        }
        }>Prev</button>
        <button className='button' onClick={() => {
          if (nodecg.Replicant('questionCounter').value < 11) {
            nodecg.Replicant('ordnungSolution').value = 0
            var tmp = nodecg.Replicant('questionCounter').value
            nodecg.Replicant('questionCounter').value = 0;
            nodecg.Replicant('questionCounter').value = tmp + 1
            nodecg.Replicant('resultCounter').value = false
            nodecg.Replicant('livesOrdnungStud').value = 0
            nodecg.Replicant('livesOrdnungProf').value = 0
          }
        }
        }>Next</button>

        <button className='button' onClick={() => nodecg.Replicant('resultCounter').value = !nodecg.Replicant('resultCounter').value}>Lösung</button>

        <div className='button'>{currentQuestion}</div>

      </div>
      <div className='solutions'>
        <button className='button' onClick={() => nodecg.Replicant('ordnungSolution').value = 1}>1</button>
        <button className='button' onClick={() => nodecg.Replicant('ordnungSolution').value = 2}>2</button>
        <button className='button' onClick={() => nodecg.Replicant('ordnungSolution').value = 3}>3</button>
        <button className='button' onClick={() => nodecg.Replicant('ordnungSolution').value = 4}>4</button>
        <button className='button' onClick={() => nodecg.Replicant('ordnungSolution').value = 5}>5</button>
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

      <div>Lives</div>
      <div>Stud</div>
      <div className='points'>
        
      <button className='button' onClick={() => nodecg.Replicant('livesOrdnungStud').value = (nodecg.Replicant('livesOrdnungStud').value <= 0 ? 0 : nodecg.Replicant('livesOrdnungStud').value - 1)}>++</button>
        <button className='button' onClick={() => nodecg.Replicant('livesOrdnungStud').value = nodecg.Replicant('livesOrdnungStud').value + 1}>--</button>
        <div className='button'>{studPoint}</div>
      </div>

      <div>Prof</div>
      <div className='points'>
        
      <button className='button' onClick={() => nodecg.Replicant('livesOrdnungProf').value = (nodecg.Replicant('livesOrdnungProf').value <= 0 ? 0 : nodecg.Replicant('livesOrdnungProf').value - 1)}>++</button>
        <button className='button' onClick={() => nodecg.Replicant('livesOrdnungProf').value = nodecg.Replicant('livesOrdnungProf').value + 1}>--</button>
        <div className='button'>{profPoint}</div>
      </div>
      
      <div className='reset'>
        <button className='reset-button' onClick={() => reset()}>Reset</button>
      </div>
    </div>
  );
}