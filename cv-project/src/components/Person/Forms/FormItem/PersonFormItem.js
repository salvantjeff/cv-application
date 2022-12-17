function PersonFormItem ({ 
    labelText, 
    id, 
    inputName, 
    inputValue,
    onChange 
}) {
    return (
        <p className="form_item">
            <label htmlFor={id}>
                {labelText}:
            </label>
            <input 
                type="text"
                id={id}
                name={inputName}
                value={inputValue}
                onChange={onChange}
            />
        </p>
    );
};

export default PersonFormItem;