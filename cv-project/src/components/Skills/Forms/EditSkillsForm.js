import SkillsFormItem from "./FormItems/SkillsFormItem";

function EditSkillsForm ({ skills, onChange, index, onSubmit }) {
    let allSkills = '';
    for (let i = 0; i < skills.length; i++) {
        const currSkill = skills[i];
        allSkills += `-${currSkill.skill} `;
    };
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
                inputName="skills"
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

export default EditSkillsForm;