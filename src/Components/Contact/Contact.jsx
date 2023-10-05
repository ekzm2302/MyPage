import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    /* EmailJs  */
    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l7ai3ak', 'template_p16e2il', form.current, 'vCwi8F9ZXgCPqiX_H').then(
            (result) => {
                console.log(result.text);
                setDone(true);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ background: '#abf1ff94' }}></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && '이메일이 전송되었습니다.'}</span>
                    <div className="blur c-blur1" style={{ background: 'var(--purple)' }}></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
