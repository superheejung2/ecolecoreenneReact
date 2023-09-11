import React from 'react';
import styles from './Courses.module.css'

export default function Courses() {
    return (
        <div>
            <img src='/img/ecolecours.jpg' alt="atelier de coréen" className={styles.img}></img>
            <div className={styles.container}>
                <h1 className={styles.title}>Nos Cours</h1>
                <p className={styles.text}>
                    Vous avez envie d’apprendre le coréen ? Êtes-vous totalement débutant ? Vous avez peut-être déjà commencé à explorer la langue par vous-même, mais vous souhaitez maintenant bénéficier de l'expertise d'un professeur et partager cette expérience avec d'autres apprenants ? L'école coréenne de Nantes vous propose plusieurs cours collectifs pour adultes, adolescents et enfants tout au long de l'année, adaptés à différents niveaux de compétence.                </p>
                {/* <p className={styles.text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nemo esse ut alias atque tempora ab magnam, deleniti placeat excepturi in sequi ex doloremque illum totam quod nulla temporibus omnis.
                    Quibusdam inventore illo animi repellendus asperiores! Facilis recusandae ipsum eaque, exercitationem obcaecati optio nulla nesciunt porro. Repudiandae consequuntur, earum doloremque possimus, esse nesciunt provident facilis, dicta aliquam iure tempore debitis?
                </p> */}
            </div>

        </div>
    )
}