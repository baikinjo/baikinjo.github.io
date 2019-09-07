import React, { Component } from 'react'
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='resume'>
          {/* Education
----------------------------------------------- */}
          <div className='row education'>
            <div className='three columns header-col'>
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className='nine columns main-col'>
              <div className='row item'>
                <div className='twelve columns'>
                  <h3>British Columbia Institute of Technology</h3>
                  <p className='info'>
                    Diploma of Technology, Computer Systems Technology{' '}
                    <span>•</span> <em className='date'>January 2017</em>
                  </p>
                  <p>Web and Mobile Specialization</p>
                </div>
              </div>{' '}
            </div>{' '}
          </div>{' '}
          {/* Work
----------------------------------------------- */}
          <div className='row work'>
            <div className='three columns header-col'>
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className='nine columns main-col'>
              <div className='row item'>
                <div className='twelve columns'>
                  <h3>Web Application Developer</h3>
                  <p className='info'>
                    Ventana Construction Corporation <span>•</span>{' '}
                    <em className='date'>April 2018 - August 2019</em>
                  </p>
                  <p>
                    Developed an in-house web application to utilize each
                    construction sites’ daily reports, cost tracking, warehouse
                    status, and safety reports. Each report was stored as an
                    electronic copy and used on different department within the
                    company.
                  </p>
                  <ul className='point'>
                    <li>
                      Implemented new features and components to the project as
                      well as refactoring outdated logics
                    </li>
                    <li>Agile development approaches</li>
                    <li>2 weeks sprint, daily scrum and Kanban</li>
                    <li>MongoDB, Express.js, React, and Node.js</li>
                    <li>MERN stack was implemented for this application</li>
                    <li>
                      Webpack and Babel was implemented for compiling multiple
                      resources with ES6 JavaScript syntax
                    </li>
                    <li>
                      A custom theme was implemented as an NPM package, David-UI
                      (
                      <a href='npmjs.com/package/david-ui'>
                        npmjs.com/package/david-ui
                      </a>
                      ) - contributed for custom debouncing input form and other
                      minor features
                    </li>
                    <li>
                      Containerizing the development environment using Docker
                    </li>
                    <li>
                      Implemented storing back-ups to the Linux-based virtual
                      server by using SCP and cronjob
                    </li>
                    <li>
                      Unit testing for the back-end API sources, and enzyme
                      snapshot testing for the front-end components
                    </li>
                  </ul>
                </div>
              </div>{' '}
            </div>{' '}
          </div>{' '}
          {/* Skills
----------------------------------------------- */}
          <div className='row skill'>
            <div className='three columns header-col'>
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className='nine columns main-col'>
              <div className='bars'>
                <ul className='skills'>
                  <li>
                    <span className='bar-expand javascript' />
                    <em>Javascript</em>
                  </li>
                  <li>
                    <span className='bar-expand reactjs' />
                    <em>React.js</em>
                  </li>
                  <li>
                    <span className='bar-expand redux' />
                    <em>Redux</em>
                  </li>
                  <li>
                    <span className='bar-expand docker' />
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
