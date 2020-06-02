import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { sizing } from '@material-ui/system';
import { ReadCode } from './ReadCode';
import Divider from '@material-ui/core/Divider';
import DisplayCode from './DisplayCode';
import {UploadLinks} from './UploadLinks';
import { addLinkToCodeObject } from '../Service/FirebaseModule';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        width: 500
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export const GridLayout = ({code, setCode}) => {
    const [spacing, setSpacing] = useState(2);
    const classes = useStyles();
    const [codeObj, setCodeObj] = useState({});

    const addLink = (link) => {
        const linkObj = {
            link: link,
            type: 0
        };
        addLinkToCodeObject(code, linkObj, codeObj);
    };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    <Grid key='1' item>
                        <Paper className={classes.paper}>
                            <p>Sometimes we would like to share files/links with our friends/devices very quickly, This is the securest way.</p>
                            {/* <Divider variant="middle" /> */}
                            <DisplayCode code={code} setCode={setCode} />
                            <UploadLinks addLink={addLink}/>
                            <ReadCode code={code} codeObj={codeObj} setCodeObj={setCodeObj} />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};