import React from 'react';
import BoardListContainer from '../components/BoardListContainer/BoardListContainer';
import AdminArticle from '../components/AdminArticle/AdminArticle';
import AdminImg from '../components/AdminImg/AdminImg';
import ListNewsletter from '../components/Newsletter/ListNewsletter';
import BoardListContainerWith from '../components/BoardListContainer/BoardListContainerWith';

export default function Admin() {
    return (
        <div>
            <AdminImg />
            {/* <AdminArticle /> //essaie à partir des donnés dnas la page, à supprimer après le final */}
            {/* <BoardListContainer /> //axios erreur 500*/}

            <BoardListContainerWith />
            {/* 위의 것 en train de faire */}
            <ListNewsletter />
        </div>
    )
}
