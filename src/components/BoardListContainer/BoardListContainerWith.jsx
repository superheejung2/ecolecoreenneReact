import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import styles from './BoardListContainer.module.css'
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';


//for get a table of form of contact in page admin
export default function BoardListContainer() {
    const [formContact, setFormContact] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/formContact')
            .then(res => {
                setFormContact(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    //for the date dd/mm/yyyy
    const formatDateFrench = (dateStr) => {
        const date = new Date(dateStr);
        return format(date, 'dd/MM/yyyy');
    };

    return (
        <div >
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <table className={styles.container}>
                    <caption>Formulaire</caption>
                    <thead>
                        <tr>
                            <th> Index</th>
                            <th> Prénom</th>
                            <th> Nom</th>
                            <th> Email </th>
                            <th> Tel</th>
                            <th> Objet</th>
                            <th> Content </th>
                            <th> Traitement </th>
                            <th> Date </th>
                            <th> Modification </th>
                        </tr>
                    </thead>
                    <tbody>
                        {formContact.map((data, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.email}   </td>
                                <td>{data.tel} </td>
                                <td>{data.choix} </td>
                                <td>{data.content} </td>
                                <td>{truncate(data.traitement, 100)} </td>
                                <td>{formatDateFrench(data.date)}</td>
                                <Link to={`/editform/${data.id}`}>
                                    <button><AiFillDelete /><AiFillEdit /></button>
                                </Link>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
        </div >
    );
}


