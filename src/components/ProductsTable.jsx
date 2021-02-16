import TableRow from '@material-ui/core/TableRow';
import MaterialTable, { MTableBody } from "material-table";
import { materialTableIcons } from "../materialTableIcons";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import React from "react";

export function ProductsTable(props){
    const { sum, properties,  setProperties } = props

 const columns = [
     {field: 'product', title: 'Продукт'},
     {field: 'kkal', title: 'Энергетическая ценность (ккал)' },
     {field: 'proteins', title: 'Белки(g)'},
     {field: 'fats', title: 'Жиры(g)'},
     {field: 'carbs', title: 'Углеводы(g)'},
     {field: 'weight', title: 'Масса(g)'},
]

const propNames = Object.keys(sum)

    return(
         <MaterialTable columns={columns} data={properties}
                   options={{ toolbar: false,
                              paging: false,
                              sorting: false,
                              draggable: false,
                              actionsCellStyle: {color: 'red'}}
                   }
                   localization={{ header: { actions: "" },
                       body: { emptyDataSourceMessage: "Добавьте продукты", editRow: { deleteText: "Вы уверены, что хотите удалить ингридиент?" }} }}
                   icons={materialTableIcons}
                   components={{
                          Body: (props) => {
                    return (
                        <>
                            <MTableBody {...props} />
                            {properties.length> 0 && <TableBody>
                                <TableRow>
                                    <TableCell/>
                                    <TableCell component="th" scope="row">
                                        Сумма:
                                    </TableCell>
                                    { propNames.map((product, idx )=> {
                                        return <TableCell key={idx}>{sum[product]}</TableCell>
                                    })}
                                </TableRow>
                            </TableBody>}
                        </>
                    );
                },
                   }}
                    editable={{
        onRowDelete: oldData =>
          new Promise((resolve) => {
              const dataDelete = [...properties];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setProperties([...dataDelete]);
              resolve()
          })
      }}
    />
    )
}