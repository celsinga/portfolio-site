import { Component } from "react";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";
import project4 from "../img/project4.png";

class Portfolio extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Projects</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="port_out port1">
          <p>Scheduler - React SPA</p>
          <div class="port_in">
            <a href="https://github.com/celsinga/scheduler" target="_blank" rel="noreferrer">
              <img
                src={project1}
                className="po1"
                alt="Scheduler React SPA"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port2">
          <p>NBA Dashboard - React Analytics</p>
          <div class="port_in">
            <a href="https://github.com/celsinga/nba-dashboard" target="_blank" rel="noreferrer">
              <img
                src={project2}
                className="po1"
                alt="NBA Dashboard"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port3">
          <p>altru.link - Artist Website</p>
          <div class="port_in">
            <a href="http://altru.link/" target="_blank" rel="noreferrer">
              <img src={project3} className="po1" alt="Artist Website"></img>
            </a>
          </div>
        </div>
        <div class="port_out port4">
          <p>Blockchain Model - JS Prototype</p>
          <div class="port_in">
            <a href="https://github.com/celsinga/blockchain-model" target="_blank" rel="noreferrer">
              <img src={project4} className="po1" alt="JS Blockchain model"></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
