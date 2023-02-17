import React, { useEffect, useRef, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'
import './../../css/display.css'

export function Game8() {

  const [replicants, setReplicants] = useState(NCGStore.getReplicants())
  const [question, setQuestion] = useState(null)
  const [studPoints, setStudPoints] = useState(0)
  const [profPoints, setProfPoints] = useState(0)

  useEffect(() => {
    replicate("firstTeamPoints") //Student Points
    replicate("secondTeamPoints") // Prof Points
    replicate("questionCounter") //integer

    NCGStore.on("change", () => {
      setReplicants(NCGStore.getReplicants())

      setStudPoints(replicants.firstTeamPoints)
      setProfPoints(replicants.secondTeamPoints)

      if (replicants.questionCounter == 0 || replicants.questionCounter == null) {
        setQuestion(null)
      }
      else {
        setQuestion(<img src={'./game8/'+ replicants['questionCounter'] + '.png'} style={{width:"30%"}} />)
      }

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
      <div>
        {question}
      </div>
    </div>
  );
}
