const RegistroAlimento = () => {
    return ( 
        <div className='box mt-2'>
                <h2>Alimentos</h2>
                <div className='is-flex-column'>
                    <div className='is-flex-column input-field'>
                        <label>Nombre</label>
                        <input type='text' placeholder="Nombre del alimento"/>
                        <label>Precio</label>
                        <input type='number' placeholder="Precio del producto"/>
                        <label>Descripcion</label>
                        <textarea className='textarea'></textarea>
                    </div>
                    
                    <div className='is-flex-column input-field'>
                        <label>Categoria</label>
                        <select>
                            <option>Opcion1</option>
                            <option>Opcion2</option>
                            <option>Opcion3</option>
                            <option>Opcion4</option>
                        </select>
                    </div>
                    
                    <button className='btn-form' type='button'>Agregar</button>
                </div>

            </div>
     );
}
 
export default RegistroAlimento;