import React,{ useState } from 'react'
import Crear from "../componentes/Crear";
import Header from "../componentes/Header";

import Buscador from "../componentes/Buscador";

 const Contacto = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const title = "Contacto";
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
     <Header setSelectedCategory={setSelectedCategory}></Header>
    {/*contenido principal-*/}
    <section className="content" >
        
              <div class="contacto">
                  <h2>Contacto</h2>
                  <p>Si tienes alguna pregunta o comentario, no dudes en contactarnos:</p>
                  <ul>
                      <li><strong>Teléfono:</strong> (55)71967446</li>
                      <li><strong>Correo electrónico:</strong> jesussoft95@gmail.com</li>
                     
                  </ul>
              </div>
    </section>

    {/*pie de pagina */}
    <footer className="footer">
        &copy; Tienda Proyecto - html react nodeJS<a href="/#">ir a repositorio de git</a>
    </footer>


</div>
  )
}


export default Contacto;
