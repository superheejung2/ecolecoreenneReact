import React from 'react'
import HomeImg from '../components/HomeImg'
import HomeEcole from '../components/HomeEcole'
import Button from '../components/ui/Button'



export default function Home() {
    return (
        <div>
            <HomeImg />
            <HomeEcole />
            <Button name='Annuler' />
        </div>
    )
}
