import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextFieldCom, ButtonCom } from './FormComponents';


const useStyles = makeStyles((theme) => ({
    form: {
        margin: theme.spacing(3, 2),
        position: "relative",
        alignContent: "center"
    }
}));

export default function DisplayCode({ code, setCode }) {
    const [c, setC] = useState(code)
    const handleChange = (e) => {
        setButtonType(1)
        setC(e.target.value);

    };

    const handleClickCopy = (e) => {
        console.log(e);
    };

    const handleClickLoad = (e) => {
        setCode(c);
    };

    const classes = useStyles();
    const [buttonType, setButtonType] = useState(0);

    return (
        <form className={classes.form} noValidate autoComplete="off">
                <TextFieldCom label="Code" value={code} handleChange={handleChange} maxLength={3} s="codeField" />
                { buttonType === 0 && <ButtonCom name="copy url" handleClick={handleClickCopy} s="codeButton"/>}
                { buttonType === 1 && <ButtonCom name="load" handleClick={handleClickLoad} s="codeButton"/>}
        </form>
    );
}