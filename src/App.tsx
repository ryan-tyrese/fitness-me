import './App.css'
import sImage from '../src/assets/woman-jump.jpg'
import bImage from '../src/assets/man-rope.jpg'

function App() {
  return (
    <>
      <div className='relative pb-2 h-96'>
        <img src={sImage} alt="image" className='lg:hidden block w-full h-full shadow-lg shadow-black object-cover object-top'/>
        <img src={bImage} alt="image" className='hidden lg:block w-full h-full object-cover shadow-lg shadow-black'/>
        <div className='absolute bottom-5 left-5'>
          <h3 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans text-black lg:text-white'>Get Sweaty, Get...</h3>
          <h3 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans text-black lg:text-white'>HOT</h3>
          <p className='text-black lg:text-white font-semibold'>Get fit for <b>THAT</b> summer pic.</p>
        </div>
      </div>
    </>
  )
}

export default App
