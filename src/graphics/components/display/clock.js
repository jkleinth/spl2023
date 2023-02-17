import React from 'react'
import { useRef, useState, useEffect } from 'react';
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'

export default function Clock() {

    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

  // Third Attempts
  React.useEffect(() => {

    const timer = setInterval(() => { // That's how I resume it (with a re-render)
        let today = new Date()
        setHour(today.getHours())
        setMinutes(today.getMinutes())
        setSeconds(today.getSeconds())
    }, 1000)
    return () => clearInterval(timer)
  });

    const [replicants, setReplicants] = useState(NCGStore.getReplicants())

    useEffect(() => {

    }, [])


    return (
        <div>
        <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
        <div style={{fontFamily: "Orbitron, sans-serif"}}>
            {hour.toLocaleString('de-DE', {minimumIntegerDigits: 2})}:{minutes.toLocaleString('de-DE', {minimumIntegerDigits: 2})}:{seconds.toLocaleString('de-DE', {minimumIntegerDigits: 2})}
        </div>
        </div>
    )
}
