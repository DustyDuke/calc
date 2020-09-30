import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useProperties} from "../PropertiesContext";


export function CalculateElementsTable() {
   const { calculated} = useProperties()

return (
    <>
    <h4 align="center">КБЖУ на 100 граммов готового продукта</h4>
    <TableContainer component={Paper}>
        <Table aria-label="caption table">
            <TableHead>
                <TableRow>
                    <TableCell >Энергетическая ценность (ккал)</TableCell>
                    <TableCell>Белки(g)</TableCell>
                    <TableCell >Жиры(g)</TableCell>
                    <TableCell >Углеводы(g)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>{calculated.kkals}</TableCell>
                    <TableCell>{calculated.proteins}</TableCell>
                    <TableCell>{calculated.fats}</TableCell>
                    <TableCell>{calculated.carbs}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
        </>
)
}