import { navData } from "../data/navbarData";
import logo from '../assets/logo.png';
import { useState } from "react";
const Navbar = () => {

    const [menu, setMenu] = useState(false)
    console.log(menu)

    const handleToggle = () => {
        setMenu(!menu)
    } 
    return(
        <header className="h-16 w-full bg-black pl-2 pr-4 fixed flex items-center justify-center top-0 z-10" >
        <nav className="h-inherit w-full flex justify-between items-center nav-bar">
            <a href="#" className="w-22">
                <img className="w-20 logo" src={logo} />
            </a>
            <div className="h-inherit flex justify-center items-center z-10 mobile-menu">
            <div onClick={handleToggle} className="h-10 w-8 flex flex-col gap-y-2 hambeger"> 
                <span  className={menu ? "hamberlinks-1 spin-1" : "hamberlinks-1"}></span>
                <span  className={menu ? "" : "hamberlinks-2"}></span>
                <span  className={menu ? "hamberlinks-3 spin-2" : "hamberlinks-3"}></span>
            </div>
            </div>
            <ul className={ menu ? "link-contsiner active" : "link-contsiner"}>
                {
                  navData.map(item => {
                    return(
                        <li onClick={handleToggle} className="links"
                         key={item.id}>
                            <a className="link-name" href={item.path}>{item.name}</a>
                        </li>
                    )
                  })
                }
            </ul>
        </nav>
        </header>
    )
}

export default Navbar;