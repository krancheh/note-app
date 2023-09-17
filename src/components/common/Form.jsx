import React, {useState} from 'react';
import MainLogo from "./MainLogo";

const Form = ({title, submitButtonText, onSubmit, children}) => {
    const [formData, setFormData] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <form className={'form'} onSubmit={submitHandler}>
            <MainLogo/>
            <h1 className={"form-title"}>{title}</h1>
            {React.Children.map(children, child => {
                if (child.type === "input") {
                    return React.cloneElement(child, {onChange: handleChange});
                } else {
                    return child;
                }
            })}
            <button className={"submit-button"} type={"submit"}>{submitButtonText || 'Submit'}</button>
        </form>
    );
};

export default Form;