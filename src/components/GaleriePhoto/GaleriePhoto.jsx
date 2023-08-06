import React from 'react';
import styles from './GaleriePhoto.module.css';
import Carousel from "nuka-carousel"


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
                        <Carousel autoplay autoplayInterval="4000" disableEdgeSwiping >
                            <img src='/img/atelier2.jpg' alt="atelier de coréen"></img>
                            <img src='/img/cours_enfant.png' alt='apprenons le coréen'></img>
                            <img src='/img/homeImgpie2.png' alt='apprenons le coréen' ></img>
                        </Carousel>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.p1}>Et perspiciatis veniam et eius dolores et omnis fuga id labore ullam ut iste deserunt ad suscipit odio et quisquam quia. Ea tempora enim ea rerum laborum est obcaecati animi. Est dolorem vero non architecto praesentium et assumenda soluta ut velit animi est accusamus omnis et quam veritatis qui iusto culpa.</p>
                        <p className={styles.p2}>Veniam et eius doloxid labore ullam ut iste deserunt ad suscipit odio et quisquam quia. Ea tempora enim ea rerum laborum est obcaecati animi. Est dolorem vero non architecto praesentium et assumenda soluta ut velit animi est accusamus omnis et quam veritatis qui iusto culpa.</p>
                        <p className={styles.p3}>Fugas dolores imi accusaomnis et quam vermi est accusamus omnis et quam veritatis iusto culpa.</p>

                    </div>
                </div>

            </div >
        </article >

    )
}