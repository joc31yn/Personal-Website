import { useState } from 'react';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className="sticky top-0 z-[20] flex justify-between text-white w-full bg-blue-800 py-1 px-2">
                <a className="p-2 items-center justify-center hover:bg-terracotta hover:text-white rounded-md transition-all cursor-pointer font-semibold" href="#">Home</a>
                <ul className='ml-auto hidden md:flex gap-12 font-semibold text-base'>
                <li className="p-3 hover:bg-terracotta hover:text-white rounded-md transition-all cursor-pointer">Contact</li>
                    <li className="p-3 hover:bg-terracotta hover:text-white rounded-md transition-all cursor-pointer">Projects</li>
                    <li className="p-3 hover:bg-terracotta hover:text-white rounded-md transition-all cursor-pointer">Resume</li>
                    <li className="p-3 hover:bg-terracotta hover:text-white rounded-md transition-all cursor-pointer">Blog</li>
                </ul>
                <i className='scale-75 bx bx-menu md:hidden block text-5xl cursor-pointer'
                    onClick={() => setMenuOpen(!menuOpen)}></i>

                <div className={`absolute md:hidden top-14 left-0 w-full bg-blue-800 flex flex-col items-center font-semibold text-lg transform transition-transform ${menuOpen ? "opacity-100" : "hidden"}`}
                style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                    <li className='list-none w-full text-center p-3.5 hover:text-white hover:bg-terracotta transition-all cursor-pointer'>Projects</li>
                    <li className='list-none w-full text-center p-3.5 hover:text-white hover:bg-terracotta transition-all cursor-pointer'>Contact</li>
                    <li className='list-none w-full text-center p-3.5 hover:text-white hover:bg-terracotta transition-all cursor-pointer'>Fun Facts</li>
                </div>
            </header>
        </>
    );
}

export default NavBar;