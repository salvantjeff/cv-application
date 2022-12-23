import ContactFormItem from "./FormItem/ContactFormItem";
function EditContactForm ({ contacts, onChange, onSubmit }) {
    console.log(contacts);
    const allContacts = {
        first: contacts[0],
        second: contacts[1],
        third: contacts[2]
    };

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
                inputValue={allContacts.first.content}
                onChange={onChange}
                index={0}
            />
            <ContactFormItem 
                labelText="Phone number"
                id="phone-number-contact"
                inputName="phoneNumber"
                type="text"
                inputValue={allContacts.second.content}
                onChange={onChange}
                index={1}
            />
            <ContactFormItem 
                labelText="LinkedIn"
                id="linkedin-contact"
                inputName="linkedIn"
                type="text"
                inputValue={allContacts.third.content}
                onChange={onChange}
                index={2}
            />
            <div>
                <button className="save-button">Save</button>
            </div>
        </form>
    );
};

export default EditContactForm;