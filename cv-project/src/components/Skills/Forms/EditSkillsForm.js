import SkillsFormItem from "./FormItems/SkillsFormItem";

function EditSkillsForm ({ skills, onChange, index, onSubmit }) {
    // const ed = education[index];
    // console.log(education);
    const maxLength = 300;
    return (
        <form 
            // onSubmit={onSubmit} 
            className="intro_form"
        >
            <SkillsFormItem 
                labelText="skills"
                id="skills"
                inputName="skills"
                type="text"
                maxLength={maxLength}
                // inputValue={ed.university}
                // onChange={onChange}
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditSkillsForm;