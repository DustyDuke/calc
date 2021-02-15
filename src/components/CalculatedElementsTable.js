import React from 'react';
import MaterialTable from "material-table";
import {materialTableIcons} from "../materialTableIcons";


export function CalculateElementsTable(props) {
    const { calculated } = props
    const columns = [
     {field: 'kkal', title: 'Энергетическая ценность (ккал)' },
     {field: 'proteins', title: 'Белки(g)'},
     {field: 'fats', title: 'Жиры(g)'},
     {field: 'carbs', title: 'Углеводы(g)'},
    ]

return (
        <MaterialTable columns={columns} data={[calculated]}
                       options={{toolbar: false, paging: false, sorting: false, draggable: false}}
                   localization={{ body: {emptyDataSourceMessage: "Добавьте продукты"} }}
                   icons={materialTableIcons} />
        )
}