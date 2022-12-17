import Education from '../Education/Education';
import Person from '../Person/Person';
import Skills from '../Skills/Skills';
import './Page.css';

function Page () {
    return (
        <div className='page-container'>
            <Person />
            <Education />
            <Skills />
        </div>
    );
};

export default Page;