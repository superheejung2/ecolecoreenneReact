import React, { useState, useEffect } from 'react';
import axios from 'axios'

// const SERVER_URL = '/admin';
export default function BoardListContainer() {

    const [formContact, setFormContact] = useState([]);
    // const [isLoading, setLoading] = useState(false);
    useEffect(() => {

        axios.get('http://localhost:8000/formContact')
            .then(res => setFormContact(res.data))
            .catch(err => console.log(err));
    }, [])

    // console.log(formContact)



    return (
        // <BoardList boards={boards} isLoading={isLoading} />

        <div >

            {/* {isLoading && "로딩중"} */}
            {/* {!!isLoading && boards && ( */}


            <table>
                <caption>Formulaire</caption>
                <thead>
                    <tr>
                        <th> Prénom</th>
                        <th> Nom</th>
                        <th> Email </th>
                        <th> Tel</th>
                        <th> Objet</th>
                        <th> Content </th>
                        <th> Date </th>
                        <th> Modification </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {!boards.length < 0 && boards.map((board, i) => ( */}

                    {
                        formContact.map((data, i) => (
                            <tr key={i}>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.email}   </td>
                                <td>{data.tel} </td>
                                <td>{data.choix} </td>
                                <td>{data.content} </td>
                                <td>{data.date} </td>
                                <td>
                                    <button>Update</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}