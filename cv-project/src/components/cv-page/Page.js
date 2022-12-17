import Education from '../Education/Education';
import Person from '../Person/Person';
import './Page.css';

function Page () {
    return (
        <div className='page-container'>
            <Person />
            <Education />
        </div>
    );
};

export default Page;