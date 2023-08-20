import React, { useState } from 'react';
import styles from './Newsletter.module.css'

export default function Newsletter() {
    const [newsletter, setNewsletter] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(res => setNewsletter(res.data))
            .catch(err => console.log(err));
    }, [])

    return (

        <form>
            <h2>Add Newsletter</h2>
            <div>
                <label htmlFor="firstname">Nom</label>
                <input type="text" placeholder='Entrez votre nom'
                    onChange={e => setFirstname(e.target.value)} name="firstname" />
            </div>
            <div>
                <label htmlFor="lastname">Prénom</label>
                <input type='text' placeholder='Enterez vottr prénom'
                    onChange={e => setLastname(e.target.value)} name="lastname" />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type='email' placeholder='Enter votre email'
                    onChange={e => setEmail(e.target.value)} name="email" />
            </div>

            <button>Envoyer</button>
        </form>

    )
}