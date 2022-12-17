import React, { useState } from 'react';
import './Person.css';
import profileImg from '../../img/messi.jpeg';
import editPencil from '../../img/pencil.png';
import PersonModal from './PersonModal/PersonModal';

function Person () {
    const [person, setPerson] = useState({
        firstName: 'Jeff',
        lastName: 'Salvant',
        position: 'Student',
        img: profileImg,
        summary: `Virginia Commonwealth university graduate. Currently, studying software 
            engineering to contribute in the tech industry.
            ldkjflakfjasdlfkjasdlfkjsdlfkasdjflksdjflasdkjfldkfjaslfkjdlfkjasdflkj`,
    });
    const [modal, setModal] = useState(false);

    function toggleModal() {
        setModal(!modal);
    };
    
    return (
        <div className='person'>
            <div className="section-heading">
                <h1 className="person-name">{person.firstName} {person.lastName}</h1>
                <div>
                    <img className="edit-section" src={editPencil} alt="edit section"/>
                </div>
            </div>
            <div className="person-details">
                <div className='person-info'>
                    <p className="person-position">{person.position}</p>
                    <p className="person-summary">
                        {person.summary}
                    </p>
                </div>
                <div className="person-image-box">
                    <img className="person-image" src={person.img} alt="profile pic"/>
                </div>
            </div>
            <PersonModal 
                modal={modal}
            />
        </div>
    );
};

export default Person;