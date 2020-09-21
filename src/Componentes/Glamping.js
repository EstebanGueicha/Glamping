import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, ButtonBase } from '@material-ui/core';
import foto1 from '../Imagenes/foto1.jpg';
import foto2 from '../Imagenes/foto2.jpg';
import foto3 from '../Imagenes/foto3.jpg';
import foto4 from '../Imagenes/foto4.jpg';
import Fade from 'react-reveal/Fade';
import Domo from '../Imagenes/Domo.png'

const useStyles = makeStyles(theme => ({
    fondo: {
        backgroundColor: "#141c11",
        direction:"row",
        [theme.breakpoints.down('xs')]: {
            direction:"column",
            alignItems:"center",
            justify:"center",
        },
    },
    titulo: {
        color: "#ffffff",
        fontFamily: "Montserrat, sans-serif",
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(4),
        align:"left",
        marginLeft: theme.spacing(5),
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(0),
            textAlign:"center",
        },
    },
    abajo: {
        marginBottom: theme.spacing(4),
    },
    subtitulo: {
        color: "#ffffff",
        fontFamily: "Roboto, sans-serif",
        marginBottom: theme.spacing(4),
        textAlign:"center",
        marginLeft: theme.spacing(20),
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(0),
            textAlign:"center",
        },
    },
    image: {
        position: 'relative',
        height: 450,
        [theme.breakpoints.down('xs')]: {
            width: "100%", // Overrides inline-style
            height: 400,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
           
            '& $imageBackdrop': {
                opacity: 0.6,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
                display:"block",
            },
        },
    },
    
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      },
      imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0,
        transition: theme.transitions.create('opacity'),
      },
      imageTitle: {
        position: 'relative',
        display:"none",
        fontFamily: "Montserrat, sans-serif",
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(2)}px`,
      },
      imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      },
      imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
      },
      fotos:{
        direction:"row",
        [theme.breakpoints.down('xs')]: {
            direction:"column",
        },
      },
      domito:{
        height:60,
        width:80,

      }
}));

export default function ReservaRender (props){
    const classes = useStyles();
    return (
        <section id="home">
            <Grid container  alignItems="center" className={classes.fondo}>
                <Grid item md={6} xs={12}>
                    <Grid container direction="row"  alignItems="center" spacing={2}>
                        <Grid item>
                            <Typography variant="h3"  className={classes.titulo}>Glamping</Typography>
                        </Grid>
                        <Grid item>
                            <img src={Domo} alt="Domo" className={classes.domito}/>
                         </Grid>
                    </Grid>                      
                </Grid>
                <Grid item md={10}  xs={12}>
                    <Typography variant="h5" className={classes.subtitulo} >
                    "Reconectar con la naturaleza sin perder el confort, vivir la aventura sin resignar el lujo.<br/> 
                    Te invitamos a probar una experiencia diferente"
                 </Typography>
                </Grid>
                <Grid item md={12}  xs={12}>
                    <Grid container justify="center" alignItems="center" direction="column" >
                        <Grid item md={12}  xs={10} className={classes.abajo}>
                            <Grid container  justify="center" alignItems="center" spacing={2}  className={classes.fotos}>
                                <Grid item md={3}  xs={12} >
                                    <Fade bottom >                                       
                                        <ButtonBase
                                            focusRipple
                                            className={classes.image}
                                            focusVisibleClassName={classes.focusVisible}
                                            style={{
                                                width: "300px"
                                            }}
                                        >
                                            <span
                                                className={classes.imageSrc}
                                                style={{
                                                    backgroundImage: `url(${foto1})`,
                                                }}
                                            />
                                            <span className={classes.imageBackdrop} >                                                
                                            </span>
                                            <span className={classes.imageButton}>
                                            <Fade bottom >
                                                <Typography
                                                    component="span"
                                                    variant="subtitle1"
                                                    color="inherit"
                                                    className={classes.imageTitle}
                                                >
                                                    Descubrí la noche <br/> 
                                                    patagónica.
                                                  
                                                </Typography>
                                            </Fade>
                                            </span>
                                        </ButtonBase>                                        
                                    </Fade>
                                </Grid>
                                <Grid item md={3}  xs={12}>
                                    <Fade bottom delay={500}>                                   
                                    <ButtonBase
                                            focusRipple
                                            className={classes.image}
                                            focusVisibleClassName={classes.focusVisible}
                                            style={{
                                                width: "300px"
                                            }}
                                        >
                                            <span
                                                className={classes.imageSrc}
                                                style={{
                                                    backgroundImage: `url(${foto2})`,
                                                }}
                                            />
                                            <span className={classes.imageBackdrop} >                                                
                                            </span>
                                            <span className={classes.imageButton}>
                                            <Fade bottom >
                                                <Typography
                                                    component="span"
                                                    variant="subtitle1"
                                                    color="inherit"
                                                    className={classes.imageTitle}
                                                >
                                                    Amanecé en un <br/> 
                                                    paisaje único.
                                                </Typography>
                                            </Fade>
                                            </span>
                                        </ButtonBase>                                      
                                    </Fade>
                                </Grid>
                                <Grid item md={3}  xs={12}>
                                    <Fade bottom delay={1000}>                                    
                                    <ButtonBase
                                            focusRipple
                                            className={classes.image}
                                            focusVisibleClassName={classes.focusVisible}
                                            style={{
                                                width: "300px"
                                            }}
                                        >
                                            <span
                                                className={classes.imageSrc}
                                                style={{
                                                    backgroundImage: `url(${foto3})`,
                                                }}
                                            />
                                            <span className={classes.imageBackdrop} >                                                
                                            </span>
                                            <span className={classes.imageButton}>
                                            <Fade bottom >
                                                <Typography
                                                    component="span"
                                                    variant="subtitle1"
                                                    color="inherit"
                                                    className={classes.imageTitle}
                                                >
                                                    Renová tu energia.
                                                  
                                                </Typography>
                                            </Fade>
                                            </span>
                                        </ButtonBase>                                       
                                    </Fade>
                                </Grid>
                                <Grid item md={3}  xs={12}>
                                    <Fade bottom delay={2000}>                                   
                                    <ButtonBase
                                            focusRipple
                                            className={classes.image}
                                            focusVisibleClassName={classes.focusVisible}
                                            style={{
                                                width: "300px"
                                            }}
                                        >
                                            <span
                                                className={classes.imageSrc}
                                                style={{
                                                    backgroundImage: `url(${foto4})`,
                                                }}
                                            />
                                            <span className={classes.imageBackdrop} >
                                                
                                            </span>
                                            <span className={classes.imageButton}>
                                            <Fade bottom >
                                                <Typography
                                                    component="span"
                                                    variant="subtitle1"
                                                    color="inherit"
                                                    className={classes.imageTitle}
                                                >
                                                  Sumergite en la<br/> 
                                                   naturaleza.
                                                  
                                                </Typography>
                                            </Fade>
                                            </span>
                                        </ButtonBase>                                        
                                    </Fade>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
}