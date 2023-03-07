import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import Box from "@material-ui/core/Box";
import {useDispatch, useSelector} from 'react-redux'
import {addProduct, addProperties, clearProperties, modalClose} from '../redux/actions'
import {useStyles} from "../styles";
import {initialProps, labels} from "../constants";
import {currentWeightCount} from "../helpers";

export default  function FormTable() {
const classes = useStyles();
    const dispatch = useDispatch()
    const elements = useSelector(state => state.prop)

    const elementsNames = Object.keys(elements)
    const changeElement = (event) => {
        const {id, value} = event.target
        const prop = {[id]: value}
        dispatch(addProperties(prop))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
     const newProp = Object.fromEntries(elementsNames.map((el) => {
            if( el === 'product' || el === 'weight'){
                return [[el], elements[el]]
            } else {
                return  [[el], currentWeightCount(el, elements)]
            }
        }))

        dispatch(modalClose())
        dispatch(addProduct(newProp))
        dispatch(clearProperties(initialProps))
    }
    return (<Box>
                <form onSubmit={handleSubmit} >
                    <Grid container spacing={3}>
                            {elementsNames.map(element => (
                                <Grid item md={6} xs={12} key={element} >
                                    <TextField
                                            className={classes.formFields}
                                            id={element}
                                            label={labels[element]}
                                            type={element === 'product' ? 'type' : 'number'}
                                            variant="outlined"
                                            onChange={changeElement}
                                            value={elements[element]}
                                            required
                                        />
                                </Grid>)
                            )}
                    <Grid item xs={12}>
                        <Box  align="center">
                    <Button variant="outlined" color="primary" type="submit" onSubmit={handleSubmit}>Записать продукт</Button>
                        </Box>
                         </Grid>
                    </Grid>
                </form>
            </Box>
    )
}
