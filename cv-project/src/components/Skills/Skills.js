import './Skills.css';
import sphere from '../../img/sphere.png';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';
import React, { useState, useEffect } from 'react';
import SkillsModal from './SkillsModal/SkillsModal';

function Skills () {

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
                    <p className="add-new__button-text">Add new leadership exp</p>
                </div>
            </div>

            <ul className='all-skills'>
                <li className='skill-item'>
                    <div>
                    <img className="sphere-icon" src={sphere} alt="dot icon"/>
                    </div>
                    <div>AI</div>
                </li>
                <li className='skill-item'>
                    <div>
                    <img className="sphere-icon" src={sphere} alt="dot icon"/>
                    </div>
                    <div>React</div>
                </li>
                <li className='skill-item'>
                    <div>
                    <img className="sphere-icon" src={sphere} alt="dot icon"/>
                    </div>
                    <div>Node</div>
                </li>
                <li className='skill-item'>
                    <div>
                    <img className="sphere-icon" src={sphere} alt="dot icon"/>
                    </div>
                    <div>Java</div>
                </li>
                <li className='skill-item'>
                    <div>
                    <img className="sphere-icon" src={sphere} alt="dot icon"/>
                    </div>
                    <div>Typescript</div>
                </li>
            </ul>
            <SkillsModal 
                modal={modal}
                toggleModal={toggleModal}
            />
        </div>
    );
};

export default Skills;