import Buscador from "./componentes/Buscador";
import Crear from "./componentes/Crear";
import Header from "./componentes/Header";
import Listado from "./componentes/Listado";




function App() {
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
