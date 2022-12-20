import LeadershipFormItem from "./FormItem/LeadershipFormItem";
import LeadershipTextAreaItem from "./FormItem/LeadershipTextAreaItem";

function EditLeadershipForm ({ leaderships, onChange, index, onSubmit }) {
    // const currProf = professionals[index];
    // console.log(professionals);
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
                // inputValue={currProf.position}
                // onChange={onChange}
            />
            <LeadershipFormItem 
                labelText="Title Role"
                id="title-role"
                inputName="titleRole"
                type="text"
                // inputValue={currProf.company}
                // onChange={onChange}
            />
            <LeadershipFormItem 
                labelText="Start date"
                id="leadership-start-date"
                inputName="startDate"
                type="month"
                // inputValue={currProf.startDate}
                // onChange={onChange}
            />
            <LeadershipFormItem 
                labelText="End date"
                id="leadership-end-date"
                inputName="endDate"
                type="month"
                // inputValue={currProf.endDate}
                // onChange={onChange}
            />
            <LeadershipTextAreaItem 
                labelText="Summary"
                id="leadership-summary"
                inputName="summary"
                type="textarea"
                maxLength={maxLength}
                // inputValue={currProf.summary}
                // onChange={onChange}
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditLeadershipForm;