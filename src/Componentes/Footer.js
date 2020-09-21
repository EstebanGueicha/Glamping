import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Pago from '../Imagenes/Pago.PNG'
import Logo from '../Imagenes/PaihuenLogo.png'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),

  },
  legal: {
    width: '80px',
    height: '100px',
    margin: '5px',
  },
  barra: {
    backgroundColor: '#212121'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    textAlign: 'center',
  },
  iconos: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  footer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2)
  },
  subs: {
    marginBottom: theme.spacing(1),
    fontWeight: 'bold'
  }
}));

export default function ReservaRender(props) {
  const classes = useStyles();
  return (
    <Grid>
      <Grid className={classes.sectionDesktop}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={12} className={classes.footer}>
            <Grid container direction="row" justify="center" alignItems="flex-start">
              <Grid item md={3}>
                <Grid container direction="column" justify="center" alignItems="flex-start">
                  <Grid item md>
                    <Typography variant="subtitle1" color="secondary" align="left" className={classes.subs} >
                      Sobre Nosotros
                      </Typography>
                  </Grid>
                  <Grid item md>
                    <Typography variant="subtitle2" align="left" style={{ color: '#767676' }} >
                      Razon Social:<br />
                        Paihuen Glamping S.R.L<br />
                        CUIT: 27-40123569-2<br />
                        Ministerio de Turismo de la Nación<br />
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>
              <Grid item md={3}>
                <Grid container direction="column" justify="center" alignItems="center">
                  <img src={Logo} alt="Logo" height="50%" width="50%" />
                </Grid>
              </Grid>
              <Grid item md={3}>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Grid item md={12}>
                    <Typography variant="subtitle1" color="secondary" className={classes.subs}>Metodo de pago</Typography>
                  </Grid>
                  <Grid item md={12}>
                    <img src={Pago} alt={Pago} height="100%" width="100%" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={11}>
            <Grid container direction="row">
              <Grid item md={6}>
                <Typography variant="h6" style={{ color: '#767676' }} align="left">
                  Glamping Paihuen
                  </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h6" style={{ color: '#767676' }} align="right">
                  Copyright - 2020
                  </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.sectionMobile}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} className={classes.footer}>
            <Grid container direction="row" justify="center" alignItems="center">
              <Grid item xs={12}>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" color="secondary" align="center" className={classes.subs} >
                      Sobre Nosotros
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" align="center" style={{ color: '#767676' }} >
                      Razon Social:<br />
                        Paihuen Glamping S.R.L<br />
                        CUIT: 27-40123569-2<br />
                        Ministerio de Turismo de la Nación<br />
                    </Typography>
                  </Grid>

                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" color="secondary" className={classes.subs}>Metodo de pago</Typography>
                  </Grid>
                  <Grid item xs={11}>
                    <img src={Pago} alt={Pago} height="100%" width="100%" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="column" justify="center" alignItems="center">
                  <img src={Logo} alt="Logo" height="55%" width="55%" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11}>
            <Grid container direction="row">
              <Grid item xs={6}>
                <Typography variant="body2" style={{ color: '#767676' }} align="left">
                  Glamping Paihuen
                  </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" style={{ color: '#767676' }} align="right">
                  Copyright - 2020
                  </Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}
