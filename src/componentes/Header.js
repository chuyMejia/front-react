import React,{ useState,useEffect } from 'react'
import Listado from './Listado';

 const Header = ({setSelectedCategory}) => {

    
    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
      fethCategorias();
    }, []);

    const fethCategorias = async () => {
        try {
          const response = await fetch('http://localhost:3700/api/categorias');
          const data = await response.json();
            console.log(data);
          setDataCategory(data.categoria); // Actualizar el estado con los datos obtenidos
        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };

      const changeList = (categoryId)=> {
        //alert('fffff:'+categoryId);
        setSelectedCategory(categoryId);

      }

    
  return (
    <nav className="nav">
    <ul>
        <li onClick={() => changeList(null)} ><a href="/#">Listado Completo</a></li>
        <li><a href="/contacto">contacto</a></li>
        {dataCategory.map(categoria => (
          <li key={categoria.id} onClick={() => changeList(categoria.nombre)}><a href="/#">{categoria.nombre}</a></li>
        ))}

    </ul>
    </nav>
  )
}


export default Header;
