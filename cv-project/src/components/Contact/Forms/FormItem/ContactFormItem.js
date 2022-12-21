function ContactFormItem ({ 
    labelText, 
    id, 
    inputName, 
    inputValue,
    type,
    onChange 
}) {
    return (
        <p className="form_item">
            <label htmlFor={id}>
                {labelText}:
            </label>
            <input 
                type={type}
                id={id}
                name={inputName}
                value={inputValue}
                onChange={onChange}
            />
        </p>
    );
};

export default ContactFormItem;