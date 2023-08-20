import React from 'react';
import axios from 'axios'
import styles from './Newsletter.module.css'
import useNavigate from 'react-router-dom'

export default function CreateNewsletter() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3000/create', { firstname, lastname, email })
            .then(res => {
                console.log(res);
                navigate('/');
            }).catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit}>
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