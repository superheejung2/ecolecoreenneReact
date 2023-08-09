import React from 'react';
import AdminImg from '../components/AdminImg/AdminImg';
import ListNewsletter from '../components/Newsletter/ListNewsletter';
import BoardListContainerWith from '../components/BoardListContainer/BoardListContainerWith';
import InfoUtileArticleList from '../components/InfoUtileArticleList/InfoUtileArticleList';
import LogOut from '../components/LogOut/LogOut'

export default function Admin() {
    return (
        <div>
            <LogOut />
            <AdminImg />
            {/* table of form of contact */}
            <BoardListContainerWith />
            {/* table of subscription of contact */}
            <ListNewsletter />
            {/* table of form of Info Utile */}
            <InfoUtileArticleList />
        </div>
    )
}
