import React, { useEffect } from 'react'
import axios from 'axios';

const SERVER_URL = '/logout';

export default function LogOut(props) {

    useEffect(() => {
        axios.get(SERVER_URL)
            .then(response => { console.log(response) })
    }, [])


    const onClickHandler = () => {
        axios.get(`/api/users/logout`)
            .then(response => {
                if (response.data.success) {
                    props.history.push("/login")
                } else {
                }
            })
    }
    return (
        <div>
            <button onClick={onClickHandler}>se deconnecter</button>
        </div>
    )
}