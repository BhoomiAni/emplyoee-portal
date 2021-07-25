import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputBox from '../components/input-box';
import ButtonComp from '../components/button';
import useForm from '../hooks/useForm';
import validate from '../lib/validations';

const useStyle = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
}));

function LoginForm(props) {
    const classes = useStyle();
    const { handleChange, values, handleSubmit, errors } = useForm(validate, props.Login);
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Login Form
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    {/* error */}
                    <InputBox
                        type="text"
                        name="username"
                        id="username"
                        label="Username*"
                        placeholder="Enter Username"
                        onChange={handleChange}
                        value={values.username}
                        errmsg={errors.username}
                        error={errors.username !== ""} />
                    <InputBox
                        type="password"
                        name="password"
                        id="password"
                        label="Password*"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        value={values.password}
                        errmsg={errors.password}
                        error={errors.password !== ""} />
                    <div className="mt-3">
                        <ButtonComp
                            cssstyles={{ background: "blue", }}
                            buttonname="Login"
                            type="submit" />
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default LoginForm
