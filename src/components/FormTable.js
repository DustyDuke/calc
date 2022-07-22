import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';

const labels = {
    product: "Ингридиент",
    kkal: "Энергетическая ценность",
    proteins: "Белки",
    carbs: "Углеводы",
    fats: "Жиры",
    weight: "Масса",
}

const useStyles = makeStyles(() => ({
    formFields: {
        width: '100%',
    },
}));

export default function FormTable(props) {
    const { modalOpen, properties, setProperties } = props


    const classes = useStyles();

    const initialProps = {
        product: '',
        kkal: '',
        proteins: '',
        carbs: '',
        fats: '',
        weight: '',
    }

    const [elements, setElements] = useState(initialProps)
    const elementsNames = Object.keys(elements)

    const changeElement = (event) => {
        const {id, value} = event.target
        setElements({...elements, [id]: value});
    }
     const currentWeightCount = (prop) => {
        return  (elements[prop] * elements.weight/100).toFixed(2)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

     const newProp = Object.fromEntries(elementsNames.map((el) => {
            if( el === 'product' || el === 'weight'){
                return [[el], elements[el]]
            } return  [[el], currentWeightCount(el)]

        }))

        setProperties([...properties, newProp])
        setElements(initialProps);
        modalOpen(false);
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

