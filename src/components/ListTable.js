import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useProperties} from "../PropertiesContext";
import {CalculateElementsTable} from "./CalculatedElementsTable";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import {Button, Grid} from "@material-ui/core";
import Modal from "./Modal";
import BackspaceIcon from '@material-ui/icons/Backspace';
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

export function ListTable() {
const {properties, finalWeight, handleChange, removeProduct, sum, calcProperties} = useProperties()
const useStyles = makeStyles((theme) => ({
    infoText: {
      color: '#0000008A',
        fontSize: 12,
    },
    myLink: {
      color: '#000',
        fontWeight: 'bold',
    },
}));
 const classes = useStyles();
    return (
<>
        <TableContainer component={Paper}>
                         <Table aria-label="caption table">
                           <TableHead>
                             <TableRow>
                                 <TableCell>Продукт</TableCell>
                                 <TableCell>Энергетическая ценность (ккал)</TableCell>
                                 <TableCell>Белки(g)</TableCell>
                                 <TableCell>Жиры(g)</TableCell>
                                 <TableCell>Углеводы(g)</TableCell>
                                 <TableCell>Масса(g)</TableCell>
                                 <TableCell> </TableCell>
                             </TableRow>
                           </TableHead>
                             <TableBody>
                                 {properties.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell component="th" scope="row" id={item.product}>
                  {item.product}
                </TableCell>
                <TableCell>{item.kkal}</TableCell>
                <TableCell>{item.proteins}</TableCell>
                <TableCell>{item.fats}</TableCell>
                <TableCell>{item.carbs}</TableCell>
                <TableCell>{item.weight}</TableCell>
                <TableCell><BackspaceIcon color="secondary" id={item.product} onClick={removeProduct}/></TableCell>
              </TableRow>
            ))}
                                 <TableRow>
                                     <TableCell component="th" scope="row" >
                                     Сумма:
                                     </TableCell>
                                     <TableCell>{sum.kkals}</TableCell>
                                     <TableCell>{sum.proteins}</TableCell>
                                     <TableCell>{sum.fats}</TableCell>
                                     <TableCell>{sum.carbs}</TableCell>
                                     <TableCell>{sum.gramms}</TableCell>
                                     <TableCell> </TableCell>
                                     </TableRow>
                             </TableBody>
                         </Table>
            </TableContainer>
    <Box mt={5} mb={5} align="center">
         <Modal />
    </Box>
    <Box mt={5} mb={5}>
        <p>Масса готового продукта может отличаться от суммы масс всех добавленных ингридиентов, поэтому не поленись взвесить готовый продукт и внести значение в поле.</p>

   <Grid container spacing={3}>
                <Grid item xs={12} >
      Масса готового продукта:  <Input id="finalWeight" type="number" variant="outlined" value={finalWeight} onChange={handleChange}/>
                </Grid>
       <Grid item xs={12} >
        <Button variant="outlined" color="primary" type="button" onClick={calcProperties}>Рассчитать кбжу на 100г</Button>
       </Grid>
   </Grid>

    </Box>

    <CalculateElementsTable />
    <Box mt={5} mb={3} className={classes.infoText}>
    <p>Если ты нашёл ошибки или неточности в работе моего калькулятора, сообщи мне об этом, пожалуйста, <Link href='mailto:kotenevaelena13@gmail.com' className={classes.myLink}>на почту</Link>.</p>
    </Box>
    </>
         )
    }
export default ListTable