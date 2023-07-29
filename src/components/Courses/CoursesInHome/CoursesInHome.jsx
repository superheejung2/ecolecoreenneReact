import React from 'react';
import styles from './CoursesInHome.module.css'
import Courses from '../Courses/Courses';


export default function CoursesInHome() {
    return (
        <div>
            <div className={styles.bg} >
                <div className={styles.container}>
                    <div>
                        <p className={styles.slogan}>Passion, Famille, Carrière</p>
                    </div>
                    <div>
                        <p>C'est le moment d'apprendre le coréen</p>
                    </div>
                </div>
            </div >
            <div className={styles.title}>Nos cours</div>
            <div className={styles.cours}>

                <Courses
                    title="Cours d'enfant"
                    image="/img/cours_enfant.png"
                    alt="Cours d'enfant"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                />
                <Courses
                    title="Cours d'enfant"
                    image="/img/cours_enfant.png"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                />
                <Courses
                    title="Inscription 2023/24"
                    image="/img/cours_enfant.png"
                    content="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                />
            </div>
        </div >
    )
}