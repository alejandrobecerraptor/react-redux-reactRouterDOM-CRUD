import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async (dispatch) =>{
        dispatch(agregarProducto());

        try {
            //insertar en la API
            await clienteAxios.post('/holka', producto);
            //si todo sale bien actualizar el state
            dispatch( agregarProductoExito(producto))

            //alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego Correctamente',
                'success'
            )
        } catch (error) {
            console.log(error)
            // si hay un error , cambiar el satte
            dispatch( agregarProductoError(true))
            //alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un Errror',
                text: 'Hubo un Error, intenta de nuevo'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

//si el producto se guarda en la bd
const agregarProductoExito = producto =>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

// y si hubo un error
const agregarProductoError = estado =>({
    type:AGREGAR_PRODUCTO_ERROR,
    payload: estado
});

//FUNCION QUE DESCARGA LOS PRODUCTOS DE LA BASE DE DATOS
export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch(descargarProductos());
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

