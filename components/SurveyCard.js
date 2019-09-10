import React, { Fragment, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '../src/Link';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

import gatsby_head from '../images/gatsby1.jpg'
import eforest_head from '../images/eforest1.jpg' 
import bnw_head from '../images/bnw1.jpg'
import cirq_head from '../images/cirq1.jpg'

export default function SurveyCard(props) {
    const classes = useStyles();
    const handleClickOpen = props.handleClickOpen;

    return (
        <Fragment>
            <Grid item key={1} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={gatsby_head}
                    title="Gatsby"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Gatsby
                    </Typography>
                    <Typography>
                        Glitz & Glam Sparkles 1920's vintage
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href="/gatsby">
                        <Button size="small" color="primary">
                            View
                        </Button>
                    </Link>
                    <Button size="small" color="primary" onClick={() => handleClickOpen({ survey_id: 'Gatsby'})} >
                        I want this!
                    </Button>        
                </CardActions>
                </Card>
            </Grid>

            <Grid item key={2} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={eforest_head}
                    title="EnchantedForest"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Enchanted Forest
                    </Typography>
                    <Typography>
                        Leaves, Trees and Flowers. Fairy Lights and Whimsical Touches
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href="/enchantedforest">
                        <Button size="small" color="primary">
                            View
                        </Button>
                    </Link>
                    <Button size="small" color="primary" onClick={() => handleClickOpen({ survey_id: 'Enchanted-Forest'})} >
                        I want this!
                    </Button>        
                </CardActions>
                </Card>
            </Grid>

            <Grid item key={3} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={bnw_head}
                    title="Black And White"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Black & White
                    </Typography>
                    <Typography>
                        Formal Elegant Black & White
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href="/blackandwhite">
                        <Button size="small" color="primary">
                            View
                        </Button>
                    </Link>

                    <Button size="small" color="primary" onClick={() => handleClickOpen({ survey_id: 'Black-and-White'})} >
                        I want this!
                    </Button>        
                </CardActions>
                </Card>
            </Grid>

            <Grid item key={4} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={cirq_head}
                    title="Cirque Du Soleil"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Cirque Du Soleil
                    </Typography>
                    <Typography>
                        Circus & Carnivals. Colorful, Avant Garde & Unique
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href="/cirquedusoleil">
                        <Button size="small" color="primary">
                            View
                        </Button>
                    </Link>
                    <Button size="small" color="primary" onClick={() => handleClickOpen({ survey_id: 'Cirque-Du-Soleil'})} >
                        I want this!
                    </Button>        
                </CardActions>
                </Card>
            </Grid>
        </Fragment>
    )
}