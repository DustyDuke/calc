import TableRow from '@material-ui/core/TableRow';
import MaterialTable, { MTableBody } from "material-table";
import { materialTableIcons } from "../materialTableIcons";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/actions'

export function ProductsTable(){
    
    const dispatch = useDispatch()

    const products = useSelector(state => state.data)
    const sum = useSelector(state => state.sum)

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
         <MaterialTable columns={columns} data={products}
                   options={{ toolbar: false,
                              paging: false,
                              sorting: false,
                              draggable: false,
                              actionsColumnIndex: -1,
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
                            {products.length> 0 && <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Сумма:
                                    </TableCell>
                                    { propNames.map((product, idx )=> {
                                        return <TableCell key={idx}>{sum[product]}</TableCell>
                                    })}
                                      <TableCell/>
                                </TableRow>
                            </TableBody>}
                        </>
                    );
                },
                   }}
                    editable={{
        onRowDelete: oldData =>
          new Promise((resolve) => {
              const dataDelete = [...products];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              dispatch(deleteProduct(dataDelete))
              resolve()
          })
      }}
    />
    )
}