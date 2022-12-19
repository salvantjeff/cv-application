import EducationFormItem from "./FormItem/EducationFormItem";
import './EditEducationForm.css';

function EditEducationForm ({ education }) {
    console.log(education);
    return (
        <form className="intro_form">
            <EducationFormItem 
                labelText="University"
                id="university"
                inputName="university"
                type="text"
            />
            <EducationFormItem 
                labelText="Major"
                id="major"
                inputName="major"
                type="text"
            />
            <EducationFormItem 
                labelText="Start date"
                id="start-date"
                inputName="startDate"
                type="month"
            />
            <EducationFormItem 
                labelText="End date"
                id="end-date"
                inputName="endDate"
                type="month"
            />
            <EducationFormItem 
                labelText="GPA"
                id="gpa"
                inputName="gpa"
                type="number"
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditEducationForm;