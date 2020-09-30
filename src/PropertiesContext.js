import React, {useState, useContext} from "react"

const PropertiesContext = React.createContext();

export const useProperties = () => {
    return useContext(PropertiesContext)
}

export const PropertiesProvider = ({ children }) => {
    const params = {
        'product': '',
        'kkal': '',
        'proteins': '',
        'carbs': '',
         'fats': '',
        'weight': '',
    }
     const calc = {
        'kkals': 0,
        'proteins': 0,
        'carbs': 0,
         'fats': 0,
    }
     const initialSums = {
        'kkals': 0,
        'proteins': 0,
        'carbs': 0,
         'fats': 0,
         'gramms': 0,
    }

    const [kkals, setKkals] = useState([])
    const [fats, setFats] = useState([])
    const [carbs, setCarbs] = useState([])
    const [proteins, setProteins] = useState([])
    const [gramms, setGramms] = useState([])
    const [sum, setSum] = useState(initialSums)
    const [elements, setElements] = useState(params)
    const [properties, setProperties] = useState([])
    const [finalWeight, setFinalWeight] = useState('')
    const [calculated, setCalculated] = useState(calc)
    const [open, setOpen] = React.useState(false);
    const removeProduct = (event) => {
        setProperties(properties.filter(item => event.target.id !== item.product))
        let fl = properties.filter(item => event.target.id === item.product)[0]
        setKkals(kkals.filter(item => +fl.kkal !== item))
        setFats(fats.filter(item => +fl.fats !== item))
        setCarbs(carbs.filter(item => +fl.carbs !== item))
        setProteins(proteins.filter(item => +fl.proteins !== item))
        setGramms(gramms.filter(item => +fl.weight !== item))
    }
    const changeElement = (event) => {
        const id = event.target.id
        const value = event.target.value
        setElements({...elements, [id]: value});
    }
    const handleChange = (event) => {
        setFinalWeight(event.target.value)
    }
    const forCurrentWeight = elements.weight/100;
    const handleSubmit = (event) => {
        event.preventDefault()
        setProperties(properties.concat([{
            "product": elements.product,
            'kkal': (elements.kkal*forCurrentWeight).toFixed(2),
            'proteins': (elements.proteins*forCurrentWeight).toFixed(2),
            'carbs': (elements.carbs*forCurrentWeight).toFixed(2),
            'fats': (elements.fats*forCurrentWeight).toFixed(2),
            'weight': elements.weight
        }]))
       setKkals([...kkals, elements.kkal*forCurrentWeight])
        setFats([...fats, elements.fats*forCurrentWeight])
        setCarbs([...carbs, elements.carbs*forCurrentWeight])
        setProteins([...proteins, elements.proteins*forCurrentWeight])
         setFats([...fats, elements.fats*forCurrentWeight])
        setGramms([...gramms, +elements.weight])
        setElements(params);
        setOpen(false);
    }
     const getSum = (arr) => {
        return (arr.length > 0) ? arr.reduce((a, b) => +a + +b).toFixed(2) : 0
    }
    React.useEffect( () => {
            setSum({
                'kkals': getSum(kkals),
                'proteins': getSum(proteins),
                'carbs': getSum(carbs),
                'fats': getSum(fats),
                'gramms': getSum(gramms),
            });
        }, [kkals, proteins, carbs, fats, gramms]
    )

    const calcProperties = () => {
        setCalculated({'kkals': per100g(kkals),
        'proteins': per100g(proteins),
        'carbs': per100g(carbs),
        'fats': per100g(fats),
        })
    }

    const per100g = (arr) => {
        return (getSum(arr)*100/finalWeight).toFixed(2)
    }
    return (
    <PropertiesContext.Provider value={{elements, properties, sum, finalWeight, calculated, open, setOpen, handleChange, changeElement, handleSubmit, removeProduct, getSum, per100g, calcProperties}}>
        { children }
    </PropertiesContext.Provider>

    )
}