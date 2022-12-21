import './Skills.css';
import sphere from '../../img/sphere.png';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';
import React, { useState, useEffect } from 'react';
import SkillsModal from './SkillsModal/SkillsModal';
import { v4 as uuidv4 } from 'uuid';
import AddSkillsModal from './SkillsModal/AddSkillsModal';

function Skills () {
    const initSkills = [
        {id: uuidv4(), skill: 'AI'},
        {id: uuidv4(), skill: 'React'},
        {id: uuidv4(), skill: 'Node'},
        {id: uuidv4(), skill: 'Java'},
        {id: uuidv4(), skill: 'TypeScript'}
    ];

    const [skills, setSkills] = useState(initSkills);
    const [skillsInfo, setSkillsInfo] = useState(initSkills);
    const [addNewSkills, setAddNewSkills] = useState({
        id: uuidv4(), 
        skill: 'super speed'
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

    function handleAddNewSkills() {
        toggleAddModal();
    };

    function handleOnChange(e) {
        console.log(e.target.name);
        const res = (e.target.value).split(',');
        console.log(res);
        if (res.length === skills.length) {
            const newSkills = skills.map((skill, i) => {
                return {
                    ...skill,
                    skill: res[i]
                }
            });
            setSkills(newSkills);
        }
        console.log('you can\'t add a skill, only edit what is there');
    };

    function handleOnChangeForAddNewSkills(e) {
        const newSkills = {
            ...addNewSkills,
            [e.target.name]: [e.target.value]
        };

        setAddNewSkills(newSkills);
    };

    function handleSubmitForm(e) {
        e.preventDefault();
        console.log('form has been submitted!');
        const newSkills = [...skills];
        setSkillsInfo(newSkills);
        console.log('UPDATE COMPLETE');
        toggleModal();
    };

    return (
        <div className="skills">
            <div>
                <div className="section-heading">
                    <h4 className='skills-title'>Technical Skills</h4>
                    <div className="skills-edit-section">
                        <img 
                            className="edit-section" 
                            src={editPencil} 
                            alt="edit section"
                            onClick={toggleModal}
                        />
                    </div>
                </div>
                <div className="add-new__button">
                    <div>
                        <img className="add-new__button-icon" src={addSymbol} alt="plus icon"/>
                    </div>
                    <p 
                        className="add-new__button-text"
                        onClick={handleAddNewSkills}
                    >Add new technical skill</p>
                </div>
            </div>

            <ul className='all-skills'>
                {skillsInfo.map((skill, index) => {
                    return (
                        <li key={skill.id} className='skill-item'>
                            <div>
                            <img className="sphere-icon" src={sphere} alt="dot icon"/>
                            </div>
                            <div>{skill.skill}</div>
                        </li>
                    )
                })}
            </ul>
            <SkillsModal 
                modal={modal}
                toggleModal={toggleModal}
                onChange={handleOnChange}
                skills={skills}
                onSubmit={handleSubmitForm}
            />
            <AddSkillsModal 
                modal={addModal}
                toggleModal={toggleAddModal}
                addNewSkills={addNewSkills}
                onChange={handleOnChangeForAddNewSkills}
            />
        </div>
    );
};

export default Skills;