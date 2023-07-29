import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import env from "react-dotenv";
import styles from './FormulaireEmailJs.module.css'

export default function FormulaireEmailjs() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, form.current, process.env.EMAILJS_PUBLIC_KEY).then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Nom</label>
            <input type="text" name="user_name" />
            <label>Prénom</label>
            <input type="text" name="user_firstname" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Tél</label>
            <input type="tel" name="tel" />
            <label>Votre Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};
