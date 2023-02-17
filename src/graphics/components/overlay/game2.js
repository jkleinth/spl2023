import React, { useEffect, useRef, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'
import './../../css/overlay.css'

export function Game2() {

  const [replicants, setReplicants] = useState(NCGStore.getReplicants())
  const [studPoints, setStudPoints] = useState(0)
  const [profPoints, setProfPoints] = useState(0)

  useEffect(() => {
    replicate("firstTeamPoints") //Student Points
    replicate("secondTeamPoints") // Prof Points
    replicate("questionCounter") //integer
    replicate("resultCounter") //boolean

    NCGStore.on("change", () => {
      setReplicants(NCGStore.getReplicants())

      setStudPoints(replicants.firstTeamPoints)
      setProfPoints(replicants.secondTeamPoints)
    })
  }, [])


  return (
    <div style={{ width: "1920px", height: "1080px" }}>
      <div>
        <img src={'./points/profPoint.png'} style={{position:"absolute", top:"820px", left:"100px"}}/>
      </div>
      <div>
      <img src={'./points/studPoint.png'} style={{position:"absolute", top:"820px", left:"1559px"}}/>
      </div>
      <div style={{position:"absolute", top:"902px", left:"292px", fontSize:"40px", color:"white"}}>
          {profPoints}
      </div>
      <div style={{position:"absolute", top:"902px", left:"1589px", fontSize:"40px", color:"white"}}>
          {studPoints}
      </div>
    </div>
  );
}
