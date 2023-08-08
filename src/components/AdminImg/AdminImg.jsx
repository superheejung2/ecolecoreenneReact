import React from 'react'
import styles from './AdminImg.module.css'

//image of page Admin
export default function AdminImg() {


    // const onClickHandler

    return (
        <div className={styles.center}>
            <h1>Admin </h1>
            <div className={styles.btn}>
                <button
                // onClick={onClickHandler}
                >LOGOUT
                </button>
            </div>
            <img src="img/Coree_palas_petit.jpg" alt="Palas de Corée" />
        </div>
    )
}
