import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Uno from '../Imagenes/Servicio1.jpg'
import Dos from '../Imagenes/Servicio2.jpg'



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Uno',
    imgPath:
      Uno
  },
  {
    label: 'Dos',
    imgPath:
      Dos,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '7%',
    marginRight: '7%',
  },
  img: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 500,
    width: '100%'
  },
}));

function Galeria() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);


  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={4000}
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default Galeria;
