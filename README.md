# React - Redux - React Router DOM - CRUD
## Lista de Productos 
### Alertas Sweetalert2 - JSON Server

_Aplicacion de lista de productos, con sus precios, en donde podemos editar crear y eliminar como un tipico CRUD, son almacenados en un json local, corrido por [Json-server](https://www.npmjs.com/package/json-server)_

## Demo 🎮

Este es el Demo de la aplicacion, **Update[ 12/03/2021 ]** [Click Aquí](https://silly-hamilton-535775.netlify.app)
nota: no corre perfectamente , ya que es necesario el json-server, puedes clonar y probarlo de manera local (analizando alternativa de hacerlo con localStorage)


## Importante ℹ

_si entras en cada uno de los commits podras ver como fue mi proceso paso a paso de lo que fui aprendiendo en el curso de react, y si quieres algo en especifico buscarlo en alguno de los commits del proyecto y alli lo encontraras!._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

NECESITAS TENER JSON-SERVER PARA PODER CORRER EL PROYECTO Y UTILIZAR EL SIGUIENTE COMANDO EN LA TERMINAL DE TU PROYECTO
### `json-server db.json --port 4000`

EN LA CARPETA SE ENCUENTRA UN ARCHIVO LLAMADO **db_json** QUE CONTIENE UN OBJETO CON LOS PRODUCTOS DE PRUEBA QUE SE TIENEN, MASOMENOS ALGO ASI:

```javascript
// Nombre del archivo : db_json
{
  "productos": [
    {
      "id": 1,
      "nombre": "Jugo de Zanahoria",
      "precio": "31111"
    },
    {
      "id": 2,
      "nombre": "Jugo de Naranja",
      "precio": "1"
    },
    {
      "nombre": "Jugo de Naranja",
      "precio": "300",
      "id": 3
    },
    {
      "nombre": "Rib Eye 800g",
      "precio": "200",
      "id": 4
    },
    {
      "nombre": "Jugo de Fresa",
      "precio": "200",
      "id": 5
    }
  ]
}

```
PUEDES TAMBIEN CREAR TU PORPIO OBJETO ! CON LOS PRODUCTOS QUE QUIERAS.

Facil primero lo clonas con este comando:

## `git clone https://github.com/alejandrobecerraptor/react-redux-reactRouterDOM-CRUD.git`

_Despues de eso te toca descargar las dependencias con:_ ⚙️

## `npm install`

_luego tendras que arrancar el proyecto y para eso necesitas ejecutar el comando:_

## `npm start`

y listo disfruta! 🍦

## Construido con 🛠️

* [ReactJs](https://reactjs.org/) - Libreria de JavaScript
* [Redux](https://github.com/reduxjs/redux) - Libreria de ReactJs
* [Redux-Router](https://github.com/ReactTraining/react-router) - React Router es una libería para gestionar rutas en aplicaciones que utilicen ReactJS
* [AXIOS](https://github.com/axios/axios) - Axios es una librería JavaScript que puede ejecutarse en el navegador y que nos permite hacer sencillas las operaciones como cliente HTTP.
* [Json-server](https://www.npmjs.com/package/json-server) - Crear un server local (fake)
* [NPM](https://nodejs.org/es/download/) - Manejador de dependencias
* [create-react-app](https://github.com/facebook/create-react-app) - Herramienta para la creacion del proyecto.

## Autores ✒️

* **Alejandro Becerra** - *Desarrollador Inicial* - [GitHub](https://github.com/alejandrobecerraptor)
Allí Encontraras mi correo de contacto.

## Contribuyendo 📣

¿Tienes ideas para aportar a este proyecto? por favor ingresa a mi perfil  [Aquí](https://github.com/alejandrobecerraptor) y busca mi correo de contacto para detalles del proceso para enviarnos pull requests.

## ¿Quieres saber mas de ReactJs?

si quieres crear un proyecto con ReactJs te recomiendo que visites este link [Create React App](https://github.com/facebook/create-react-app).

Puedes leer mas en el siguiente link, [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

y tambien por aqui ;) [React documentation](https://reactjs.org/).


