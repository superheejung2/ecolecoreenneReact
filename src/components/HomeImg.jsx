import React from 'react';
import styles from './HomeImg.module.css'


export default function HomeImg() {
    return (
        <div>
            <div className={styles.container}>

                <div className={styles.bg}>
                    <div className={styles.ecole}>
                        <p className={styles.p}>Une </p>
                        <p className={styles.p}>école coréenne,</p>
                        <p className={styles.p}>pour vous!</p>
                    </div>
                    <img src="../img/chackado.jpg" alt="peinture populaire coréen" className={styles.books} />
                </div>
            </div>
        </div >

    )
}
