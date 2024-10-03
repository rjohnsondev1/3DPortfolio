import { useState } from 'react'
import { navLinks } from '../constants/index.js'
import About from '../sections/About.jsx'
import { close, menu } from '../assets'
import Os from "./Os/Os.jsx";


const NavItems = ({ onClick = () => {} }) => (
    <ul className='nav-ul'>
        {navLinks.map((item) => (
            <li key={item.id} className='nav-li'>
                <a
                    href={item.ref}
                    className='nav-li_a cursor-pointer'
                    onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        e.stopPropagation(); // Stop event propagation completely
                        onClick(e, item); // Call the passed onClick handler
                    }}
                >
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);

const Navbar = ({ onProjectsClick, onEmailClick, lockCamera, unlockCamera }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        //e.stopPropagation(); // Stop the event from propagating to parent containers

        setIsOpen(!isOpen);
        lockCamera();
    };

    const closeMenu = () => {
       // e.stopPropagation(); // Prevent event from propagating to parent elements
        setIsOpen(false);
        unlockCamera();
    };

    const handleNavClick = (e, item) => {
        e.preventDefault(); // Prevent anchor default behavior
        e.stopPropagation(); // Stop the event from bubbling up

        if (item.name === 'Projects') {
            onProjectsClick();
        } else if (item.name === 'About') {
            setIsModalOpen(true);
        } else if (item.name === 'Get in Touch') {
            onEmailClick();
        }
    lockCamera();
        closeMenu(e); // Close the menu after navigation
    };

    return (
        <header className='fixed top-0 px-8 left-0 right-0 z-50 bg-black/90' onClick={(e) => e.stopPropagation()}>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto'>
                    <a href='/public' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'
                       onClick={(e) => e.stopPropagation()}>
                        <img src={'src/assets/logo.png'} alt='Logo' className='w-15 h-10'/>
                    </a>
                    <button
                        onClick={toggleMenu}
                        className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'
                        aria-label='Toggle menu'
                    >
                        <img src={isOpen ? close : menu } alt='toggle' className='w-6 h-6'/>
                    </button>
                    <nav className='sm:flex hidden'>
                        <NavItems onClick={handleNavClick} lockCamera={lockCamera}/>
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems onClick={closeMenu}/>
                </nav>
            </div>

            {/* About modal or other components */}
            <About isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}/>
        </header>
    );
};

export default Navbar;
