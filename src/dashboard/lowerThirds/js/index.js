import React from "react"
import ReactDOM from "react-dom"
import { LowerThird } from './lowerThird'

class App extends React.Component {

  
    render() {
      return (
        <div>
           <LowerThird />
        </div>
      )
    }
  }
  
  const root = document.getElementById("app")
  ReactDOM.render(<App/>, root)