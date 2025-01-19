import { useState } from 'react';
import fire from '../imgs/fire.png';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className="flex justify-between text-white w-full bg-gray-800 rounded-md py-3 px-5 md:py-4 md:px-5">
                <a className="p-2 items-center justify-center hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer font-semibold" href="#">
                    Home
                </a>
                <ul className='ml-auto hidden md:flex gap-10 font-semibold text-base'>
                    <li className="p-2 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Projects</li>
                    <li className="p-2 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Contact</li>
                    <li className="p-2 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Fun Facts</li>
                </ul>
                <i className='scale-75 bx bx-menu md:hidden block text-5xl cursor-pointer'
                    onClick={() => setMenuOpen(!menuOpen)}></i>

                <div className={`absolute md:hidden top-24 left-0 w-full bg-gray-800 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${menuOpen ? "opacity-100" : "hidden"}`}
                style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                    <li className='list-none w-full text-center p-1 hover:text-white hover:bg-sky-400 transition-all cursor-pointer'>Projects</li>
                    <li className='list-none w-full text-center p-1 hover:text-white hover:bg-sky-400 transition-all cursor-pointer'>Contact</li>
                    <li className='list-none w-full text-center p-1 hover:text-white hover:bg-sky-400 transition-all cursor-pointer'>Fun Facts</li>
                </div>
            </header>
        </>
    );
}

export default NavBar;