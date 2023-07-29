import { useState } from 'react';
import styles from './Formulaire.module.css'
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

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get(SERVER_URL)
    //         setForms(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData()
    // }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForms((prevForms) => ({
            ...prevForms, [name]: value,
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // const firstname = e.target.firstname.value;
        // const lastname = e.target.lastname.value;

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


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;


    // console.log(form);
    // alert(e.target);


    return (
        <article>
            <h1>Formulaire</h1>
            <form onSubmit={onSubmitHandler}>
                {/* <input type="file" accept="imge/*" name='file' /> */}

                <label htmlFor='firstname'> Nom*   </label>
                <input
                    type="text"
                    name='firstname'
                    id='firstname'
                    value={forms.firstname ?? ''}
                    placeholder='Votre nom'
                    required
                    onChange={handleChange}
                />


                <label htmlFor='lastname'> Prénom     </label>
                <input
                    type="text"
                    name="lastname"
                    id='lastname'
                    value={forms.lastname ?? ''}
                    placeholder="Votre prénom"
                    required
                    onChange={handleChange}
                />


                <div>
                    <label htmlFor='email'> Email*  </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={forms.email ?? ''}
                        placeholder="Votre email"
                        required
                        onChange={handleChange}
                    />


                    <label htmlFor='tel'>Tel   </label>
                    <input
                        type="tel"
                        name="tel"
                        id="tel"
                        value={forms.tel ?? ''}
                        placeholder="Votre téléphone"
                        onChange={handleChange}
                    />

                </div>

                <div>
                    <label htmlFor='choix'> choix  </label>
                    <input
                        type="text"
                        name="choix"
                        id="choix"
                        value={forms.choix ?? ''}
                        placeholder="Votre choix"
                        onChange={handleChange}
                    />


                    <label htmlFor='content'>content   </label>
                    <input
                        type="text"
                        name="content"
                        id="content"
                        value={forms.content ?? ''}
                        placeholder="Votre content"
                        onChange={handleChange}
                    />

                </div>

                {/* <div>
                    <label htmlFor="choix"> Objet de la demande</label>
                    <select name="choix" id="choix" value={form.choix}>
                        <option value="0">Choisir l'objet de ma demande</option>
                        <option value="c">Concernant le cours</option>
                        <option value="p">Concernant le partenariat</option>
                        <option value="a">Autre sujet</option>
                    </select>
                </div>

                <label htmlFor="content">Votre message</label>
                <textarea type="text" name="content" id="content" placeholder="Votre message"></textarea> */}

                <button type="submit" className={styles.button}>Envoyer</button>
                {/* <input type='submit' value='add' /> */}
            </form>

        </article >
    )
}
