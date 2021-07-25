import { useState } from 'react'

const useForm = (validate, Login) => {
    const [values, setValues] = useState({ username: "", password: "", });
    const [errors, setErrors] = useState({ username: "", password: "", });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        if (values.username || values.password) {
            errors.username === "" && errors.password === "" && Login(true);
        }
    }
    return { handleChange, values, handleSubmit, errors }
}

export default useForm;
