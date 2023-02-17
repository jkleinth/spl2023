import React, { useEffect, useRef, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'
// import './../../css/overlay.css'

export function Game7() {

    const [replicants, setReplicants] = useState(NCGStore.getReplicants())


    const [studPoints, setStudPoints] = useState(0)
    const [profPoints, setProfPoints] = useState(0)


    const [liveList, setLiveList] = useState([])

    var list9 = [
        <img key="1" src={'./game7/1.png'} style={{ width: "256px", marginRight: "20px" }} />,
        <img key="2" src={'./game7/2.png'} style={{ width: "256px", marginRight: "20px" }} />,
        <img key="3" src={'./game7/3.png'} style={{ width: "256px", marginRight: "20px" }} />,
        <img key="4" src={'./game7/4.png'} style={{ width: "256px", marginRight: "20px" }} />,
        <img key="5" src={'./game7/5.png'} style={{ width: "256px", marginRight: "20px" }} />,
        <img key="6" src={'./game7/6.png'} style={{ width: "256px" }} />
    ]



    var tmpList1 = []

    tmpList1 = [...list9]

    var setStartList = false


    useEffect(() => {
        replicate("firstTeamPoints") //Student Points
        replicate("secondTeamPoints") // Prof Points
        replicate("questionCounter")
        replicate("resultCounter")
        replicate("ordnungSolution")

        // tmpList1 = [...list9]
        // tmpList2 = [...list2]
        // tmpList3 = [...list3]


        NCGStore.on("change", () => {

            setReplicants(NCGStore.getReplicants())


            setStudPoints(replicants.firstTeamPoints)
            setProfPoints(replicants.secondTeamPoints)

            if (replicants.questionCounter == 0) {
                list9 = [...tmpList1]
                nodecg.Replicant('ordnungSolution').value = 0
                // window.location.reload(false)
            }

            if (replicants.questionCounter == 1) {

                if (setStartList == false) {
                    setLiveList(list9)
                    setLiveList(oldArray => [...oldArray].sort((a, b) => a.key - b.key))
                    setStartList = true
                }

                switch (replicants.ordnungSolution) {
                    case 0: break;
                    case 1:
                        list9.forEach((item, i) => {
                            if (item.key == 1) {
                                list9 = list9.filter((element) => element.key != 1)
                                setLiveList(list9)
                            }
                        })
                        break;
                    case 2:
                        list9.forEach((item, i) => {
                            if (item.key == 2) {
                                list9 = list9.filter((element) => element.key != 2)
                                setLiveList(list9)
                            }
                        })
                        break;;
                    case 3:
                        list9.forEach((item) => {
                            if (item.key == 3) {
                                list9 = list9.filter((element) => element.key != 3)
                                setLiveList(list9)
                            }
                        })
                        break;
                    case 4:
                        list9.forEach(item => {
                            if (item.key == 4) {
                                list9 = list9.filter((element) => element.key != 4)
                                setLiveList(list9)
                            }
                        })
                        break;
                    case 5:
                        list9.forEach(item => {
                            if (item.key == 5) {
                                list9 = list9.filter((element) => element.key != 5)
                                setLiveList(list9)
                            }
                        })
                        break;
                    case 6:
                        list9.forEach(item => {
                            if (item.key == 6) {
                                list9 = list9.filter((element) => element.key != 6)
                                setLiveList(list9)
                            }
                        })
                        break;
                }
            }
        })
    }, [])

    return (
        <div style={{ width: "1920px", height: "1080px", display: "flex", justifyContent: "center", alignItems: "end" }}>
            <div style={{ marginBottom: "40px" }}>
                {liveList}
            </div>
            <div>
                <img src={'./points/profPoint.png'} style={{ position: "absolute", top: "820px", left: "20px" }} />
            </div>
            <div>
                <img src={'./points/studPoint.png'} style={{ position: "absolute", top: "820px", left: "1639px" }} />
            </div>
            <div style={{ position: "absolute", top: "902px", left: "251px", fontSize: "40px", color: "white" }}>
                {profPoints}
            </div>
            <div style={{ position: "absolute", top: "902px", left: "1669px", fontSize: "40px", color: "white" }}>
                {studPoints}
            </div>
        </div>
    );
}
