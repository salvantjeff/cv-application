function ContactFormItem ({ 
    labelText, 
    id, 
    inputName, 
    inputValue,
    type,
    onChange,
    index 
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
                data-index={index}
            />
        </p>
    );
};

export default ContactFormItem;