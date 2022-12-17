import Education from '../Education/Education';
import Person from '../Person/Person';
import Professional from '../Professional/Professional';
import Skills from '../Skills/Skills';
import './Page.css';

function Page () {
    return (
        <div className='page-container'>
            <Person />
            <Education />
            <Skills />
            <Professional />
        </div>
    );
};

export default Page;