import React from 'react';
import SmallTemoins from './SmallTemoins';
import styles from './Temoins.module.css'

export default function Temoins() {
    return (
        <article className={styles.article}>
            <h1>Témoins des élèves</h1>
            <div className={styles.box}>
                <div className={styles.smallbox}>
                    <SmallTemoins
                        image="/img/img_Sonia.png"
                        alt="Cours d'adult"
                        content="
                        Je peux voir mes progrès quand je comprends quelques mots dans un film coréen. Pour l'instant, c'est juste quelques mots mais dans quelques années, ça sera tout le film.
                 "
                        nameofstudent="Thi Le"
                    />
                </div>
                <div>
                    <SmallTemoins
                        image="/img/img_Sonia.png"
                        alt="Cours d'adult"
                        content="Les professeurs sont impliqués et passionnés par leur langue et culture. Je recommanderais l’Ecole à quiconque serait intéressé par l’apprentissage du coréen."
                        nameofstudent="Sonia Pinto"
                    />
                </div>

                <div className={styles.display2}>
                    <SmallTemoins
                        image="/img/img_Thi.png"
                        alt="Cours d'adult"
                        content="Lorem ipsum dolor adipisicing elit"
                        nameofstudent="Thi Le"
                    />
                </div>
                <div className={styles.display3}>
                    <SmallTemoins
                        image="/img/img_Sonia.png"
                        alt="Cours d'adult"
                        content="Lorem ipsum dolor adipisicing elit"
                        nameofstudent="Thi Le"
                    />
                </div>
            </div>

        </article>
    )
}