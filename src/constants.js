export const resultTableColumns = [
    {field: 'kkal', title: 'Энергетическая ценность (ккал)' },
    {field: 'proteins', title: 'Белки(g)'},
    {field: 'fats', title: 'Жиры(g)'},
    {field: 'carbs', title: 'Углеводы(g)'},
]

export const productTableColumns = [
    {field: 'product', title: 'Продукт'},
    {field: 'kkal', title: 'Энергетическая ценность (ккал)' },
    {field: 'proteins', title: 'Белки(g)'},
    {field: 'fats', title: 'Жиры(g)'},
    {field: 'carbs', title: 'Углеводы(g)'},
    {field: 'weight', title: 'Масса(g)'},
]

export const labels = {
    product: "Ингридиент",
    kkal: "Энергетическая ценность",
    proteins: "Белки",
    carbs: "Углеводы",
    fats: "Жиры",
    weight: "Масса",
}

export const initialProps = {
    product: '',
    kkal: '',
    proteins: '',
    carbs: '',
    fats: '',
    weight: '',
}
