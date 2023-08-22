import React from 'react';
import {Routes,Router,Link,BrowserRouter, Route} from 'react-router-dom';
import Contacto from '../componentes/Contacto';
import { Inicio } from '../componentes/Inicio';

import ListadoXCategoria from '../componentes/ListadoXCategoria';



const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
            <Route path='/listado/:categoriaId' element={<ListadoXCategoria/>}></Route>
            
        </Routes>
    </BrowserRouter>
  )
}


export default RouterPrincipal;