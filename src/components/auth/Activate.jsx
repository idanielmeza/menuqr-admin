import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Activate = () => {

    const navigate = useNavigate();

    const notify = (msg,type) => toast(msg,{
        autoClose: 3000,
        type
    })

    const [info,setInfo] = useState('');

    const handleChange = e =>{
        setInfo(e.target.value);
    }

    const handleSubmit= async e=>{
        e.preventDefault();

        if(info.trim() === '' || info.trim().length != 6){
            notify('El codigo de activacion debe ser de 6 caracteres','error')
            return;
        }
        const results = await fetch(`http://localhost:4000/usuarios/activate/${info}`)

        const status = results.status;

        const {msg} = await results.json();

        if(status === 404 || status === 500){
            notify(msg,'error');
            return;
        }

        notify(msg,'success')
        navigate('/login');
    }

    return ( 
        <>
            <ToastContainer/>
            <form 
                onSubmit={handleSubmit}
            className='box form'>
                <h3 className='title'>Ingresa el codigo de activacion que llego a tu correo.</h3>

                <div className='input-field'>
                    <input 
                        onChange={handleChange}
                    name='codigo' type='text' placeholder='Codigo de activacion'/>
                </div>
                <div className='input-btn'>
                        <input className="btn-form" type='submit' value='Activar cuenta'/>
                </div>
            </form>
        </>
     );
}
 
export default Activate;