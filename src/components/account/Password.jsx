import {useState} from 'react';

const PasswordEdit = () => {

    const [info,setInfo] = useState({
        password: '',
        password2: '',
        passwordnueva: '',
    });

    const handleChange = e=>{
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e=>{
        e.preventDefault();

        const {password,password2,passwordnueva} = info;

        if(password.trim() === '' || password2.trim() === '' || passwordnueva.trim() === ''){
            return alert('Todos los campos son obligatorios');
        }

        if(password.trim() !== password2.trim()){
            return alert('Las contraseñas no coinciden');
        }

        console.log(info);
    }


    return ( 
        <form className='box'
            onSubmit={handleSubmit}
        >
            <div className='input-field'>
                <label>Nueva Contraseña</label>
                <input type='text' name='password'
                    onChange={handleChange}
                />
            </div>
            <div className='input-field'>
                <label>Confirmar Nueva Contraseña</label>
                <input type='text' name='password2'
                    onChange={handleChange}
                />
            </div>
            <div className='input-field'>
                <label>Contraseña actual</label>
                <input type='password' name='passwordnueva'
                    onChange={handleChange}
                />
            </div>
            <div>
                <input type='submit' className='btn-form' value='Actualizar'/>
            </div>
        </form>
     );
}
 
export default PasswordEdit;