import './App.css'
import Home from './routes/Home.tsx'
import { Routes, Route } from 'react-router'
import Exercises from './routes/Exercises.tsx'
import LogIn from './routes/LogIn.tsx'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App
