import React from 'react';
import styles from './CoursesInHome.module.css'
import CoursesSmallSize from '../CoursesSmallSize/CoursesSmallSize';



export default function CoursesInHome() {
    return (
        <div>
            <div className={styles.bg} >

            </div >
            <div className={styles.container}>
                <div className={styles.title}>Nos cours</div>
                <p className={styles.p}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, exercitationem minima ipsa voluptatibus tempora totam sed perspiciatis tempore. Iste ipsa maiores quos beatae distinctio autem voluptatibus laborum eos, asperiores vitae.
                    Alias quasi recusandae, qui, consequatur consequuntur iure deserunt non voluptatibus distinctio cupiditate quisquam enim, dolor veritatis voluptatem nulla perferendis unde quis officiis soluta quia. Voluptatum maxime molestiae rem repellendus! Asperiores!
                    Alias quasi recusandae, qui, consequatur consequuntur iure deserunt non voluptatibus distinctio cupiditate quisquam enim, dolor veritatis voluptatem nulla perferendis unde quis officiis soluta quia. Voluptatum maxime molestiae rem repellendus! Asperiores!

                </p>
                <div className={styles.cours}>
                    <div className={styles.mr}>
                        <CoursesSmallSize
                            title="Cours d'enfant"
                            image="/img/cours_enfant.png"
                            alt="Cours d'enfant"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit"
                        />
                    </div>
                    <div className={styles.mr}>
                        <CoursesSmallSize
                            title="Cours d'enfant"
                            image="/img/cours_enfant.png"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit"
                        />
                    </div>
                    <div>
                        <CoursesSmallSize
                            title="Inscription 2023/24"
                            image="/img/cours_enfant.png"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
                        />
                        <button>inscrire</button>
                    </div>

                </div>
            </div>
        </div >
    )
}