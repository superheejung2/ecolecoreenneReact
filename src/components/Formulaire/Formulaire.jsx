import { useState } from 'react';
// import styles from './Formulaire.module.css'
import axios from 'axios';

const SERVER_URL = 'http://localhost:8000/contact';

export default function Formulaire() {
    const [forms, setForms] = useState({
        firstname: '',
        lastname: '',
        email: '',
        tel: '',
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
            // fetchData();
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
            {/* <form onSubmit={onSubmitHandler}>
                {/* <input type="file" accept="imge/*" name='file' /> */}
            {/* <div className={styles.horizontal}>
                <div className={styles.vertical}>
                    <label htmlFor='firstname'> Nom* </label>
                    <input
                        type="text"
                        name='firstname'
                        id='firstname'
                        value={forms.firstname ?? ''}
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.vertical}>

                    <label htmlFor='lastname'> Prénom   </label>
                    <input
                        type="text"
                        name="lastname"
                        id='lastname'
                        value={forms.lastname ?? ''}
                        onChange={handleChange}
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
                    />
                </div>

                <div className={styles.vertical}>
                    <label htmlFor='tel'>Tél   </label>
                    <input
                        type="tel"
                        name="tel"
                        id="tel"
                        value={forms.tel ?? ''}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div>
                <label htmlFor='choix'> Objet de la demande  </label>
                <input
                    type="text"
                    name="choix"
                    id="choix"
                    value={forms.choix ?? ''}
                    required
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor='content'>Votre message  </label>
                <input
                    type="text"
                    name="content"
                    id="content"
                    value={forms.content ?? ''}
                    required
                    onChange={handleChange}
                />

            </div>


            <div>
                <label htmlFor="choix"> Objet de la demande</label>
                <select name="choix" id="choix" value={form.choix}>
                    <option value="0">Choisir l'objet de ma demande</option>
                    <option value="c">Concernant le cours</option>
                    <option value="p">Concernant le partenariat</option>
                    <option value="a">Autre sujet</option>
                </select>
            </div>

            <label htmlFor="content">Votre message</label>
            <textarea type="text" name="content" id="content" placeholder="Votre message"></textarea>

            <button type="submit" className={styles.button}>Envoyer</button>
            {/* <input type='submit' value='add' /> */}
            {/* </form> * /} */}

        </article >
    )
}
