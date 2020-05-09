import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import fondohome from '../Imagenes/fondohome.jpg'

const styles = theme => ({
    fondo: {
        background: `url(${fondohome}) no-repeat center center fixed`,
        backgroundSize: "cover",
        minHeight: "100%",
    },
    botones: {
        color: "#ffffff",
        fontFamily: "Oswald, sans-serif",
        fontWeight: "bold",
        fontSize: "20px",
    },
    titulo: {
        color: "#ffffff",
        fontFamily: "Oswald, sans-serif",
        fontWeight: "bold",
    },
    subtitulo: {
        color: "#ffffff",
        fontFamily: "Montserrat, sans-serif",
    },
    barra: {
        marginTop: theme.spacing(10)
    },
    lineas: {
        height: "2px",
        backgroundColor: "white"
    },
    espacio:{
        marginBottom:theme.spacing(75),
    }
})

class Home extends Component {



    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.fondo} justify="center">
                <Grid item xs={9}>
                    <Grid container justify="center" direction="row" alignItems="center" className={classes.barra}>
                        <Grid item xs={1}>
                            <Button className={classes.botones}>Home</Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button className={classes.botones}>Servicios</Button>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography variant="h3" align="center" className={classes.titulo} >PAIHUEN GLAMPING</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Button className={classes.botones}>Domos</Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button className={classes.botones}>Reservas</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <hr className={classes.lineas} />
                </Grid>
                <Grid item xs={5} className={classes.espacio}>
                    <Typography variant="h6" align="center" className={classes.subtitulo} >San Carlos de Bariloche, Argentina</Typography>
                </Grid>
            </Grid>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);