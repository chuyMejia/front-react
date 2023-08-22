import React,{ useState, useEffect } from 'react';
import Editar from './Editar';
//import React, { useState, useEffect } from 'react';

 const Listado = ({categoryId}) => {
    const [data, setData] = useState(null);
    const [editar, setEdit] = useState(0);
    const [Lcategoria, setLcategoria] = useState(0);

    console.log('category'+categoryId);

    useEffect(() => {
        // Este efecto se ejecutará cuando categoryId cambie (es decir, cuando se seleccione una nueva categoría)
        console.log('Efecto ejecutado debido a cambio en categoryId'+categoryId);
       // setData(null);
       if (categoryId === null) {
        fetchData();
      } else {
        fetchDataCategory(categoryId);
      }
      // fetchDataCategory(categoryId);
        // Coloca aquí la lógica que deseas ejecutar cuando cambia la categoría seleccionada
      }, [categoryId]);



      /*
    useEffect(() => {
      // Código que se ejecuta después de cargar el componente
      // Puedes realizar aquí tu solicitud Fetch u otras operaciones
      console.log('AL CARGAR');
      
      fetchData();
    }, []);
*/

 
    
     // console.log(categoryId);

     const fetchDataCategory = async (categoryId) => {
        try {
          const response = await fetch(`http://localhost:3700/api/prod-categoria/${categoryId}`);
          const data = await response.json();
           // console.log(data);
            //return false;

          setData(data.productos);
            console.log(data);

         

        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };

    
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3700/api/productos');
          const data = await response.json();
           // console.log(data);
            //return false;

          setData(data.productos);
            console.log(data);

         

        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };


      const handleDelete = async (id) => {

        try {
            var response = await fetch(`http://localhost:3700/api/producto/${id}`, {
                method: 'DELETE',
                // Agrega cualquier encabezado necesario aquí
            });
            if (response.ok) {
                console.log('Proyecto eliminado con éxito');
                fetchData(); // Actualiza los datos después de eliminar
                window.location.reload();
            } else {
                console.error('Error al eliminar el proyecto');
            }
        } catch (error) {
            console.error('Error al eliminar el proyecto:', error);
        }
    };

const editarFunc = (itemId) =>{

    if (editar === itemId) {
        setEdit(null);
      } else {
        setEdit(itemId);
      }


}
    
     return (<>
            
        
           
      
            {data && data.map((item, index) => (
                <article className="p-item" key={index}>
                    <div className="image-container">
                    
                   

                    {item.image ? (
                        <img src={`http://localhost:3700/api/get-image/${item.image}`} alt={item.title} />
                    ) : (
                        <p>Imagen not found</p>
                    )}

                    </div>
                    <h3 className="title">{item.nombre}</h3>
                    <h2>{item.precio}.00$</h2>
                    <p className="descripcion">{item.descripcion}</p>
                    
                    {/* Agregar el resto de los campos aquí */}
                    <button className="edit"   onClick={() => editarFunc(item.id)} >editar</button>
                    <button className="delete" onClick={() => handleDelete(item.id)} >borrar</button>
                    {/*formulario para editar*/}
                    {editar === item.id && (
                        <Editar item ={item}></Editar>
                    )}

                </article>
            ))}
     
    
      
         
</>)
}


export default Listado;

