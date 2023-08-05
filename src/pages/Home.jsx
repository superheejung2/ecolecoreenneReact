import React from 'react'
import HomeImg from '../components/HomeImg/HomeImg'
import HomeEcole from '../components/HomeEcole/HomeEcole'
import ListNewsletter from '../components/Newsletter/ListNewsletter'
import CoursesInHome from '../components/Courses/CoursesInHome/CoursesInHome'
import GaleriePhoto from '../components/GaleriePhoto/GaleriePhoto'
import AddNewsletter from '../components/Newsletter/AddNewsletter'

export default function Home() {
    return (
        <div>
            <HomeImg />
            <HomeEcole />
            <CoursesInHome />
            <GaleriePhoto />
            {/* <ListNewsletter /> */}
            <AddNewsletter />
        </div>
    )
}
