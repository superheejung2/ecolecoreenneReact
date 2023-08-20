import React from 'react'

export default function Modal() {
    return (
        <div>
            <div className={styles.modal}></div>
            <p>Les messages supprimés ne peuvent pas être récupérés. </p>
            <p>Etes - vous sûr que vous voulez supprimer ? </p>
            <div>
                <button>Annuler</button>
                <button>Supprimer</button>
            </div>
        </div >
    )
}
