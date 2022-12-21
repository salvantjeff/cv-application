import './Professional.css';
import ngLogo from '../../img/ng-logo.png';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';
import React, { useState, useEffect } from 'react';
import ProfessionalModal from './ProfessionalModal/ProfessionalModal';
import { v4 as uuidv4 } from 'uuid';
import AddProfessionalModal from './ProfessionalModal/AddProfessionalModal';

function Professional () {
    const initProfessionals = [
        {
            position: 'Structural Design Engineer Intern',
            company: 'Northrop Grumman',
            startDate: '2021-05',
            endDate: '2021-08',
            location: 'Palmdale, California',
            summary: `Contributed to the structural design team by reviewing and fixing drawing designs`,
            id: uuidv4(),
        },
        {
            position: 'Customer support Intern',
            company: 'Neofect',
            startDate: '2019-06',
            endDate: '2019-08',
            location: 'Richmond, Virginia',
            summary: 'Helped resolve angry/upset/confused/kind customers issues.',
            id: uuidv4(),
        }
    ];

    const [index, setIndex] = useState(0);
    const [professionals, setProfessionals] = useState(initProfessionals);
    const [professionalsInfo, setProfessionalsInfo] = useState(initProfessionals);
    const [addNewProfessional, setAddNewProfessional] = useState({
        position: '',
        company: '',
        startDate: '',
        endDate: '',
        location: '',
        summary: '',
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

    function handleAddNewProfessionalClicked() {
        toggleAddModal();
    };

    function handleOnChange(e) {
        const newProfessionals = professionals.map((currProf, i) => {
            if (i === index) {
                return {
                    ...currProf,
                    [e.target.name]: [e.target.value]
                }
            } else {
                return currProf;
            }
        });
        setProfessionals(newProfessionals);
    };

    function handleOnChangeForAddNewProfessional(e) {
        const newProfessional = {
            ...addNewProfessional,
            [e.target.name]: [e.target.value]
        };
        setAddNewProfessional(newProfessional);
    };

    function handleSubmitForm(e) {
        e.preventDefault();
        console.log('form has been submitted!');
        const newProfessionalsInfo = [...professionals];
        setProfessionalsInfo(newProfessionalsInfo);
        console.log('UPDATE COMPLETE');
        toggleModal();
    };

    function handleSubmitAddNewProfessionalForm(e) {
        e.preventDefault();
        console.log('form has been submitted!');

        const newProfessionalsInfo = [
            ...professionalsInfo,
            addNewProfessional
        ];

        setProfessionalsInfo(newProfessionalsInfo);
        setProfessionals(newProfessionalsInfo);
        setAddNewProfessional({
            position: '',
            company: '',
            startDate: '',
            endDate: '',
            location: '',
            summary: '',
            id: uuidv4(),
        });
        console.log('UPDATE COMPLETE');
        toggleAddModal();
    };

    return(
        <div className='professional'>
            <div className="heading-block">
                <h4 className='professional-title'>Professional Experience</h4>
                <div className="add-new__button">
                    <div>
                        <img className="add-new__button-icon" src={addSymbol} alt="plus icon"/>
                    </div>
                    <p 
                        className="add-new__button-text"
                        onClick={handleAddNewProfessionalClicked}
                    >Add new professional</p>
                </div>
            </div>
            <div className='all-professional-exp'>
                {professionalsInfo.map((professional, index) => {
                    return (
                        <div key={professional.id} className='professional-exp'>
                            <div className='professional-icon-box'>
                                <img className="professional-icon" src={ngLogo} alt="professional icon"/>
                            </div>
                            <div className='professional-exp__details'>
                                <div className="section-card">
                                    <p className='position'>{professional.position}</p>
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
                                <p className='company'>{professional.company}</p>
                                <p className='time-worked'>{professional.startDate} - {professional.endDate}</p>
                                <p className='work-location'>{professional.location}</p>
                                <p className='work-summary'>
                                    {professional.summary}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ProfessionalModal 
                toggleModal={toggleModal}
                modal={modal}
                professionals={professionals}
                index={index}
                onChange={handleOnChange}
                onSubmit={handleSubmitForm}
            />
            <AddProfessionalModal 
                modal={addModal}
                toggleModal={toggleAddModal}
                addNewProfessional={addNewProfessional}
                onChange={handleOnChangeForAddNewProfessional}
                onSubmit={handleSubmitAddNewProfessionalForm}
            />
        </div>
    );
};

export default Professional;