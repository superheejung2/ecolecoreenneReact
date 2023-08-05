import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function UpdateInfoUtileArticle() {

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

    const updateArticle = () => {
        // Effectuez la mise à jour de l'article en utilisant l'API
        Axios.put(`http://localhost:8000/info/${id}`, {
            title: articleDetail.title,
            url: articleDetail.url,
            alt: articleDetail.alt,
            content: articleDetail.content,
        })
            .then(() => {
                alert('Article est update avec succès!');
                // Redirigez l'utilisateur vers la page d'administration après la mise à jour réussie
                window.location.replace('/admin');
            })
            .catch((error) => {
                alert('Erreur');
            });
    };

    const getValue = (e) => {
        const { name, value } = e.target;
        setArticleDetail({
            ...articleDetail,
            [name]: value,
        });
    };

    return (
        <div>
            <h1>Modifier un article</h1>
            {articleDetail[0] &&
                <div>
                    <input
                        type='text'
                        value={articleDetail[0].title}
                        onChange={getValue}
                        name='title'
                    />
                    <input
                        type='text'
                        value={articleDetail[0].url}
                        onChange={getValue}
                        name='url'
                    />

                    <CKEditor
                        editor={ClassicEditor}
                        data={articleDetail[0].content}

                        onReady={(editor) => {
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setArticleDetail({
                                ...articleDetail,
                                content: data,
                            });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />

                </div>}

            <button
                className='submit-button'
                onClick={updateArticle}
            >
                Mettre à jour
            </button>
        </div>
    );
}
