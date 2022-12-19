import './Education.css';
import vcuLogo from '../../img/vcu-logo.jpeg';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EducationModal from './EducationModal/EducationModal';

function Education () {
    let initEducation = {
        university: 'Virginia Commonwealth University',
        major: 'Mechanical Engineering',
        startYear: '2018',
        endYear: '2022',
        gpa: 3.5,
        id: uuidv4(),
    };
    const [education, setEducation] = useState(initEducation);
    const [educationList, setEducationList] = useState([initEducation])
    
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

    return (
        <div className='education'>
            <div className="heading-block">
                <h4 className='education-title'>Education</h4>
                <div className="add-new__button">
                    <div>
                        <img className="add-new__button-icon" src={addSymbol} alt="plus icon"/>
                    </div>
                    <p className="add-new__button-text">Add new education</p>
                </div>
            </div>
            <div className='education-all-items'>
                {educationList.map(currEd => {
                    return (
                    <div className='education-item' key={currEd.id}>
                        <div className="education-icon-box">
                            <img className="education-icon" src={vcuLogo} alt="education icon"/>
                        </div>
                        <div className='education-details'>
                            <div className="section-card">
                                <p className='university'>{currEd.university}</p>
                                <div className="edit-section-box">
                                    <img 
                                        className="edit-section" 
                                        src={editPencil} 
                                        alt="edit section"
                                        onClick={toggleModal}
                                    />
                                </div>
                            </div>
                            <p className='major'>{currEd.major}</p>
                            <p className='duration'>{currEd.startYear} - {currEd.endYear}</p>
                            <p className='gpa'>GPA: {currEd.gpa}</p>
                        </div>
                    </div>)
                })}
            </div>
            <EducationModal 
                modal={modal}
                toggleModal={toggleModal}
            />
        </div>
    );
};

export default Education;