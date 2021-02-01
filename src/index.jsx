import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './index.css'

//Context
import {SamplesProvider} from './hooks/samplesContext'

ReactDOM.render(
  <React.StrictMode>
    <SamplesProvider>
      <App />
    </SamplesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
