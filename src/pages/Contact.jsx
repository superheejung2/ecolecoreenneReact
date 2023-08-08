import React from 'react';
import ContactEcole from '../components/ContactEcole/ContactEcole'
import Formulaire from '../components/Formulaire/Formulaire'


export default function Contact() {
    return (
        <div>
            {/* information of school's contact */}
            <ContactEcole />

            {/* editing contact form by user  */}
            <Formulaire />
        </div>
    )
}

