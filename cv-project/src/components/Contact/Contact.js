import './Contact.css';
import emailLogo from '../../img/mail.png';
import phoneLogo from '../../img/phones.png';
import linkedInLogo from '../../img/linkedin-logo.png';
import editPencil from '../../img/pencil.png';
import ContactModal from './ContactModal/ContactModal';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Contact () {
    const initAllContacts = [
        {
            logo: emailLogo,
            title: 'Email',
            content: 'salvantjt@vcu.edu',
            altText: 'email',
            isLink: false,
            id: uuidv4(),
        },
        {
            logo: phoneLogo,
            title: 'Phone',
            content: '(804) 245-6735',
            altText: 'phone',
            isLink: false,
            id: uuidv4(),
        },
        {
            logo: linkedInLogo,
            title: 'LinkedIn',
            isLink: true,
            content: 'https://www.linkedin.com/in/jeff-salvant/',
            altText: 'linkedIn',
            id: uuidv4(),
        },
    ];
       
    const [contacts, setContacts] = useState(initAllContacts);
    const [contactsInfo, setContactsInfo] = useState(initAllContacts);

    const [contactModal, setContactModal] = useState(false);
    
    useEffect(() => {
        if (contactModal) {
            document.body.classList.add('active-contact');
        } else {
            document.body.classList.remove('active-contact');
        }
    }, [contactModal]);
    
    function toggleModal() {
        setContactModal(!contactModal);
    };

    function handleEditClicked(e) {
        toggleModal();
    }

    function handleOnChange(e) {
        const target = parseInt(e.target.dataset.index);
        const newContacts = contacts.map((contact, i) => {
            if (i === target) {
                return {
                    ...contact,
                    content: [e.target.value]
                };
            };
            return contact;
        });
     
        setContacts(newContacts);
    };

    function handleSubmitForm(e) {
        e.preventDefault();
        console.log('form has been submitted!');
        const newContactsInfo = [...contacts];
        setContactsInfo(newContactsInfo);
        console.log('UPDATE COMPLETE');
        toggleModal();
    };

    const lastIndex = contactsInfo.length - 1;
    let borderStatus = '';

    return (
        <div className="contact">
            <div className="section-heading">
                <h4 className="contact-title">Contact</h4>
                <div className="contact-edit-section edit-pencil">
                    <img 
                        className="edit-section" 
                        src={editPencil} 
                        alt="edit section"
                        onClick={handleEditClicked}
                    />
                </div>
            </div>
            <div className="all-contacts">
                {contactsInfo.map((contact, index) => {
                    if (index === lastIndex) {
                        borderStatus = 'removeBorder';
                    };
                    if (contact.isLink) {
                        return (
                            <div className="contact-card" key={contact.id}>
                                <div className="contact-icon-box">
                                    <img 
                                        className="contact-icon" 
                                        src={contact.logo} 
                                        alt={`${contact.altText} icon`}
                                    />
                                </div>
                                <div className={`contact-card__details ${borderStatus}`}>
                                    <p className="contact-card__details-title">{contact.title}</p>
                                    <p className="contact-card__details-content">
                                    <a 
                                        className="contact-linkedin-link" 
                                        href={contact.content}
                                    >Click here to visit my {contact.title}</a>
                                    </p>
                                </div>
                            </div>
                        );
                    };
                    return (
                        <div className="contact-card" key={contact.id}>
                            <div className="contact-icon-box">
                                <img className="contact-icon" src={contact.logo} alt={`${contact.altText} icon`}/>
                            </div>
                            <div className="contact-card__details">
                                <p className="contact-card__details-title">{contact.title}</p>
                                <p className="contact-card__details-content">{contact.content}</p>
                            </div>
                        </div>
                    );
                })}
                <ContactModal 
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