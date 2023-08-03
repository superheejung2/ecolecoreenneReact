import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from './InfoUtileArticleRead.module.css'


export default function InfoUtileArticleRead() {

    const [viewContent, setViewContent] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/infoarticle').then((response) => {
            setViewContent(response.data);
        })
    }, [viewContent])


    return (
        <div>
            {viewContent.map(element =>
                <div className={styles.box}>
                    <h2>{element.title}</h2>
                    <img src="`${element.url}`" alt="`${element.alt}`" />
                    <div>
                        {element.content}
                    </div>
                </div>
            )}
        </div>
    )
}
