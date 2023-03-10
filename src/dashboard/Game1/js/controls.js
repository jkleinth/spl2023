//Control Component for Game 1 - TH-Quiz
import React, { useEffect, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import nodeCGStore, { replicate } from '../../../stores/NodecgStore'
import '../css/game1.css'

export function Controls() {

  const [replicants, setReplicants] = useState(NCGStore.getReplicants())
  const [toggleColor, setToggleColor] = useState("#fff")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [studPoint, setStudPoint] = useState(0)
  const [profPoint, setProfPoint] = useState(0)

  var savedPointsStudents = 0
  var savedPointsProfs = 0

  


  useEffect(() => {
    replicate("currentOverlay")
    replicate("firstTeamPoints") //Student Points
    replicate("secondTeamPoints") // Prof Points
    replicate("questionCounter")
    replicate("resultCounter")

    if(replicants.currentOverlay == 1){
      setToggleColor('lightgreen')
    } else {
      setToggleColor("#fff")
    }

    NCGStore.on("change", () => {
      setReplicants(NCGStore.getReplicants())

      setCurrentQuestion(replicants.questionCounter)
      setStudPoint(replicants.firstTeamPoints)
      setProfPoint(replicants.secondTeamPoints)

      if(replicants.currentOverlay == 1){
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
  }

  const toggleOverlay = () => {
    nodecg.Replicant('currentOverlay').value = (nodecg.Replicant('currentOverlay').value == 1 ? 0 : 1)
    if(replicants.currentOverlay == 1){
      setToggleColor('lightgreen')
    } else {
      setToggleColor("#fff")
    }
  }

  return (
    <div>
      <button className='toggle-button' style={{backgroundColor: toggleColor}} onClick={() => toggleOverlay()}>Toggle Overlay</button>

      <div>Question</div>
      <div className='questions'>
        <button className='button' onClick={() => {
          nodecg.Replicant('questionCounter').value = (nodecg.Replicant('questionCounter').value <= 0 ? 0 : nodecg.Replicant('questionCounter').value - 1)
          nodecg.Replicant('resultCounter').value = false
        }
        }>Prev</button>
        <button className='button' onClick={() => {
          if(nodecg.Replicant('questionCounter').value < 11){
          nodecg.Replicant('questionCounter').value = nodecg.Replicant('questionCounter').value + 1
          nodecg.Replicant('resultCounter').value = false
          }
        }
        }>Next</button>

        <button className='button' onClick={() => nodecg.Replicant('resultCounter').value = !nodecg.Replicant('resultCounter').value}>L??sung</button>

        <div className='button'>{currentQuestion}</div>

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