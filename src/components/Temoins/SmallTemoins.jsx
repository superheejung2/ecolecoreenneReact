import React from 'react';
import styles from './SmallTemoins.module.css'

export default function SmallTemoins({ image, alt, content, nameofstudent }) {
    return (
        <div>
            <img src={image} alt={alt} className={styles.img} />
            <div className={styles.box}>
                <p className={styles.text}>
                    {content}
                </p>
                <p className={styles.name}>
                    {nameofstudent}
                </p>
            </div>
        </div>
    )
}


