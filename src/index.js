import React from 'react'
import ReactDOM from 'react-dom'
import styles from './main.css'

import App from '../../components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
})

export default ReactDOM
