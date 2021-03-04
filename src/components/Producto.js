import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import Swal from 'sweetalert2';
//redux
import {useDispatch} from 'react-redux';
import {borrarProductoAction} from '../actions/productoActions';

const Producto = ({producto}) => {
    const {nombre,precio,id} = producto;

    const dispatch = useDispatch();
    const history = useHistory();

    //confirmar si desea eliminarlo
    const confirmarEliminarProducto = id =>{
        //preguntar al usuario
        Swal.fire({
            title: '¿Estas Seguro?',
            text: "Un producto que se elimina no se puede recuperar.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                //pasarlo al action
                dispatch(borrarProductoAction(id));
            }
          })
        
    }

    //funcion que redirege de forma programada
    const redireccionarEdicion = producto => {
        history.push(`/productos/editar/${producto.id}`)
    }

    return ( 
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <button 
                    type="button" className="btn btn-primary mr-2" onClick={() => redireccionarEdicion(producto)}>
                    Editar
                </button>
                <button type="button" className="btn btn-danger" onClick={() => confirmarEliminarProducto(id)}>
                    Eliminar
                </button>
            </td>
        </tr>
     );
}
 
export default Producto;