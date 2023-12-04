# prueba_tecnica

Este proyecto surge como respuesta a una Prueba Técnica de FractalUp, 
fue todo un reto su elaboración, puesto que no tenía experiencia previa
con el framework de JavaScript Vue.js 2, pero al tener experiencias con
otro similar como es React.js quise aventurarme y el resultado es
asombroso; salir de la zona de confort generalmente te pone a prueba.

Para manejar las solicitudes de GraphQL decidí utilizar Apollo Client y 
para consultar la API de imagenes utilicé Fetch y decidí consultar a 
Pixabay porque no tenía límites de consultas como lo tiene Unsplash que
solo me permitía 50 por hora. En la parte del diseño responsivo quise 
utilizar CSS con su funcionalidad de media queries para adaptar la 
aplicación a diferentes pantallas, incluso hasta para una versión mobile. 
Además, utilicé la metodología BEM (Block Element Modifier) para nombrar 
las clases de las etiquetas HTML.

Para desplegar, utilicé la plataforma Netlify, ya que tenía experiencia
desplegando algunos proyectos personales.

## Tecnologías Utilizadas

- Vue.js v2.6.14
- Vue Router v3.6.5
- Apollo Client v3.8.8
- GraphQL v16.8.1

## Configuración y Entorno

Se requiere un archivo `.env` para la configuración. Adjunto al correo
encontrará el archivo `.env` necesario en la raiz del proyecto.

## Instrucciones para Ejecutar el Proyecto

Siga estos pasos para ejecutar el proyecto localmente:

1. Clonar este repositorio: `git clone https://github.com/Nathanela10/prueba_tecnica_fractalup.git`
2. Navegar al directorio del proyecto: `cd prueba_tecnica`
3. Instalar dependencias: `npm install`
4. Ejecutar en modo de desarrollo: `npm run serve`
5. Abra su navegador en `http://localhost:8080/`