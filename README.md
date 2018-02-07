Para este proyecto necesitamos las siguientes dependencias :
*mongoDB
*Robo 3T (interfaz visual para mongodb)
*Node Js

Para iniciar el proyecto si lo descargas de github debes seguir los siguientes pasos, si lo ejecutas desde el comprimido solo sigue los pasos 1, 2, 3, 4, 5 solo en la carpeta
"api", 7, 9 y 10.

Paso 1 : ejecutar los dos programas de mongodb que son "mongod.exe" y "mongo.exe" que estan en la carpeta
    "c://Archivos de programa/MongoDB/Server/3.4/bin/"

Paso 2 : crear base de datos local llamada "hotel-db" y crear una coleccion llamada "hotels"
Paso 3 : dar click derecho sobre la base de datos en Robo y seleccionar "Open Shell"
Paso 4 : escribir el siguiente script :
    db.hotels.insert(
        /* insertar aqui el contenido del archivo de prueba data.json"
    );
    luego de esto ejecutar el comando "Ctrl + r";

Paso 5 : Con la consola del sistema como administrador situarce en la carpeta "api" y ejecutar el comando "npm install" y lo repetimos en la carpeta "front"
Paso 6 : ejecutar ademas el comando "npm install -g webpack" para instalar globalmente webpack.
Paso 7: en la carpeta api ejecutar el comando "npm start" para iniciar el servidor
Paso 8 : en la carpeta front ejecutar el comando "webpack -p" para compilar el proyecto front
Paso 9 : ejecutar el index.html en un servidor, ya sea apache o uno creado por un IDE.
Paso 10: Pasar las imagenes de los hoteles a la carpeta "api/uploads/hotels"

