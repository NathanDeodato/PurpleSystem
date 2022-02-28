// React
import React, { Component } from "react"

// Style
import "./App.css"

export default class AppSystem extends Component {
  render() {
    return (
      <div>

        <main>
          
          <h1 className="title">
            Purple System
          </h1>

          <section className="systemContainer">
            
            <section className="systemBox">
              
              <h2 className="systemTitle">
                Purple Counter
              </h2>

              <button className="systemButton">
                
                <a className="systemLink" href="https://purplecounter.netlify.app/">
                  Acessar
                </a>

              </button>

            </section>

            <hr className="divisorSystem"></hr>

            <section className="systemBox">
              
              <h2 className="systemTitle">
                Purple ToDoList
              </h2>

              <button className="systemButton">
                
                <a className="systemLink" href="https://purpletodolist.netlify.app/">
                  Acessar
                </a>

              </button>

            </section>

            <hr className="divisorSystem"></hr>

            <section className="systemBox">
              
              <h2 className="systemTitle">
                Purple Calc
              </h2>

              <button className="systemButton">
                
                <a className="systemLink" href="https://purplecalc.netlify.app/">
                  Acessar
                </a>

              </button>

            </section>

          </section>

        </main>

        <footer>
          
          <h4>
            &copy; Deodatont 2022
          </h4>

        </footer>

      </div>
    )
  }
}
