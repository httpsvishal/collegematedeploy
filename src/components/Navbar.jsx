import { Link } from "react-router-dom";
import logo from "../assets/Logo.webp"
const Navbar = () => {
    return (
        <nav className="navbar  border border-gray-300  ">
            <div className="flex justify-between">
                <div>
                    <Link to="/"> <img src={logo} alt="CollegeMate India" className="h-10 ms-2"  /> </Link>
                </div>
                <div className="flex items-center font-semibold" id="navbarNav">
                    <ul className="navbar-nav flex gap-5 me-2 ">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/colleges">Colleges</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;