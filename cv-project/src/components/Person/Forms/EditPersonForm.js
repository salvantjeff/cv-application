import PersonFormItem from "./FormItem/PersonFormItem";
import './EditPersonForm.css';

function EditPersonForm (props) {
    return (
        <form className="intro_form">
            <PersonFormItem 
                labelText="First name"
                id="first-name"
                inputName="firstName"
            />
            <PersonFormItem 
                labelText="Last name"
                id="last-name"
                inputName="lastName"
            />
            <PersonFormItem 
                labelText="Headline"
                id="person-headline"
                inputName="personHeadline"
            />
            <PersonFormItem 
                labelText="Summary"
                id="person-summary"
                inputName="personSummary"
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditPersonForm;