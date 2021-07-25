import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ButtonComp from '../components/button';

const useStyles = makeStyles({
    table: {
        minWidth: 450,
        maxWidth: 700,
    },
    tabelHeader: {
        backgroundColor: "black",
    },
    headerLabel: {
        fontSize: "1em",
        color: "white",
        textAlign: "left"
    },
    dataTxt: {
        fontSize: "0.8875em",
        color: "black",
        textAlign: "left",
    },
    dataRow: {
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "WhiteSmoke"
        },
        '&:last-child td': {
            borderBottom: 0,
        },
    },
});

function EmployeeDashboard(props) {
    const classes = useStyles();
    const empList = useSelector(state => state.empList);
    const headers = ["Name", "Age", "Gender", "Email", "Phone Number"]
    return (
        <div className="container position-relative text-center d-flex flex-column align-items-center my-4">
            <Typography component="h1" variant="h5" className="my-3">
                Employee Dashboard
            </Typography>
            <div className="position-absolute top-0 end-0">
                <ButtonComp
                    cssstyles={{ background: "blue", }}
                    buttonname="Logout"
                    onClick={props.Logout}
                    type="button" />
            </div>
            <Table className={classes.table} aria-label="simple table" border={1}>
                <TableHead classes={{ root: classes.tabelHeader }}>
                    <TableRow >
                        {headers.map((label) => (
                            <TableCell classes={{ root: classes.headerLabel }}>{label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {empList.map((list) => (
                        <TableRow classes={{ root: classes.dataRow }}>
                            <TableCell classes={{ root: classes.dataTxt }}> {list.name}</TableCell>
                            <TableCell classes={{ root: classes.dataTxt }}> {list.age}</TableCell>
                            <TableCell classes={{ root: classes.dataTxt }}> {list.gender}</TableCell>
                            <TableCell classes={{ root: classes.dataTxt }}> {list.email}</TableCell>
                            <TableCell classes={{ root: classes.dataTxt }}> {list.phoneNo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div >
    )
}

export default EmployeeDashboard
