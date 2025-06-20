import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes/Rotas'
import ContextProvider from './context/ContextProvider'


function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Rotas />
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App

/*
Dentro do Return
<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/