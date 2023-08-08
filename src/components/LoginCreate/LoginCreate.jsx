import { useState } from 'react';
import styles from './LoginCreate.module.css'
import axios from 'axios';


const SERVER_URL = 'http://localhost:8000/register';

//creating contact of user 
export default function LoginCreate() {

    const [forms, setForms] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
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
                password: ''
            }));
        } catch (error) {
            console.error(error);
        };
    }
    return (
        <div>
            <h1>Inscription </h1>
            <form onSubmit={onSubmitHandler}>

                <div className={styles.horizontal}>
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

                <div className={styles.horizontal}>

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

                <div className={styles.horizontal}>
                    <label htmlFor="email">E-mail*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={forms.email ?? ''}
                        placeholder='exemple@email.com'
                        required
                        onChange={handleChange}
                    />

                </div>
                <div className={styles.horizontal}>
                    <label htmlFor="password">Mot de passe*</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={forms.password}
                        required
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className={styles.button}>M'identifier</button>
            </form>
        </div>
    )
}