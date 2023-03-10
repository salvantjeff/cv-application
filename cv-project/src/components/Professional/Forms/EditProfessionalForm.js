import ProfessionalFormItem from "./FormItem/ProfessionalFormItem";
import ProfessionalTextAreaItem from "./FormItem/ProfessionalTextAreaItem";
import { BsFillTrashFill } from 'react-icons/bs';

function EditProfessionalForm ({ 
    professionals, 
    onChange, 
    index, 
    onSubmit, 
    onClick 
}) {
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
            <ProfessionalFormItem 
                labelText="University Image URL"
                id="imageURL"
                inputName="imageURL"
                type="text"
                inputValue={currProf.imageURL}
                onChange={onChange}
            />
            <div className="edit-form__buttons">
                <button 
                    type="button" 
                    className="delete-button"
                    onClick={onClick}
                ><BsFillTrashFill /> <p>Delete</p></button>
                <button type="submit" className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditProfessionalForm;