import React from 'react'
import HomeImg from '../components/HomeImg/HomeImg'
import HomeEcole from '../components/HomeEcole/HomeEcole'
import CoursesInHome from '../components/Courses/CoursesInHome/CoursesInHome'
import GaleriePhoto from '../components/GaleriePhoto/GaleriePhoto'
import AddNewsletter from '../components/Newsletter/AddNewsletter'
import Temoins from '../components/Temoins/Temoins'



export default function Home() {
    return (
        <div>

            <HomeImg />
            <HomeEcole />
            <CoursesInHome />
            {/* Carousels of school's events  */}
            <GaleriePhoto />
            <Temoins />
            {/* form for subsciption to school's newsletter*/}
            <AddNewsletter />
        </div>
    )
}
