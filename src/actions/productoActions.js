import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async (dispatch) =>{
        dispatch(agregarProducto());

        try {
            //insertar en la API
            await clienteAxios.post('/productos', producto);
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

        try {
            const respuesta = await clienteAxios.get('/productos');
            dispatch( descargaProductosExitosa(respuesta.data))
        } catch (error) {
            console.log(error)
            dispatch( descargaProductosError());
            
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargaProductosError = () =>({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});


// SELECCIONA Y ELIMINA EL PRODUCTO
export function borrarProductoAction(id){
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id));

        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(eliminarProductoExito());

            //si se elimina mostrar alert
            Swal.fire(
                'Eliminado!',
                'El producto se elimino Correctamente.',
                'success'
              )
        } catch (error) {
            console.log(error);
            dispatch(eliminarProductoError());
            
        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})