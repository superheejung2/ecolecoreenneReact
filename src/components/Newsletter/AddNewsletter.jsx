import { useState } from 'react';
import styles from './AddNewsletter.module.css'
import axios from 'axios';

const SERVER_URL = '/newsletter';

//* form for subsciption to school's newsletter*/
export default function AddNewsletter() {

    const [forms, setForms] = useState({
        firstname: '',
        lastname: '',
        email: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setForms((prevName) => ({
            ...prevName, [name]: value
        }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // console.log(logins)

        try {
            await axios.post(SERVER_URL, forms);
            alert('Enrégistré!');
        }

        catch (error) {
            console.log(error);
        }
    }

    //첫번째로 시도하던 것 
    // const onSubmitHandler = async (e) => {
    //     e.preventDefault();

    //     try {
    //         await axios.post('SERVER_URL', {
    //             firstname: forms.firstname,
    //             lastname: forms.lastname,
    //             email: forms.email,
    //         }
    //         )

    //     } catch (error) {
    //         console.error(error);
    //     };

    // 마지막으로 시도하던 것 
    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:8000/newsletter', {
    //         firstname: forms.firstname,
    //         lastname: forms.lastname,
    //         email: forms.email,
    //     }).then(() => {
    //         alert('Enrégistré!');
    //         setForms({
    //             firstname: '',
    //             lastname: '',
    //             email: '',
    //         });
    //     })
    // };

    return (
        <article>
            <div className={styles.bg}>
                <div className={styles.container}>
                    <h2 className={styles.news}>Newsletter</h2>
                    <div className={styles.abonnez}>
                        Abonnez-vous pour suivre notre l’actualité </div>

                    <form onSubmit={onSubmitHandler} >
                        <div className={styles.horizontal}>
                            <div >
                                <label htmlFor='email'> Nom*  </label>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    value={forms.lastname}
                                    required
                                    onChange={handleChange}
                                    className={styles.mr}
                                />
                            </div>
                            <div>
                                <label htmlFor='email'> Prénom*  </label>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    value={forms.firstname}
                                    required
                                    onChange={handleChange}
                                    className={styles.mr}
                                />
                            </div>
                            <div>
                                <label htmlFor='email'> Email*  </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={forms.email ?? ''}
                                    required
                                    onChange={handleChange}
                                    className={styles.mr}
                                />
                            </div>

                            <button type="submit" className={styles.button}>Envoyer</button>
                            {/* <input type='submit' value='add' /> */}
                        </div>

                    </form>
                </div >
            </div>

        </article >
    )
}