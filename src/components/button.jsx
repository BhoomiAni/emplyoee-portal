
import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonRoot: {
    width: "100%",
    margin: (props) => props.margin || "0.985em 0",
    color: (props) => props.color || "white",
    background: (props) => props.background || "red",
    height: (props) => props.height || "2.375em",
    "&:focus, &:hover": {
      boxShadow: "none !important",
      outline: "red !important",
      backgroundColor: (props) => props.hoverBackground || props.background,
      color: (props) => props.hoverText || props.color || "white",
    },
    "&:active": {
      boxShadow: "none !important",
      outline: "red !important",
    },
    "&:disabled": {
      opacity: 0.65,
      pointerEvents: "none"
    },
  },
  label: {
    fontFamily: (props) => props.fontFamily,
    fontSize: (props) => props.fontSize,
    color: (props) => props.color || "white",
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:focus, &:hover": {
      color: (props) => props.hoverText || props.color || "white",
    },
  },
}));

export default function ButtonComp(props) {
  const { cssstyles } = props;
  const classes = useStyles(cssstyles);

  return (
    <Button
      classes={{ root: classes.buttonRoot, label: classes.label }}
      {...props}
    >
      {props.buttonname}
    </Button>
  );
}
