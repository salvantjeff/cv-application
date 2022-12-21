import ContactFormItem from "./FormItem/ContactFormItem";
function EditContactForm ({ contacts, onChange, onSubmit }) {
    console.log(contacts);
    return (
        <form 
            onSubmit={onSubmit} 
            className="intro_form"
        >
            <ContactFormItem 
                labelText="Email"
                id="email-contact"
                inputName="email"
                type="email"
                inputValue={contacts.email}
                onChange={onChange}
            />
            <ContactFormItem 
                labelText="Phone number"
                id="phone-number-contact"
                inputName="phoneNumber"
                type="text"
                inputValue={contacts.phoneNumber}
                onChange={onChange}
            />
            <ContactFormItem 
                labelText="LinkedIn"
                id="linkedin-contact"
                inputName="linkedIn"
                type="text"
                inputValue={contacts.linkedIn}
                onChange={onChange}
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditContactForm;