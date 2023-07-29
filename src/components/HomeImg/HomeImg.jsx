import React from 'react';
import styles from './HomeImg.module.css'


export default function HomeImg() {
    return (
        <div className={styles.bg_rectangle}>
            <div className={styles.bg}>
                <div className={styles.bg_textbox}>
                    <h1 className={styles.titre}> Ecole coréenne de Nantes </h1>
                    <p className={styles.textboxHome}>
                        Vous êtes passionné(e) par la langue coréenne et la culture coréenne ? Rejoignez notre école pour une expérience unique d'apprentissage et d'échange.
                    </p>
                    <button className={styles.buttonBlue}>Nous joindre</button>
                </div>
                <div>
                    <img src='/img/chackado.jpg' alt='peinture livres' className={styles.chackado}></img>
                </div>
            </div>
        </div>
    )
}
