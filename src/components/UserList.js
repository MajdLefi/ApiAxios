import React, { useEffect, useState } from 'react';
import './UserList.css'
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 350,
    },
});
function UserList() {

    const [userList, setUserList] = useState([]);
    useEffect(
        () =>
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then((res) => {

                    setUserList(res.data)
                }),
        [userList]
    );

    const classes = useStyles();
    return (

        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
                <caption>A basic table of jsonplaceholderAPI data</caption>
                <TableHead>
                    <TableRow className="Table">
                        <TableCell className="Name">Name</TableCell>
                        <TableCell align="right" className="Username">Username</TableCell>
                        <TableCell align="right" className="Email">Email</TableCell>
                        <TableCell align="right" className="Phone">Phone</TableCell>
                        <TableCell align="right" className="Website">Website</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userList.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.username}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">{row.website}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default UserList