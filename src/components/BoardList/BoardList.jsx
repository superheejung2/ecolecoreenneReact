import React from 'react';
import styles from './BoardList.module.css'


export default function BoardList({ boards, isLoading }) {
    return (
        <div className={styles.center}>
            <h2>게시판 목록</h2>
            {isLoading && "로딩중"}
            {!isLoading && boards && (

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
                        {!!boards.length && boards.map((board) => (
                            <tr key={board.id}>
                                <td>{board.lastname}</td>
                                <td>{board.firstname}</td>
                                <td>{board.email}   </td>
                                <td>{board.tel} </td>
                                <td>{board.choix} </td>
                                <td>{board.content} </td>
                                <td>{board.date} </td>
                                <td> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            )}
        </div>
    )
}



