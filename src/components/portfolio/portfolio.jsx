import React, { Component } from 'react'
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='portfolio'>
          <div className='row'>
            <div className='twelve columns collapsed'>
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div
                id='portfolio-wrapper'
                className='bgrid-quarters s-bgrid-thirds cf'
              >
                <div className='columns portfolio-item'>
                  <div className='item-wrap'>
                    <a href='#modal-01' title>
                      <img alt='' src='images/expensify.png' />
                      <div className='overlay'>
                        <div className='portfolio-item-meta'>
                          <h5>Expensify</h5>
                          <p>Web Application</p>
                        </div>
                      </div>
                      <div className='link-icon'>
                        <i className='icon-plus' />
                      </div>
                    </a>
                  </div>
                </div>{' '}
                {/* item end */}
              </div>{' '}
              {/* portfolio-wrapper end */}
            </div>{' '}
            {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id='modal-01' className='popup-modal mfp-hide'>
              <img
                className='scale-with-grid'
                src='images/expensify.png'
                alt=''
              />
              <div className='description-box'>
                <h4>Expensify</h4>
                <p>
                  Manage expenses, add expense, edit or delete expense.
                  Calculate total number of expense and amount. Search by
                  description, or sorted by date or amount - Google account
                  needed to login to the app.
                </p>
                <span className='categories'>
                  <i className='fa fa-tag' />
                  React, Redux, Firebase, Babel, Webpack, Scss
                </span>
              </div>
              <div className='link-box'>
                <a href='https://expensify-baik.herokuapp.com/dashboard'>
                  Go to App
                </a>
                <a href='https://github.com/baikinjo/expensify'>Source Code</a>
                <a className='popup-modal-dismiss'>Close</a>
              </div>
            </div>
            {/* modal-01 End */}
          </div>{' '}
          {/* row End */}
        </section>{' '}
        {/* Portfolio Section End*/}
      </React.Fragment>
    )
  }
}
