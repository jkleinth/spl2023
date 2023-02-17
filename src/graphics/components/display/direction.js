import React from 'react'
import { useRef, useState, useEffect } from 'react';
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'

export default function Directions() {

    const [replicants, setReplicants] = useState(NCGStore.getReplicants())
    const [text, setText] = useState("")

    useEffect(() => {

        replicate('directionText')

        // setOverlay(video)

        NCGStore.on("change", () => {
           setText(replicants.directionText)
        })
    }, [])


    return (
        <div>
            {text}
        </div>
    )
}
