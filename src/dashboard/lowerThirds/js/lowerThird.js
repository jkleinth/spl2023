import React, { useEffect, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import nodeCGStore, { replicate } from '../../../stores/NodecgStore'

export function LowerThird() {

    const [replicants, setReplicants] = useState(NCGStore.getReplicants())

    useEffect(() => {
        replicate("time")
        replicate("ltCounter")

        NCGStore.on("change", () => {
            setReplicants(NCGStore.getReplicants())
        })
    })

  return (
    <div>
      <button onClick={() => nodecg.Replicant("ltCounter").value = 1}>Collin</button>
      <button onClick={() => nodecg.Replicant("ltCounter").value = 2}>Vassilij</button>
      <button onClick={() => nodecg.Replicant("ltCounter").value = 3}>Luca</button>
      <button onClick={() => nodecg.Replicant("ltCounter").value = 4}>Nico Friedmann</button>
      <button onClick={() => nodecg.Replicant("ltCounter").value = 5}>Noah Ban</button>
      <button onClick={() => nodecg.Replicant("ltCounter").value = 6}>Noss</button>
      <button onClick={() => nodecg.Replicant("ltCounter").value = 7}>Kohls</button>
      <button onClick={() => nodecg.Replicant("ltCounter").value = 8}>Prof2</button>
    </div>
  );
}
