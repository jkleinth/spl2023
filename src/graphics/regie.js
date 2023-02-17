import React from "react"
import ReactDOM from "react-dom"
import NCGStore from '../stores/NodecgStore.js'
import nodeCGStore, { replicate } from '../stores/NodecgStore.js'
import Timer from "./components/display/timer.js"
import Stopwatch from "./components/display/stopwatch.js"
import Directions from "./components/display/direction.js"
import Clock from "./components/display/clock.js"
import './css/display.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      replicants: NCGStore.getReplicants(),
    }
  }

    componentDidMount() {
      // Subscribing to replicant changes
      // replicate("name")
      replicate("currentOverlay")





      // We keep all our subscribed replicants in a single "replicants" object
      NCGStore.on("change", () => {
        this.setState({
          replicants: NCGStore.getReplicants(),
        })

      })
    }




    render() {
      return (
        <div>
          <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <div>
              <div>
                <div className="stopwatch">
                  <Stopwatch></Stopwatch>
                </div>
                <div className="timer">
                  <Timer></Timer>
                </div>
              </div>
              <div>
                <div className="clock">
                  <Clock></Clock>
                </div>
              </div>
            </div>

          </div>
        </div>

      )
    }
  }
const root = document.getElementById("app")
ReactDOM.render(<App />, root)