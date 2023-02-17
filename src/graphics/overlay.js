//Control Component for Game 1 - TH-Quiz
import React from "react"
import ReactDOM from "react-dom"
import NCGStore from '../stores/NodecgStore.js'
import nodeCGStore, { replicate } from '../stores/NodecgStore.js'
import { LowerThird } from './components/overlay/lowerThird.js'
import { Game1 } from './components/overlay/game1'
import { Game4 } from './components/overlay/game4.js'
import './css/overlay.css'
import { Game3 } from "./components/overlay/game3.js"
import { Game2 } from "./components/overlay/game2.js"
import { Game5 } from "./components/overlay/game5.js"
import { Game6 } from "./components/overlay/game6.js"
import { Game7 } from "./components/overlay/game7.js"
import { Game8 } from "./components/overlay/game8.js"
import { Game9 } from "./components/overlay/game9.js"
import { Overall } from "./components/overlay/overall.js"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      replicants: NCGStore.getReplicants(),
      overlay: null,
      disable : "none"
    }
  }

  componentDidMount() {
    replicate("currentOverlay")

    NCGStore.on("change", () => {
      this.setState({
        replicants: NCGStore.getReplicants(),
      })


      switch (this.state.replicants.currentOverlay) {
        case 0:
          this.setState({ overlay: null })
          this.setState({ disable: "none"})
          break;
        case 1:
          this.setState({ overlay: <Game1></Game1> })
          this.setState({ disable: "none"})
          break;
        case 2:
          this.setState({ overlay: <Game2></Game2> })
          this.setState({ disable: "none"})
          break;
        case 3:
          this.setState({ overlay: <Game3></Game3> })
          this.setState({ disable: "none"})
          break;
        case 4:
          this.setState({ overlay: <Game4></Game4> })
          this.setState({ disable: "none"})
          break;
        case 5:
          this.setState({ overlay: <Game5></Game5> })
          this.setState({ disable: "none"})
          break;
        case 6:
          this.setState({ overlay: <Game6></Game6> })
          this.setState({ disable: "none"})
          break;
        case 7:
          this.setState({ overlay: <Game7></Game7> })
          this.setState({ disable: "none"})
          break;
        case 8:
          this.setState({ overlay: <Game8></Game8> })
          this.setState({ disable: "none"})
          break;
        case 9:
          this.setState({ overlay: <Game9></Game9> })
          this.setState({ disable: "none"})
          break;
        case 10:
          // this.setState({ overlay: <Overall></Overall> })
          this.setState({ disable: "flex"})
          break;
      }
    })

    document.body.style.overflow = 'hidden'
  }




  render() {
    return (
      <div>
        <div className="lt">
          <LowerThird></LowerThird>
        </div>
        <div className="game-container">
          {this.state.overlay}
        </div>
        <div style={{display: this.state.disable}}>
          <Overall></Overall>
          </div>
      </div>

    )
  }
}

const root = document.getElementById("app")
ReactDOM.render(<App />, root)