import EducationFormItem from "./FormItem/EducationFormItem";

function AddEducationForm ({ addNewEducation, onChange, index, onSubmit }) {
    const ed = addNewEducation
    // console.log(education);
    return (
        <form 
            onSubmit={onSubmit} 
            className="intro_form"
        >
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
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default AddEducationForm;