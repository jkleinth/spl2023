//Control Component for Game 1 - TH-Quiz
import React, { useEffect, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import nodeCGStore, { replicate } from '../../../stores/NodecgStore'
import "./../css/game2.css"

export function Controls() {

  const [replicants, setReplicants] = useState(NCGStore.getReplicants())
  const [toggleColor, setToggleColor] = useState("#fff")
  const [studPoint, setStudPoint] = useState(0)
  const [profPoint, setProfPoint] = useState(0)

  var savedPointsStudents = 0
  var savedPointsProfs = 0

  


  useEffect(() => {
    replicate("currentOverlay")
    replicate("firstTeamPoints") //Student Points
    replicate("secondTeamPoints") // Prof Points

    if(replicants.currentOverlay == 2){
      setToggleColor('lightgreen')
    } else {
      setToggleColor("#fff")
    }

    NCGStore.on("change", () => {
      setReplicants(NCGStore.getReplicants())

      setStudPoint(replicants.firstTeamPoints)
      setProfPoint(replicants.secondTeamPoints)

      if(replicants.currentOverlay == 2){
        setToggleColor('lightgreen')
      } else {
        setToggleColor("#fff")
      }
    })
  }, [])

  const reset = () => {
    nodecg.Replicant('firstTeamPoints').value = 0
    nodecg.Replicant('secondTeamPoints').value = 0
  }

  const toggleOverlay = () => {
    nodecg.Replicant('currentOverlay').value = (nodecg.Replicant('currentOverlay').value == 2 ? 0 : 2)
    if(replicants.currentOverlay == 2){
      setToggleColor('lightgreen')
    } else {
      setToggleColor("#fff")
    }
  }

  return (
    <div>
      <button className='toggle-button' style={{backgroundColor: toggleColor}} onClick={() => toggleOverlay()}>Toggle Overlay</button>
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