// Librairies
import React from 'react'
import ReactDOM from 'react-dom'

// Components & screens
import App from './App'

// Styles
import './index.css'

// Others
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.querySelector('#root'))

serviceWorker.register()
