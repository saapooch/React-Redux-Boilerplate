import React from 'react'
import { STATUS_CODE_MESSAGES } from '../lib/constants'
import Page from '../components/page'

const DEFAULT_ERROR = "We are having issues. Please try again!"

export default class Error extends React.Component {

  static async getInitialProps({ res, err, asPath, query, req }) {
    const errorCode = res ? res.statusCode : err ? err.statusCode : null;
    return {errorCode}
  }

  getErrorMessage() {
    const message = STATUS_CODE_MESSAGES[this.props.errorCode]
    return message || DEFAULT_ERROR
  }

  render() {
    return (
    <Page>
        <div className='center'>
            <div className='row'>
              <div className='col-12 mx-auto'>
                  <h5 className='roboto pads error'> {this.getErrorMessage()} </h5>
                </div>
            </div>
        </div>
    </Page>
    )
  }
}
