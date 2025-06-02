import './App.css'
import Home from './routes/Home.tsx'
import { Routes, Route } from 'react-router'
import Exercises from './routes/Exercises.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercises" element={<Exercises />} />
      </Routes>
    </>
  )
}

export default App
