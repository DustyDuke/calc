import React, {useState} from "react";
import { CalculateElementsTable } from "./CalculatedElementsTable";
import { ProductsTable } from "./ProductsTable";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import { Button, Grid } from "@material-ui/core";
import Modal from "./Modal";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

export default function TablesPage(){

    const useStyles = makeStyles(() => ({
          initialHeight: {
      minHeight: '95vh',
    },
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

    const initialSums = { kkal: 0, proteins: 0, fats: 0, carbs: 0, weight: 0 }

    const [properties, setProperties] = useState([])
    const [sum, setSum] = useState(initialSums)
    const [calculated, setCalculated] = useState(initialSums)
    const [finalWeight, setFinalWeight] = useState('')
    const [open, setOpen] = useState(false);

    const getSum = (arr) => {
        return (arr.length > 0) ? arr.reduce((a, b) => +a + +b) : 0
    }
    const per100g = (arr) => {
        return (getSum(arr)*100/finalWeight).toFixed(2)
    }
    const handleChange = (event) => {
        setFinalWeight(event.target.value)
    }
    const calcFinalProps = (a, fn) => {
     return  fn(properties.map(prop => { return prop[a] }))
    }

    const calcProperties = () => {
        setCalculated({
            kkal: calcFinalProps( 'kkal', per100g),
            proteins: calcFinalProps( 'proteins', per100g),
            fats: calcFinalProps( 'fats', per100g),
            carbs: calcFinalProps( 'carbs', per100g),
            weight: calcFinalProps( 'weight', per100g) })
    }

  const calcSums = () => {
        setSum({
            kkal: calcFinalProps( 'kkal', getSum),
            proteins: calcFinalProps( 'proteins', getSum),
            fats: calcFinalProps( 'fats', getSum),
            carbs: calcFinalProps( 'carbs', getSum),
            weight: calcFinalProps( 'weight', getSum) })
        }

    React.useEffect(()=> {
        calcSums()
        if(finalWeight) {
            calcProperties()
        }
    }, [properties])


    return(
        <Box p={3} className={classes.initialHeight}>
            <Box mb={5}>
                <h1>Калькулятор КБЖУ</h1>
                <h3>Для любителей готовить фитоняшные вкусняшки</h3>
            </Box>
            <ProductsTable sum={sum} properties={properties}  setProperties={setProperties}  />
            <Box mt={5} mb={5} align="center">
                <Modal modalOpen={setOpen} isOpen={open} properties={properties} setProperties={setProperties}/>
            </Box>
            <Box mt={5} mb={5}>
                <p>Масса готового продукта может отличаться от суммы масс всех добавленных ингридиентов, поэтому не
                    поленись взвесить готовый продукт и внести значение в поле.</p>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        Масса готового продукта:  <Input id="finalWeight" type="number" variant="outlined" value={finalWeight} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" color="primary" type="button" onClick={calcProperties}>Рассчитать кбжу на 100г</Button>
                    </Grid>
                </Grid>

            </Box>
            <h4 align="center">КБЖУ на 100 граммов готового продукта</h4>
            <CalculateElementsTable calculated={calculated} />
            <Box mt={5} mb={3} className={classes.infoText}>
                <p>Если ты нашёл ошибки или неточности в работе моего калькулятора, сообщи мне об этом,
                    пожалуйста, <Link href='mailto:kotenevaelena13@gmail.com' className={classes.myLink}>на почту</Link>.
                </p>
            </Box>
        </Box>
    )
}
