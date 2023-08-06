import React from 'react';
import styles from './CoursesSmallSize.module.css'


export default function CoursesSmallSize({ title, image, alt, content }) {
    return (
        <div>
            <h2 className={styles.mb}>{title}</h2>
            <img src={image} alt={alt} />
            <p className={styles.text}>
                {content}
            </p>
        </div>
    )
}
