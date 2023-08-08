import { useState } from 'react';
import styles from './Formulaire.module.css'
import axios from 'axios';

const SERVER_URL = 'http://localhost:8000/contact';


// editing contact form by user 
export default function Formulaire() {
    const [forms, setForms] = useState({
        firstname: '',
        lastname: '',
        email: '',
        choix: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForms((prevForms) => ({
            ...prevForms, [name]: value,
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await axios.post(SERVER_URL, forms);
            alert('enrégistré')
            setForms(prevForms => ({
                ...prevForms,
                firstname: '',
                lastname: '',
                email: '',
                tel: '',
                choix: '',
                content: ''
            }));
        } catch (error) {
            console.error(error);
        };
    }

    return (
        <article>
            <h1>Formulaire</h1>
            <form onSubmit={onSubmitHandler} className={styles.form}>

                <div className={styles.horizontal}>
                    <div className={styles.vertical}>
                        <label htmlFor='firstname'> Nom* </label>
                        <input
                            type="text"
                            name='firstname'
                            id='firstname'
                            value={forms.firstname ?? ''}
                            required
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.verticalMargin}>

                        <label htmlFor='lastname'> Prénom </label>
                        <input
                            type="text"
                            name="lastname"
                            id='lastname'
                            value={forms.lastname ?? ''}
                            onChange={handleChange}
                            className={styles.inputMargin}
                        />
                    </div>
                </div>

                <div className={styles.horizontal}>
                    <div className={styles.vertical}>
                        <label htmlFor='email'> Email*  </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={forms.email ?? ''}
                            required
                            onChange={handleChange}
                            className={styles.input}

                        />
                    </div>
                    <div className={styles.verticalMargin}>
                        <label htmlFor='tel'> Tel  </label>
                        <input
                            type="tel"
                            name="tel"
                            id="tel"
                            value={forms.tel ?? ''}
                            required
                            onChange={handleChange}
                            className={styles.input}

                        />
                    </div>

                </div>

                <div className={styles.vertical}>
                    <label htmlFor='choix'> Objet de la demande*  </label>
                    <input
                        type="text"
                        name="choix"
                        id="choix"
                        value={forms.choix ?? ''}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.vertical}>
                    <label htmlFor="content">Votre message* </label>
                    <textarea
                        type="text"
                        name="content"
                        id="content"
                        placeholder="Votre message"
                        className={styles.mh}
                        value={forms.content ?? ''}
                        onChange={handleChange}
                        required>
                    </textarea>

                </div>
                <button type="submit" className={styles.button}>Envoyer</button>
            </form>
        </article >
    )
}
