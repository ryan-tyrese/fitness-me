import { useState } from "react"
import hamburger from "../assets/hamburger-menu.svg"

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <>
            <header className="flex items-center justify-between py-4 px-6 lg:px-14 text-black drop-shadow-md">
                {/*Logo*/}
                <a href="#">
                    <span className="text-2xl font-bold lg:text-3xl">Fitness Me</span>
                </a>
                {/*Links*/}
                <ul className="hidden lg:flex justify-between gap-4 font-semibold text-base">
                    <li className="p-2 hover:text-gray-500 transition-all cursor-pointer">Exercises</li>
                    <li className="p-2 hover:text-gray-500 transition-all cursor-pointer">Create</li>
                    <li className="p-2 hover:text-gray-500 transition-all cursor-pointer">About</li>
                </ul>
                {/*Menu*/}
                <i className="lg:hidden block">
                    <img src={hamburger} alt="Menu" className="w-8 h-8 text-5xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                </i>
                <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                    <li className="list-none w-full text-center p-4 hover:text-gray-500 transition-all cursor pointer">Exercises</li>
                    <li className="list-none w-full text-center p-4 hover:text-gray-500 transition-all cursor pointer">Create</li>
                    <li className="list-none w-full text-center p-4 hover:text-gray-500 transition-all cursor pointer">About</li>
                </div>
            </header>  
        </>
    )
}