import React from 'react';
import styles from './EcoleEmoji.module.css'
import { PiStudentFill } from "react-icons/pi";
import { RiExchangeLine } from "react-icons/ri";
import { CgCommunity } from "react-icons/cg";
import { BiHappyHeartEyes } from "react-icons/bi";


export default function EcoleEmoji() {
    return (
        <article className={styles.container}>

            <div className={styles.missions}>
                <div className={styles.missonsAndIcon}>
                    <PiStudentFill />
                    <p className={styles.pwithIcons}>Enseignement</p>
                </div>
                <div className={styles.missonsAndIcon}>
                    <RiExchangeLine />
                    <p className={styles.pwithIcons}>Échange</p>
                </div>
                < div className={styles.missonsAndIcon}>
                    <CgCommunity />
                    <p className={styles.pwithIcons}>Communauté</p>
                </div>
                <div className={styles.missonsAndIcon}>
                    <BiHappyHeartEyes />
                    <p className={styles.pwithIcons}>Épanouissement</p>
                </div>
            </div>
        </article >
    )
}
