import React, { useState, useEffect } from 'react'
import { usePaApi, API_STATE_CARGANDO, API_STATE_ERROR, API_STATE_LISTO } from '../hooks/usePaApi';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';

import CardTarea from "./CardTarea"

export const ListaTareasQueHago = (props) => {
  const filtrosTareas = props.state;

  const [listaTareas] = usePaApi("data.json");

  switch (listaTareas.status) {
    case API_STATE_CARGANDO:
      return <CircularProgress />
    case API_STATE_LISTO:
      return(
        <div>
          {listaTareas.data.map(dataTarea => {
            console.log(dataTarea)
            if (
              props.state.escribir == dataTarea.necesito[0].valor
              && props.state.wifi == dataTarea.necesito[1].valor
              && props.state.pensar == dataTarea.necesito[2].valor
            )
            {
              return <CardTarea  dataTarea={dataTarea}/>
            }
          })}
        </div>
      )
    case API_STATE_ERROR:

    default:
      return <Alert severity="error">
      <AlertTitle>ERROR</AlertTitle>
        ¡Hubo un error pero no es tu culpa! — <strong>Error en la request</strong>
    </Alert>
    
  }

}

/*
<CardTarea  dataTarea={dataTarea}/> */