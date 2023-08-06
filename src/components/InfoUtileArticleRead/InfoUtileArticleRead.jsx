import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from './InfoUtileArticleRead.module.css'
import ReactHtmlParser from 'react-html-parser';




//카드 형태로 여러개의 목록으로 불러와짐. 현재는 infos utiles 페이지에서 사용
export default function InfoUtileArticleRead() {

    const [viewContent, setViewContent] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/infoarticle').then((response) => {
            setViewContent(response.data);
        })
    }, [viewContent])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <div className={styles.style}>
            <h1>Infos Utiles</h1>
            <p >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.
            </p>
            {viewContent.map(element =>
                <div className={styles.box}>
                    <img src={element.url} alt={element.alt} className={styles.img} />
                    <div>
                        <h2>{element.title}</h2>
                        <div>
                            {ReactHtmlParser(truncate(element.content, 300))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
