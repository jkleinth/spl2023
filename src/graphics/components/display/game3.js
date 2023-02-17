import React, { useEffect, useRef, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'
// import './../../css/overlay.css'

export function Game3() {

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
        if (replicants.questionCounter == 10) {
          setQuestion(<img src={'./game3/question' + replicants['questionCounter'] + '.png'} style={{}} />)
      }else{
        setQuestion(<img src={'./game3/question' + replicants['questionCounter'] + '.png'} style={{ width: "100%" }} />)
      }
      }

      if (replicants.resultCounter == true) {
        switch (replicants.questionCounter) {
          case 0:
                        setSolution(null)
                        break;
                    case 1:
                        setSolution(<img src={'./game3/solutionc.png'} style={{ width: "100%" }} />)
                        break;
                    case 2:
                        setSolution(<img src={'./game3/solutiond.png'} style={{ width: "100%" }} />)
                        break;;
                    case 3:
                        setSolution(<img src={'./game3/solutionc.png'} style={{ width: "100%" }} />)
                        break;
                    case 4:
                        setSolution(<img src={'./game3/solutionb.png'} style={{ width: "100%" }} />)
                        break;
                    case 5:
                        setSolution(<img src={'./game3/solutionb.png'} style={{ width: "100%" }} />)
                        break;
                    case 6:
                        setSolution(<img src={'./game3/solutionb.png'} style={{ width: "100%" }} />)
                        break;
                    case 7:
                        setSolution(<img src={'./game3/solutiond.png'} style={{ width: "100%" }} />)
                        break;
                    case 8:
                        setSolution(<img src={'./game3/solutionb.png'} style={{ width: "100%" }} />)
                        break;
                    case 9:
                        setSolution(<img src={'./game3/solutiond.png'} style={{ width: "100%" }} />)
                        break;
                        case 10:
                          setSolution(<img src={'./game3/solution1.png'} style={{position:"absolute", top: "160px", left: "-131px"}} />)
                          break;
        }
      } else {
        setSolution(null)
      }
    })
  }, [])


  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <div style={{position:"absolute", top:"500px"}}>
        {question}
      </div>
      <div style={{position:"absolute", top:"500px"}}>
        {solution}
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"50px"}}>
      <div style={{backgroundColor:"#979797", fontSize:"40px", textAlign:"center"}}>
        Professoren
        <div style={{fontSize:"100px"}}>
          {profPoints}
      </div>
      </div>
      <div style={{backgroundColor:"#979797", fontSize:"40px", textAlign:"center"}}>
        Studenten
        <div style={{fontSize:"100px"}}>
          {studPoints}
      </div>
      </div>
      </div>
    </div>
  );
}
