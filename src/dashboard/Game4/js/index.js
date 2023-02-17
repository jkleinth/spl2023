import React from "react"
import ReactDOM from "react-dom"
import { Controls } from "./controls"

class App extends React.Component {

  
    render() {
      return (
        <Controls></Controls>
      )
    }
  }
  
  const root = document.getElementById("app")
  ReactDOM.render(<App/>, root)