import React from 'react';
import styles from './HomeImg.module.css';
import Carousel from "nuka-carousel"


export default function HomeImg() {
    return (
        <article className={styles.img}>
            <Carousel autoplay autoplayInterval="4000" disableEdgeSwiping >
                <img src='/img/homeImg2.png' alt='peinture livres' ></img>
                <img src='/img/homeImgrabbit.png' alt='apprenons le coréen'></img>
                <img src='/img/homeImgpie2.png' alt='apprenons le coréen' ></img>
            </Carousel>
        </article >
    )
}
