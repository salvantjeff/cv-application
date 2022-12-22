import './Leadership.css';
import nsbeLogo from '../../img/nsbe-logo.png';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';
import React, { useState, useEffect } from 'react';
import LeadershipModal from './LeadershipModal/LeadershipModal';
import { v4 as uuidv4 } from 'uuid';
import AddLeadershipModal from './LeadershipModal/AddLeadershipModal';

function Leadership () {
    const initLeaderships = [
        {
            organization: 'NSBE',
            titleRole: 'Freshman rep',
            startDate: '2018-08',
            endDate: '2019-05',
            summary: 'Presented upcoming events during weekly meetings',
            imageURL: nsbeLogo,
            id: uuidv4(),
        },
        {
            organization: 'VCU Career Fair',
            titleRole: 'Volunteer',
            startDate: '2021-05',
            endDate: '2021-08',
            summary: 'Help organize tables and props for career fair',
            imageURL: '',
            id: uuidv4(),
        }
    ];

    const [index, setIndex] = useState(0);
    const [leaderships, setLeaderships] = useState(initLeaderships);
    const [leadershipsInfo, setLeadershipsInfo] = useState(initLeaderships);
    const [addNewLeadership, setAddNewLeadership] = useState(        {
        organization: '',
        titleRole: '',
        startDate: '',
        endDate: '',
        summary: '',
        imageURL: '',
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

    function handleAddNewLeadership() {
        toggleAddModal();
    };

    function handleOnChange(e) {
        const newLeaderships = leaderships.map((currExp, i) => {
            if (i === index) {
                return {
                    ...currExp,
                    [e.target.name]: [e.target.value]
                }
            } else {
                return currExp;
            }
        });
        setLeaderships(newLeaderships);
    };

    function handleOnChangeForAddNewLeadership(e) {
        const newLeadership = {
            ...addNewLeadership,
            [e.target.name]: [e.target.value]
        };

        setAddNewLeadership(newLeadership);
    };

    function handleSubmitForm(e) {
        e.preventDefault();
        console.log('form has been submitted!');
        const newLeadershipsInfo = [...leaderships];
        setLeadershipsInfo(newLeadershipsInfo);
        console.log('UPDATE COMPLETE');
        toggleModal();
    };

    function handleSubmitAddNewLeadershipForm(e) {
        e.preventDefault();
        console.log('form has been submitted!');
        const newLeadershipsInfo = [
            ...leadershipsInfo,
            addNewLeadership
        ];
        setLeadershipsInfo(newLeadershipsInfo);
        setLeaderships(newLeadershipsInfo)
        setAddNewLeadership({
            organization: '',
            titleRole: '',
            startDate: '',
            endDate: '',
            summary: '',
            imageURL: '',
            id: uuidv4(),
        });
        console.log('UPDATE COMPLETE');
        toggleAddModal();
    };

    return (
        <div className="leadership">
            <div className="heading-block">
                <h4 className="leadership-title">Leadership/Organization Experience</h4>
                <div className="add-new__button">
                    <div>
                        <img className="add-new__button-icon" src={addSymbol} alt="plus icon"/>
                    </div>
                    <p 
                        className="add-new__button-text"
                        onClick={handleAddNewLeadership}
                    >Add new leadership</p>
                </div>
            </div>
            <div className="all-leaderships">
                {leadershipsInfo.map((currExp, index) => {
                    return (
                        <div key={currExp.id} className="leadership-card">
                            <div className='leadership-icon-box'>
                                <img className="leadership-icon" src={currExp.imageURL} alt="org. icon"/>
                            </div>
                            <div className="leadership-details">
                                <div className="section-card">
                                    <p className="leadership-organization">{currExp.organization}</p>
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
                                <p className="leadership-position">{currExp.titleRole}</p>
                                <p className="leadership-duration">{currExp.startDate} - {currExp.endDate}</p>
                                <p className="leadership-summary">{currExp.summary}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <LeadershipModal 
                modal={modal}
                toggleModal={toggleModal}
                onChange={handleOnChange}
                leaderships={leaderships}
                index={index}
                onSubmit={handleSubmitForm}
            />
            <AddLeadershipModal 
                modal={addModal}
                toggleModal={toggleAddModal}
                addNewLeadership={addNewLeadership}
                onChange={handleOnChangeForAddNewLeadership}
                onSubmit={handleSubmitAddNewLeadershipForm}
            />
        </div>
    );
};

export default Leadership;