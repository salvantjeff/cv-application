import './Person.css';
import profileImg from '../../img/messi.jpeg';
import editPencil from '../../img/pencil.png';

function Person () {
    return (
        <div className='person'>
            <div className="section-heading">
                <h1 className="person-name">Jeff Salvant</h1>
                <div>
                    <img className="edit-section" src={editPencil} alt="edit section"/>
                </div>
            </div>
            <div className="person-details">
                <div className='person-info'>
                    <p className="person-position">Student</p>
                    <p className="person-summary">
                        Virginia Commonwealth university graduate. Currently, studying software 
                        engineering to contribute in the tech industry.
                        ldkjflakfjasdlfkjasdlfkjsdlfkasdjflksdjflasdkjfldkfjaslfkjdlfkjasdflkj
                    </p>
                </div>
                <div className="person-image-box">
                    <img className="person-image" src={profileImg} alt="profile pic"/>
                </div>
            </div>
        </div>
    );
};

export default Person;