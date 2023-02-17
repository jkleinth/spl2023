//Control Component for Display
import React, { useEffect, useState } from 'react'
import NCGStore from '../../stores/NodecgStore'
import nodeCGStore, { replicate } from '../../stores/NodecgStore'
import './display.css'

export function Controls() {

    const [replicants, setReplicants] = useState(NCGStore.getReplicants())


    const [toggleColor, setToggleColor] = useState("#fff")

    const [stud1, setStud1] = useState(false)
    const [prof1, setProf1] = useState(false)

    const [stud2, setStud2] = useState(false)
    const [prof2, setProf2] = useState(false)

    const [stud3, setStud3] = useState(false)
    const [prof3, setProf3] = useState(false)

    const [stud4, setStud4] = useState(false)
    const [prof4, setProf4] = useState(false)

    const [stud5, setStud5] = useState(false)
    const [prof5, setProf5] = useState(false)

    const [stud6, setStud6] = useState(false)
    const [prof6, setProf6] = useState(false)

    const [stud7, setStud7] = useState(false)
    const [prof7, setProf7] = useState(false)

    const [stud8, setStud8] = useState(false)
    const [prof8, setProf8] = useState(false)

    const [stud9, setStud9] = useState(false)
    const [prof9, setProf9] = useState(false)

    const toggleOverlay = () => {
        nodecg.Replicant('currentOverlay').value = (nodecg.Replicant('currentOverlay').value == 10 ? 0 : 10)
        if (replicants.currentOverlay == 10) {
            setToggleColor('lightgreen')
        } else {
            setToggleColor("#fff")
        }
    }



    useEffect(() => {
        replicate("startWatch")
        replicate("setWatch")
        replicate("pauseWatch")
        replicate("resumeWatch")
        replicate("resetWatch")
        replicate("studOverallPoints")
        replicate("profOverallPoints")
        replicate("studPointCounter")
        replicate("profPointCounter")
        replicate("currentOverlay")

        NCGStore.on("change", () => {
            setReplicants(NCGStore.getReplicants())
            if (replicants.currentOverlay == 10) {
                setToggleColor('lightgreen')
              } else {
                setToggleColor("#fff")
              }
        })
    })

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                Student
                <button className='button' disabled={stud1} onClick={() => {
                    setStud1(true)
                    nodecg.Replicant('studPointCounter').value = 1
                }}>1</button>
                <button className='button' disabled={stud2} onClick={() => {
                    setStud2(true)
                    nodecg.Replicant('studPointCounter').value = 2
                }
                }>2</button>
                <button className='button' disabled={stud3} onClick={() => {
                    setStud3(true)
                    nodecg.Replicant('studPointCounter').value = 3
                }
                }>3</button>
                <button className='button' disabled={stud4} onClick={() => {
                    setStud4(true)
                    nodecg.Replicant('studPointCounter').value = 4
                }
                }>4</button>
                <button className='button' disabled={stud5} onClick={() => {
                    setStud5(true)
                    nodecg.Replicant('studPointCounter').value = 5
                }
                }>5</button>
                <button className='button' disabled={stud6} onClick={() => {
                    setStud6(true)
                    nodecg.Replicant('studPointCounter').value = 6
                }
                }>6</button>
                <button className='button' disabled={stud7} onClick={() => {
                    setStud7(true)
                    nodecg.Replicant('studPointCounter').value = 7
                }
                }>7</button>
                <button className='button' disabled={stud8} onClick={() => {
                    setStud8(true)
                    nodecg.Replicant('studPointCounter').value = 8
                }
                }>8</button>
                <button className='button' disabled={stud9} onClick={() => {
                    setStud9(true)
                    nodecg.Replicant('studPointCounter').value = 9
                }
                }>9</button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                Profess
                <button className='button' disabled={prof1} onClick={() => {
                    setProf1(true)
                    nodecg.Replicant('profPointCounter').value = 1
                }}>1</button>
                <button className='button' disabled={prof2} onClick={() => {
                    setProf2(true)
                    nodecg.Replicant('profPointCounter').value = 2
                }
                }>2</button>
                <button className='button' disabled={prof3} onClick={() => {
                    setProf3(true)
                    nodecg.Replicant('profPointCounter').value = 3
                }
                }>3</button>
                <button className='button' disabled={prof4} onClick={() => {
                    setProf4(true)
                    nodecg.Replicant('profPointCounter').value = 4
                }
                }>4</button>
                <button className='button' disabled={prof5} onClick={() => {
                    setProf5(true)
                    nodecg.Replicant('profPointCounter').value = 5
                }
                }>5</button>
                <button className='button' disabled={prof6} onClick={() => {
                    setProf6(true)
                    nodecg.Replicant('profPointCounter').value = 6
                }
                }>6</button>
                <button className='button' disabled={prof7} onClick={() => {
                    setProf7(true)
                    nodecg.Replicant('profPointCounter').value = 7
                }
                }>7</button>
                <button className='button' disabled={prof8} onClick={() => {
                    setProf8(true)
                    nodecg.Replicant('profPointCounter').value = 8
                }
                }>8</button>
                <button className='button' disabled={prof9} onClick={() => {
                    setProf9(true)
                    nodecg.Replicant('profPointCounter').value = 9
                }
                }>9</button>
            </div>
            <div>
                <button className='button' onClick={() => {
                    nodecg.Replicant('studOverallPoints').value = 0
                    nodecg.Replicant('profOverallPoints').value = 0
                    nodecg.Replicant('studPointCounter').value = 0
                    nodecg.Replicant('profPointCounter').value = 0
                    setProf1(false)
                    setProf2(false)
                    setProf3(false)
                    setProf4(false)
                    setProf5(false)
                    setProf6(false)
                    setProf7(false)
                    setProf8(false)
                    setProf9(false)

                    setStud1(false)
                    setStud2(false)
                    setStud3(false)
                    setStud4(false)
                    setStud5(false)
                    setStud6(false)
                    setStud7(false)
                    setStud8(false)
                    setStud9(false)
                }}>RESET POINTS</button>
            </div>
            <div>
                <button className='toggle-button' style={{ backgroundColor: toggleColor }} onClick={() => toggleOverlay()}>Toggle OverallPoints</button>
            </div>
            <div className='container'>
                {/* <div className='stopwatch'>
                    Stoppuhr
                    <button className='button' onClick={() => nodecg.Replicant('startWatch').value = true}>Start Timer</button>
                    <button className='button' onClick={() => nodecg.Replicant('pauseWatch').value = true}>Pause Timer</button>
                    <button className='button' onClick={() => nodecg.Replicant('resumeWatch').value = true}>Resume Timer</button>
                    <button className='button' onClick={() => nodecg.Replicant('resetWatch').value = true}>Reset Timer</button>
                </div> */}
                <div className='timer'>
                    Timer
                    <button className='button' onClick={() => nodecg.Replicant('startTimer').value = true}>Start Timer</button>
                    <button className='button' onClick={() => nodecg.Replicant('pauseTimer').value = true}>Pause Timer</button>
                    {/* <button className='button' onClick={() => nodecg.Replicant('resumeTimer').value = true}>Resume Timer</button> */}
                    <button className='button' onClick={() => nodecg.Replicant('resetTimer').value = true}>Reset Timer</button>
                    <input placeholder='Zeit in Sekunden' onChange={(e) => nodecg.Replicant('time').value = e.target.value}></input>
                </div>
            </div>

        </div>
    );
}