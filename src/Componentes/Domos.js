import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, Toolbar, AppBar, Button } from '@material-ui/core';
import FotosDomo from './FotosDomo';
import Fade from 'react-reveal/Fade';


const styles = theme => ({
    fondo: {
        backgroundColor: " #141c11",
    },
    titulo: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "bold",
        color: "#ffffff",
    },
    barraBajo: {
        borderBottom: "8px solid #dbc885",
        marginBottom: theme.spacing(1)
    },
    barra: {
        backgroundColor: "#698067",
    },
    textoBotones: {
        fontFamily: "Roboto, sans-serif",
        color: "#ffffff",
        width: 200,
        fontSize: "20px",
    },
    izquierda: {
        padding: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(4),

        marginTop: theme.spacing(10),
    },
    texto: {
        fontFamily: "Roboto, sans-serif",
        color: "#ffffff",
    }


})

class Domos extends Component {

    constructor() {
        super();
        this.state = {
            coihue: true,
            lenga: false,
            arrayan: false,
        }
    }

    coihue = () => {
        this.setState({ coihue: true, lenga: false, arrayan: false })
    }
    lenga = () => {
        this.setState({ coihue: false, lenga: true, arrayan: false })
    }
    arrayan = () => {
        this.setState({ coihue: false, lenga: false, arrayan: true })
    }

    texto() {
        const { classes } = this.props;
        if (this.state.coihue)
            return (
                <Fade right>
                    <Typography variant="h4" align="left" className={classes.titulo}>Coihue</Typography>
                    <Typography variant="h5" align="left" className={classes.texto}>
                        Cuenta con capacidad para 2 personas en cama twin o doble. <br />
                            Ropa de cama completa.<br />
                            Estufa a leña.<br />
                            Amenities sustentables.<br />
                            Baño privado.
                        </Typography>
                </Fade>
            )
        else
            if (this.state.lenga)
                return (
                    <Fade right>
                        <Typography variant="h4" align="left" className={classes.titulo}>Lenga</Typography>
                        <Typography variant="h5" align="left" className={classes.texto}>
                            Cuenta con capacidad para 2 personas en cama twin o doble.<br />
                                Posibilidad de adicionar una cama individual.<br />
                                Ropa de cama completa.<br />
                                Estufa a leña.<br />
                                Amenities sustentables.<br />
                                Baño privado.<br />
                                Frigo bar e hidromasaje.
                             </Typography>
                    </Fade>
                )
            else
                if (this.state.arrayan)
                    return (
                        <Fade right>
                            <Typography variant="h4" align="left" className={classes.titulo}>Arrayan</Typography>
                            <Typography variant="h5" align="left" className={classes.texto}>
                                Cuenta con capacidad para 2 personas en cama twin o doble.<br />
                                    Posibilidad de adicionar una cama individual.<br />
                                    Ropa de cama completa.<br />
                                    Estufa a leña.<br />
                                    Amenities sustentables.<br />
                                    Baño privado y frigo bar.
                                   </Typography>
                        </Fade>
                    )
    }



    render() {
        const { classes } = this.props;
        return (
            <section id="domos">
                <Grid container className={classes.fondo}>

                    <Grid item md={7} >
                        <Grid container justify="center" alignItems="center" className={classes.izquierda}  >
                            <Grid item md={12} className={classes.barraBajo}>
                                <Typography variant="h3" align="center" className={classes.titulo}> Domos</Typography>
                            </Grid>
                            <Grid item md={12} >
                                <AppBar position="static" className={classes.barra}>
                                    <Toolbar>
                                        <Grid container direction="row" justify="center" alignItems="center">
                                            <Grid item md={3}>
                                                <Button size="large" className={classes.textoBotones} onClick={this.coihue} >COIHUE</Button>
                                            </Grid>
                                            <Grid item md={3}>
                                                <Button size="large" className={classes.textoBotones} onClick={this.arrayan} >ARRAYAN</Button>
                                            </Grid>
                                            <Grid item md={3}>
                                                <Button size="large" className={classes.textoBotones} onClick={this.lenga} >LENGA</Button>
                                            </Grid>
                                        </Grid>
                                    </Toolbar>
                                </AppBar>

                            </Grid>
                            <Grid item md={10}>
                                <Grid className={classes.paper}>
                                    {this.texto()}
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={5}>
                        <FotosDomo />
                    </Grid>

                </Grid>
            </section>
        );
    }
}

Domos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Domos);