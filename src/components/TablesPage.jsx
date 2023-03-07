import React, {useEffect} from "react";
import { CalculateElementsTable } from "./CalculatedElementsTable";
import { ProductsTable } from "./ProductsTable";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import { Button, Grid } from "@material-ui/core";
import Modal from "./Modal";
import Link from "@material-ui/core/Link";

import { useSelector, useDispatch} from 'react-redux'
import {calcProductPropsSums, calculatedProps, getFinalWeight} from '../redux/actions'
import {useStyles} from "../styles";


export default function TablesPage(){
    const classes = useStyles();
    const dispatch = useDispatch()

    const {data, weightState} = useSelector(state => state)

    const getSum = (arr) => {
        return (arr.length > 0) ? arr.reduce((a, b) => +a + +b) : 0
    }
    const per100g = (arr) => {
        return (getSum(arr)*100/weightState).toFixed(2)
    }
    const handleChange = (event) => {
        dispatch(getFinalWeight(event.target.value))
    }
    const calcFinalProps = (a, fn) => {
     return  fn(data.map(prop => { return prop[a] }))
}

    const calcProperties = () => {
        dispatch(calculatedProps([{
                kkal: calcFinalProps( 'kkal', per100g),
                proteins: calcFinalProps( 'proteins', per100g),
                fats: calcFinalProps( 'fats', per100g),
                carbs: calcFinalProps( 'carbs', per100g),
                weight: calcFinalProps( 'weight', per100g)}]))
    }

  const calcSums = () => {
     dispatch(calcProductPropsSums({
             kkal: calcFinalProps( 'kkal', getSum),
             proteins: calcFinalProps( 'proteins', getSum),
             fats: calcFinalProps( 'fats', getSum),
             carbs: calcFinalProps( 'carbs', getSum),
             weight: calcFinalProps( 'weight', getSum) }))
    }

    React.useEffect(()=> {
        calcSums()
        if(weightState) {
            calcProperties()
        }
    }, [data])

    return(
        <Box p={3} className={classes.initialHeight}>
            <Box mb={5}>
                <h1>Калькулятор КБЖУ</h1>
                <h3>Для любителей готовить фитоняшные вкусняшки</h3>
            </Box>
            <ProductsTable  />
            <Box mt={5} mb={5} align="center">
                <Modal />
            </Box>
            <Box mt={5} mb={5}>
                <p>Масса готового продукта может отличаться от суммы масс всех добавленных ингридиентов, поэтому не
                    поленись взвесить готовый продукт и внести значение в поле.</p>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        Масса готового продукта:  <Input
                        id="finalWeight"
                        type="number"
                        variant="outlined"
                        value={weightState}
                        onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" color="primary" type="button" onClick={calcProperties}>
                            Рассчитать кбжу на 100г
                        </Button>
                    </Grid>
                </Grid>

            </Box>
            <h4 align="center">КБЖУ на 100 граммов готового продукта</h4>
            <CalculateElementsTable />
            <Box mt={5} mb={3} className={classes.infoText}>
                <p>Если ты нашёл ошибки или неточности в работе моего калькулятора, сообщи мне об этом,
                    пожалуйста, <Link href='mailto:kotenevaelena13@gmail.com' className={classes.myLink}>на почту</Link>.
                </p>
            </Box>
        </Box>
    )
}
