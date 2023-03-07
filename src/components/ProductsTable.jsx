import TableRow from '@material-ui/core/TableRow';
import MaterialTable, { MTableBody } from "material-table";
import { materialTableIcons } from "../materialTableIcons";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/actions'
import {productTableColumns} from "../constants";
import {useTheme} from "@material-ui/core";

export function ProductsTable(){
    const {palette} = useTheme()
    const dispatch = useDispatch()
    const {sum, data} = useSelector(state => state)
    const propNames = Object.keys(sum)

    const handleDelete = oldData =>
        new Promise((resolve) => {
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            dispatch(deleteProduct(dataDelete))
            resolve()
        })

    return(
         <MaterialTable columns={productTableColumns} data={data}
                        options={{ toolbar: false,
                              paging: false,
                              sorting: false,
                              draggable: false,
                              actionsColumnIndex: -1,
                              actionsCellStyle: {color: palette.error.main}}
                   }
                        localization={{ header: { actions: "" },
                           body: { emptyDataSourceMessage: "Добавьте продукты",
                           editRow: { deleteText: "Вы уверены, что хотите удалить ингридиент?" }} }}
                        icons={materialTableIcons}
                        components={{
                          Body: (props) => {
                    return (
                        <>
                            <MTableBody {...props} />
                            {data.length> 0 && <TableBody>
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
        onRowDelete: handleDelete
      }}
    />
    )
}
