import React from 'react'
import { useRef, useState, useEffect } from 'react';
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'

export default function Timer() {

    const [counter, setCounter] = useState(600);
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [running, setRunning] = useState(false)

  // Third Attempts
  React.useEffect(() => {

    const timer = setInterval(() => { // That's how I resume it (with a re-render)
        if(running) {
            if(counter > 0){
                setCounter(counter - 1)
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
  }),[counter];

  React.useEffect(() => {
    setMinutes(Math.floor(counter / 60))
    setSeconds(counter % 60)
  }, [counter])

    const [replicants, setReplicants] = useState(NCGStore.getReplicants())

    useEffect(() => {
        replicate("startTimer")
        replicate("setTime")
        replicate("pauseTimer")
        replicate("resumeTimer")
        replicate("resetTimer")
        replicate("time")

        // setOverlay(video)

        NCGStore.on("change", () => {

            setReplicants(NCGStore.getReplicants())

            if (replicants.startTimer == true) {
                setRunning(true)
                // setCounter(counter - 1)
                nodecg.Replicant('startTimer').value = false
            }

            if(replicants.pauseTimer == true) {
                setRunning(false)
                nodecg.Replicant('pauseTimer').value = false
            }

            if(replicants.resumeTimer == true) {
                setRunning(true)
                nodecg.Replicant('resumeTimer').value = false
            }

            if(replicants.resetTimer == true) {
                setCounter(replicants.time)
                console.log(counter)
                nodecg.Replicant('resetTimer').value = false
            }


        })
    }, [])


    return (
        <div>
            <div>Timer</div>
            {minutes.toLocaleString('de-DE', {minimumIntegerDigits: 2})}:{seconds.toLocaleString('de-DE', {minimumIntegerDigits: 2})}
        </div>
    )
}
