import card_data from '../data/card-data.json'
import bg_desktop from '../assets/bg_desktop.jpg'
import bg_mobile from '../assets/bg_mobile.jpg'
import React from "react";
import Card from "../components/Card";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./landing_styles";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

const LandingPage = () => {

    const classes = useStyles()

    return (
        <div>
            {isBrowser ? <div className={classes.background_image_cnt} style={{height: '15rem'}}>
                <img src={bg_desktop} alt={'pikachu'} className={classes.background_image}/>
            </div> :
                <div className={classes.background_image_cnt} style={{height: '100%'}}>
                    <img src={bg_mobile} alt={'pikachu'} className={classes.background_image}/>
                </div>
            }
            <Grid container style={{padding: '3rem'}}>
                <Grid container justify="center" spacing={4} className={classes.card_container}>
                    {card_data.pokemon.map(item => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Card
                                    name={item.name}
                                    moves={item.moves}
                                    image={item.image}
                                    stats={item.stats}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage
