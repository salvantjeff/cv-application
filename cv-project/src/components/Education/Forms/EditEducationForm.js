import EducationFormItem from "./FormItem/EducationFormItem";

function EditEducationForm ({ education, onChange, index, onSubmit }) {
    const ed = education[index];
    console.log(education);
    return (
        <form onSubmit={onSubmit} className="intro_form">
            <EducationFormItem 
                labelText="University"
                id="university"
                inputName="university"
                type="text"
                inputValue={ed.university}
                onChange={onChange}
            />
            <EducationFormItem 
                labelText="Major"
                id="major"
                inputName="major"
                type="text"
                inputValue={ed.major}
                onChange={onChange}
            />
            <EducationFormItem 
                labelText="Start date"
                id="start-date"
                inputName="startDate"
                type="month"
                inputValue={ed.startDate}
                onChange={onChange}
            />
            <EducationFormItem 
                labelText="End date"
                id="end-date"
                inputName="endDate"
                type="month"
                inputValue={ed.endDate}
                onChange={onChange}
            />
            <EducationFormItem 
                labelText="GPA"
                id="gpa"
                inputName="gpa"
                type="number"
                inputValue={ed.gpa}
                onChange={onChange}
            />
            <EducationFormItem 
                labelText="University Image URL"
                id="imageURL"
                inputName="imageURL"
                type="text"
                inputValue={ed.imageURL}
                onChange={onChange}
            />
            <div className="edit-form__buttons">
                <button type="button" className="delete-button">Delete</button>
                <button type="submit" className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditEducationForm;