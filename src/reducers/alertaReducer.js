import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

// cada reducer tiene su state
const inictialState = {
    alerta: null
}

export default function(state = inictialState, action){
    switch (action.type) {
        
        default:
            return state;
    }
}