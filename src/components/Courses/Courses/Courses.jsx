import React from 'react';
import styles from './Courses.module.css'

export default function Courses({ title, image, alt, content }) {
    return (
        <div>
            <img src={image} alt={alt} className={styles.img} />
            <h2>{title}</h2>
            <div>{content}</div>
        </div>
    )
}