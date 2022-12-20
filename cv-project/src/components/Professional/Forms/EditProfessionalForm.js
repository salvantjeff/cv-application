import ProfessionalFormItem from "./FormItem/ProfessionalFormItem";
import ProfessionalTextAreaItem from "./FormItem/ProfessionalTextAreaItem";

function EditProfessionalForm ({ professionals, onChange, index, onSubmit }) {
    const currProf = professionals[index];
    console.log(professionals);
    const maxLength = 100;
    return (
        <form 
            onSubmit={onSubmit} 
            className="intro_form"
        >
            <ProfessionalFormItem 
                labelText="position"
                id="work-position"
                inputName="position"
                type="text"
                inputValue={currProf.position}
                onChange={onChange}
            />
            <ProfessionalFormItem 
                labelText="company"
                id="work-company"
                inputName="company"
                type="text"
                inputValue={currProf.company}
                onChange={onChange}
            />
            <ProfessionalFormItem 
                labelText="Start date"
                id="work-start-date"
                inputName="startDate"
                type="month"
                inputValue={currProf.startDate}
                onChange={onChange}
            />
            <ProfessionalFormItem 
                labelText="End date"
                id="work-end-date"
                inputName="endDate"
                type="month"
                inputValue={currProf.endDate}
                onChange={onChange}
            />
            <ProfessionalFormItem 
                labelText="location"
                id="work-location"
                inputName="location"
                type="text"
                inputValue={currProf.location}
                onChange={onChange}
            />
            <ProfessionalTextAreaItem 
                labelText="summary"
                id="professional-summary"
                inputName="summary"
                type="textarea"
                maxLength={maxLength}
                inputValue={currProf.summary}
                onChange={onChange}
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditProfessionalForm;