import "./navbar.css"

import Images from "../../components/Images";
const Navbar = () => {
    return (
        <>
          <nav id="navbar">
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <picture>
                            <a href="#"> <Images source="images/logo.png" alt="not found"/> </a>
                        </picture>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Properties<i className="fa-solid fa-angle-down"></i></a>
                                <ul className="dropdown">
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Service</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;