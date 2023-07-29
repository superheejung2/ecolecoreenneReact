import React from 'react';
import styles from './HomeEcole.module.css'
import { PiStudentFill } from "react-icons/pi";
import { RiExchangeLine } from "react-icons/ri";
import { CgCommunity } from "react-icons/cg";
import { BiHappyHeartEyes } from "react-icons/bi";



export default function HomeEcole() {
    return (

        <div className={styles.container}>
            <div>
                <h1 className={styles.h1}>Notre mission</h1>
                <p className={styles.p}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, exercitationem minima ipsa voluptatibus tempora totam sed perspiciatis tempore. Iste ipsa maiores quos beatae distinctio autem voluptatibus laborum eos, asperiores vitae.
                    Alias quasi recusandae, qui, consequatur consequuntur iure deserunt non voluptatibus distinctio cupiditate quisquam enim, dolor veritatis voluptatem nulla perferendis unde quis officiis soluta quia. Voluptatum maxime molestiae rem repellendus! Asperiores!
                </p>
                <button>En savoir plus</button>
            </div>
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
        </div >
    )
}
