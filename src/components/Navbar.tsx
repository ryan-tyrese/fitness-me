import { useState } from "react"
import hamburger from "../assets/hamburger-menu.svg"
import { Link } from "react-router-dom"

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <>
            <nav className="bg-white flex items-center justify-between py-4 px-6 lg:px-14 text-black drop-shadow-md sticky top-0">
                {/*Logo*/}
                <Link to='/'>
                    <span className="text-2xl font-bold lg:text-3xl">Fit</span>
                </Link>
                {/*Links*/}
                <ul className="hidden lg:flex justify-between gap-4 font-semibold text-base">
                    <Link to="/exercises">
                        <li className="p-2 hover:text-gray-500 transition-all cursor-pointer">Exercises</li>
                    </Link>
                    
                    <Link to="/about">
                        <li className="p-2 hover:text-gray-500 transition-all cursor-pointer">About Us</li>
                    </Link>

                    <Link to="/login">
                        <button className="border-1 border-gray-300 rounded-md hover:border-gray-500 hover:bg-gray-100">
                            <li className="p-2 transition-all cursor-pointer border-0 outline-gray-200">Log In</li>
                        </button>
                    </Link>
                </ul>
                {/*Menu*/}
                <button className="lg:hidden block" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img src={hamburger} alt="Menu" className="w-8 h-8 text-5xl cursor-pointer"/>
                </button>
                {/*Menu contents*/}
                <div className={`absolute xl:hidden top-15 left-0 w-full bg-white flex flex-col items-center gap-2 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                    <Link to="/exercises">
                        <li className="list-none w-full text-center p-4 hover:text-gray-500 transition-all cursor-pointer">Exercises</li>
                    </Link>
                    
                    <Link to="/about">
                        <li className="list-none w-full text-center p-4 hover:text-gray-500 transition-all cursor-pointer">About Us</li>
                    </Link>

                    <Link to="/login">
                        <li className="list-none text-shadow-lg/30 text-shadow-gray-700 w-full text-center p-4 transition-all cursor-pointer">Log In</li>
                    </Link>
                </div>
            </nav>  
        </>
    )
}