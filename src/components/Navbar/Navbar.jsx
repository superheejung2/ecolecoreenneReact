import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import { useDarkMode } from "../../context/DarkModeContext";
import { FiSun } from "react-icons/fi";
import { BiSolidMoon } from "react-icons/bi";

export default function Navbar() {
    const { darkMode, toggleDarkMode } = useDarkMode()

    return (
        <header>
            <div className={styles.mode}>
                <div className={styles.topBox}></div>
                <button onClick={toggleDarkMode} className={styles.btn}>
                    {!darkMode && <FiSun />}
                    {darkMode && <BiSolidMoon />}
                </button>
                <div className={styles.container}>
                    <div className={styles.navbar}>
                        <div>
                            <Link to='/' className={styles.logo}>
                                {!darkMode && <img className="logo" alt="logo" src="../img/logo.png" />}
                                {darkMode && <img className="logo" alt="logo" src="../img/logo_darkMode.png" />}
                            </Link>
                        </div>

                        <nav>

                            <Link to="/">ACCEUIL </Link>

                            <Link to="/ecole">ECOLE</Link>

                            <Link to="/cours">COURS</Link>

                            <Link to="/info">INFOS UTILES</Link>

                            <Link to="/contact">CONTACT</Link>

                            {/* {!user && <button onClick={handleLogin}>Login</button>}
                        {user && <button onClick={handleLogout}>Logout</button>} */}

                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
