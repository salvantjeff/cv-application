import SkillsFormItem from "./FormItems/SkillsFormItem";

function AddSkillsForm ({ addNewSkills, onChange, onSubmit }) {
    let allSkills = `${addNewSkills.skill}`;
    console.log(allSkills);
    const maxLength = 300;
    return (
        <form 
            // onSubmit={onSubmit} 
            className="intro_form"
        >
            <SkillsFormItem 
                labelText="skills"
                id="skills"
                inputName="skill"
                type="text"
                maxLength={maxLength}
                inputValue={allSkills}
                onChange={onChange}
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default AddSkillsForm;