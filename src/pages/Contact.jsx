import React from 'react';
import ContactEcole from '../components/ContactEcole/ContactEcole';
// import FormulaireEmailjs from '../components/FormulaireEmailjs';
import Formulaire from '../components/Formulaire/Formulaire';
import FormulaireHook from '../components/Formulaire/FormulaireHook';


export default function Contact() {

    // const user = {
    //     name: "Heejung",
    //     email: "heejung@gmail.com",
    //     country: "usa",
    // }

    const handleSave = (values) => {
        console.log({ values });
    }

    return (
        <div>
            <ContactEcole />
            <Formulaire />
            {/* <FormulaireHook onSave={handleSave} {...{ user }} /> */}
        </div>
    )
}

