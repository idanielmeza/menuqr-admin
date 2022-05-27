export default (state,action)=>{

    switch(action.type){

        case 'LOGIN':
            localStorage.setItem('user-token', action.payload.token);
            return{
                ...state,
                usuario:action.payload.usuario,
                autenticado:true,
                token: action.payload.token,
                cargando: false
            }

        case 'LOGOUT':
            localStorage.removeItem('user-token');
            return{
                ...state,
                usuario:null,
                autenticado:false,
                token: null
            }

        default:
            return state;
    }

}