import {Paper, Grid, Typography} from "@material-ui/core";
import React from "react";
import {Divider} from '@material-ui/core';
import {useStyles} from "./styles";

const Card = (props) => {

    const classes = useStyles()

    return (
        <Grid container direction={'column'} alignItems={'center'} className={classes.container}>

            <Grid item xs={12}>
                <Paper className={classes.paper_img}>
                    <img src={props.image} alt={props.name}/>
                </Paper>
            </Grid>

            <Typography className={classes.name}>{props.name}</Typography>

            <Grid container xs={12} justify={'center'} style={{marginBottom: 15}}>

                <Grid container xs={5} direction='column' alignItems={'center'}>
                    <Typography style={{marginBottom: 10}}>Moves</Typography>
                    <Grid item>
                        {props.moves.map(move => <Typography style={{fontSize: 14}}>‣ {move}</Typography>)}
                    </Grid>
                </Grid>
                <Grid item>
                    <Divider orientation="vertical"/>
                </Grid>

                <Grid container xs={5} direction='column' alignItems={'center'}>
                    <Typography style={{marginBottom: 10}}>Stats</Typography>
                    <Grid container direction={'row'} justify={'center'}>
                        <Typography className={classes.stats_text}>speed:</Typography>
                        <Typography className={classes.stats_number}>{props.stats.speed}</Typography>
                    </Grid>
                    <Grid container direction={'row'} justify={'center'}>
                        <Typography className={classes.stats_text}>attack:</Typography>
                        <Typography className={classes.stats_number}>{props.stats.attack}</Typography>
                    </Grid>
                    <Grid container direction={'row'} justify={'center'}>
                        <Typography className={classes.stats_text}>defense:</Typography>
                        <Typography className={classes.stats_number}>{props.stats.defense}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Card
