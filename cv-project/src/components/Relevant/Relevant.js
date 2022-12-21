import './Relevant.css';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RelevantModal from './RelevantModal/RelevantModal';
import AddRelevantModal from './RelevantModal/AddRelevantModal';

function Relevant () {
    const initRelevantExps = [
        {
            project: 'Senior Design Capstone Project',
            startDate: '2021-05',
            endDate: '2021-08',
            summary: 'Goal was to train a neural network with handwritten digits image from EMNIST database',
            id: uuidv4(),
        },
        {
            project: 'Beach Rake',
            startDate: '2019-06',
            endDate: '2019-08',
            summary:'Design mechanical beach rake for beach preservation',
            id: uuidv4(),
        }
    ];

    const [index, setIndex] = useState(0);
    const [relevantExps, setRelevantExps] = useState(initRelevantExps);
    const [relevantExpsInfo, setRelevantExpsInfo] = useState(initRelevantExps);
    const [addNewRelevantExp, setAddNewRelevantExp] = useState({
        project: 'hi',
        startDate: '',
        endDate: '',
        summary:'hi',
        id: uuidv4(),
    });
    const [modal, setModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    
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

    function handleEditClicked(e) {
        const newIndex = parseInt(e.target.dataset.index);
        console.log(newIndex);
        setIndex(newIndex);
        toggleModal();
    };

    function handleAddNewRelevant() {
        toggleAddModal();
    };

    function handleOnChange(e) {
        const newRelevantExps = relevantExps.map((currExp, i) => {
            if (i === index) {
                return {
                    ...currExp,
                    [e.target.name]: [e.target.value]
                }
            } else {
                return currExp;
            }
        });
        setRelevantExps(newRelevantExps);
    };

    function handleOnChangeForAddNewRelevantExp(e) {
        const newRelevantExps = {
            ...addNewRelevantExp,
            [e.target.name]: [e.target.value]
        };

        setAddNewRelevantExp(newRelevantExps);
    };

    function handleSubmitForm(e) {
        e.preventDefault();
        console.log('form has been submitted!');
        const newRelevantExpsInfo = [...relevantExps];
        setRelevantExpsInfo(newRelevantExpsInfo);
        console.log('UPDATE COMPLETE');
        toggleModal();
    };

    return (
        <div className="relevant">
            <div className="heading-block rel">
                <h4 className="relevant-title rel">Relevant Experience</h4>
                <div className="add-new__button rel">
                    <div>
                        <img className="add-new__button-icon" src={addSymbol} alt="plus icon"/>
                    </div>
                    <p 
                        className="add-new__button-text rel"
                        onClick={handleAddNewRelevant}
                    >Add new relevant</p>
                </div>
            </div>
            <div className="all-projects rel">
                {relevantExpsInfo.map((experience, index) => {
                    return (
                        <div key={experience.id} className="project-card rel">
                            <div className="section-card rel">
                                <p className="project-name">{experience.project}</p>
                                <div className="edit-section-box rel">
                                    <img 
                                        className="edit-section rel" 
                                        src={editPencil} 
                                        alt="edit section"
                                        data-index={index}
                                        onClick={handleEditClicked}
                                    />
                                </div>
                            </div>                    
                            <p className="project-duration">{experience.startDate} - {experience.endDate}</p>
                            <p className="project-summary">
                                {experience.summary}
                            </p>
                        </div>
                    )
                })}
            </div>
            <RelevantModal 
                modal={modal}
                toggleModal={toggleModal}
                onChange={handleOnChange}
                relevantExps={relevantExps}
                index={index}
                onSubmit={handleSubmitForm}
            />
            <AddRelevantModal 
                modal={addModal}
                toggleModal={toggleAddModal}
                addNewRelevantExp={addNewRelevantExp}
                onChange={handleOnChangeForAddNewRelevantExp}
            />
        </div>
    );
};

export default Relevant;