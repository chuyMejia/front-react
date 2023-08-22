import React,{ useState, useEffect } from 'react';
//import React, { useState, useEffect } from 'react';

 const Listado = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      // Código que se ejecuta después de cargar el componente
      // Puedes realizar aquí tu solicitud Fetch u otras operaciones
      console.log('AL CARGAR');
      fetchData();
    }, []);

    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3700/api/projects');
          const data = await response.json();
          setData(data.allobjects);
            console.log(data);

         

        } catch (error) {
          console.error('Error al obtener los datos:', error);
        }
      };


      const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3700/api/project/${id}`, {
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

     return (<>
            
        
           
      
            {data && data.map((item, index) => (
                <article className="p-item" key={index}>
                    <div className="image-container">
                    <img src={`http://localhost:3700/api/get-image/${item.image}`} alt={item.title} />
                    </div>
                    <h3 className="title">{item.name}</h3>
                    <p className="descripcion">{item.description}</p>
                    
                    {/* Agregar el resto de los campos aquí */}
                    <button className="edit">editar</button>
                    <button className="delete" onClick={() => handleDelete(item._id)} >borrar</button>
                </article>
            ))}
     
    
      
         
</>)
}


export default Listado;

