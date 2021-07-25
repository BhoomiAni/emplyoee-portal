import React from 'react';

import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%"
    },
    inputBox: {
        margin: "0.225em",
        letterSpacing: "0.0366vw !important",
        color: "black",
        height: "1.875em",
        padding: "0.225em 0 !important",
        "&:focus, &:hover": {
            boxShadow: "none !important",
            outline: "blue !important",
        },
        "&:active": {
            boxShadow: "none !important",
            outline: "blue !important",
        },
        "&:disabled": {
            opacity: 0.65,
            pointerEvents: "none"
        },
        "&:placeholder": {
            color: "lightgrey",
        }
    },
    label: {
        fontSize: (props) => props.fontSize || "0.875em",
        color: (props) => props.color || "DarkSlateGrey",
        textTransform: "capitalize",
    },
    inputUnderline: {
        "&::before": {
            borderBottom: "1px solid darkgrey"
        },
        "&::after": {
            borderBottom: "1.5px solid CornflowerBlue"
        },
        '&:hover:not($disabled):before': {
            borderBottom: 'none',
        },
    },
    errMsg: {
        fontSize: (props) => props.fontSize || "0.6875em",
        color: (props) => props.color || "crimson",
        textTransform: "capitalize",
        marginTop: "0.425em !important"
    }
}));

function InputBox(props) {
    const { cssstyles } = props;
    const classes = useStyles(cssstyles);

    return (
        <div className="mt-3">
            <Typography classes={{ root: classes.label }} component="h5">
                {props.label}
            </Typography>
            <Input {...props} classes={{ root: classes.root, input: classes.inputBox, underline: classes.inputUnderline }} />
            {props.error && <Typography classes={{ root: classes.errMsg }} component="h6">
                {props.errmsg}
            </Typography>}
        </div>
    )
}

export default InputBox
