import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";


// table of subscription of contact
export default function ListNewsletter() {

    const [newsletter, setNewsletter] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/newsletter')
            .then(res => setNewsletter(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <article>

            <h1>Newsletter</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nom </th>
                        <th>Prénom </th>
                        <th>Email </th>
                        <th>Date </th>
                        <th>modification</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newsletter.map((data, i) => (
                            <tr key={i}>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.email}</td>
                                <td>{data.date}</td>
                                <td>
                                    <Link to={``}>
                                        <button><AiFillDelete /><AiFillEdit /></button>
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </article>
    )
}