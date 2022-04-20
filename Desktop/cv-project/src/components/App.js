import React, { Component } from 'react'

import CV from 'react-cv'
import { CVData } from 'C:\Users\jummy\Desktop\cv-project\src\components\data.js';

export default class App extends Component {
  render () {
    return (
      <div>
        <CV {...CVData} />
      </div>
    )
  }
}