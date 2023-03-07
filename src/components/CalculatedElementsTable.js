import React from 'react';
import MaterialTable from "material-table";
import {materialTableIcons} from "../materialTableIcons";
import {useSelector} from 'react-redux'
import {resultTableColumns} from "../constants";

export function CalculateElementsTable() {

const {calculated} = useSelector(state => state)

return (
        <MaterialTable
            columns={resultTableColumns} data={calculated}
            options={{toolbar: false, paging: false, sorting: false, draggable: false}}
            localization={{ body: {emptyDataSourceMessage: "Добавьте продукты"} }}
            icons={materialTableIcons} />
        )
}
