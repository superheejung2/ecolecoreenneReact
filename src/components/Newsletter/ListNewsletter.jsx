import React, { useEffect, useState } from 'react';
import axios from 'axios'
// import { Link } from 'react-router-dom';
import Button from '../ui/Button';


export default function ListNewsletter() {

    const [newsletter, setNewsletter] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/newsletter')
            // .then(res => console.log(res)).
            .then(res => setNewsletter(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            {/* <Link to="/AddNewsletterInHome">Add+</Link> */}
            <Button>Add+</Button>
            <table>
                <thead>
                    <tr>
                        <th>firstname </th>
                        <th>lastname </th>
                        <th>email </th>
                        <th>date </th>
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
                                    <button>Update</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}