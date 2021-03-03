import React from 'react';
// import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// import { Board } from './Board';
// import { observe } from './Game';
import { Container } from './Container';

const containerStyle = {
  width: 500,
  height: 500,
  border: '1px solid gray',
};

function App() {
  // const [knightPos, setKnightPos] = useState([1, 7]);
  // the observe function will return an unsubscribe callback
  // useEffect(() => observe((newPos) => setKnightPos(newPos)));

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <div>
          <div style={containerStyle}>
            {/* <Board knightPosition={knightPos}/> */}
            <Container />
          </div>
        </div>
      </DndProvider>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
