import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import ImageUploadComponent from './UploadImage';



 const Crear = () => {

    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
      fethCategorias();
    }, []);

    const title ="AÑADIR";
    const [fileName, setFileName] = useState('Ningún archivo seleccionado');
    const [id, setId] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);


    const handleIdChange = (event) => {
        setId(event.target.value);
    };


  
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


    //------------set al input file--------------------------------
    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
        console.log(selectedImage);
    };
//---------------------------------------------

    const conseguirDataForm = (e) =>{
//funcion del submit form 
//-----------------------------inicia------------------------------------------------
        e.preventDefault();
        //conseguir datos del formulario
        var target = e.target;
        let nombre = target.nombre.value;
        let descripciones = target.descripcion.value;
        let categorys = target.cat_id.value;
        let price = target.precio.value;
        let cuantity = target.stock.value;
        
       
      

            const data = { nombre: nombre, descripcion: descripciones,categoria_id:categorys,image:fileName,precio:price,stock:cuantity }; // Datos que deseas enviar en el body

           
            const url = 'http://localhost:3700/api/save-product'; // URL de la API

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
                

//

                return response.json(); // Parsea la respuesta JSON
            })
            .then(data => {
                /*console.log(data.message);
                return false;*/
                //ejectura mi accion para guardar imagen
   //---------------------------------------------------------------------------             
                const formData = new FormData();
                formData.append('image', selectedImage);
               // formData.append('otherField', otherField);

               // console.log(data.project._id);
                let id_resp = data.message;
                axios.post(`http://localhost:3700/api/uploadImage/${id_resp}`, formData)
                .then(uploadResponse => {
                  console.log('Respuesta de subida de imagen:', uploadResponse.data);
                  // Realizar acciones adicionales si es necesario
                  window.location.reload();
                })
                .catch(uploadError => {
                  console.error('Error en la subida de imagen:', uploadError);
                });
            })
//----------------------------------------------------------------------------------            
            .catch(error => {
                // Maneja errores en la solicitud
                console.error('There was a problem with the fetch operation:', error);
            });


       // alert('tile'+nombre+' dd'+descripcion);

    }
//---------------------------FIN-----------------------------------

  return (
      <div className="add">
          <h3 className="title">{title}</h3>
          <form onSubmit={conseguirDataForm}>
              <input type="text"
                     id = "nombre"
                     name = "nombre"
                     placeholder="NOMBRE" />
              <textarea 
              id = "descripcion"
              name = "descripcion"
              placeholder="descripcion"></textarea>
            <label className='label'>Categoras disponibles</label>
            <select name="cat_id">
            <option value="">Selecciona una opción</option>
                {dataCategory.map(categoria => (
                <option key={categoria.id} value={categoria.id}>
                    {categoria.nombre}
                </option>
                ))}

              </select>

              <input type="number" name='precio' placeholder='PRECIO'/>
              <input type="number" name='stock' placeholder='CANTIDAD'/>

              <input type="file" onChange={handleImageChange}/>


              <input type="submit" value="add" />

              
              
          </form>
      </div>
  )
}


export default Crear;