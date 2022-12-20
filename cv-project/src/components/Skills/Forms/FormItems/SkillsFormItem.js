function SkillsFormItem ({ 
    labelText, 
    id, 
    inputName, 
    inputValue,
    onChange,
    maxLength, 
}) {
    return (
        <p className="form_item">
            <label htmlFor={id}>
                {labelText}:
            </label>
            <textarea
                maxLength={maxLength}
                id={id}
                name={inputName}
                value={inputValue}
                onChange={onChange}
            ></textarea>
        </p>
    );
};

export default SkillsFormItem;