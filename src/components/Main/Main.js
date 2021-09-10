import React from 'react'
import {Card,CardHeader,CardContent,Grid,Divider} from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';

const Main = () => {
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powdered by Speechly"/>
        </Card>
    )
}

export default Main
