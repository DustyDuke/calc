import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    initialHeight: {
        minHeight: '95vh',
    },
    infoText: {
        color: theme.palette.text.hint,
        fontSize: 12,
    },
    myLink: {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightBold,
    },
    dialogContent: {
        overflowY: 'hidden',
    },
    iconClose: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    formFields: {
        width: '100%',
    },
}));
