import React, { useState } from 'react';
import axios from 'axios';

function ImageUploadComponent() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [otherField, setOtherField] = useState('');

  const onFileChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleOtherFieldChange = (event) => {
    setOtherField(event.target.value);
  };

  const uploadImage = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('otherField', otherField);

      axios.post(`http://localhost:3700/api/upload-image/64e3badbfa800f606115be5a`, formData)
        .then(response => {
          console.log('Respuesta de la API:', response.data);
          // Realizar acciones adicionales si es necesario
        })
        .catch(error => {
          console.error('Error en la solicitud:', error);
          // Manejar el error
        });
    } else {
      console.warn('No se seleccionó ninguna imagen.');
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />

      <button onClick={uploadImage}>Subir Imagen</button>
    </div>
  );
}

export default ImageUploadComponent;