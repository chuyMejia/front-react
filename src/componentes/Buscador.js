import React from 'react'

 const Buscador = () => {


  const addCategory = (e) =>{
        e.preventDefault();
        let taget = e.target;
        let name =  taget.nombre.value;

      
   

        const data = {nombre: name}; // Datos que deseas enviar en el body

           
            const url = 'http://localhost:3700/api/save-category'; // URL de la API

            fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',              
            },
            body: JSON.stringify(data), 
            })
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                
                return response.json(); // Parsea la respuesta JSON
            })
            .then(data => {

              console.log(data);
              window.location.reload();
            });
  }

  const add_category = "Añadir Categoria";
  return (
    <div className="search">
          <h3 className="title">{add_category}</h3>
          <form onSubmit={addCategory}>
          <input type="text"
                     id = "nombre"
                     name = "nombre"
                     placeholder="NOMBRE DE CATEGORIA" />
            <button>Add</button>
          </form>
        </div>
  )
}

export default Buscador;
