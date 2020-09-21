import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Grid, Typography, Button, IconButton } from '@material-ui/core';
import fondohome from '../Imagenes/fondohome.jpg'
import { Link } from "react-scroll";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Reserva from './Reserva';

const useStyles = makeStyles(theme => ({
    fondo: {
        background: `url(${fondohome}) no-repeat center center fixed`,
        backgroundSize: "cover",
        minHeight: "100%",
        [theme.breakpoints.down('xs')]: {
            alignItems: "center",
            justify: "center"
        },
    },
    botones: {
        color: "#ffffff",
        fontFamily: "Roboto, sans-serif",
        fontSize: "20px",
    },
    titulo: {
        color: "#ffffff",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "bold",
    },
    subtitulo: {
        color: "#ffffff",
        fontFamily: "Montserrat, sans-serif",
    },
    barra: {
        marginTop: theme.spacing(10),
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    barraMobile: {
        marginTop: theme.spacing(2),
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    lineas: {
        height: "2px",
        backgroundColor: "white"
    },
    espacio: {
        marginBottom: theme.spacing(15),
    },
    reserva: {
        marginBottom: theme.spacing(5),
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    reservaMobile: {
        marginBottom: theme.spacing(4),
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }
}));

export default function ReservaRender(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.fondo} direction="column">
            <Grid item md={12} xs={12}>
                <Grid container justify="center">
                    <Grid item xs={12} md={9}>
                        <Grid container direction="row" justify="center" alignItems="flex-end" className={classes.barra}>
                            <Grid item md={1}>
                                <Link to="home" smooth={true}>
                                    <Button className={classes.botones}>Home</Button>
                                </Link>
                            </Grid>
                            <Grid item md={1}>
                                <Link to="servicios" smooth={true}>
                                    <Button className={classes.botones}>Servicios</Button>
                                </Link>
                            </Grid>
                            <Grid item md={8}>
                                <Typography variant="h3" align="center" className={classes.titulo} >PAIHUEN GLAMPING</Typography>
                            </Grid>
                            <Grid item md={1}>
                                <Link to="domos" smooth={true}>
                                    <Button className={classes.botones}>Domos</Button>
                                </Link>
                            </Grid>
                            <Grid item md={1}>
                                <Link to="reservas" smooth={true}>
                                    <Button className={classes.botones}>Contacto</Button>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" direction="column" alignItems="center" className={classes.barraMobile}>
                            <Grid item xs={12} >
                                <Typography variant="h3" align="center" className={classes.titulo} >PAIHUEN GLAMPING</Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={10} md={10}>
                        <hr className={classes.lineas} />
                    </Grid>
                    <Grid item xs={10} md={5} className={classes.espacio}>
                        <Typography variant="h6" align="center" className={classes.subtitulo} >San Carlos de Bariloche, Argentina</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={11} xs={11} className={classes.reserva}  >
                <Grid container alignItems="flex-end" justify="flex-end">
                    <Reserva />
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.reservaMobile}  >
                <Grid container direction="column" alignItems="center" justify="center">
                    <Grid item xs={12}>
                        <Reserva />
                    </Grid>

                </Grid>
            </Grid>
            <Grid item md={6} xs={12} >
                <Grid container direction="row" justify="flex-start" alignItems="flex-end" >
                    <Grid item md={1} xs={4}>
                        <IconButton>
                            <FacebookIcon fontSize="large" style={{ color: "#ffffff" }} />
                        </IconButton>

                    </Grid>
                    <Grid item md={1} xs={4}>
                        <IconButton>
                            <InstagramIcon fontSize="large" style={{ color: "#ffffff" }} />
                        </IconButton>

                    </Grid>
                    <Grid item md={1} xs={4}>
                        <IconButton>
                            <WhatsAppIcon fontSize="large" style={{ color: "#ffffff" }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
