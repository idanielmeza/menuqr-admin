import { useState, useEffect } from "react";

const Profile = () => {

    const perfil = {
        nombre: 'Daniel',
        apellidop: 'Meza',
        apellidom: 'Ledezma',
        email: 'idanielmezaledezma@gmail.com'
    }

    const [info,setInfo] = useState({
        nombre: '',
        apellidop: '',
        appelidom: '',
        email: ''
    })

    const handleChange = e=>{
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e=>{
        e.preventDefault();

        const {nombre,apellidop,apellidom,email} = info;

        if(nombre.trim() === '' || apellidop.trim() === '' || email.trim() === ''){
            return alert('Completa los campos correctamente');
        }

    }

    useEffect(()=>{
        setInfo(perfil)
    },[])

    return ( 
        <form className='box'
            onSubmit={handleSubmit}
        >
            <div className='input-field'>
                <label>Nombre</label>
                <input type='text' name='nombre'
                    defaultValue={perfil.nombre}
                    onChange={handleChange}
                />
            </div>
            <div className='input-field'>
                <label>Apellido Paterno</label>
                <input type='text' name='apellidop'
                    defaultValue={perfil.apellidop}
                    onChange={handleChange}
                />
            </div>
            <div className='input-field'>
                <label>Apellido Materno (opcional)</label>
                <input type='text' name='apellidom'
                    defaultValue={perfil.apellidom || ''}
                    onChange={handleChange}
                />
            </div>
            <div className='input-field'>
                <label>Correo</label>
                <input type='text' name='email'
                    defaultValue={perfil.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input type='submit' value='Actualizar' className='btn-form'/>
            </div>
        </form>
     );
}
 
export default Profile;