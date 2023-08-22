
import React from 'react'
import Crear from "../componentes/Crear";
import Header from "../componentes/Header";
import Listado from "../componentes/Listado";
import Buscador from "../componentes/Buscador";
import { useParams } from 'react-router-dom';

 const ListadoXCategoria = () => {
    const { categoriaId } = useParams();
  return (
    <div className="layout">

    {/*--cabecera-*/}
    <header className="header" >
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>header</h1>
    </header>

    {/*barra de navegacion*/}
     <Header></Header>
    {/*contenido principal-*/}
    <section className="content" >
       <Listado hola="1"></Listado>
    </section>

    {/*-barra lateral*/}
    <aside className="lateral">
       <Buscador></Buscador>

      <Crear></Crear>

    </aside>

    {/*pie de pagina */}
    <footer className="footer">
        &copy; Tienda Proyecto - html react nodeJS<a href="/#">ir a repositorio de git</a><strong>{categoriaId}</strong>
    </footer>


</div>
  )
}

export default ListadoXCategoria;
