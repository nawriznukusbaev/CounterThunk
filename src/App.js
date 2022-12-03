import './App.css';
import React from 'react';
import {connect} from "react-redux";
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {DEC, INC} from "./store/actions";
import PropsToApp from "./contains";

const App = () => {
    return (
    <PropsToApp/>
    );
};

export default  App
