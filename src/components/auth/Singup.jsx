import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../../context/authContext';

const Singup = () => {

    const notify = (msg,type) => toast(msg,{
        autoClose: 2000,
        type
    });

    const navigate = useNavigate();
    const [info,setInfo] = useState({});

    const handleChange = e=>{
        setInfo({
            ...info,
            [e.target.name]: e.target.value.trim()
        })
    }

    const handleSubmit = e=>{
        e.preventDefault();
        const {nombre,paterno,materno,email, negocio, password, password2} = info;

        if(!nombre || !paterno || !email || !negocio || !password || !password2){
            notify('Completa los campos obligatorios','error')
            return;
        }

        if(password.length < 6){
            notify('La contraseña debe ser minimo de 6 caracteres','error')
            return;
        }

        if(password != password2){
            notify('La contraseña no coincide.','error')
            return;
        }

        if(!materno){
            setInfo({
                ...info,
                ['materno']:''
            })
        }

        registro({
            nombre,
            apellidop: paterno,
            apellidom: materno,
            email,
            password,
            negocio
        })
    }

    const registro = async(usuario)=>{
        
        try {
            const {msg} = await (await fetch('http://localhost:4000/usuarios',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(usuario)
            })).json()

            notify(msg);
            navigate('/activate');

        } catch (error) {
            console.log(error.response)
            notify('Hubo un error,vuelve a intentarlo','error');            
        }

    }

    return ( 
        <>
                <ToastContainer/>
                <form className='box form'
                    onSubmit={handleSubmit}
                >
                    <h3 className='title'>Bienvenido, registrate para comenzar.</h3>
                    <div className='input-field'>
                        <label>Nombre</label>
                        <input onChange={handleChange} name='nombre' type='text' placeholder='Ingresar nombre'/>
                    </div>
                    <div className='input-field'>
                        <label>Apellido Paterno</label>
                        <input onChange={handleChange} name='paterno' type='text' placeholder='Ingresar apellido paterno'/>
                    </div>
                    <div className='input-field'>
                        <label>Apellido Materno <span>(opcional)</span></label>
                        <input onChange={handleChange} name='materno' type='text' placeholder='Ingresar apellido materno'/>
                    </div>

                    <div className='input-field'>
                        <label>Correo</label>
                        <input onChange={handleChange} name='email' type='email' placeholder='Ingresar correo'/>
                    </div>

                    <div className='input-field'>
                        <label>Nombre de negocio/empresa</label>
                        <input onChange={handleChange} name='negocio' type='text' placeholder='Ingresar negocio/empresa'/>
                    </div>

                    <div className='input-field'>
                        <label>Contraseña</label>
                        <input onChange={handleChange} name='password' type='password' placeholder='Ingresar contraseña'/>
                    </div>
                    <div className='input-field'>
                        <label>Confirmar contraseña</label>
                        <input onChange={handleChange} name='password2' type='password' placeholder='Confirmar contraseña'/>
                    </div>

                    <a className='btn-info' onClick={()=>{
                        navigate('/login')
                    }}>Ya tienes cuenta? Inicia Sesion</a>
                    
                    <div className='input-btn'>
                        <input className="btn-form" type='submit' value='Registrar'/>
                    </div>
                    
                </form>
        </>
     );
}
 
export default Singup;