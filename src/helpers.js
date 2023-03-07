export const currentWeightCount = (prop, elements) => {
    return  (elements[prop] * elements.weight/100).toFixed(2)
}
