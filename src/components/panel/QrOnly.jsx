import QrCode from 'react-qr-code';
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const QrOnly = () => {

    const navigate = useNavigate();

    useEffect(() =>{
        window.print();
        navigate('/')
    },[])

    return ( 
        <div style={{display: 'flex'}}>
            <div id='qr-div' style={{background:'white', padding: '16px', margin: '0 auto'}}>
                    <QrCode id='qr' value='https://dietasapp.ml'/>
            </div>
        </div>
     );
}
 
export default QrOnly;