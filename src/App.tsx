import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>🚀 React Vite Azure Deployment Project</h1>
      <div className="card">
        <p>
          This project shows how to deploy a React Vite application using modern deployment patterns on Azure.
        </p>
      </div>
    </>
  )
}

export default App
