import 'date-fns';
import esLocale from "date-fns/locale/es";
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const localeMap = {
    es: esLocale,
  
  };

export default function Fecha(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [locale] = React.useState("es");

  function pad(n) {
    return n +1
  }

  function handleDateChange(date) {
    setSelectedDate(date);
    var dia = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var fecha = year + "-" +  pad(month) + "-" + dia ;
    props.callbackFecha(fecha)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[locale]}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          autoOk
          inputVariant="outlined"
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          disablePast
          color="primary"
          label={props.label}
          value={selectedDate}
          InputAdornmentProps={{ position: "start" }}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}