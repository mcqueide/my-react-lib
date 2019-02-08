import React, { Component } from 'react'

import { dateToStringDDMMYYYY } from 'react-lib/dist/util';
import ExampleComponent from 'react-lib';

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text={dateToStringDDMMYYYY(new Date())}/>
      </div>
    )
  }
}
