import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';
import { ListItemSecondaryAction } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    link: {
        verticalAlign: 'middle',
    },
}));

export const DisplayLink = ({ name, link, type, id }) => {
    const classes = useStyles();
    const ordinal = ["first", "second", "third", "forth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];

    return (
        <Typography className={classes.root}>
            <div className={classes.link}>
                <LinkIcon fontSize="small" className={classes.link}/>
                <Link href={link} underline='none' target='blank'>
                    {ordinal[id]}
                </Link>
            </div>
        </Typography>
    );
};