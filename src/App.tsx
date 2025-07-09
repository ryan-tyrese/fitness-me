import './App.css'
import Home from './routes/Home.tsx'
import { Routes, Route } from 'react-router'
import SearchExercises from './routes/SearchExercises.tsx'
import LogIn from './routes/LogIn.tsx'
import About from './routes/About.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercises" element={<SearchExercises />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
