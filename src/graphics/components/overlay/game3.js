import React, { useEffect, useRef, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'
import './../../css/overlay.css'

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
                    setQuestion(<img src={'./game3/question' + replicants['questionCounter'] + '.png'} style={{position: "absolute" , left:"50px"}} />)
                }
                else {
                    setQuestion(<img src={'./game3/question' + replicants['questionCounter'] + '.png'} style={{ width: "75%"}} />)
                }
            }

            if (replicants.resultCounter == true) {
                switch (replicants.questionCounter) {
                    case 0:
                        setSolution(null)
                        break;
                    case 1:
                        setSolution(<img src={'./game3/solutionc.png'} style={{ width: "75%" }} />)
                        break;
                    case 2:
                        setSolution(<img src={'./game3/solutiond.png'} style={{ width: "75%" }} />)
                        break;;
                    case 3:
                        setSolution(<img src={'./game3/solutionc.png'} style={{ width: "75%" }} />)
                        break;
                    case 4:
                        setSolution(<img src={'./game3/solutionb.png'} style={{ width: "75%" }} />)
                        break;
                    case 5:
                        setSolution(<img src={'./game3/solutionb.png'} style={{ width: "75%" }} />)
                        break;
                    case 6:
                        setSolution(<img src={'./game3/solutionb.png'} style={{ width: "75%" }} />)
                        break;
                    case 7:
                        setSolution(<img src={'./game3/solutiond.png'} style={{ width: "75%" }} />)
                        break;
                    case 8:
                        setSolution(<img src={'./game3/solutionb.png'} style={{ width: "75%" }} />)
                        break;
                    case 9:
                        setSolution(<img src={'./game3/solutiond.png'} style={{ width: "75%" }} />)
                        break;
                    case 10:
                        setSolution(<img src={'./game3/solution1.png'} style={{ position: "absolute",top:"164px", left: "431px" }} />)
                        break;
                }
            } else {
                setSolution(null)
            }

            // if (replicants.resultCounter === false || replicants.resultCounter == null) {
            //     setSolution(null)
            // }
            // else {
            //     setSolution(<img src={'./game3/solution' + replicants['questionCounter'] + '.png'} />)
            // }

        })
    }, [])


    return (
        <div style={{ width: "1920px", height: "1080px" }}>
            <div style={{ position: "absolute", top: "840px", left: "393px"}}>
                {question}
            </div>
            <div style={{ position: "absolute", top: "840px", left: "393px"}}>
                {solution}
            </div>
            <div>
                <img src={'./points/profPoint.png'} style={{ position: "absolute", top: "870px", left: "100px" }} />
            </div>
            <div>
                <img src={'./points/studPoint.png'} style={{ position: "absolute", top: "870px", left: "1559px" }} />
            </div>
            <div style={{ position: "absolute", top: "952px", left: "292px", fontSize: "40px", color: "white" }}>
                {profPoints}
            </div>
            <div style={{ position: "absolute", top: "952px", left: "1589px", fontSize: "40px", color: "white" }}>
                {studPoints}
            </div>
        </div>
    );
}
