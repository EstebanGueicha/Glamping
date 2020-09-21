import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import reserva from '../Imagenes/reserva.jpg'
import Slide from 'react-reveal/Slide';

const useStyles = makeStyles(theme => ({
    fondo: {
        backgroundColor: "#CECFC3",
    },
    main: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(4),
    },
    formulario: {
        marginTop: theme.spacing(4)
    },
    boton: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
}));

export default function Contacto(props) {
    const classes = useStyles();
    return (
        <section id="reservas">
            <Grid container direction="row">
                <Grid item className={classes.sectionDesktop} md={5}>
                    <img src={reserva} alt="reserva" height="100%" width="100%" />
                </Grid>
                <Grid item md={7} xs={12} className={classes.fondo}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item md={12} xs={12} className={classes.main}>
                            <Slide bottom>
                                <Typography variant="h3" style={{ fontWeight: 'bold', fontFamily: "Montserrat, sans-serif", }} color="secondary" >¡Contactanos!</Typography>
                            </Slide>
                        </Grid>
                        <Grid item md={8} xs={9}>
                            <Slide bottom>
                                <Typography variant="h6" align="justify" style={{ color: '#757575', lineHeight: '1',fontFamily: "Roboto, sans-serif" }}>
                                    Nuestro equipo responderá a todos los mensajes dentro de las 24 horas. Por favor comprueba la carpeta de
                                    Spam si es que no ves nuestra respuesta.
                            </Typography>
                            </Slide>
                        </Grid>
                        <Grid item md={12} xs={12} className={classes.formulario} >
                            <Grid container direction="row" justify="center" alignItems="center"  >
                                <Grid item md={7} xs={9} >
                                    <Slide bottom>
                                        <TextField
                                            variant="filled"
                                            color="secondary"
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            label="Nombre"
                                            name="correo"
                                            type="correo"
                                            style={{ background: "#ffffff" }}
                                        //value={this.state.correo}
                                        //onChange={this.handleChange}
                                        />
                                    </Slide>
                                </Grid>
                                <Grid item md={7} xs={9} >
                                    <Slide bottom>
                                        <TextField
                                            variant="filled"
                                            color="secondary"
                                            style={{ background: "#ffffff" }}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            label="E-mail"
                                            name="correo"
                                            type="correo"
                                        //value={this.state.correo}
                                        //onChange={this.handleChange}
                                        />
                                    </Slide>
                                </Grid>
                                <Grid item md={7} xs={9}>
                                    <Slide bottom>
                                        <TextField
                                            variant="filled"
                                            color="secondary"
                                            style={{ background: "#ffffff" }}
                                            margin="normal"
                                            fullWidth
                                            size="small"
                                            label="Tema"
                                            name="correo"
                                            type="correo"
                                        //value={this.state.correo}
                                        //onChange={this.handleChange}
                                        />
                                    </Slide>
                                </Grid>
                                <Grid item md={7} xs={9}>
                                    <Slide bottom>
                                        <TextField
                                            variant="filled"
                                            color="secondary"
                                            style={{ background: "#ffffff" }}
                                            margin="normal"
                                            fullWidth
                                            label="Como te podemos ayudar? "
                                            name="correo"
                                            type="correo"
                                            multiline
                                            rows="4"
                                        // value={this.state.correo}
                                        //onChange={this.handleChange}
                                        />
                                    </Slide>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Grid container direction="column" justify="flex-end" alignItems="center">
                                <Grid item md={12} xs={12} className={classes.boton}>
                                    <Slide bottom>
                                        <Button variant="contained" color="primary" size="large">Enviar</Button>
                                    </Slide>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
}