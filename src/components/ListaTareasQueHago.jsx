import React, { useState, useEffect } from 'react'
import { usePaApi } from '../hooks/usePaApi';

import CircularProgress from '@material-ui/core/CircularProgress';

import CardTarea from "./CardTarea"

export const ListaTareasQueHago = (props) => {

  console.log(new Date())
  const [listaTareas] = usePaApi("http://127.0.0.1:8000/api/todos/");
  console.log(new Date(), listaTareas)

  switch (listaTareas.status) {
    case "LOADING":
      return <CircularProgress />
    case "SUCCESS":
      return(
        <div>
          {listaTareas.data.map(dataTarea => <CardTarea  dataTarea={dataTarea}/>)}
        </div>
      )
    default:
      return <h1>ERROR</h1>
    
  }

}