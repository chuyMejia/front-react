import React,{ useState,useEffect } from 'react'

 const Header = () => {

    
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

    
  return (
    <nav className="nav">
    <ul>
        <li><a href="/#">inicio</a></li>
        <li><a href="/#">contacto</a></li>
        {dataCategory.map(categoria => (
          <li key={categoria.id}><a href="/#">{categoria.nombre}</a></li>
        ))}

    </ul>
    </nav>
  )
}


export default Header;
