import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormTable from "./FormTable";
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core/styles";


export default function Modal(props) {

const { isOpen, modalOpen, properties, setProperties } = props
const useStyles = makeStyles(() => ({
    dialogContent: {
      overflowY: 'hidden',
    },
    iconClose: {
    position: 'absolute',
    right: 10,
    top: 10,
    },
}));
const classes = useStyles();

const handleClickOpen = () => {
    modalOpen(true);
    };

const handleClose = () => {
    modalOpen(false);
    };

return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}><AddIcon />
        Добавить продукт
      </Button>
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Добавить ингридиент</DialogTitle>
        <CloseIcon onClick={handleClose}  className={classes.iconClose} />
        <DialogContent className={classes.dialogContent}>
          <DialogContentText>
            Заполните параметры продукта
          </DialogContentText>
            <FormTable modalOpen={modalOpen} properties={properties} setProperties={setProperties}/>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
