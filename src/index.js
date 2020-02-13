import React from 'react'
import ReactDOM from 'react-dom'

import { Demo } from './demo'


const wrapper = document.getElementById('react-demo')
if (wrapper) {
    ReactDOM.render(<Demo />, wrapper)
}
