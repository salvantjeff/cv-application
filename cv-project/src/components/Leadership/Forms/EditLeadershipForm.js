import LeadershipFormItem from "./FormItem/LeadershipFormItem";
import LeadershipTextAreaItem from "./FormItem/LeadershipTextAreaItem";
import { BsFillTrashFill } from 'react-icons/bs';

function EditLeadershipForm ({ 
    leaderships, 
    onChange, 
    index, 
    onSubmit,
    onClick 
}) {
    const currExp = leaderships[index];
    console.log(leaderships);
    const maxLength = 100;
    return (
        <form 
            onSubmit={onSubmit} 
            className="intro_form"
        >
            <LeadershipFormItem 
                labelText="Organization"
                id="organization"
                inputName="organization"
                type="text"
                inputValue={currExp.organization}
                onChange={onChange}
            />
            <LeadershipFormItem 
                labelText="Title Role"
                id="title-role"
                inputName="titleRole"
                type="text"
                inputValue={currExp.titleRole}
                onChange={onChange}
            />
            <LeadershipFormItem 
                labelText="Start date"
                id="leadership-start-date"
                inputName="startDate"
                type="month"
                inputValue={currExp.startDate}
                onChange={onChange}
            />
            <LeadershipFormItem 
                labelText="End date"
                id="leadership-end-date"
                inputName="endDate"
                type="month"
                inputValue={currExp.endDate}
                onChange={onChange}
            />
            <LeadershipTextAreaItem 
                labelText="Summary"
                id="leadership-summary"
                inputName="summary"
                type="textarea"
                maxLength={maxLength}
                inputValue={currExp.summary}
                onChange={onChange}
            />
            <LeadershipFormItem 
                labelText="University Image URL"
                id="imageURL"
                inputName="imageURL"
                type="text"
                inputValue={currExp.imageURL}
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

export default EditLeadershipForm;