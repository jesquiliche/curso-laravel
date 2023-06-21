---
sidebar_position: 21
---
# Introducción

Las rutas y los controladores son dos componentes esenciales en el desarrollo de aplicaciones web en Laravel. Las rutas son las encargadas de recibir las solicitudes HTTP y redirigirlas a los controladores correspondientes, que son los encargados de manejar la lógica de la aplicación y devolver una respuesta al usuario.

En Laravel, las rutas se definen en el archivo "routes/web.php" y pueden contener métodos HTTP como GET, POST, PUT y DELETE. Cada ruta se define con una URL y un controlador asociado que manejará la solicitud. Además, las rutas pueden incluir parámetros que se pasan al controlador para ser procesados.

Por otro lado, los controladores son clases PHP que manejan la lógica de la aplicación. Cada controlador se encarga de un conjunto específico de solicitudes y puede contener varios métodos para manejar diferentes acciones. Los métodos de los controladores devuelven respuestas HTTP, como vistas, archivos JSON o archivos descargables.

En resumen, las rutas y los controladores son fundamentales en el desarrollo de aplicaciones web en Laravel, ya que permiten manejar las solicitudes HTTP y proporcionar una respuesta al usuario. Una buena organización y estructuración de las rutas y los controladores puede mejorar la eficiencia y la escalabilidad de la aplicación.

:::info ejemplo
Imagínate que estás en una gran ciudad y quieres ir a algún lugar específico, por ejemplo, un parque de diversiones. Para llegar allí, necesitas seguir una ruta que te lleve hasta ese lugar. Las rutas son como direcciones que te indican cómo llegar a un lugar específico. 

En el caso de una aplicación web, la ruta es la dirección que le dice al navegador qué página mostrar al usuario cuando accede a una URL específica. Por ejemplo, cuando escribes "www.ejemplo.com/productos" en el navegador, estás pidiendo ver la página de "productos" en el sitio web "ejemplo.com". 

Los controladores son como los conductores de un autobús que te llevan a tu destino en la ciudad. Los controladores son los encargados de procesar la información que llega a través de las rutas y decidir qué hacer con ella. 

Por ejemplo, cuando haces clic en un botón en una página web para agregar un producto a tu carrito de compras, el controlador procesa esa información y la envía a la base de datos para guardarla. 

Así que, en resumen, las rutas y los controladores son como las direcciones y los conductores que te llevan a donde quieres ir en una ciudad grande. En una aplicación web, las rutas te indican a qué página acceder y los controladores procesan la información para hacer que la página funcione correctamente.
:::
