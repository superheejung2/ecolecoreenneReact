import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Axios from 'axios';

export default function InfoUtileDetail() {
    const { id } = useParams();
    const [articleDetail, setArticleDetail] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:8000/info/${id}`)
            .then((response) => {
                console.log(response.data);
                setArticleDetail(response.data);
            })
            .catch((error) => {
                console.log('Erreur lors de la récupération des détails de l\'article : ' + error.message);
            });
    }, [id]);
    console.log(articleDetail.title);



    return (
        <div>
            {articleDetail.title && <h1>{articleDetail[0].title}</h1>}
            {articleDetail.content && <div>{articleDetail[0].content}</div>}

            {articleDetail.title && <h1>{articleDetail.title}</h1>}
            {articleDetail.content && <div>{articleDetail.content}</div>}
            {/*<h1>{articleDetail[0].title}</h1>
           
            <div>{articleDetail[0].content}</div> */}
            {/* 더 많은 내용을 표시하는 코드 추가 */}
        </div>
    );
};

