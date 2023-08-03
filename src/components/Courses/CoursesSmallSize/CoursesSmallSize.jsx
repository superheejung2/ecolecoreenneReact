import React from 'react';
import styles from './CoursesSmallSize.module.css'


export default function CoursesSmallSize({ title, image, alt, content }) {
    return (
        <div>
            <h3 className={styles.h3}>{title}</h3>
            <img src={image} alt={alt} />
            <p className={styles.text}>
                {content}
            </p>
        </div>
    )
}
