import React from 'react'
import HomeImg from '../components/HomeImg/HomeImg'
import HomeEcole from '../components/HomeEcole/HomeEcole'
import ListNewsletter from '../components/Newsletter/ListNewsletter'
import CoursesInHome from '../components/Courses/CoursesInHome/CoursesInHome'

export default function Home() {
    return (
        <div>
            <HomeImg />
            <HomeEcole />
            <CoursesInHome />
            {/* <ListNewsletter /> */}
        </div>
    )
}
