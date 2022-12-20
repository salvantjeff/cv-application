import './Contact.css';
import emailLogo from '../../img/mail.png';
import phoneLogo from '../../img/phones.png';
import linkedInLogo from '../../img/linkedin-logo.png';
import editPencil from '../../img/pencil.png';
import ContactModal from './ContactModal/ContactModal';
import React, { useState, useEffect } from 'react';

function Contact () {
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
                        <p className="contact-card__details-content">salvantjt@vcu.edu</p>
                    </div>
                </div>
                <div className="contact-card">
                    <div className="contact-icon-box">
                        <img className="contact-icon" src={phoneLogo} alt="phone icon"/>
                    </div>
                    <div className="contact-card__details">
                        <p className="contact-card__details-title">Phone</p>
                        <p className="contact-card__details-content">804 245-6735</p>
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
                                href="https://www.linkedin.com/in/jeff-salvant/"
                            >Click here to visit my LinkedIn</a>
                        </p>
                    </div>
                </div>
                <ContactModal 
                    modal={modal}
                    toggleModal={toggleModal}
                />
            </div>
        </div>
    );
};

export default Contact;