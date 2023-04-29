import { navData } from "../data/navbarData";
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../assets/logo.jpg';
const Navbar = () => {
    
    return(
        <header>
        <nav>
            <div>
                <img src={logo} />
            </div>
            <MenuIcon />
            <XIcon />
            <ul>
                {
                  navData.map(item => {
                    return(
                        <li><a href={item.path}>{item.name}</a></li>
                    )
                  })
                }
            </ul>
        </nav>
        </header>
    )
}

export default Navbar;