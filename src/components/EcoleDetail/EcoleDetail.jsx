import React from 'react';
import EcoleEmoji from '../../components/EcoleEmoji/EcoleEmoji'
import styles from './EcoleDetail.module.css'
// import { PiStudentFill } from "react-icons/pi";
// import { RiExchangeLine } from "react-icons/ri";
// import { CgCommunity } from "react-icons/cg";
// import { BiHappyHeartEyes } from "react-icons/bi";
import { Link } from "react-router-dom";


export default function EcoleDetail() {
    return (
        <article className={styles.container}>
            <img src='/img/atelier2.jpg' alt='cours de école' ></img>

            <div>
                <h1 className={styles.h1}>Notre mission</h1>

                <p className={styles.box1}>

                    Créée en 2021, l'école coréenne de Nantes s'engage à promouvoir la langue et la culture coréennes, tant auprès de nos élèves que du grand public. Notre établissement propose des cours de langue ainsi que des ateliers culturels animés par nos professeurs d'origine coréenne. Tout au long de l'année, nous organisons une variété d'événements, offrant ainsi un espace chaleureux d'échanges et de découvertes.                </p>
            </div>

            <EcoleEmoji />
            <div className={styles.partenaire}>
                <p>
                    L'école est soutenue par l'Ambassade de la République de Corée en France et est affiliée à la Fondation coréenne d'outre-mer (재외동포재단). Elle bénéficie donc du soutien et de la formation continue du gouvernement coréen. Nous avons également des partenaires tels qu'Accoord, Kore@Nantes, Printemps Coréen, etc. Grâce à ces partenariats précieux, notre école bénéficie de ressources et de soutiens qui nous permettent d'offrir une éducation de qualité en coréen et de promouvoir la richesse de la culture coréenne à Nantes et dans ses environs.
                    Rejoignez-nous dans cette aventure passionnante et découvrez tout ce que la Corée a à offrir.
                </p>
            </div >


        </article >
    )
}
