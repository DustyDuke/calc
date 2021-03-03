import { DELETE_PRODUCT, ADD_PRODUCT, ADD_PROPERTIES, CLEAR_PROPERTIES, MODAL_CLOSE, MODAL_OPEN, FINAL_WEIGHT, GET_SUM, GET_CALCULATED } from "./types";

export const addProduct = (data) => {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}

export const deleteProduct = (data) => {
    return {
        type: DELETE_PRODUCT,
        payload: data
    }
}


export const clearProperties = (props) => {
    return {
        type: CLEAR_PROPERTIES,
        payload: props
    }
}

export const addProperties = (prop) => {
    return {
        type: ADD_PROPERTIES,
        payload: prop
    }
}



export const modalOpen = () => {
    return {
        type: MODAL_OPEN
    }
}
export const modalClose = () => {
    return {
        type: MODAL_CLOSE
    }
}

export const getFinalWeight = (weight) => {
    return {
        type: FINAL_WEIGHT,
        payload: weight
    }
}

export const calcProductPropsSums = (sum) => {
    return {
        type: GET_SUM,
        payload: sum
    }
}

export const calсulatedProps = (calсulated) => {
    return {
        type: GET_CALCULATED,
        payload: calсulated
    }
}