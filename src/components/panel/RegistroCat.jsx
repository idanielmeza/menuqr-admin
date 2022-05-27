const RegistroCat = () => {
    return ( 
        <div className='box mt-2'>
                <h2>Categorias</h2>
                <div className='is-flex-column input-field'>
                    <input type='text' placeholder="Nombre de la categoria"/>
                    <button className="btn-form" type='button'>Agregar</button>
                </div>
            </div>
     );
}
 
export default RegistroCat;