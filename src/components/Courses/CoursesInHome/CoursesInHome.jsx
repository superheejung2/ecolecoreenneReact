import React from 'react';
import styles from './CoursesInHome.module.css'
import CoursesSmallSize from '../CoursesSmallSize/CoursesSmallSize';



export default function CoursesInHome() {
    return (
        <div>
            <div className={styles.bg} >
                <div className={styles.box}>
                    <div >
                        <p className={styles.passion}>Passion, Famille, Carrière</p>
                    </div>
                    <div>
                        <p className={styles.moment}>
                            C'est le moment d'apprendre le coréen</p></div>
                </div>
            </div >
            <div className={styles.container}>
                <h1 className={styles.title}>Nos cours</h1>
                <p className={styles.p1}>Vous avez envie d’apprendre le coréen ? Êtes-vous totalement débutant ? Vous avez peut-être déjà commencé à explorer la langue par vous-même, mais vous souhaitez maintenant bénéficier de l'expertise d'un professeur et partager cette expérience avec d'autres apprenants ? L'école coréenne de Nantes vous propose plusieurs cours collectifs pour adultes, adolescents et enfants tout au long de l'année, adaptés à différents niveaux de compétence.</p>
                {/* <p className={styles.p2}>Nos cours pour enfants sont conçus de manière ludique et stimulante, offrant ainsi à vos enfants une expérience d'apprentissage engageante pour découvrir la langue et la culture coréennes.</p> */}

                <div className={styles.cours}>
                    <div className={styles.mr}>
                        <CoursesSmallSize
                            title="Cours d'enfant"
                            image="/img/cours_enfant.png"
                            alt="Cours d'enfant"
                            content="
                            3 classes de cours pour enfants sont proposées le samedi matin pour les enfants de plus de 3 ans."
                        />
                    </div>
                    <div className={styles.mr}>
                        <CoursesSmallSize
                            title="Cours d'adult/ados"
                            image="/img/cours_enfant.png"
                            alt="Cours d'adult"
                            content="
                            Accessible à partir du collégien, vous choisissez le cours selon votre niveau et votre disponibilité."
                        />
                    </div>
                    <div>
                        <CoursesSmallSize
                            title="Inscription 2023/24"
                            image="/img/cours_enfant.png"
                            content="L'inscription pour les cours de coréen 2023/24 est en cours."
                        />
                        <button className={styles.button}>inscrire</button>
                    </div>

                </div>
            </div>
        </div >
    )
}