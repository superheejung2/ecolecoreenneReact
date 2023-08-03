import { useState } from 'react';
import styles from './AddNewsletter.module.css'
import axios from 'axios';


const SERVER_URL = 'http://localhost:8000/contact';



export default function AddNewsletter() {
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
            <h3>NEWSLETTER</h3>
            <div className={styles.horizontal}>
                <p>Abonnez-vous pour suivre notre </p>
                <form onSubmit={onSubmitHandler}>
                    {/* <input type="file" accept="imge/*" name='file' /> */}
                    <div className={styles.vertical}>
                        <div>
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
                    </div>


                    <button type="submit" className={styles.button}>Envoyer</button>
                    {/* <input type='submit' value='add' /> */}

                </form>
            </div >

        </article >
    )
}