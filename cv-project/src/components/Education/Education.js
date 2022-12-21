import './Education.css';
import vcuLogo from '../../img/vcu-logo.jpeg';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EducationModal from './EducationModal/EducationModal';
import AddEducationModal from './EducationModal/AddEducationModal';

function Education () {
    let initEducation = [
        {
            university: 'Virginia Commonwealth University',
            major: 'Mechanical Engineering',
            startDate: '2018-08',
            endDate: '2022-05',
            gpa: 3.5,
            id: uuidv4(),
        },
        {
            university: 'NYU',
            major: 'Computer Science',
            startDate: '2022-08',
            endDate: '2024-05',
            gpa: 3.0,
            id: uuidv4(),
        }
    ];
    
    const [education, setEducation] = useState(initEducation);
    const [educationList, setEducationList] = useState(initEducation);
    const [addNewEducation, setAddNewEducation] = useState({
        university: '',
        major: '',
        startDate: '',
        endDate: '',
        gpa: 0,
        id: uuidv4(),
    });

    const [modal, setModal] = useState(false);
    const [addModal, setAddModal] = useState(false);

    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (modal || addModal) {
            document.body.classList.add('active-modal');
        } else {
            document.body.classList.remove('active-modal');
        }
    }, [modal, addModal]);
    
    function toggleModal() {
        setModal(!modal);
    };

    function toggleAddModal() {
        setAddModal(!addModal);
    };

    function handleAddNewEducation() {
        toggleAddModal();
    }

    function handleEditClicked(e) {
        const newIndex = parseInt(e.target.dataset.index);
        console.log(newIndex);
        setIndex(newIndex);
        toggleModal();
    };

    function handleOnChange(e) {
        const newEducation = education.map((currEd, i) => {
            if (i === index) {
                return {
                    ...currEd,
                    [e.target.name]: [e.target.value]
                };
            } else {
                return currEd;
            }
        });

        setEducation(newEducation);
    };

    function handleSubmitForm(e) {
        e.preventDefault();
        console.log('form has been submitted!');
        const newEducation = [...education];
        setEducationList(newEducation);
        console.log('UPDATE COMPLETE');
        toggleModal();
    };

    // useEffect(() => {
    //     setEducation([initEducation, initEducation2])
    // }, []);
    
    function handleOnChangeForAddNewEducation(e) {
        const newEducation = {
            ...addNewEducation,
            [e.target.name]: [e.target.value]
        };

        setAddNewEducation(newEducation);
    };

    function handleSubmitAddNewEducationForm(e) {
        e.preventDefault();
        console.log('form has been submitted!');
        const newEducationList = [
            ...educationList,
            addNewEducation
        ];
        setEducationList(newEducationList);
        setEducation(newEducationList)
        setAddNewEducation({
            university: '',
            major: '',
            startDate: '',
            endDate: '',
            gpa: 0,
            id: uuidv4(),
        });
        console.log('UPDATE COMPLETE');
        toggleAddModal();
    };

    return (
        <div className='education'>
            <div className="heading-block">
                <h4 className='education-title'>Education</h4>
                <div className="add-new__button">
                    <div>
                        <img className="add-new__button-icon" src={addSymbol} alt="plus icon"/>
                    </div>
                    <p 
                        className="add-new__button-text"
                        onClick={handleAddNewEducation}
                    >Add new education</p>
                </div>
            </div>
            <div className='education-all-items'>
                {educationList.map((currEd, index) => {
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
                                        onClick={handleEditClicked}
                                        data-index={index}
                                    />
                                </div>
                            </div>
                            <p className='major'>{currEd.major}</p>
                            <p className='duration'>{currEd.startDate} - {currEd.endDate}</p>
                            <p className='gpa'>GPA: {currEd.gpa}</p>
                        </div>
                    </div>)
                })}
            </div>
            <EducationModal 
                modal={modal}
                toggleModal={toggleModal}
                education={education}
                index={index}
                onChange={handleOnChange}
                onSubmit={handleSubmitForm}
            />
            <AddEducationModal 
                modal={addModal}
                toggleModal={toggleAddModal}
                addNewEducation={addNewEducation}
                onChange={handleOnChangeForAddNewEducation}
                onSubmit={handleSubmitAddNewEducationForm}
            />
        </div>
    );
};

export default Education;