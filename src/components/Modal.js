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
import {useDispatch, useSelector} from 'react-redux'

import {modalOpen,modalClose} from '../redux/actions'

export default function Modal() {

const dispatch = useDispatch()
const isOpen = useSelector(state => state.modalState.isOpen)

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
 dispatch(modalOpen())
    };

const handleClose = () => {
 dispatch(modalClose())
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
            <FormTable />
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
