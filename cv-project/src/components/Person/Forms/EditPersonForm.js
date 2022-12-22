import PersonFormItem from "./FormItem/PersonFormItem";
import './EditPersonForm.css';
import TextAreaFormItem from "./FormItem/TextAreaFormItem";

function EditPersonForm ({ person, onChange, onSubmit }) {
    console.log(person);
    const maxLength = 100;
    return (
        <form onSubmit={onSubmit} className="intro_form">
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
                inputValue={person.lastName}
                onChange={onChange}
            />
            <PersonFormItem 
                labelText="Headline"
                id="person-headline"
                inputName="headline"
                inputValue={person.headline}
                onChange={onChange}
            />

            <TextAreaFormItem 
                labelText="Summary"
                id="person-summary"
                inputName="summary"
                inputValue={person.summary}
                onChange={onChange}
                maxLength={maxLength}
            />
            <PersonFormItem 
                labelText="Profile Image URL"
                id="imageURL"
                inputName="imageURL"
                // inputValue={person.imageURL}
                // onChange={onChange}
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditPersonForm;