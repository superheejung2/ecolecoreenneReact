import React, { useState } from 'react';
import styles from './Formulaire.module.css'

export default function Formulaire() {
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        tel: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // console.log(form);
        // alert(form.firstname);
        // const formDate = new FormData(form);


        // You can pass formData as a fetch body directly:
        //fetch('http://localhost:3000/contact', { method: 'post', body: form });

        // Or you can work with it as a plain object:
        //const formJson = Object.fromEntries(formData.entries());
        //console.log(formJson);

        //il faut vider les inputs tapé

    }

    return (
        <article>
            <h1>Formulaire</h1>
            <form method="post" onSubmit={handleSubmit}>
                {/* <input type="file" accept="imge/*" name='file' /> */}
                <div>
                    <label htmlFor='firstname'> Nom*   </label>
                    <input
                        type="text"
                        name='firstname'
                        id='firstname'
                        value={form.firstname ?? ''}
                        placeholder='Votre nom'
                        required
                        onChange={handleChange}
                    />


                    <label htmlFor='lastname'> Prénom     </label>
                    <input
                        type="text"
                        name="lastname"
                        id='lastname'
                        value={form.lastname ?? ''}
                        placeholder="Votre prénom"
                        required
                        onChange={handleChange}
                    />

                </div>
                <div>
                    <label htmlFor='email'> Email*  </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email ?? ''}
                        placeholder="Votre email"
                        required
                        onChange={handleChange}
                    />


                    <label htmlFor='tel'>Tel   </label>
                    <input
                        type="number"
                        name="tel"
                        id="tel"
                        value={form.tel ?? ''}
                        placeholder="Votre téléphone"
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
                <textarea name="content" id="content" placeholder="Votre message"></textarea>

                <button type="submit" className={styles.button}>Envoyer</button>
            </form>

            <p>Your firstname is {form.firstname}.</p>
            <p>Your lastname is {form.lastname}.</p>
            <p>Your lastname is {form.email}.</p>
            <p>Your lastname is {form.tel}.</p>




        </article >
    )
}
