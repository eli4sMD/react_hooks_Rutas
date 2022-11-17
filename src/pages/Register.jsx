import React from 'react'
import { NavLink } from 'react-router-dom'

import '../assets/signin.css'


// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Register = () => {
  return (
    <div className='container d-block'>
      <main className="form-signin w-100 m-auto">
        <form className='form-control'>
          <h1 className="h3 mb-3 fw-normal">Registro</h1>

          <div className="form-floating mb-2">
            <input type="text" className="form-control" id="floatingInput" placeholder="Username" />
            <label htmlFor="floatingInput">Nombre de Usuario</label>
          </div>
          
          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>

          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Confirmar contraseña</label>
          </div>

          <div className="form-floating mb-2">
            <input type="email" className="form-control" id="floatingEmail" placeholder="Example@email.com" />
            <label htmlFor="floatingInput">Email</label>
          </div>

          <div className="form-floating mb-2">
            <input type="number" className="form-control" id="floatingPhone" placeholder="Telefono" />
            <label htmlFor="floatingInput">Telefono</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>

          <div className='mt-3'>
            <h6>Si ya esta registrado</h6>
            <NavLink to="/login">Inicie Sesion</NavLink>
          </div>

        </form>
      </main>
    </div>
  )
}
