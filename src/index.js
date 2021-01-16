import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board'

function observe(receive) {
  const randPos = () => Math.floor(Math.random() * 8)
  setInterval(() => receive([randPos(), randPos()]), 1000)
}

const root = document.getElementById('root');

observe((knightPosition) =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, root)
)