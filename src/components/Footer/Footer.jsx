import React from 'react';
import styles from './Footer.module.css';
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <h1 className={styles.ecole}>Ecole coréenne de Nantes</h1>

                <nav className={styles.nav}>
                    <div>
                        <p className={styles.plan}>Plan du site</p>
                    </div>
                    <div className={styles.flex}>
                        <Link to="/ecole"><p className={styles.white}>Ecole </p></Link>

                        <Link to="/cours"><p className={styles.white}>Cours</p> </Link>

                        <Link to="/info"><p className={styles.white}>Info Utiles  </p></Link>

                        <Link to="/contact"><p className={styles.white}>Contact </p></Link>
                    </div>
                </nav>
            </div>
        </footer>
    )
}
