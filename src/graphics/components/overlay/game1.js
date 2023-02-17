import React, { useEffect, useRef, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'
import './../../css/overlay.css'

export function Game1() {

  const [replicants, setReplicants] = useState(NCGStore.getReplicants())
  const [question, setQuestion] = useState(null)
  const [solution, setSolution] = useState(null)
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

      if (replicants.questionCounter == 0 || replicants.questionCounter == null) {
        setQuestion(null)
      }
      else {
        setQuestion(<img src={'./game1/question' + replicants['questionCounter'] + '.png'} style={{ width: "80%"}} />)
      }

      if (replicants.resultCounter === false || replicants.resultCounter == null) {
        setSolution(null)
      }
      else {
        setSolution(<img src={'./game1/solution' + replicants['questionCounter'] + '.png'} style={{ width: "80%"}} />)
      }

    })
  }, [])


  return (
    <div style={{ width: "1920px", height: "1080px" }}>
      <div style={{position: "absolute", left: "768px", top: "825px"}}>
        {question}
      </div>
      <div style={{position: "absolute", left: "768px", top: "925px"}}>
        {solution}
      </div>
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
      {/* <div>
        {studPoints}
      </div>
      <div>
        {profPoints}
      </div> */}
      {/* <div className='studentPoints'>
        {replicants.firstTeamPoints}
      </div>
      <div className='profPoints'>
        {replicants.secondTeamPoints}
      </div> */}
    </div>
  );
}
