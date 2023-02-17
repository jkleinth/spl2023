import React, { useEffect, useState } from 'react'
import NCGStore from '../../../stores/NodecgStore'
import { replicate } from '../../../stores/NodecgStore'

export function LowerThird() {

    const [replicants, setReplicants] = useState(NCGStore.getReplicants())
    const [lowerThirds, setLowerThirds] = useState(null)
    const [x, setx] = useState(null)
    /**
     * lt1 -> Colli
     * lt2 -> Vassilij
     * lt3 ->  Luca
     * lt4 -> Arwin
     * lt5 -> Student1
     * lt6 -> Student2
     * lt7 -> Prof1
     * lt8 -> Prof2
     */

    useEffect(() => {
      let counter = 0
      replicate("ltCounter")

      replicate("lowerthirdplay")
        replicate("time")

        NCGStore.on("change", () => {

          setReplicants(NCGStore.getReplicants())

          if(replicants.ltCounter == 0 || replicants.ltCounter == null){
            
          }
          else {
            setLowerThirds(<video src={'./lt'+replicants['ltCounter']+'.webm'} autoPlay muted onEnded={() => resetLowerThirds()}/>)
          }

          // for(let i=1;i<7;i++){

          //   const text = "ltPlay" + i
          //   if(replicants[text] == true){
          //     setx("its true")
          //     setLowerThirds(<video src={'./lt'+1+'.webm'} autoPlay muted onEnded={() => resetLowerThirds(text)}/>)
          //     break
          //   }
          //   else{
          //     setx("its false")
          //     setLowerThirds(null)
          // }
          // }

            
        })
    }, [])

    //let counter = 0

    const resetLowerThirds = () =>{
      setLowerThirds(null);
      nodecg.Replicant("ltCounter").value = 0
    }


  return (
    <div>
      {lowerThirds}
    </div>
  );
}
