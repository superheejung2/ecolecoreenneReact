import React from 'react';
import styles from './Footer.module.css';
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <div>Plan du site</div>
                <div className={styles.navList}>

                    <Link to="/">ACCEUIL </Link>

                    <ul>
                        <li>Ecole</li>
                        <li>Equipe</li>
                        <li>Activités</li>
                    </ul>
                    <ul>
                        <li>Cours</li>
                        <li>Adult</li>
                        <li>Enfant</li>
                        <li>Inscription</li>
                    </ul>
                    <p>Contact</p>
                </div>
            </nav >

            <nav>

                <Link to="/ecole">ECOLE </Link>

                <Link to="/cours">COURS </Link>

                <Link to="/info">INFOS UTILES </Link>

                <Link to="/contact">CONTACT</Link>
            </nav>
        </footer>
    )
}
