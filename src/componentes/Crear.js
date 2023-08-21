import React,{ useState } from 'react'
import axios from 'axios';
import ImageUploadComponent from './UploadImage';



 const Crear = () => {

    const title ="AÑADIR";

    const [fileName, setFileName] = useState('Ningún archivo seleccionado');

    const [id, setId] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
        console.log(selectedImage);
    };


    const conseguirDataForm = (e) =>{

        e.preventDefault();
        //conseguir datos del formulario
        var target = e.target;
        let nombre = target.nombre.value;
        let descripcion = target.descripcion.value;
        let categorys = target.cat_id.value;
       
      

            const data = { nombre: nombre, description: descripcion,category:categorys,image:fileName }; // Datos que deseas enviar en el body
            const url = 'http://localhost:3700/api/save-project'; // URL de la API

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
                //ejectura mi accion para guardar imagen



                return response.json(); // Parsea la respuesta JSON
            })
            .then(data => {
                // Manipula los datos de respuesta si es necesario
                const formData = new FormData();
                formData.append('image', selectedImage);
               // formData.append('otherField', otherField);

                console.log(data.project._id);
                let id_resp = data.project._id;
                axios.post(`http://localhost:3700/api/upload-image/${id_resp}`, formData)
                .then(uploadResponse => {
                  console.log('Respuesta de subida de imagen:', uploadResponse.data);
                  // Realizar acciones adicionales si es necesario
                })
                .catch(uploadError => {
                  console.error('Error en la subida de imagen:', uploadError);
                });
            })
            .catch(error => {
                // Maneja errores en la solicitud
                console.error('There was a problem with the fetch operation:', error);
            });

       // alert('tile'+nombre+' dd'+descripcion);

    }
/*name:String,
	description:String,
	category:String,
	lags:String,
	//lags:[String]
	year:Number,
	image:String*/

  return (
      <div className="add">
          <h3 className="title">{title}</h3>
          <form onSubmit={conseguirDataForm}>
              <input type="text"
                     id = "nombre"
                     name = "nombre"
                     placeholder="" />
              <textarea 
              id = "descripcion"
              name = "descripcion"
              placeholder="descripcion"></textarea>

            <select name="cat_id">
                <option value="1">categoria 1</option>
                <option value="2">categoria 2</option>
                <option value="3">categoria 3</option>

              </select>

              <input type="file" onChange={handleImageChange}/>


              <input type="submit" value="add" />

              
              
          </form>
      </div>
  )
}


export default Crear;