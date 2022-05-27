import {useNavigate} from 'react-router-dom';
import { useState,useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../../context/authContext';

const Login = () => {

    const {autenticar} = useContext(AuthContext);

    const notify = (msg,type) => toast(msg,{
        autoClose: 2000,
        type
    });

    const [info,setInfo] = useState({});

    const handleChange = (e)=>{
        setInfo({
            ...info,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const {email,password} = info;

        if(!email || !password){
            notify('Completa todos los campos','error')
            return;
        }

        login(email,password);
    }

    const login = async (email,password)=>{
        const results = await (await fetch('http://localhost:4000/auth/singin',{
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'application/json'
            }
        })).json()

        const {msg,token,usuario} = results;

        if(msg){
            notify(msg,'error');
            return;
        }

        autenticar({usuario,token});
        navigate('/')
        
    }

    const navigate = useNavigate();

    return (
        // <div className='background-login'>
        <>
                <ToastContainer/>
                <form
                    onSubmit={handleSubmit}
                className='box form'>
                    <h3 className='title'>Bienvenido, inicia sesion para comenzar.</h3>

                    <div className='input-field'>
                        <label>Correo</label>
                        <input 
                            onChange={handleChange}
                        name='email' type='email' placeholder='Ingresar correo'/>
                    </div>

                    <div className='input-field'>
                        <label>Contraseña</label>
                        <input
                            onChange={handleChange}
                        name='password' type='password' placeholder='Ingresar contraseña'/>
                    </div>

                    <p
                        onClick={()=>{
                            navigate('/singup')
                        }}
                    className='btn-info'>Aun no tienes cuenta? Registrate</p>


                    <div className='input-btn'>
                        <input className="btn-form" type='submit' value='Iniciar Sesion'/>
                    </div>
                </form>
        </>
      );
}
 
export default Login;