export default (state,action)=>{
    switch(action.type){

        case 'GET_CATEGORIAS':
            return {
                ...state,
                categorias: action.payload.categorias,
                productos: action.payload.productos,
                categoriaActual: null
            }

        case 'CHANGE_CATEGORIA':
            return{
                ...state,
                categoriaActual: action.payload.categoria,
                productos: action.payload.productos
            }
        
        

        default:
            return state;
    }
}