import LeadershipFormItem from "./FormItem/LeadershipFormItem";
import LeadershipTextAreaItem from "./FormItem/LeadershipTextAreaItem";

function AddLeadershipForm ({ addNewLeadership, onChange, index, onSubmit }) {
    // const currExp = addNewLeadership;
    // console.log(leaderships);
    const maxLength = 100;
    return (
        <form 
            // onSubmit={onSubmit} 
            className="intro_form"
        >
            <LeadershipFormItem 
                labelText="Organization"
                id="organization"
                inputName="organization"
                type="text"
                // inputValue={currExp.organization}
                // onChange={onChange}
            />
            <LeadershipFormItem 
                labelText="Title Role"
                id="title-role"
                inputName="titleRole"
                type="text"
                // inputValue={currExp.titleRole}
                // onChange={onChange}
            />
            <LeadershipFormItem 
                labelText="Start date"
                id="leadership-start-date"
                inputName="startDate"
                type="month"
                // inputValue={currExp.startDate}
                // onChange={onChange}
            />
            <LeadershipFormItem 
                labelText="End date"
                id="leadership-end-date"
                inputName="endDate"
                type="month"
                // inputValue={currExp.endDate}
                // onChange={onChange}
            />
            <LeadershipTextAreaItem 
                labelText="Summary"
                id="leadership-summary"
                inputName="summary"
                type="textarea"
                maxLength={maxLength}
                // inputValue={currExp.summary}
                // onChange={onChange}
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default AddLeadershipForm;