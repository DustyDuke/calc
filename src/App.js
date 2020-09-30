import React from "react"
import ListTable from "./components/ListTable"
import Box from '@material-ui/core/Box';
import {PropertiesProvider} from "./PropertiesContext";
import {makeStyles} from "@material-ui/core/styles";


function App() {
    const useStyles = makeStyles((theme) => ({
    initialHeight: {
      minHeight: '95vh',
    },
}));
 const classes = useStyles();
      return (
          <PropertiesProvider>
        <Box p={3} className={classes.initialHeight}>
               <Box mb={5}>
            <h1>Калькулятор КБЖУ</h1>
            <h3 variant='subtitle1'>Для любителей готовить фитоняшные вкусняшки</h3>
               </Box>
         <ListTable />
         </Box>
          </PropertiesProvider>
     )
    }

export default App