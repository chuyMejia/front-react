import Buscador from "./componentes/Buscador";
import Crear from "./componentes/Crear";
import Listado from "./componentes/Listado";



function App() {
  return (
    <div className="layout">

    {/*--cabecera-*/}
    <header className="header" >
        <div className="logo">
            <div className="play"></div>
        </div>
        <h1>Mis pelis</h1>
    </header>

    {/*barra de navegacion*/}
    <nav className="nav">
        <ul>
            <li><a href="/#">inicio</a></li>
            <li><a href="/#">peliculas</a></li>
            <li><a href="/#">blog</a></li>
            <li><a href="/#">contacto</a></li>

        </ul>
    </nav>
    {/*contenido principal-*/}
    <section className="content" >
       <Listado></Listado>
    </section>

    {/*-barra lateral*/}
    <aside className="lateral">
       <Buscador></Buscador>

      <Crear></Crear>

    </aside>

    {/*pie de pagina */}
    <footer className="footer">
        &copy; Tienda Proyecto - html react nodeJS<a href="/#">ir a repositorio de git</a>
    </footer>


</div>
  );
}

export default App;
