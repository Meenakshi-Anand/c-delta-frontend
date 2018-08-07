import React, { Component } from "react"
import Description from "./Description"
class App extends Component {

  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <h2>
            Creative Qualities

            <div className="row">
              { Object.keys(window.qualsJSON).map((idx) => {
                return (
                  <div className="col-md-4">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        { window.qualsJSON[idx].name}
                      </div>

                      <div className="panel-body">

                        <h4>
                          <Description content = { window.qualsJSON[idx].description }/>
                        </h4>

                        <hr></hr>
                        <p>
                          <strong>Your Score: {window.qualsJSON[idx].score}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                );})
              }
            </div>
          </h2>
        </div>
      </div>
    );
  }
}

export default App
