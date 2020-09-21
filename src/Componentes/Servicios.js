import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Galeria from './Galeria'

const useStyles = makeStyles(theme => ({
    fondo: {
        backgroundColor: "#CECFC3",
      
    },
    titulo: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "bold",
    },
    subtitulo: {
        fontFamily: "Roboto, sans-serif",
    },
    barraBajo: {
        borderBottom: "8px solid #dbc885",
        marginTop: theme.spacing(2),
    },
    textos: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}));

export default function ReservaRender(props) {
    const classes = useStyles();

    return (
        <section id="servicios">
            <Grid container className={classes.fondo}>
                <Grid item md={12} className={classes.barraBajo}>
                    <Grid container direction="row" justify="center" alignItems="flex-end" className={classes.textos}>
                        <Grid item md={3}>
                            <Typography variant="h3" color="secondary" className={classes.titulo}>Servicios</Typography>
                        </Grid>
                        <Grid item md={8}>
                            <Typography variant="h5" className={classes.subtitulo}>Te brindamos todas las comodidades para que puedas disfrutar de la naturaleza sin preocuparte por nada. </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} className={classes.textos}>
                    <Galeria />
                </Grid>
            </Grid>
        </section>
    );
}