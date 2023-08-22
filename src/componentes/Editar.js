import React,{ useState,useEffect } from 'react';
import axios from 'axios';

export const Editar = ({item}) => {

  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    fethCategorias();
   console.log('componente dit creado'+dataCategory);
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

    
    const [fileName, setFileName] = useState('Ningún archivo seleccionado');
    const [selectedImage, setSelectedImage] = useState(null);
        //------------set al input file--------------------------------
        const handleImageChange = (event) => {
            setSelectedImage(event.target.files[0]);
            console.log(selectedImage);
        };


        const conseguirDataFormEdit = (e) =>{
            //funcion del submit form 
            //-----------------------------inicia------------------------------------------------
                    e.preventDefault();

                    
                    //conseguir datos del formulario
                    var target = e.target;

                   // console.log(target);
                   // return false;
                    let _id = target.id.value;

                  
                    let nombre = target.nombre.value;
                    let descripciones = target.descripcion.value;
                    let categorys = target.cat_id.value;
                    let price = target.precio.value;
                    let cuantity = target.stock.value;
                    
                   
                       
            
                        const data = { nombre: nombre, descripcion: descripciones,categoria_id:categorys,image:fileName,precio:price,stock:cuantity }; // Datos que deseas enviar en el body
                       // console.log(data);
                        //return false;
                       
                        const url = `http://localhost:3700/api/producto/${_id}`; // URL de la API
            
                        fetch(url, {
                        method: 'PUT',
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
                            //console.log(data);
                            //return false;
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

    //console.log(item);
    const titulo_edit = 'Editar';
  return (
    <div className='edit-form'>
        <h3 className='titel'>{titulo_edit}</h3>
        
        <form onSubmit={conseguirDataFormEdit}>

        <input type="text"
                     id = "id"
                     name = "id"                  
                     className='titulo_editado'
                     defaultValue={item.id}
                     style={{ display: 'none' }}/>

              <input type="text"
                     id = "nombre"
                     name = "nombre"
                     placeholder="NOMBRE" 
                     className='titulo_editado'
                     defaultValue={item.nombre}/>
              <textarea 
                    id = "descripcion"
                    name = "descripcion"
                    placeholder="descripcion"
                    className='descripcion-editada'
                    defaultValue={item.descripcion}></textarea>
              <select name="cat_id" defaultValue={item.categoria_id} >
                    {dataCategory.map(categoria => (
                      <option key={categoria.id} value={categoria.id}>
                        {categoria.nombre}
                      </option>
                    ))}
              </select>
              <input type="number" 
                     name='precio' 
                     placeholder='PRECIO'
                     className='titulo_editado'
                     defaultValue={item.precio}/>
              <input type="number" 
                     name='stock' 
                     placeholder='CANTIDAD'
                     defaultValue={item.stock}
                     className='titulo_editado'/>

                <input type="file" onChange={handleImageChange}/>


              <input type="submit" className='editar' value="editar" />

              
              
          </form>
        
    </div>
  )
}


export default Editar;