import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styles from './LogOut.module.css'


export default function LogOut(props) {
    const navigate = useNavigate();

    const onClickHandler = () => {
        axios.get('http://localhost:8000/logout')
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    navigate('/');
                } else {
                    console.error();
                }
            })
    }
    return (
        <div>
            <button onClick={onClickHandler} className={styles.btn}>LOGOUT</button>
        </div>
    )
}