import React from 'react';
import styles from './Courses.module.css'

export default function Courses() {
    return (
        <div>
            <img src='/img/atelier2.jpg' alt="atelier de coréen" className={styles.img}></img>
            <div className={styles.container}>
                <h1 className={styles.title}>Nos Cours</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rerum quae ipsam atque error, maiores asperiores, veniam id quos corrupti voluptatem nemo a quo fugiat blanditiis enim nostrum dicta iste.
                </p>
                <p className={styles.text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nemo esse ut alias atque tempora ab magnam, deleniti placeat excepturi in sequi ex doloremque illum totam quod nulla temporibus omnis.
                    Quibusdam inventore illo animi repellendus asperiores! Facilis recusandae ipsum eaque, exercitationem obcaecati optio nulla nesciunt porro. Repudiandae consequuntur, earum doloremque possimus, esse nesciunt provident facilis, dicta aliquam iure tempore debitis?
                </p>
            </div>

        </div>
    )
}