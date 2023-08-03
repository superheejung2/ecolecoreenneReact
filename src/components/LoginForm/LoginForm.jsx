import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './LoginForm.module.css';
import axios from '../../api/axiosInstance';


const SERVER_URL = '/login';

export default function LoginForm() {

    const navigate = useNavigate();

    const [logins, setLogins] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogins((prevlogin) => ({
            ...prevlogin, [name]: value
        }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // console.log(logins)

        try {
            // await axios.post(SERVER_URL, logins);
            await axios.post(SERVER_URL, logins);
            navigate("/admin");
        }

        catch (error) {
            console.log(error);
        }
    }

    return (
        <article className={styles.login}>
            <img src="img/changdeokgung-palace_coree.jpg" alt="palas coréen" />

            <div className={styles.description}>
                <div className={styles.check}>
                    <h1>Mon espace</h1>
                    <form onSubmit={onSubmitHandler}>
                        <div>
                            <label htmlFor="email">E-mail*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={logins.email ?? ''}
                                placeholder='exemple@email.com'
                                required
                                onChange={handleChange}
                            />

                        </div>
                        <div>
                            <label htmlFor="password">Mot de passe*</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={logins.password}
                                // placeholder='exemple@email.com'
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className={styles.button}>M'identifier</button>
                    </form>

                </div>

                <div className={styles.nouvelle}>
                    <h1>Nouvelle inscription</h1>
                    <button>Créer mon compte</button>
                </div>
            </div>

        </article>
    )
}




