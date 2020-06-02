import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TextFieldCom, ButtonCom } from './FormComponents';


const useStyles = makeStyles((theme) => ({
    form: {
        margin: theme.spacing(3, 2),
        position: "relative",
        alignContent: "center"
    }
}));
export const UploadLinks = ({addLink}) => {
    const [link, setLink] = useState("");
    const handleLinkChange = (e) => {
        setLink(e.target.value);
    };

    const handleClickUploadLink = (e) => {
        addLink(link);
        setLink("");
    };
    const classes = useStyles();
    return (
        <form className={classes.form} noValidate autoComplete="off">
                <TextFieldCom label="Link to share" handleChange={handleLinkChange} maxLength="30" s="urlField" />
                <ButtonCom name="Add" handleClick={handleClickUploadLink} s="urlButton"/>
        </form>
    );
};