import React, { useEffect, useRef, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'
import './../../css/overlay.css'

export function Game5() {

    const [replicants, setReplicants] = useState(NCGStore.getReplicants())

    const [question, setQuestion] = useState(null)

    const [studPoints, setStudPoints] = useState(0)
    const [profPoints, setProfPoints] = useState(0)

    const [studLive, setStudLive] = useState([])
    const [profLive, setProfLive] = useState([])

    const [currentLeftList, setCurrentLeftList] = useState([])

    var list9 = [
       
        <img key="6" src={'./game5/1/6.png'} style={{ width: "270px", marginTop: "10px" }} />,
        <img key="5" src={'./game5/1/5.png'} style={{ width: "270px", marginTop: "10px" }} />,
        <img key="2" src={'./game5/1/2.png'} style={{ width: "270px", marginTop: "10px" }} />,
        <img key="4" src={'./game5/1/4.png'} style={{ width: "270px", marginTop: "10px" }} />,
        <img key="1" src={'./game5/1/1.png'} style={{ width: "270px", marginTop: "10px" }} />
    ]

    var list2 = [
        <img key="1" src={'./game5/2/1.png'} style={{ width: "267px", marginTop: "10px" }} />,
        <img key="3" src={'./game5/2/3.png'} style={{ width: "267px", marginTop: "10px" }} />,
        <img key="2" src={'./game5/2/2.png'} style={{ width: "267px", marginTop: "10px" }} />,
        <img key="6" src={'./game5/2/6.png'} style={{ width: "267px", marginTop: "10px" }} />,
        <img key="4" src={'./game5/2/4.png'} style={{ width: "267px", marginTop: "10px" }} />
    ]


    var list3 = [
        <img key="5" src={'./game5/3/5.png'} style={{ width: "267px", marginTop: "10px" }} />,
        <img key="1" src={'./game5/3/1.png'} style={{ width: "267px", marginTop: "10px" }} />,
        <img key="3" src={'./game5/3/3.png'} style={{ width: "267px", marginTop: "10px" }} />,
        <img key="2" src={'./game5/3/2.png'} style={{ width: "267px", marginTop: "10px" }} />,
        <img key="6" src={'./game5/3/6.png'} style={{ width: "267px", marginTop: "10px" }} />
    ]

    const [liveList, setLiveList] = useState([])

    var tmpList1 = []
    var tmpList2 = []
    var tmpList3 = []

    tmpList1 = [...list9]
    tmpList2 = [...list2]
    tmpList3 = [...list3]

    var setStartList = false

    useEffect(() => {
        replicate("firstTeamPoints") //Student Points
        replicate("secondTeamPoints") // Prof Points
        replicate("questionCounter")
        replicate("resultCounter")
        replicate("ordnungSolution")

        replicate("livesOrdnungStud")
        replicate("livesOrdnungProf")

        // tmpList1 = [...list9]
        // tmpList2 = [...list2]
        // tmpList3 = [...list3]


        NCGStore.on("change", () => {

            setReplicants(NCGStore.getReplicants())

            
            setStudPoints(replicants.firstTeamPoints)
            setProfPoints(replicants.secondTeamPoints)

            if (replicants.questionCounter == 0) {
                setQuestion(null)
                setCurrentLeftList([])
                setLiveList([])
                list9 = [...tmpList1]
                list2 = [...tmpList2]
                list3 = [...tmpList3]
                setStartList = false
                nodecg.Replicant('ordnungSolution').value = 0
                setStudLive([])
                setProfLive([])
                // window.location.reload(false)
            }

            if (replicants.questionCounter == 1) {

                setQuestion(<img src={'./game5/1/question.png'} />,)

                setCurrentLeftList(list9)

                if (setStartList == false) {
                    setLiveList([
                        <img key="3" src={'./game5/1/3.png'} style={{ width: "270px", marginTop: "10px" }} />
                    ])
                    setLiveList(oldArray => [...oldArray].sort((a, b) => a.key - b.key))
                    setStartList = true
                }

                switch (replicants.ordnungSolution) {
                    case 0: break;
                    case 1:
                        list9.forEach((item, i) => {
                            if (item.key == 6) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list9 = list9.filter((element) => element.key != 6)
                                setCurrentLeftList(list9)
                            }
                        })
                        break;
                    case 2:
                        list9.forEach((item, i) => {
                            if (item.key == 5) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list9 = list9.filter((element) => element.key != 5)
                                setCurrentLeftList(list9)
                            }
                        })
                        break;;
                    case 3:
                        list9.forEach((item, i) => {
                            console.log(i)
                            if (item.key == 2) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list9 = list9.filter((element) => element.key != 2)
                                setCurrentLeftList(list9)
                            }
                        })
                        break;
                    case 4:
                        list9.forEach(item => {
                            if (item.key == 4) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list9 = list9.filter((element) => element.key != 4)
                                setCurrentLeftList(list9)
                            }
                        })
                        break;
                    case 5:
                        list9.forEach(item => {
                            if (item.key == 1) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list9 = list9.filter((element) => element.key != 1)
                                setCurrentLeftList(list9)
                            }
                        })
                        break;
                }
            }
            else if (replicants.questionCounter == 2) {
                setQuestion(<img src={'./game5/2/question.png'} />,)
                setCurrentLeftList(list2)

                if (setStartList == false) {
                    console.log("set2")
                    setLiveList([
                        <img key="5" src={'./game5/2/5.png'} style={{ width: "267px", marginTop: "10px" }} />
                    ])
                    // setLiveList(oldArray => [...oldArray].sort((a, b) => a.key - b.key))
                    setStartList = true
                }

                switch (replicants.ordnungSolution) {
                    case 0: break;
                    case 1:
                        list2.forEach((item, i) => {
                            if (item.key == 1) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list2 = list2.filter((element) => element.key != 1)
                                setCurrentLeftList(list2)
                            }
                        })
                        break;
                    case 2:
                        list2.forEach((item, i) => {
                            if (item.key == 3) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list2 = list2.filter((element) => element.key != 3)
                                setCurrentLeftList(list2)
                            }
                        })
                        break;;
                    case 3:
                        list2.forEach((item, i) => {
                            console.log(i)
                            if (item.key == 2) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list2 = list2.filter((element) => element.key != 2)
                                setCurrentLeftList(list2)
                            }
                        })
                        break;
                    case 4:
                        list2.forEach(item => {
                            if (item.key == 6) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list2 = list2.filter((element) => element.key != 6)
                                setCurrentLeftList(list2)
                            }
                        })
                        break;
                    case 5:
                        list2.forEach(item => {
                            if (item.key == 4) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list2 = list2.filter((element) => element.key != 4)
                                setCurrentLeftList(list2)
                            }
                        })
                        break;
                }
                // setCurrentLeftList(list1)
            }
            else if (replicants.questionCounter == 3) {
                setQuestion(<img src={'./game5/3/question.png'} />,)
                setCurrentLeftList(list3)

                if (setStartList == false) {
                    console.log("set3")
                    setLiveList([
                        <img key="4" src={'./game5/3/4.png'} style={{ width: "267px", marginTop: "10px" }} />
                    ])

                    setStartList = true

                }

                setLiveList(oldArray => [...oldArray].sort((a, b) => a.key - b.key))
                switch (replicants.ordnungSolution) {
                    case 0: break;
                    case 1:
                        list3.forEach((item, i) => {
                            if (item.key == 5) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list3 = list3.filter((element) => element.key != 5)
                                setCurrentLeftList(list3)
                            }
                        })
                        break;
                    case 2:
                        list3.forEach((item, i) => {
                            if (item.key == 1) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list3 = list3.filter((element) => element.key != 1)
                                setCurrentLeftList(list3)
                            }
                        })
                        break;;
                    case 3:
                        list3.forEach((item, i) => {
                            console.log(i)
                            if (item.key == 3) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list3 = list3.filter((element) => element.key != 3)
                                setCurrentLeftList(list3)
                            }
                        })
                        break;
                    case 4:
                        list3.forEach(item => {
                            if (item.key == 2) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list3 = list3.filter((element) => element.key != 2)
                                setCurrentLeftList(list3)
                            }
                        })
                        break;
                    case 5:
                        list3.forEach(item => {
                            if (item.key == 6) {
                                setLiveList(oldArray => [...oldArray, item].sort((a, b) => a.key - b.key))
                                list3 = list3.filter((element) => element.key != 6)
                                setCurrentLeftList(list3)
                            }
                        })
                        break;
                }
            }

            if (replicants.questionCounter > 0) {
                switch (replicants.livesOrdnungStud) {
                    case 0: setStudLive([
                        <img key="1" src={'./game5/studLive.png'} style={{ width: "76px", marginTop: "5px", float: "right" }} />,
                        <img key="2" src={'./game5/studLive.png'} style={{ width: "76px", marginTop: "5px", float: "right" }} />,
                        <img key="3" src={'./game5/studLive.png'} style={{ width: "76px", marginTop: "5px", float: "right" }} />
                    ])
                        break;
                    case 1: setStudLive([
                        <img key="2" src={'./game5/studLive.png'} style={{ width: "76px", marginTop: "5px", float: "right" }} />,
                        <img key="3" src={'./game5/studLive.png'} style={{ width: "76px", marginTop: "5px", float: "right" }} />
                    ])
                        break;
                    case 2: setStudLive([
                        <img key="3" src={'./game5/studLive.png'} style={{ width: "76px", marginTop: "5px", float: "right" }} />
                    ])
                        break;
                    case 3: setStudLive(null)
                        break;
                }
                switch (replicants.livesOrdnungProf) {
                    case 0: setProfLive([
                        <img key="1" src={'./game5/profLive.png'} style={{ width: "76px", marginTop: "5px" }} />,
                        <img key="2" src={'./game5/profLive.png'} style={{ width: "76px", marginTop: "5px" }} />,
                        <img key="3" src={'./game5/profLive.png'} style={{ width: "76px", marginTop: "5px" }} />
                    ])
                        break;
                    case 1: setProfLive([
                        <img key="2" src={'./game5/profLive.png'} style={{ width: "76px", marginTop: "5px" }} />,
                        <img key="3" src={'./game5/profLive.png'} style={{ width: "76px", marginTop: "5px" }} />
                    ])
                        break;
                    case 2: setProfLive([
                        <img key="3" src={'./game5/profLive.png'} style={{ width: "76px", marginTop: "5px" }} />
                    ])
                        break;
                    case 3: setProfLive(null)
                        break;
                }
            }

            // if (replicants.resultCounter === false || replicants.resultCounter == null) {
            // }
            // else {
            //   setQuestion(<img src={'./game1/solution' + replicants['questionCounter'] + '.png'} />)
            // }
        })
    }, [])

    return (
        <div style={{ width: "1920px", height: "1080px", display: "flex", justifyContent: "end", alignItems: "center", flexDirection: "column" }}>
            <div style={{}}>
                {question}
            </div>
            <div style={{ display: "flex", height: "350px" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "20px", marginBottom:"20px" }}>
                    {liveList}
                </div>
                <div className='wrapper'>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "350px" }}>
                        {currentLeftList}
                    </div>
                </div>
                <div style={{ position: "absolute", top: "990px", left: "50px" }}>
                    {profLive}
                </div>
                <div style={{ position: "absolute", top: "990px", left: "1644px" }}>
                    {studLive}
                </div>
            </div>
            <div>
                <img src={'./points/profPoint.png'} style={{ position: "absolute", top: "850px", left: "20px", zIndex: "1002" }} />
            </div>
            <div>
                <img src={'./points/studPoint.png'} style={{ position: "absolute", top: "850px", left: "1649px", zIndex: "1002" }} />
            </div>
            <div style={{ position: "absolute", top: "932px", left: "212px", fontSize: "40px", color: "white", zIndex: "1002" }}>
                {profPoints}
            </div>
            <div style={{ position: "absolute", top: "932px", left: "1669px", fontSize: "40px", color: "white", zIndex: "1002" }}>
                {studPoints}
            </div>
        </div>
    );
}
