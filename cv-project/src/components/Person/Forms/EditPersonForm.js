import PersonFormItem from "./FormItem/PersonFormItem";
import './EditPersonForm.css';

function EditPersonForm ({ person, onChange }) {
    console.log(person);
    return (
        <form className="intro_form">
            <PersonFormItem 
                labelText="First name"
                id="first-name"
                inputName="firstName"
                inputValue={person.firstName}
                onChange={onChange}
            />
            <PersonFormItem 
                labelText="Last name"
                id="last-name"
                inputName="lastName"
            />
            <PersonFormItem 
                labelText="Headline"
                id="person-headline"
                inputName="headline"
            />
            <PersonFormItem 
                labelText="Summary"
                id="person-summary"
                inputName="summary"
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditPersonForm;