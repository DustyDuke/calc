import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import React, { forwardRef } from "react";

export const materialTableIcons = {
    Add: forwardRef((props, ref) => {
        return <AddBox {...props} ref={ref} />;
    }),
    Check: forwardRef((props, ref) => {
        return <Check {...props} ref={ref} />;
    }),
    Clear: forwardRef((props, ref) => {
        return <Clear {...props} ref={ref} />;
    }),
    Delete: forwardRef((props, ref) => {
        return <DeleteOutline {...props} ref={ref} />;
    }),
    DetailPanel: forwardRef((props, ref) => {
        return <ChevronRight {...props} ref={ref} />;
    }),
    Edit: forwardRef((props, ref) => {
        return <Edit {...props} ref={ref} />;
    }),
    Export: forwardRef((props, ref) => {
        return <SaveAlt {...props} ref={ref} />;
    }),
    Filter: forwardRef((props, ref) => {
        return <FilterList {...props} ref={ref} />;
    }),
    FirstPage: forwardRef((props, ref) => {
        return <FirstPage {...props} ref={ref} />;
    }),
    LastPage: forwardRef((props, ref) => {
        return <LastPage {...props} ref={ref} />;
    }),
    NextPage: forwardRef((props, ref) => {
        return <ChevronRight {...props} ref={ref} />;
    }),
    PreviousPage: forwardRef((props, ref) => {
        return <ChevronLeft {...props} ref={ref} />;
    }),
    ResetSearch: forwardRef((props, ref) => {
        return <Clear {...props} ref={ref} />;
    }),
    Search: forwardRef((props, ref) => {
        return <Search {...props} ref={ref} />;
    }),
    SortArrow: forwardRef((props, ref) => {
        return <ArrowUpward {...props} ref={ref} />;
    }),
    ThirdStateCheck: forwardRef((props, ref) => {
        return <Remove {...props} ref={ref} />;
    }),
    ViewColumn: forwardRef((props, ref) => {
        return <ViewColumn {...props} ref={ref} />;
    }),
};
