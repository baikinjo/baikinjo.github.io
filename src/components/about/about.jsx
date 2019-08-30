import React, { Component } from 'react'
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                I am a <strong>full stack web developer</strong>, experienced in
                structuring, developing and implementing an interactive, and
                user-friendly web application using React.js as framework. I am
                able to leverage this full stack experties to build a scalble
                web application with testable code and containerization of
                virtual development environment using Docker.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Injo Baik</span>
                    <br />
                    <span>baikinjo.28@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a
                      href="https://drive.google.com/open?id=1tTOrAXmqMATHCx8QfZmnY4RfFQLZFobU"
                      className="button"
                    >
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>{' '}
            </div>{' '}
          </div>
        </section>
      </React.Fragment>
    )
  }
}
