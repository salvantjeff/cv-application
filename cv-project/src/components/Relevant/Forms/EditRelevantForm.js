import RelevantFormItem from "./FormItem/RelevantFormItem";
import RelevantTextAreaItem from "./FormItem/RelevantTextAreaItem";
import { BsFillTrashFill } from 'react-icons/bs';

function EditRelevantForm ({ 
    relevantExps, 
    onChange, 
    index, 
    onSubmit,
    onClick
}) {
    const currExp = relevantExps[index];
    console.log(relevantExps);
    const maxLength = 200;
    return (
        <form 
            onSubmit={onSubmit} 
            className="intro_form"
        >
            <RelevantFormItem 
                labelText="Project"
                id="project-name"
                inputName="project"
                type="text"
                inputValue={currExp.project}
                onChange={onChange}
            />
    
            <RelevantFormItem 
                labelText="Start date"
                id="project-start-date"
                inputName="startDate"
                type="month"
                inputValue={currExp.startDate}
                onChange={onChange}
            />
            <RelevantFormItem 
                labelText="End date"
                id="project-end-date"
                inputName="endDate"
                type="month"
                inputValue={currExp.endDate}
                onChange={onChange}
            />
            <RelevantTextAreaItem 
                labelText="Summary"
                id="project-summary"
                inputName="summary"
                type="textarea"
                maxLength={maxLength}
                inputValue={currExp.summary}
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

export default EditRelevantForm;