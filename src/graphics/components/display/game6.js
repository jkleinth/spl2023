import React, { useEffect, useRef, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'
import './../../css/display.css'

export function Game6() {

  const [replicants, setReplicants] = useState(NCGStore.getReplicants())
  const [studPoints, setStudPoints] = useState(0)
  const [profPoints, setProfPoints] = useState(0)

  useEffect(() => {
    replicate("firstTeamPoints") //Student Points
    replicate("secondTeamPoints") // Prof Points

    NCGStore.on("change", () => {
      setReplicants(NCGStore.getReplicants())

      setStudPoints(replicants.firstTeamPoints)
      setProfPoints(replicants.secondTeamPoints)

    })
  }, [])


  return (
    <div style={{heigh:"1080px", margin: "50px 0 0 50px", textAlign:"center",display:"flex", flexDirection:"column"}}>
      <div style={{display:"flex", justifyContent:"space-evenly"}}>
      <div style={{backgroundColor:"#979797", fontSize:"40px"}}>
        Professoren
        <div style={{fontSize:"40px"}}>
          {profPoints}
      </div>
      </div>
      <div style={{backgroundColor:"#979797", fontSize:"40px"}}>
        Studenten
        <div style={{fontSize:"40px"}}>
          {studPoints}
      </div>
      </div>
      </div>
    </div>
  );
}
