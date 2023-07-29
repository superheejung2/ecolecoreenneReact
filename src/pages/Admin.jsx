import React from 'react';
import BoardListContainer from '../components/BoardListContainer/BoardListContainer';
import AdminArticle from '../components/AdminArticle/AdminArticle';
import AdminImg from '../components/AdminImg/AdminImg';
import ListNewsletter from '../components/Newsletter/ListNewsletter';


export default function Admin() {
    return (
        <div>
            <AdminImg />
            <AdminArticle />
            <BoardListContainer />
            <ListNewsletter />
        </div>
    )
}
