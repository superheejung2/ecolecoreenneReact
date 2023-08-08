import React from 'react'
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTelephoneFill } from 'react-icons/bs';
import { LuMail } from "react-icons/lu";
import styles from './ContactEcole.module.css'

//information of school's contact
export default function ContactEcole() {
    return (
        <div className={styles.box}>
            <div className={styles.contact}>
                <h1>Nos Contact</h1>
                <div>
                    <div className={styles.box}>
                        <img src="../img/lampions.jpg" alt="lampions" />
                        <div>
                            <p>
                                <BsTelephoneFill className={styles.black} />
                                <span className={styles.espace}>06 24 61 65 18</span>
                            </p>
                            <p>
                                <LuMail className={styles.black} />
                                <span className={styles.espace}> ecolecoreenne44@gmail.com</span>
                            </p>
                            <p>
                                <Link to="/">
                                    <BsFacebook className={styles.black} />
                                </Link>
                                <span className={styles.espace}> www.facebook.com/ecolecoreenne44</span>
                            </p>
                            <p>
                                <Link to="/">
                                    <BsInstagram className={styles.black} />
                                </Link>
                                <span className={styles.espace}>www.instagram.com/</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}