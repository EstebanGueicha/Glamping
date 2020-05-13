import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Domovirtual from './Domovirtual';
//import Domo1 from '../Imagenes/domo1.png'
//import Domo2 from '../Imagenes/domo2.png'

const styles = theme => ({
    fondo: {
        backgroundColor: " #d7c47c",
    },
    cinco: {
        marginTop: theme.spacing(5)
    },
    titulo: {

        fontFamily: "Oswald, sans-serif",
        fontWeight: "bold",
    },
    domo: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    domoMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    }
})

class Domos extends Component {
    render() {
        const { classes } = this.props;
        return (
            <section id="domos">
                <Grid container direction="column" className={classes.fondo}>

                    {/*<Grid item md={12}>
                        <Grid container direction="row" justify="flex-start" >
                            <Grid item md={4}>
                                <img src={Domo1} alt="domo1" width="400" height="400" />
                            </Grid>
                            <Grid item md={2}>
                                <Typography variant="h3">Domos Vip</Typography>
                            </Grid>
                            
                            <Grid item md={2}>
                                <Typography variant="h3">Domos Estandard</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <img src={Domo2} alt="domo2" width="400" height="400" />
                            </Grid>
                        </Grid>
                    </Grid>
                    */}


                    <Grid item md={12} className={classes.cinco}>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item md={12}>
                                <Typography variant="h3" align="center" color="secondary" className={classes.titulo}>Vista virtual de un Domo</Typography>
                            </Grid>
                            <Grid item md={12} className={classes.domo}>
                                <Paper elevation={10}>
                                    <Domovirtual width={"640"} height={"480"} />
                                </Paper>
                            </Grid>
                            <Grid item md={12} className={classes.domoMobile}>
                                <Paper elevation={10}>
                                    <Domovirtual width={"300"} height={"200"} />
                                </Paper>
                            </Grid>

                        </Grid>
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