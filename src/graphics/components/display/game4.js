import React, { useEffect, useRef, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'
// import './../../css/overlay.css'

export function Game4() {

  const [replicants, setReplicants] = useState(NCGStore.getReplicants())
  const [question, setQuestion] = useState(null)
  const [realQuestion, setRealQuestion] = useState(null)
  const [studPoints, setStudPoints] = useState(0)
  const [profPoints, setProfPoints] = useState(0)

  useEffect(() => {
    replicate("firstTeamPoints") //Student Points
    replicate("secondTeamPoints") // Prof Points
    replicate("questionCounter")
    replicate("resultCounter")


    NCGStore.on("change", () => {

      setReplicants(NCGStore.getReplicants())

      setStudPoints(replicants.firstTeamPoints)
      setProfPoints(replicants.secondTeamPoints)


      if (replicants.questionCounter == 0 || replicants.questionCounter == null) {
        setQuestion(<img src={'./game4/map.png'} style={{ zIndex: "1000", backgroundColor: "white", width: "1920px", position: "absolute" }} />)
      }
      else {
        setQuestion(<img src={'./game4/map.png'} style={{ zIndex: "1000", backgroundColor: "white", width: "1920px", position: "absolute" }} />)
        setRealQuestion(<img src={'./game4/overlay/question' + replicants['questionCounter'] + '.png'} style={{width:"80%"}}/>)
      }

      if (replicants.questionCounter == 0 || replicants.resultCounter === false || replicants.resultCounter == null) {
      }
      else {
        setQuestion(<img src={'./game4/solution' + replicants['questionCounter'] + '.png'} style={{ zIndex: "1000", backgroundColor: "white", width: "1920px", position: "absolute" }} />)
        setRealQuestion(<img src={'./game4/overlay/question' + replicants['questionCounter'] + '.png'} style={{width:"80%"}}/>)
      }
    })
  }, [])

  return (
    <div>
      <div style={{position: "absolute", left:"599px", top: "950px", zIndex:"1001"}}>
      {realQuestion}
      </div>
      <div>
        {question}
      </div>
      <div>
        <img src={'./points/profPoint.png'} style={{ position: "absolute", top: "550px", left: "20px", zIndex:"1002" }} />
      </div>
      <div>
        <img src={'./points/studPoint.png'} style={{ position: "absolute", top: "550px", left: "1649px", zIndex:"1002" }} />
      </div>
      <div style={{ position: "absolute", top: "632px", left: "212px", fontSize: "40px", color: "white", zIndex:"1002" }}>
        {profPoints}
      </div>
      <div style={{ position: "absolute", top: "632px", left: "1669px", fontSize: "40px", color: "white", zIndex:"1002" }}>
        {studPoints}
      </div>
    </div >
  );
}
