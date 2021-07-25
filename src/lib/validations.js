import { loginUser } from "./userData";

export default function validateForm(values) {
    let errors = {};

    if (!values.username) {
        errors.username = "Username required";
    } 
    // else if (!/\S+@\S+\.\S+/.test(values.username)) {
    //     errors.username = "Username is invalid";
    // } 
    else if (loginUser.username !== values.username) {
        errors.username = 'incorrect Username';
    } else if (loginUser.username === values.username) {
        errors.username = '';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (loginUser.password !== values.password) {
        errors.password = 'incorrect Password';
    } else if(loginUser.password === values.password){
        errors.password = '';
    }

    return errors;
}

