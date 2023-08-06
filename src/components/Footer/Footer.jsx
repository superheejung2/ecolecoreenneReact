import React from 'react';
import styles from './Footer.module.css';
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <h1 className={styles.ecole}>Ecole coréenne de Nantes</h1>

                <nav className={styles.nav}>
                    <p>Plan du site</p>

                    <Link to="/ecole"><p>Ecole </p></Link>

                    <Link to="/cours"><p>Cours</p> </Link>

                    <Link to="/info"><p>Info Utiles  </p></Link>

                    <Link to="/contact"><p>Contact </p></Link>
                </nav>
            </div>
        </footer>
    )
}
