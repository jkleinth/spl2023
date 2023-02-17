import React from "react"
import ReactDOM from "react-dom"
import { Controls } from "./controls"

class App extends React.Component {

  
    render() {
      return (
        <div>
          <Controls></Controls>
        </div>
      )
    }
  }
  
  const root = document.getElementById("app")
  ReactDOM.render(<App/>, root)