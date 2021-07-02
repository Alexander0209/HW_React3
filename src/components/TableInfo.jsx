import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'

export function TableInfo({data}) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Имя</TableCell>
            <TableCell align="center">Фамилия</TableCell>
            <TableCell align="center">Язык программирования</TableCell>
            <TableCell align="center">Возраст</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" align="center">
                {data.name}
              </TableCell>
              <TableCell align="center">{data.surname}</TableCell>
              <TableCell align="center">{data.language}</TableCell>
              <TableCell align="center">{data.age}</TableCell>
              <TableCell align="center">{data.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TableInfo.propTypes = {
  data: PropTypes.array.isRequired,
}