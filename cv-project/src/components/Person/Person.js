import React, { useEffect, useState } from 'react';
import './Person.css';
import profileImg from '../../img/profile-pic.jpeg';
import editPencil from '../../img/pencil.png';
import PersonModal from './PersonModal/PersonModal';

function Person () {
    const initPersonInfo = {
        firstName: 'Jeff',
        lastName: 'Salvant',
        headline: 'Software Engineering Student',
        imageURL: profileImg,
        summary: 'Currently, studying software engineering to begin my career in the tech industry. Looking to help companies that are positively impacting the world.',
    };

    const [personInfo, setPersonInfo] = useState(initPersonInfo);
    const [person, setPerson] = useState(initPersonInfo);
    
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

    function handleEditClicked() {
        toggleModal();
    };

    function handleOnChange(e) {
        console.log(e.target.name);
        const newPerson = {
            ...person,
            [e.target.name]: e.target.value
        };
        setPerson(newPerson);
    };

    function handleSubmitForm(e) {
        e.preventDefault();
        console.log('form has been submitted!');
        const newPerson = {...person};
        setPersonInfo(newPerson);
        console.log('UPDATE COMPLETE');
        toggleModal();
    };

    return (
        <div className='person'>
            <div className="section-heading">
                <h2 className="person-name">{personInfo.firstName} {personInfo.lastName}</h2>
                <div>
                    <img 
                        className="edit-section" 
                        src={editPencil} 
                        alt="edit section"
                        onClick={handleEditClicked}
                    />
                </div>
            </div>
            <div className="person-details">
                <div className='person-info'>
                    <p className="person-position">{personInfo.headline}</p>
                    <p className="person-summary">
                        {personInfo.summary}
                    </p>
                </div>
                <div className="person-image-box">
                    <img className="person-image" src={personInfo.imageURL} alt="profile"/>
                </div>
            </div>
            <PersonModal 
                modal={modal}
                toggleModal={toggleModal}
                person={person}
                onChange={handleOnChange}
                onSubmit={handleSubmitForm}
            />
        </div>
    );
};

export default Person;