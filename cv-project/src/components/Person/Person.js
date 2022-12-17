import React, { useState } from 'react';
import './Person.css';
import profileImg from '../../img/messi.jpeg';
import editPencil from '../../img/pencil.png';

function Person () {
    const [person, setPerson] = useState({
        name: 'Jeff Salvant',
        position: 'Student',
        img: profileImg,
        summary: `Virginia Commonwealth university graduate. Currently, studying software 
            engineering to contribute in the tech industry.
            ldkjflakfjasdlfkjasdlfkjsdlfkasdjflksdjflasdkjfldkfjaslfkjdlfkjasdflkj`,
    });

    return (
        <div className='person'>
            <div className="section-heading">
                <h1 className="person-name">{person.name}</h1>
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
        </div>
    );
};

export default Person;