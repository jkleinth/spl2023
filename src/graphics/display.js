import React from "react"
import ReactDOM from "react-dom"
import NCGStore from '../stores/NodecgStore.js'
import nodeCGStore, { replicate } from '../stores/NodecgStore.js'
import { LowerThird } from './components/overlay/lowerThird'
import { Game1 } from './components/display/game1'
import { Game3 } from './components/display/game3'
import { Game4 } from './components/display/game4'
import './css/display.css'
import Timer from "./components/display/timer.js"
import Stopwatch from "./components/display/stopwatch.js"
import Directions from "./components/display/direction.js"
import Clock from "./components/display/clock.js"
import { Game5 } from "./components/display/game5.js"
import { Game6 } from "./components/display/game6.js"
import { Game7 } from "./components/display/game7.js"
import { Game8 } from "./components/display/game8.js"
import { Game9 } from "./components/display/game9.js"
import { Overall } from "./components/display/overall.js"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      replicants: NCGStore.getReplicants(),
      currentComponent: null,
      support: null,
      disable : "none"
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

      switch (this.state.replicants.currentOverlay) {
        case 0:
          this.setState({ currentComponent: null })
          this.setState({ support: null })
          this.setState({ disable: "none"})
          break;
        case 1:
          this.setState({ currentComponent: <Game1></Game1> })
          this.setState({ support: null })
          this.setState({ disable: "none"})
          break;
        case 2: break;
        case 3:
          this.setState({ currentComponent: <Game3></Game3> })
          this.setState({ support: null })
          this.setState({ disable: "none"})
          break;
        case 4:
          this.setState({ currentComponent: <Game4></Game4> })
          this.setState({ support: null })
          this.setState({ disable: "none"})
          break;
        case 5:
          this.setState({ currentComponent: <Game5></Game5> })
          this.setState({ support: null })
          this.setState({ disable: "none"})
          break;
        case 6:
          this.setState({ currentComponent: <Game6></Game6> })
          this.setState({ support: <div id="container" className="container"><div className="timer"><Timer></Timer></div></div> })
          this.setState({ disable: "none"})
          break;
        case 7:
          this.setState({ currentComponent: <Game7></Game7> })
          this.setState({ support: <div id="container" className="container" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}><div className="timer"><Timer></Timer></div></div> })
          this.setState({ disable: "none"})
          break;
        case 8:
          this.setState({ currentComponent: <Game8></Game8> })
          this.setState({ support: <div id="container" className="container"><div className="timer"><Timer></Timer></div></div> })
          this.setState({ disable: "none"})
          break;
        case 9:
          this.setState({ currentComponent: <Game9></Game9> })
          this.setState({ disable: "none"})
          break;
          case 10:
          // this.setState({ currentComponent: <Overall></Overall> })
          this.setState({ disable: "flex"})
          break;
        default:
          console.log("default case")
      }
    })

    // document.body.style.overflow = ''
  }




  render() {
    return (
      <div>
        <div className="container-top">

          <div className="game" style={{ zIndex: "1000" }}>
            {this.state.currentComponent}
          </div>
          {this.state.support}
          <div style={{display: this.state.disable}}>
          <Overall></Overall>
          </div>
          {/* <div>
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
            </div> */}

        </div>
        {/* <div className="container-bottom">
          <Directions></Directions>
        </div> */}
      </div>

    )
  }
}

const root = document.getElementById("app")
ReactDOM.render(<App />, root)