import React from 'react'
import { useRef, useState, useEffect } from 'react';
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'

export default function Stopwatch() {

    const [counter, setCounter] = useState(0);
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [running, setRunning] = useState(false)

  // Third Attempts
  React.useEffect(() => {

    const timer = setInterval(() => { // That's how I resume it (with a re-render)
        if(running) {
            if(counter > 0){
                setCounter(counter + 1)
            }
        }
        if(counter <= 0){
            clearInterval(timer)
        }
    }, 1000)
    return () => clearInterval(timer)

    // const timer =
    //   counter > 0 && setInterval(() => {
    //     if(running == true){
    //         setCounter(counter - 1)
    //     }
    // }, 1000);
    // return () => clearInterval(timer);
  });

  React.useEffect(() => {
    setMinutes(Math.floor(counter / 60))
    setSeconds(counter % 60)
  }, [counter])

    const [replicants, setReplicants] = useState(NCGStore.getReplicants())

    useEffect(() => {
        replicate("startWatch")
        replicate("setWatch")
        replicate("pauseWatch")
        replicate("resumeWatch")
        replicate("resetWatch")

        // setOverlay(video)

        NCGStore.on("change", () => {
            let x = 0

            setReplicants(NCGStore.getReplicants())

            if (replicants.startWatch == true) {
                setRunning(true)
                setCounter(counter + 1)
                nodecg.Replicant('startWatch').value = false
            }

            if(replicants.pauseWatch == true) {
                setRunning(false)
                nodecg.Replicant('pauseWatch').value = false
            }

            if(replicants.resumeWatch == true) {
                setRunning(true)
                nodecg.Replicant('resumeWatch').value = false
            }

            if(replicants.resetWatch == true) {
                setCounter(0)
                nodecg.Replicant('resetWatch').value = false
            }


        })
    }, [])


    return (
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>Stoppuhr</div>
            <div style={{display: "flex", justifyContent: "center"}}>
            {minutes.toLocaleString('de-DE', {minimumIntegerDigits: 2})}:{seconds.toLocaleString('de-DE', {minimumIntegerDigits: 2})}
            </div>
        </div>
    )
}
