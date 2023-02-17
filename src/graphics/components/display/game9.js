import React, { useEffect, useRef, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'
// import './../../css/overlay.css'

export function Game9() {

    const [replicants, setReplicants] = useState(NCGStore.getReplicants())


    const [studPoints, setStudPoints] = useState(0)
    const [profPoints, setProfPoints] = useState(0)


    const [liveList, setLiveList] = useState([])

    var key = 0


    useEffect(() => {
        replicate("firstTeamPoints") //Student Points
        replicate("secondTeamPoints") // Prof Points
        replicate("questionCounter")
        replicate("resultCounter")
        replicate("ordnungSolution")
        replicate("folgenCounter")



        NCGStore.on("change", () => {

            setReplicants(NCGStore.getReplicants())


            setStudPoints(replicants.firstTeamPoints)
            setProfPoints(replicants.secondTeamPoints)

            if (replicants.folgenCounter === 0) {
                setLiveList([])
            }

            if (replicants.questionCounter !== 0) {
                if (replicants.folgenCounter === 0) {
                    setLiveList([])
                }
                else {
                    if (replicants.folgenCounter === 4) {
                        console.log("debug")
                        setLiveList(old => [<img key={replicants.folgenCounter} src={'./game9/' + replicants['questionCounter'] + '/' + replicants['folgenCounter'] + '.png'}/>, ...old])
                    }
                    else {
                        setLiveList(old => [...old, <img key={replicants.folgenCounter} src={'./game9/' + replicants['questionCounter'] + '/' + replicants['folgenCounter'] + '.png'} />])
                    }
                }
            }
        })
}, [])

return (
    <div style={{ width: "1920px", height: "1080px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ marginBottom: "40px", display: "flex", flexDirection: "column" }}>
            {liveList}
        </div>
        <div>
            <img src={'./points/profPoint.png'} style={{ position: "absolute", top: "820px", left: "320px" }} />
        </div>
        <div>
            <img src={'./points/studPoint.png'} style={{ position: "absolute", top: "820px", left: "1339px" }} />
        </div>
        <div style={{ position: "absolute", top: "902px", left: "551px", fontSize: "40px", color: "white" }}>
            {profPoints}
        </div>
        <div style={{ position: "absolute", top: "902px", left: "1369px", fontSize: "40px", color: "white" }}>
            {studPoints}
        </div>
    </div>
);
}
