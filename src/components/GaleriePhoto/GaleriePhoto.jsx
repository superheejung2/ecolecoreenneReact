import React from 'react';
import styles from './GaleriePhoto.module.css';
import Carousel from "nuka-carousel"

// Carousels of school's events 
export default function GaleriePhoto() {
    return (
        <article>
            <div className={styles.bg}>
                <div className={styles.textBox}>
                    <p className={styles.p}>Épanouissez-vous avec le coréen</p>
                </div>
            </div>
            <div className={styles.textBox2}>
                <h1 className={styles.evenement}>Nos événements</h1>
                <div className={styles.galerie}>
                    <div className={styles.img}>
                        <Carousel autoplay autoplayInterval="3000" disableEdgeSwiping >
                            <img src='/img/evenement_jardin.jpg' alt='atelier avec enfant dans jardin' ></img>
                            <img src='/img/forum.jpg' alt='forum des association avec maire de Nantes' ></img>
                            <img src='/img/evenement_group.jpg' alt='evenement nouvel an' ></img>
                            <img src='/img/evenement_girl.jpg' alt='costume traditionel coréen' ></img>
                        </Carousel>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.p1}>L'école coréenne de Nantes propose des cours de langue ainsi que diverses activités, que ce soit en tant qu'organisatrice, coorganisatrice ou participante à des événements variés. Notre objectif est de vous offrir des opportunités de rencontres, d'échanges culturels et d'apprentissage enrichissants.</p>
                        {/* <p className={styles.p2}>Parmi les événements que nous organisons, citons le pique-nique de Chuseok (la fête coréenne de la récolte) en automne, ainsi que des célébrations du Seollal (le Nouvel An lunaire coréen) pour nos élèves. </p>
                        <p className={styles.p3}>L'école coréenne participe également à des événements culturels coréens, asiatiques et locaux, en collaboration avec des institutions telles que les bibliothèques, associations et entreprises. Nous proposons une variété d'ateliers portant sur la langue, la culture, l'histoire et la cuisine, adaptés à vos besoins et intérêts.</p> */}
                    </div>
                </div>

            </div >
        </article >

    )
}