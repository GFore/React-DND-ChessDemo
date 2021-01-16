import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board'

ReactDOM.render(
  <Board knightPosition={[0, 4]} />,
  document.getElementById('root')
)