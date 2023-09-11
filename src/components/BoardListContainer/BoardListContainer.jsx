import React, { useState, useEffect } from 'react';
import BoardList from '../BoardList/BoardList'
import axios from '../../api/axiosInstance';
// import styles from './BoardListContainer.module.css'

const SERVER_URL = '/admin';

export default function BoardListContainer() {

    const fetchBoardList = () => axios.get(SERVER_URL);
    const [boards, setBoards] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const listBoard = async () => {
        setLoading(true);
        try {
            const response = await fetchBoardList();
            console.log(response)
            setBoards(response.data);
            console.log(response.data)
            setLoading(false);
        } catch (e) {
            setLoading(false);
            throw e;
        }
    }
    useEffect(() => {
        listBoard();
    }, [])

    return (
        // <BoardList boards={boards} isLoading={isLoading} />
        <div >
            <h2>게시판 목록</h2>
            {isLoading && "로딩중"}
            {!!isLoading && boards && (


                <table>
                    <caption>Formulaire</caption>
                    <thead>
                        <tr>
                            <th> Nom</th>
                            <th> Prénom</th>
                            <th> Email </th>
                            <th> Tel</th>
                            <th> Objet</th>
                            <th> Content </th>
                            <th> Date </th>
                            <th> Modification </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>


                            </td>
                        </tr>

                        {/* {!boards.length < 0 && boards.map((board) => (
                            <tr key={board.id}>
                                <td>{board.lastname}</td>
                                <td>{board.firstname}</td>
                                <td>{board.email}   </td>
                                <td>{board.tel} </td>
                                <td>{board.choix} </td>
                                <td>{board.content} </td>
                                <td>{board.date} </td>
                                <td> icone </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>

            )}
        </div>

    )
}
