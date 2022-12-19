import EducationFormItem from "./FormItem/EducationFormItem";
import './EditEducationForm.css';

function EditEducationForm ({ education, onChange }) {
    console.log(education);
    return (
        <form className="intro_form">
            <EducationFormItem 
                labelText="University"
                id="university"
                inputName="university"
                type="text"
                inputValue={education.university}
                onChange={onChange}
            />
            <EducationFormItem 
                labelText="Major"
                id="major"
                inputName="major"
                type="text"
                inputValue={education.major}
                onChange={onChange}
            />
            <EducationFormItem 
                labelText="Start date"
                id="start-date"
                inputName="startDate"
                type="month"
                inputValue={education.startDate}
                onChange={onChange}
            />
            <EducationFormItem 
                labelText="End date"
                id="end-date"
                inputName="endDate"
                type="month"
                inputValue={education.endDate}
                onChange={onChange}
            />
            <EducationFormItem 
                labelText="GPA"
                id="gpa"
                inputName="gpa"
                type="number"
                inputValue={education.gpa}
                onChange={onChange}
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditEducationForm;