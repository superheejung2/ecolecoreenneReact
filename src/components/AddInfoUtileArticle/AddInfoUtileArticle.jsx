import React from 'react';
import { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';



//for editing a new adrticle of infos utiles 

export default function AddInfoUtileArticle() {

    const [infoContent, setInfoContent] = useState({
        title: '',
        url: '',
        content: '',
    })

    const submitReview = () => {
        Axios.post('http://localhost:8000/addinfoarticle', {
            title: infoContent.title,
            url: infoContent.url,
            alt: infoContent.alt,
            content: infoContent.content
        }).then(() => {
            alert('Enrégistré!');
            redirectToAdmin();
        })
    };

    const redirectToAdmin = () => {
        window.location.replace('/admin'); //Redirect to admin page after successful registration
    };

    const getValue = e => {
        const { name, value } = e.target;
        setInfoContent({
            ...infoContent,
            [name]: value
        })
    };

    return (
        <div>
            <h1> Ajouter un article</h1>

            <div>
                <input
                    type='text'
                    placeholder='title'
                    onChange={getValue}
                    name='title'
                />
                <input
                    type='text'
                    placeholder='url'
                    onChange={getValue}
                    name='url'
                />


                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Veuillez entrer votre contenu</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setInfoContent({
                            ...infoContent,
                            content: data
                        })
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
                className="submit-button"
                onClick={submitReview}
            >submit</button>
        </div>
    )
}