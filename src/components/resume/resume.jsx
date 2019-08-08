import React, { Component } from 'react'
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          {/* Education
----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>British Columbia Institute of Technology</h3>
                  <p className="info">
                    Diploma of Technology, Computer Systems Technology{' '}
                    <span>•</span> <em className="date">January 2017</em>
                  </p>
                  <p>Web and Mobile Specialization</p>
                </div>
              </div>{' '}
            </div>{' '}
          </div>{' '}
          {/* Work
----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Web Application Developer</h3>
                  <p className="info">
                    Ventana Construction Corporation <span>•</span>{' '}
                    <em className="date">April 2018 - August 2019</em>
                  </p>
                  <p>
                    Contributed as Sole programmer in a fast-paced team
                    environment. Developed a web application to a diverse client
                    base by utilizing both front and back end using React.js,
                    Redux, MongoDB, Express.js, NPM, and Docker. Implemented new
                    features and components to the on-going project as well as
                    improving outdated code structures.
                  </p>
                </div>
              </div>{' '}
            </div>{' '}
          </div>{' '}
          {/* Skills
----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand javascript" />
                    <em>Javascript</em>
                  </li>
                  <li>
                    <span className="bar-expand reactjs" />
                    <em>React.js</em>
                  </li>
                  <li>
                    <span className="bar-expand redux" />
                    <em>Redux</em>
                  </li>
                  <li>
                    <span className="bar-expand docker" />
                    <em>Docker</em>
                  </li>
                </ul>
              </div>
            </div>{' '}
          </div>{' '}
        </section>{' '}
      </React.Fragment>
    )
  }
}
