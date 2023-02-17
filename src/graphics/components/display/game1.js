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
        setQuestion(<img src={'./game1/question' + replicants['questionCounter'] + '.png'} style={{ width: "60%" }} />)
      }

      if (replicants.resultCounter === false || replicants.resultCounter == null) {
        setSolution(null)
      }
      else {
        setSolution(<img src={'./game1/solution' + replicants['questionCounter'] + '.png'} style={{ width: "60%" }} />)
      }

    })
  }, [])


  return (
    <div style={{ margin: "50px 0 0 50px", textAlign: "center", display: "flex", flexDirection: "column" }}>
      <div>
        {question}
      </div>
      <div>
        {solution}
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ backgroundColor: "#979797", fontSize: "40px" }}>
          Professoren
          <div style={{ fontSize: "100px" }}>
            {profPoints}
          </div>
        </div>
        <div style={{ backgroundColor: "#979797", fontSize: "40px" }}>
          Studenten
          <div style={{ fontSize: "100px" }}>
            {studPoints}
          </div>
        </div>
      </div>
    </div>
  );
}
