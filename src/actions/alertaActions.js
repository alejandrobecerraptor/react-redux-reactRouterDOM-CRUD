import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

// muestra una alerta
export function mostrarAlerta(alerta) {
    return (dispatch) => {
        dispatch( crearAlerta(alerta))
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})