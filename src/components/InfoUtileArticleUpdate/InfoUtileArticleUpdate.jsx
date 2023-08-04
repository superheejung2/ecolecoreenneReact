import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function UpdateInfoUtileArticle() {
    const { id } = useParams(); // Obtenez l'ID de l'article à partir des paramètres d'URL

    const [infoContent, setInfoContent] = useState({
        title: '',
        url: '',
        content: '',
    });

    useEffect(() => {
        // Obtenez les détails de l'article à partir de l'API en utilisant l'ID
        Axios.get(`http://localhost:8000/infoarticle/${id}`)
            .then((response) => {
                setInfoContent(response.data);
            })
            .catch((error) => {
                console.log('Erreur lors de la récupération des détails de l\'article : ' + error.message);
            });
    }, [id]);

    const updateArticle = () => {
        // Effectuez la mise à jour de l'article en utilisant l'API
        Axios.put(`http://localhost:8000/updateinfoarticle/${id}`, {
            title: infoContent.title,
            url: infoContent.url,
            alt: infoContent.alt,
            content: infoContent.content,
        })
            .then(() => {
                alert('Article mis à jour avec succès!');
                // Redirigez l'utilisateur vers la page d'administration après la mise à jour réussie
                window.location.replace('/admin');
            })
            .catch((error) => {
                alert('Erreur lors de la mise à jour de l\'article : ' + error.message);
            });
    };

    const getValue = (e) => {
        const { name, value } = e.target;
        setInfoContent({
            ...infoContent,
            [name]: value,
        });
    };

    return (
        <div>
            <h1>Modifier un article</h1>

            <div>
                <input
                    type='text'
                    placeholder='title'
                    value={infoContent.title}
                    onChange={getValue}
                    name='title'
                />
                <input
                    type='text'
                    placeholder='url'
                    value={infoContent.url}
                    onChange={getValue}
                    name='url'
                />

                <CKEditor
                    editor={ClassicEditor}
                    data={infoContent.content}
                    onReady={(editor) => {
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setInfoContent({
                            ...infoContent,
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
            </div>
            <button
                className='submit-button'
                onClick={updateArticle}
            >
                Mettre à jour
            </button>
        </div>
    );
}
