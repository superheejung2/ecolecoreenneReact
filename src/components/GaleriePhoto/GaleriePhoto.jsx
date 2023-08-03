import React from 'react';
import styles from './GaleriePhoto.module.css'


export default function GaleriePhoto() {
    return (
        <article>
            <div className={styles.bg}>
                <p>Épanouissez-vous avec le coréen</p>
            </div>
            <div>
                <h3>Nos événements</h3>
                <img src='/img/atelier2.jpg' alt="atelier de coréen" className={styles.img}></img>

            </div>
        </article>

    )
}