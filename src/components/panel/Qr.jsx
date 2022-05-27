import QrCode from 'react-qr-code';
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import authContext from '../../context/authContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Qr = () => {

    const {usuario} = useContext(authContext);

    if(!usuario){
        return <p>Cargando...</p>
    }
    
    const navigate = useNavigate();

    const download = ()=>{
        const svg = document.querySelector('#qr');

        const blob = new Blob([new XMLSerializer().serializeToString(svg)], {type: 'image/svg+xml;charset=utf-8'});

        const url = URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('target', '_blank')
        link.setAttribute('download', 'qr.svg')
        link.click();
    }


    return ( 
        <div className='qr'>
            <ToastContainer/>
            <p className='title-qr'>Imprime/Descarga el codigo Qr el Menu de {usuario.negocio.replaceAll('-', ' ')}</p>
            <div id='qr-div' style={{background:'white', padding: '16px', maxWidth: '80%'}}>
                
                <QrCode id='qr' value={`http://localhost:3000/${usuario.negocio}`}/>
            </div>
            <div className='is-flex div-btns'>
                <button
                    onClick={download}
                className='btn-form mx-2'>Descargar</button>
                <button
                    onClick={()=>{
                        navigate('/qr')
                    }}
                className='btn-succes mx-2'>Imprimir</button>
            </div>
            
        </div>
        
     );
}
 
export default Qr;