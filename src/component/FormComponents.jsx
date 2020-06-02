import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    codeButton: {
        margin: theme.spacing(3, 2),
        width: '29ch',
        height: '55px',
        float: 'right',
    },
    urlButton: {
        margin: theme.spacing(3, 2),
        width: '9ch',
        height: '55px',
        float: 'right',
    },
    codeField: {
        margin: theme.spacing(3, 2),
        width: '8ch',
    },
    urlField: {
        margin: theme.spacing(3, 2),
        width: '35ch',
    },
}));

export const TextFieldCom = ({label, value, handleChange, maxLength, s}) => {
    const classes = useStyles();
    return (
        <TextField 
            className={classes[s]}
            inputProps={{maxLength: {maxLength}}} 
            id="outlined-basic" 
            label={label} 
            variant="outlined" 
            defaultValue={value} 
            onChange={handleChange}
        />
    );
};

export const ButtonCom = ({name, handleClick, s}) => {
    const classes = useStyles();
    return (
        <Button 
            className={classes[s]}
            variant="outlined" 
            size="large"
            onClick={handleClick}
        >
            {name}
        </Button>
    );
};