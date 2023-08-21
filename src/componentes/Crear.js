import React from 'react'

 const Crear = () => {
  return (
      <div className="add">
          <h3 className="title">pelicula</h3>
          <form>
              <input type="text" placeholder="" />
              <textarea placeholder="descripcion"></textarea>
              <input type="submit" value="add" />
          </form>
      </div>
  )
}


export default Crear;