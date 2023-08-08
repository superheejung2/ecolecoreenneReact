import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Editform.module.css'

// const SERVER_URL = 'http://localhost:8000/contact/:id' 

export default function Editform() {
    const { id } = useParams();
    const [forms, setForms] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8000/contact/${id}`)
            .then((response) => {
                console.log(response.data);
                setForms(response.data);
            })
            .catch((error) => {
                console.log('Erreur');
            });
    }, [id]);


    const updateArticle = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:8000/contact/${id}`, {
                // firstname: forms.firstname,
                // lastname: froms.lastname,
                // email: forms.email,
                // tel: forms.tel,
                // choix: forms.choix,
                // content: forms.content,
                traitement: forms.traitement
            });
            alert('enrégistré')
        } catch (error) {
            console.error(error);
        };
    }




    // const updateArticle = () => {
    //     // Effectuez la mise à jour de l'article en utilisant l'API
    //     console.log(id);
    //     console.log(forms.content);

    //     axios.post(`http://localhost:8000/updateinfo/${id}`, {
    //         title: forms.title,
    //         url: forms.url,
    //         alt: forms.alt,
    //         content: forms.content,
    //     })
    //         .then(() => {
    //             console.log(formDetail.content);
    //             alert('Article est update avec succès!');
    //             // Redirigez l'utilisateur vers la page d'administration après la mise à jour réussie
    //             window.location.replace('/admin');
    //         })
    //         .catch((error) => {
    //             alert('Erreur');
    //         });
    // };

    //for the date dd/mm/yyyy
    // const formatDateFrench = (dateStr) => {
    //     const date = new Date(dateStr);
    //     return format(date, 'dd/MM/yyyy');
    // };

    const deleteArticle = () => {
        axios.post(`http://localhost:8000/contact/${id}`)
            .then(() => {
                alert('une demande de formulaire est effacé!');
                // Redirigez l'utilisateur vers la page d'administration après la mise à jour réussie
                window.location.replace('/admin');
            })
            .catch((error) => {
                alert('Erreur');
            });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        forms((prevForms) => ({
            ...prevForms, [name]: value,
        }));
    };


    return (
        <div>
            <h1>Modifier le formulaire</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className={styles.horizontal}>
                        <h3> Nom</h3>
                        <div>{forms.firstname}</div>
                    </div>

                    <div className={styles.horizontal}>
                        <h3> prénom</h3>
                        <div>{forms.lastname}</div>
                    </div>
                    <div className={styles.horizontal}>
                        <h3> Email </h3>
                        <div>{forms.email}</div>
                    </div>
                    <div className={styles.horizontal}>
                        <h3> Tel </h3>
                        <div>{forms.tel}</div>
                    </div>

                    <div className={styles.horizontal}>
                        <h3> Date </h3>
                        <div>{forms.date}</div>
                    </div>

                    <div className={styles.horizontal}>
                        <h3> Objet de la demande* </h3>
                        <div>{forms.choix}</div>
                    </div>

                    <div className={styles.horizontal}>
                        <h3> Traitement </h3>
                        <input
                            type="text"
                            name="content"
                            value={forms.traitement ?? ''}
                            className={styles.inputhorizontal}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.horizontal}>
                        <h3> Content </h3>
                        <div>{forms.content}</div>
                    </div>
                </div>
            )}
            <button
                className='submit-button'
                onClick={updateArticle}
            >
                Mettre à jour
            </button>

            <button
                className='submit-button'
                onClick={deleteArticle}
            >Delete
            </button>

        </div>
    )
}

