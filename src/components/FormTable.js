import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';

export default  function FormTable(props) {
const { modalOpen, properties, setProperties } = props
const useStyles = makeStyles(() => ({
  formFields: {
    width: '100%',
  },
}));

const classes = useStyles();

const initialProps = {
    'product': '',
    'kkal': '',
    'proteins': '',
    'carbs': '',
    'fats': '',
    'weight': '',
}

const [elements, setElements] = useState(initialProps)


    const changeElement = (event) => {
        const id = event.target.id
        const value = event.target.value
        setElements({...elements, [id]: value});
    }
     const currentWeightCount = (prop) => {
        return  (elements[prop] * elements.weight/100).toFixed(2)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

   const keys = Object.keys(elements)
     const newProp = Object.fromEntries(keys.map((el) => {
            if( el === 'product' || el === 'weight'){
                return [[el], elements[el]]
            } else {
                return  [[el], currentWeightCount(el)]
            }
        }))

        setProperties([...properties, newProp])
        setElements(initialProps);
        modalOpen(false);
    }
return (
            <Box>
        <form onSubmit={handleSubmit} >
            <Grid container spacing={3}>
                <Grid item md={6} xs={12} >
               <TextField
                   className={classes.formFields}
                   id="product"
                   label="Ингридиент"
                   type="text"
                   variant="outlined"
                   onChange={changeElement}
                   value={elements.product}
                   required
                />
                </Grid>
                <Grid item md={6} xs={12} >
                <TextField
                    className={classes.formFields}
                    id="kkal"
                    label="Энергетическая ценность"
                    type="number"
                    variant="outlined"
                    onChange={changeElement}
                    value={elements.kkal}
                />
                </Grid>
                <Grid item md={6} xs={12} >
                <TextField
                    className={classes.formFields}
                    id="proteins"
                    label="белки"
                    type="number"
                    variant="outlined"
                    onChange={changeElement}
                    value={elements.proteins}
                />
                </Grid>
                <Grid item md={6} xs={12} >
                <TextField
                    className={classes.formFields}
                    id="fats"
                    label="Жиры"
                    type="number"
                    variant="outlined"
                    onChange={changeElement}
                    value={elements.fats}
                />
                </Grid>
                <Grid item md={6} xs={12}>
                <TextField
                    className={classes.formFields}
                    id="carbs"
                    label="Углеводы"
                    type="number"
                    variant="outlined"
                    onChange={changeElement}
                    value={elements.carbs}
                />
                </Grid>
                 <Grid item md={6} xs={12} >
            <TextField
                    className={classes.formFields}
                    id="weight"
                    label="Масса продукта"
                    type="number"
                    variant="outlined"
                    onChange={changeElement}
                    value={elements.weight}
                    required
                />
                 </Grid>

            <Grid item xs={12}>
                <Box  align="center">
            <Button variant="outlined" color="primary" type="submit" onSubmit={handleSubmit} >Записать продукт</Button>
                </Box>
                 </Grid>
            </Grid>
        </form>
</Box>
    )
}
