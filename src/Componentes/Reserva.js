import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component, } from 'react';
import { Paper, Grid, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import Fecha from './Fecha'
import Logo from '../Imagenes/PaihuenLogo2.png'


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
    render() {

        const { classes } = this.props;
        return (
            <Paper elevation={5} className={classes.paper}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <InputLabel>Fechas</InputLabel>
                        <Fecha label={"Check-in"} />
                    </Grid>
                    <Grid item>
                        <Fecha label={"Check-out"} />
                    </Grid>
                    <Grid item>
                        <InputLabel>Huéspedes</InputLabel>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>Huespedes</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"

                                label="Huespedes"
                            >
                               
                                <MenuItem value={10}>1 Huesped</MenuItem>
                                <MenuItem value={20}>2 Huespedes</MenuItem>
                                <MenuItem value={30}>3 Huespedes</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button color="primary" size="large" variant="contained">Reservar</Button>
                    </Grid>
                    <Grid item>

                    </Grid>
                    <Grid item>

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