import React from 'react'
import styles from './Button.module.css'

export default function Button({ name }) {
    return (
        <div className={styles.button}>{name}</div>
    )
}


