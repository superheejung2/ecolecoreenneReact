import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Axios from 'axios';

// get detail of article of infos utils
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
                console.log('Erreur');
            });
    }, [id]);

    return (
        <div>
            {articleDetail[0] && <h1>{articleDetail[0].title}</h1>}
            {articleDetail[0] && <div>{articleDetail[0].content}</div>}
        </div>
    );
};

