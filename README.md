Sistema de Registro de Estudiantes

Descripción General

El sistema de registro de estudiantes es una aplicación web que permite gestionar los datos de los estudiantes de manera eficiente y organizada. Las principales funcionalidades del sistema incluyen:

Registro de Estudiantes: Permite cargar información básica de los estudiantes, incluyendo nombre, apellido, documento, sexo y carrera.
Filtrado y Paginado: Ofrece un sistema de filtrado por letra y un paginado indexado para facilitar la búsqueda y visualización de los estudiantes.
Eliminación de Estudiantes: Proporciona una interfaz para eliminar estudiantes registrados.
Visualización por Género: Posee páginas separadas para mostrar estudiantes masculinos y femeninos.

Arquitectura del Sistema
Backend
El backend está construido con Spring Boot e implementa varios servicios para manejar las operaciones del sistema. Utiliza una base de datos MySQL que contiene tres tablas principales:

Estudiantes: Almacena la información de los estudiantes.
Sexo: Contiene las opciones de género disponibles.
Carreras: Lista las diferentes carreras académicas.

Frontend
El frontend está desarrollado con React y utiliza TailwindCSS para la estilización, así como componentes de React Bootstrap para la interfaz de usuario.

Despliegue y Ejecución

Backend

Clonar el repositorio del backend.
Configurar la conexión a la base de datos MySQL en el archivo application.properties.
Ejecutar la aplicación Spring Boot utilizando un IDE compatible o desde la línea de comandos con mvn spring-boot:run.

Frontend

Clonar el repositorio del frontend.
Instalar las dependencias con npm install.
Ejecutar la aplicación React con npm run dev.



![1](https://github.com/Fozkoo/SistemaRegistro/assets/150302407/41ff450b-9343-4b17-9b55-bc65ba17840a)
![2](https://github.com/Fozkoo/SistemaRegistro/assets/150302407/587ca24a-1d38-49c8-a651-1e2ed1356762)
![3](https://github.com/Fozkoo/SistemaRegistro/assets/150302407/b4e39ac9-60cf-4d42-baf1-24ab2c6a7d9d)


