import './Skills.css';
import sphere from '../../img/sphere.png';
import editPencil from '../../img/pencil.png';
import addSymbol from '../../img/add-1.png';

function Skills () {
    return (
        <div className="skills">
            <div>
                <div className="section-heading">
                    <h4 className='skills-title'>Technical Skills</h4>
                    <div className="skills-edit-section">
                        <img className="edit-section" src={editPencil} alt="edit section"/>
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
        </div>
    );
};

export default Skills;