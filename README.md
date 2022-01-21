# Ejercicio Práctico La Nación (Puesto Full Stack), Parte Front End SSr.

Se solicita crear un proyecto de React en un repositorio git para la entrega del siguiente ejercicio.

-	Realizar un dummy de datos de 15 artículos que puedan o no contener los siguientes elementos:
    - Volanta o Lead
    - Titulo
    - Bajada
    - Imagen de la nota.
    - Marquesina o Marquee (es un texto libre)
    - Nombre del Autor
    - Imagen del Autor
    - Url de la nota.

- Armar un artículo, que sea semántico en su construcción html y que sea lo suficientemente dinámico como para contemplar al menos 3 opciones de Render.

-	Por último, armar a elección un Módulo contenedor de artículos completo. El mismo deberá tener la posibilidad de tener un título o no, y el título deberá tener por configuración si lleva link a la sección indicada o no.

### Deseables

- Se valorará la utilización de Sass o pre-procesador de CSS.
- Se valorará la realizacion de test unitarios con JEST.

<hr>

## App

Para ver la aplicación funcionando, ingrese a este [link](https://ejercicio-la-nacion.vercel.app/).


## API

La API es una simulación a partir de un archivo .json con dummy data.

La estructura de la API consiste en una colección de objetos, cada uno representa un **contenedor**.

El **contenedor**, puede contener:

- *type*
- *url*
- *title*
- ***articles***

Los campos no son obligatorios, sin embargo para que se muestren noticias *articles* deberá contener por lo menos un artículo.

Los **articles** están estructurados de la siguiente manera:

- *type*
- *url*
- *lead*
- *title*
- *tail*
- *image*
- *marquee*
- *authorName*
- *authorImage*


Los campos no son obligatorios puesto que está considerado el conditional rendering dependiendo de la información que se le pase.

## Desarrollo

La idea del desarrollo fue hacer una aplicación mobile-first y responsive, que considere los 3 casos planteados.

Por lo tanto todos los casos base de los estilos y de los componentes fueron pensados primero en celular, luego adaptados a sus otras 2 respectivas versiones.

En este caso se optó porque fuera la API quien orquestara cómo se iba a mostrar la información, puesto que los datos de qué tipo de article y de qué tipo de container se trata vienen directamente de ahí.

Se utilizó SASS para los estilos y se realizaron test unitarios de los articles (simplemente a manera demostrativa, no se realizó un testeo en profundidad)
## Estructura del código

El código está divivido en componentes, siendo los principales **Container** y **Article**. Los archivos relacionados a cada uno de estos componentes se encuentran adentro de la correspondiente carpeta, tales pueden ser los archivos de estilo o bien los handlers relacionados.

## Article

Como se mencionó previamente los articles tienen una estructura muy variable, por lo tanto se optó por considerar el conditional rendering para cada uno de los elementos del article, permitiendo que se rendericen las partes que solamente vengan por API.

Además, los articles cuentan con un **type** el que determinará el layout que va a tomar ese article.

El layout handler se encargará de seleccionar y acomodar los elementos del article de la manera correspondiente al tipo de article que venga por API.

Dada la estructura variable del article, decidí separar cada componente del mismo, esto brinda mayor flexibilidad al momento de tener que modificar algo, y además permite manejar mejor la lógica condicional para ver si se renderiza o no cada elemento que corresponda al artículo.

**Tipos de articles:**
- Default (nota común)
- Color-scoped (nota de color)
- Author-scoped (nota de opinión)

## Container

El container tiene un funcionamiento muy parecido a los articles, puesto que también considera un tipo que venga por API. Al igual que en los articles el layoutHandler se encargará de acomodar los articles de la forma correspondiente para cada tipo de container.

**Tipos de containers disponibles:**
- Notas 2 (muestra 2 notas de manera horizontal)
- Notas 3 (muestra 3 notas de manera horizontal)
- Focal Izquierdo (muestra 1 nota grande a la izquierda y 2 más pequeñas de forma vertical a la derecha)

Dichos containers mostraran sus efectos en las versiones tablet y desktop del sitio, en la versión mobile todos los articles están distribuidos de manera vertical una abajo de la otra.

En este caso **se consideró que la información de la API viene siempre bien**. Puesto que no hay manejo de errores para los casos en los que, por ejemplo, queramos renderizar un "Notas 3" pero le pasemos 2 articles.

## Instalación

En caso de querer ejecutar la aplicación en local:

- Descargar repositorio
- `cd` a la carpeta del repositorio descargado
- `npm i`
- `npm start`

## Tests

Para correr los tests: `npm test`






