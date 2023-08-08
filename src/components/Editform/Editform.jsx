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
        console.log(id);
        axios.get(`http://localhost:8000/contact/${id}`)
            .then((response) => {
                console.log(response.data);
                setForms(response.data);
                setLoading(false);

            })
            .catch((error) => {
                console.log('Erreur');
            });
    }, [id]);


    const updateArticle = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8000/contact/${id}`, {
                traitement: forms.traitement
            });
            console.log(forms.traitement)
            alert('Modifié');
            // redirection for page admin after update 
            window.location.replace('/admin');

        } catch (error) {
            console.error(error);
        };
    }

    const deleteArticle = () => {
        axios.post(`http://localhost:8000/deletecontact/${id}`)
            .then(() => {
                alert('une demande de formulaire est effacé!');
                // redirection for page admin after update                
                window.location.replace('/admin');
            })
            .catch((error) => {
                alert('Erreur');
            });
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForms((prevForms) => ({
            ...prevForms,
            [name]: value,
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
                        <div>{forms[0].firstname}</div>
                    </div>

                    <div className={styles.horizontal}>
                        <h3> prénom</h3>
                        <div>{forms[0].lastname}</div>
                    </div>
                    <div className={styles.horizontal}>
                        <h3> Email </h3>
                        <div>{forms[0].email}</div>
                    </div>
                    <div className={styles.horizontal}>
                        <h3> Tel </h3>
                        <div>{forms[0].tel}</div>
                    </div>

                    <div className={styles.horizontal}>
                        <h3> Date </h3>
                        <div>{forms[0].date}</div>
                    </div>

                    <div className={styles.horizontal}>
                        <h3> Objet de la demande </h3>
                        <div>{forms[0].choix}</div>
                    </div>

                    <div className={styles.horizontal}>
                        <h3> Traitement </h3>
                        <input
                            type="text"
                            name="traitement"
                            className={styles.inputhorizontal}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.horizontal}>
                        <h3> Content </h3>
                        <div>{forms[0].content}</div>
                    </div>
                </div>
            )}
            <button
                onClick={updateArticle}
            >
                Mettre à jour
            </button>

            <button
                onClick={deleteArticle}
            >Delete
            </button>

        </div>
    )
}

