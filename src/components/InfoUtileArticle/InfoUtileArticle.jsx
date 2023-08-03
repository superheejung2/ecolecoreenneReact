import { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import Axios from 'axios';


//for editing articles for "infos utiles"
export default function InfoUtileArticle() {
    const [infoContent, setInfoContent] = useState({
        title: '',
        url: '',
        content: '',
    })

    const [viewContent, setViewContent] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/infoarticle').then((response) => {
            setViewContent(response.data);
        })
    }, [viewContent])

    const submitReview = () => {
        Axios.post('http://localhost:8000/addinfoarticle', {
            title: infoContent.title,
            url: infoContent.url,
            alt: infoContent.alt,
            content: infoContent.content
        }).then(() => {
            alert('Enrégistré!');
        })
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
            <h1>Info Utiles</h1>
            <div>
                {viewContent.map(element =>
                    <div>
                        <h2>{element.title}</h2>
                        <img src="`{element.url}`" alt="`{element.alt}`" />
                        <div>
                            {ReactHtmlParser(element.content)}
                        </div>
                    </div>
                )}
            </div>
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
    );
}

