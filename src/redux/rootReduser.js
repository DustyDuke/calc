import {combineReducers} from "redux";
import {DATA_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, ADD_PROPERTIES, CLEAR_PROPERTIES, MODAL_CLOSE, MODAL_OPEN, GET_SUM, FINAL_WEIGHT, GET_CALCULATED } from "./types";

const initialProduct = {
    'product': '',
    'kkal': '',
    'proteins': '',
    'carbs': '',
    'fats': '',
    'weight': '',
}
const createProductReducer = (state = initialProduct, action) => {
    switch (action.type) {
     case ADD_PROPERTIES:
         return {...state, ...action.payload}
     case CLEAR_PROPERTIES: 
          return {...action.payload}
        default: return state
    }
}

const initialData = []

const dataReducer = (state = initialData, action) => {
    switch (action.type) {
        case DATA_PRODUCTS:
         return [...state]
        case ADD_PRODUCT:
          return [...state, action.payload]
        case DELETE_PRODUCT:
            return [...action.payload]
        default: return state
    }
}

const initialState = {
    isOpen: false
}
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_OPEN:
         return {...state, isOpen: true}
        case MODAL_CLOSE:
          return {...state, isOpen: false}
       
        default: return state
    }

}



const finalWeightReducer = (state = '', action) => {
    switch (action.type) {
        case FINAL_WEIGHT:
         return action.payload
        default: return state
    }

} 

const initialSums = { kkal: 0, proteins: 0, fats: 0, carbs: 0, weight: 0 }

const sumReducer = (state = initialSums, action) => {
    switch (action.type) {
        case GET_SUM:
            return {...state, ...action.payload}
      
        default: return state
    }
}


const initialCalculated = [{ kkal: 0, proteins: 0, fats: 0, carbs: 0 }]

const calculatedReducer = (state = initialCalculated, action) => {
    switch (action.type) {
        case GET_CALCULATED:
            return  [ ...action.payload]
       
        default: return state
    }
}

export const rootReducer = combineReducers({
    data: dataReducer,
    prop: createProductReducer,
    modalState: modalReducer,
    weightState: finalWeightReducer,
    sum: sumReducer,
    calculated: calculatedReducer
})