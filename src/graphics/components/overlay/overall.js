import React, { useEffect, useRef, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'
import './../../css/overlay.css'

export function Overall() {

    const [replicants, setReplicants] = useState(NCGStore.getReplicants())
    const [StudPointList, setStudPointList] = useState([])
    const [profPoints, setProfPoints] = useState([])

    var x = 0
    var y = 0

    useEffect(() => {
        replicate("studOverallPoints")
        replicate("profOverallPoints")
        replicate("studPointCounter")
        replicate("profPointCounter")

        NCGStore.on("change", () => {
            setReplicants(NCGStore.getReplicants())

            switch (replicants.studPointCounter) {
                case 0: setStudPointList([])
                    y = 0
                    break;
                case 1:
                    if (x != replicants.studPointCounter) {
                        console.log("test")
                        setStudPointList(old => [...old, <img key="1" src={'./overall/1.png'} style={{ position: "absolute", top: "388px", left: "1215px" }} />])
                        x = replicants.studPointCounter
                    }
                    break;
                case 2:
                    if (x != replicants.studPointCounter) {
                        setStudPointList(old => [...old, <img key="2" src={'./overall/2.png'} style={{ position: "absolute", top: "388px", left: "1345.78px" }} />])
                        x = replicants.studPointCounter
                    }
                    break;
                case 3:
                    if (x != replicants.studPointCounter) {
                        setStudPointList(old => [...old, <img key="3" src={'./overall/3.png'} style={{ position: "absolute", top: "388px", left: "1476.56px" }} />])
                        x = replicants.studPointCounter
                    }
                    break;
                case 4:
                    if (x != replicants.studPointCounter) {
                        setStudPointList(old => [...old, <img key="4" src={'./overall/4.png'} style={{ position: "absolute", top: "517.83px", left: "1215px" }} />])
                        x = replicants.studPointCounter
                    }
                    break;
                case 5:
                    if (x != replicants.studPointCounter) {
                        setStudPointList(old => [...old, <img key="5" src={'./overall/5.png'} style={{ position: "absolute", top: "517.83px", left: "1345.78px" }} />])
                        x = replicants.studPointCounter
                    }
                    break;
                case 6:
                    if (x != replicants.studPointCounter) {
                        setStudPointList(old => [...old, <img key="6" src={'./overall/6.png'} style={{ position: "absolute", top: "517.83px", left: "1476.56px" }} />])
                        x = replicants.studPointCounter
                    }
                    break;
                case 7:
                    if (x != replicants.studPointCounter) {
                        setStudPointList(old => [...old, <img key="7" src={'./overall/7.png'} style={{ position: "absolute", top: "647.66px", left: "1215px" }} />])
                        x = replicants.studPointCounter
                    }
                    break;
                case 8:
                    if (x != replicants.studPointCounter) {
                        setStudPointList(old => [...old, <img key="8" src={'./overall/8.png'} style={{ position: "absolute", top: "647.66px", left: "1345.78px" }} />])
                        x = replicants.studPointCounter
                    }
                    break;
                case 9:
                    if (x != replicants.studPointCounter) {
                        setStudPointList(old => [...old, <img key="9" src={'./overall/9.png'} style={{ position: "absolute", top: "647.66px", left: "1476.56px" }} />])
                        x = replicants.studPointCounter
                    }
                    break;
            }

            switch (replicants.profPointCounter) {
                case 0: setProfPoints([])
                    break;
                case 1:
                    if (y != replicants.profPointCounter) {
                        setProfPoints(old => [...old, <img key="10" src={'./overall/1.png'} style={{ position: "absolute", top: "388px", left: "330px" }} />])
                        y = replicants.profPointCounter
                    }
                    break;
                case 2:
                    if (y != replicants.profPointCounter) {
                        setProfPoints(old => [...old, <img key="11" src={'./overall/2.png'} style={{ position: "absolute", top: "388px", left: "460.78px" }} />])
                        y = replicants.profPointCounter
                    }
                    break;
                case 3:
                    if (y != replicants.profPointCounter) {
                        setProfPoints(old => [...old, <img key="12" src={'./overall/3.png'} style={{ position: "absolute", top: "388px", left: "591.56px" }} />])
                        y = replicants.profPointCounter
                    }
                    break;
                case 4:
                    if (y != replicants.profPointCounter) {
                        setProfPoints(old => [...old, <img key="13" src={'./overall/4.png'} style={{ position: "absolute", top: "517.83px", left: "330px" }} />])
                        y = replicants.profPointCounter
                    }
                    break;
                case 5:
                    console.log("wsdkewre")
                    if (y != replicants.profPointCounter) {
                        console.log("hahahaha")
                        setProfPoints(old => [...old, <img key="14" src={'./overall/5.png'} style={{ position: "absolute", top: "517.83px", left: "460.78px" }} />])
                        y = replicants.profPointCounter
                    }
                    break;
                case 6:
                    if (y != replicants.profPointCounter) {
                        setProfPoints(old => [...old, <img key="15" src={'./overall/6.png'} style={{ position: "absolute", top: "517.83px", left: "591.56px" }} />])
                        y = replicants.profPointCounter
                    }
                    break;
                case 7:
                    if (y != replicants.profPointCounter) {
                        setProfPoints(old => [...old, <img key="16" src={'./overall/7.png'} style={{ position: "absolute", top: "647.66px", left: "330px" }} />])
                        y = replicants.profPointCounter
                    }
                    break;
                case 8:
                    if (y != replicants.profPointCounter) {
                        setProfPoints(old => [...old, <img key="17" src={'./overall/8.png'} style={{ position: "absolute", top: "647.66px", left: "460.78px" }} />])
                        y = replicants.profPointCounter
                    }
                    break;
                case 9:
                    if (y != replicants.profPointCounter) {
                        setProfPoints(old => [...old, <img key="18" src={'./overall/9.png'} style={{ position: "absolute", top: "647.66px", left: "591.56px" }} />])
                        y = replicants.profPointCounter
                    }
                    break;
            }
        })
    }, [])


    return (
        <div>
            <img src={'./overall/background.png'} />
            {StudPointList}
            {profPoints}
            <div style={{ position: "absolute", left: "1351px", top: "274px", fontSize: "78px", color: "white" }}>
                {replicants.studOverallPoints}
            </div>
            <div style={{ position: "absolute", left: "491px", top: "272px", fontSize: "78px", color: "white" }}>
                {replicants.profOverallPoints}
            </div>
        </div>
    );
}
