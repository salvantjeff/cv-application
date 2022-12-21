import './Contact.css';
import emailLogo from '../../img/mail.png';
import phoneLogo from '../../img/phones.png';
import linkedInLogo from '../../img/linkedin-logo.png';
import editPencil from '../../img/pencil.png';
import ContactModal from './ContactModal/ContactModal';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Contact () {
    const initContacts = {
        email: 'thor@gmail.com',
        phoneNumber: '1234567890',
        linkedIn: 'https://www.linkedin.com/in/jeff-salvant/',
        id: uuidv4(),
    };
       
    const [contacts, setContacts] = useState(initContacts);
    const [contactsInfo, setContactsInfo] = useState(initContacts);

    const [modal, setModal] = useState(false);
    useEffect(() => {
        if (modal) {
            document.body.classList.add('active-modal');
        } else {
            document.body.classList.remove('active-modal');
        }
    }, [modal]);
    
    function toggleModal() {
        setModal(!modal);
    };

    function handleEditClicked(e) {
        toggleModal();
    }

    function handleOnChange(e) {
        const newContacts = {
            ...contacts,
            [e.target.name]: [e.target.value]
        };
        setContacts(newContacts);
    };

    function handleSubmitForm(e) {
        e.preventDefault();
        console.log('form has been submitted!');
        const newContactsInfo = {...contacts};
        setContactsInfo(newContactsInfo);
        console.log('UPDATE COMPLETE');
        toggleModal();
    };

    return (
        <div className="contact">
            <div className="section-heading">
                <h4 className="contact-title">Contact</h4>
                <div className="contact-edit-section">
                    <img 
                        className="edit-section" 
                        src={editPencil} 
                        alt="edit section"
                        onClick={handleEditClicked}
                    />
                </div>
            </div>
            <div className="all-contacts">
                <div className="contact-card">
                    <div className="contact-icon-box">
                        <img className="contact-icon" src={emailLogo} alt="email icon"/>
                    </div>
                    <div className="contact-card__details">
                        <p className="contact-card__details-title">Email</p>
                        <p className="contact-card__details-content">{contactsInfo.email}</p>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="contact-icon-box">
                        <img className="contact-icon" src={phoneLogo} alt="phone icon"/>
                    </div>
                    <div className="contact-card__details">
                        <p className="contact-card__details-title">Phone</p>
                        <p className="contact-card__details-content">{contactsInfo.phoneNumber}</p>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="contact-icon-box">
                        <img className="contact-icon" src={linkedInLogo} alt="linkedin icon"/>
                    </div>
                    <div className="contact-card__details">
                        <p className="contact-card__details-title">LinkedIn</p>
                        <p className="contact-card__details-content">
                            <a 
                                className="contact-linkedin-link" 
                                href={contactsInfo.linkedIn}
                            >Click here to visit my LinkedIn</a>
                        </p>
                    </div>
                </div>
                <ContactModal 
                    modal={modal}
                    toggleModal={toggleModal}
                    contacts={contacts}
                    onChange={handleOnChange}
                    onSubmit={handleSubmitForm}
                />
            </div>
        </div>
    );
};

export default Contact;