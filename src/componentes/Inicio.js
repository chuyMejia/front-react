import React,{ useState } from 'react'
import Crear from "../componentes/Crear";
import Header from "../componentes/Header";
import Listado from "../componentes/Listado";
import Buscador from "../componentes/Buscador";

export const Inicio = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="layout">

    {/*--cabecera-*/}
    <header className="header" >
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>CRUD PELICULAS</h1>
    </header>

    {/*barra de navegacion*/}
     <Header setSelectedCategory={setSelectedCategory}></Header>
    {/*contenido principal-*/}
    <section className="content" >
       <Listado categoryId={selectedCategory} ></Listado>
    </section>

    {/*-barra lateral*/}
    <aside className="lateral">
       <Buscador></Buscador>

      <Crear></Crear>

    </aside>

    {/*pie de pagina */}
    <footer className="footer">
        &copy; Tienda Proyecto - NodeJS,React <strong>Repositorio github</strong> <a href="https://github.com/chuyMejia/backendBh">BACKEND</a>,<a  href="https://github.com/chuyMejia/front-react">FRONTEND</a>
    </footer>


</div>
  )
}
