import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import { Paper, Grid, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import Fecha from './Fecha'
import Logo from '../Imagenes/PaihuenLogo2.png'


const urlSeminario = 'https://commudus.web.app/ReservaApi?'

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        backgroundColor: "#fafafa",
        backgroundImage: `url(${Logo})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 270,
    },
})

class Reserva extends Component {

    constructor() {
        super();
        this.state = {
            checkIn: "",
            checkOut: "",
            huespedes: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.reederigir = this.reederigir.bind(this)
    }


    reederigir() {
        const id = "paihuen"
        const email = "paihuen@gmail.com"
        const checkIn = this.state.checkIn
        const checkOut = this.state.checkOut
        const huespedes = this.state.huespedes
        const precio = "6500"

        const url = urlSeminario +
            'id=' + id +
            '&email='+email+
            '&CheckIn=' + checkIn +
            '&CheckOut=' + checkOut +
            '&huespedes=' + huespedes +
            '&precio=' + precio
        window.location.replace(url)
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    callbackCheckIn = (x) => {
        this.setState({ checkIn: x })
    }
    callbackCheckOut = (x) => {
        this.setState({ checkOut: x })
    }


    render() {

        const { classes } = this.props;
        return (
            <Paper elevation={5} className={classes.paper}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <InputLabel>Fechas</InputLabel>
                        <Fecha label={"Check-in"} callbackFecha={this.callbackCheckIn} />
                    </Grid>
                    <Grid item>
                        <Fecha label={"Check-out"} callbackFecha={this.callbackCheckOut} />
                    </Grid>
                    <Grid item>
                        <InputLabel>Huéspedes</InputLabel>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>Huespedes</InputLabel>
                            <Select
                                label="Huespedes"
                                inputProps={{
                                    name: 'huespedes',
                                    id: 'huespedes',
                                }}
                                value={this.state.huespedes}
                                onChange={this.handleChange}
                            >

                                <MenuItem value={1}>1 Huesped</MenuItem>
                                <MenuItem value={2}>2 Huespedes</MenuItem>
                                <MenuItem value={3}>3 Huespedes</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button color="primary" size="large" variant="contained" onClick={this.reederigir}>Reservar</Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

Reserva.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Reserva);