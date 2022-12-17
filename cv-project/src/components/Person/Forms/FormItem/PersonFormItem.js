function PersonFormItem ({ labelText, id, inputName }) {
    return (
        <p className="form_item">
            <label htmlFor={id}>
                {labelText}:
            </label>
            <input 
                type="text"
                id={id}
                name={inputName}
            />
        </p>
    );
};

export default PersonFormItem;