import ProfessionalFormItem from "./FormItem/ProfessionalFormItem";
import ProfessionalTextAreaItem from "./FormItem/ProfessionalTextAreaItem";

function EditProfessionalForm ({ professional, onChange, index, onSubmit }) {
    // const profExp = professional[index];
    // console.log(professional);
    const maxLength = 100;
    return (
        <form 
            // onSubmit={onSubmit} 
            className="intro_form"
        >
            <ProfessionalFormItem 
                labelText="position"
                id="work-position"
                inputName="position"
                type="text"
                // inputValue={ed.university}
                // onChange={onChange}
            />
            <ProfessionalFormItem 
                labelText="company"
                id="work-company"
                inputName="company"
                type="text"
                // inputValue={ed.major}
                // onChange={onChange}
            />
            <ProfessionalFormItem 
                labelText="Start date"
                id="work-start-date"
                inputName="startDate"
                type="month"
                // inputValue={ed.startDate}
                // onChange={onChange}
            />
            <ProfessionalFormItem 
                labelText="End date"
                id="work-end-date"
                inputName="endDate"
                type="month"
                // inputValue={ed.endDate}
                // onChange={onChange}
            />
            <ProfessionalFormItem 
                labelText="location"
                id="work-location"
                inputName="location"
                type="text"
                // inputValue={ed.gpa}
                // onChange={onChange}
            />
            <ProfessionalTextAreaItem 
                labelText="summary"
                id="professional-summary"
                inputName="summary"
                type="textarea"
                maxLength={maxLength}
                // inputValue={ed.gpa}
                // onChange={onChange}
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditProfessionalForm;