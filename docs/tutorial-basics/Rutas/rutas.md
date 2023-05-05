---
sidebar_position: 22
---

# Rutas

## ¿Qué son y para que sirven?

Las rutas en Laravel son esencialmente URLs que se asocian a diferentes acciones dentro de la aplicación. Estas URLs representan direcciones web que se pueden visitar en el navegador para acceder a diferentes funcionalidades. Por ejemplo, si estás construyendo una aplicación de comercio electrónico, podrías tener una ruta que represente la página de inicio de tu tienda virtual, otra ruta que represente la página del catálogo de productos y otra que represente la página de pago.

Cada ruta puede tener una acción asociada a ella, y esta acción se define en un controlador. Un controlador es una clase PHP que se utiliza para agrupar la lógica relacionada con una determinada funcionalidad. Por ejemplo, si tienes una ruta que representa la página de inicio de tu tienda virtual, podrías tener un controlador que se encargue de cargar los datos necesarios para esa página y devolver una vista que se mostrará en el navegador.

En resumen, las rutas y los controladores son elementos esenciales en Laravel porque permiten que tu aplicación web tenga una estructura bien definida y organizada. Las rutas permiten que los usuarios accedan a diferentes funcionalidades a través de URLs intuitivas y fáciles de entender, mientras que los controladores se encargan de manejar la lógica detrás de cada una de estas funcionalidades.

## Tipos de rutas

En Laravel 10, al igual que en versiones anteriores, existen diferentes tipos de rutas que se pueden definir en el archivo `routes/web.php`. A continuación, se describen los principales tipos de rutas:

1. Rutas básicas: Son las rutas más simples y se definen mediante el método `Route::get()`, que indica que la ruta debe responder a una petición HTTP GET. Por ejemplo:

```php
Route::get('/', function () {
    return '¡Hola, mundo!';
});
```

En este caso, la ruta se define para el URI `/`, es decir, la raíz del sitio. Cuando se accede a esa URL, se ejecuta la función anónima que devuelve el mensaje "¡Hola, mundo!".

2. Rutas con parámetros: A veces es necesario definir rutas que incluyan parámetros variables en la URL. Para hacer esto, se utiliza la sintaxis `{parametro}` en la definición de la ruta, como en el siguiente ejemplo:

```php
Route::get('saludo/{nombre}', function ($nombre) {
    return '¡Hola, ' . $nombre . '!';
});
```

En este caso, la ruta se define para el URI `/saludo/{nombre}`, donde `{nombre}` es un parámetro que puede tomar cualquier valor. Al acceder a esa URL con un valor para el parámetro, por ejemplo `/saludo/Juan`, se ejecuta la función anónima que devuelve el mensaje "¡Hola, Juan!".

3. Rutas con restricciones: A veces es necesario limitar los valores que pueden tomar los parámetros de una ruta. Para hacer esto, se pueden utilizar expresiones regulares en la definición de la ruta, como en el siguiente ejemplo:

```php
Route::get('usuario/{id}', function ($id) {
    return 'Mostrando información del usuario ' . $id;
})->where('id', '[0-9]+');
```

En este caso, la ruta se define para el URI `/usuario/{id}`, donde `{id}` es un parámetro que debe ser un número. La restricción se define mediante el método `where()`, que recibe el nombre del parámetro y una expresión regular que limita los valores que puede tomar.

4. Rutas con nombre: Las rutas con nombre son útiles para hacer referencia a ellas en otras partes de la aplicación. Se pueden definir utilizando el método `name()` al final de la definición de la ruta, como en el siguiente ejemplo:

```php
Route::get('contacto', function () {
    return 'Página de contacto';
})->name('contacto');
```

En este caso, la ruta se define para el URI `/contacto` y se le asigna el nombre "contacto". Luego, en otras partes de la aplicación, se puede hacer referencia a esta ruta por su nombre, por ejemplo:

```php
<a href="{{ route('contacto') }}">Contacto</a>
```

En resumen, las rutas son esenciales en Laravel ya que permiten definir cómo se debe responder a cada petición HTTP que llega al servidor. Los diferentes tipos de rutas permiten definir rutas simples o complejas, con o sin parámetros, y con o sin restricciones en los valores de los parámetros. Además, las rutas con nombre permiten hacer referencia a ellas de forma sencilla en otras partes de la aplicación.

## Definición de rutas

El método `get` se utiliza para definir una ruta que acepta solicitudes HTTP GET. Por ejemplo:

```php
Route::get('/anuncios', function () {
    // Lógica para mostrar todos los productos
});
```

El método `post` se utiliza para definir una ruta que acepta solicitudes HTTP POST. Por ejemplo:

```php
Route::post('/anuncios', function () {
    // Lógica para agregar un nuevo producto
});
```

El método `put` se utiliza para definir una ruta que acepta solicitudes HTTP PUT. Por ejemplo:

```php
Route::put('/anuncios/{id}', function ($id) {
    // Lógica para actualizar un producto con el ID especificado
});
```

El método `patch` se utiliza para definir una ruta que acepta solicitudes HTTP PATCH. Por ejemplo:

```php
Route::patch('/anuncios/{id}', function ($id) {
    // Lógica para actualizar algunos campos de un producto con el ID especificado
});
```

El método `delete` se utiliza para definir una ruta que acepta solicitudes HTTP DELETE. Por ejemplo:

```php
Route::delete('/anuncios/{id}', function ($id) {
    // Lógica para eliminar un producto con el ID especificado
});
```

El método `any` se utiliza para definir una ruta que acepta solicitudes HTTP de cualquier verbo (GET, POST, PUT, PATCH, DELETE, etc.). Por ejemplo:

```php
Route::any('/anuncios', function () {
    // Lógica para manejar cualquier tipo de solicitud HTTP para la ruta /productos
});
```

El método `match` se utiliza para definir una ruta que acepta solicitudes HTTP para uno o más verbos específicos. Por ejemplo:

```php
Route::match(['get', 'post'], '/anuncios', function () {
    // Lógica para manejar solicitudes HTTP GET o POST para la ruta /productos
});
```

Es importante tener en cuenta que estos métodos pueden recibir más de un parámetro. El primer parámetro es la URI de la ruta y el segundo parámetro es la acción que se realizará cuando se acceda a la ruta. En algunos casos, como en las rutas con parámetros, es posible que se necesiten más parámetros.

### Prueba de ejemplo

Vamos a utilizar un ejemplo muy sencillo para ilustrar este tema. Aprovechando nuestro proyecto y el modelo Anuncio, vamos a crear una ruta que nos devuelva todos los anuncios de nuestra base de datos y que los muestre en formato JSON. Para ello, diríjase al archivo web.php y defina la siguiente ruta:

```php
Route::get('/anuncios', function () {
    return Anuncio::all();
});
```

Inicie el servidor si no lo tiene iniciado con el siguiente comando en la terminal:
```bash
php artisan serve
```

Luego, diríjase a su navegador favorito y escriba en la barra de direcciones localhost:8000/anuncios.

Debería obtener una respuesta similar a esta:

![Ejemplo de ruta](/img/ejemplo.png)

Es posible que en su ordenador los anuncios se muestren uno tras otro sin un formato claro. Para obtener una respuesta más ordenada como la del ejemplo, puede utilizar cualquier extensión que formatee el JSON. En el caso del ejemplo, se está utilizando Google Chrome y la extensión JSON Formatter.

A continuación mostraremos cómo crear la ruta para mostrar un anuncio determinado por su ID.

```php
// Añadido para devolver un anuncio
Route::get('/anuncios/{id}', function ($id) {
    return Anuncio::find($id);
});
```
Después de definida la ruta, diríjase a la barra de direcciones y escriba:

```bash
localhost:8000/anuncios/1
```
Debería obtener una pantalla como la que se muestra a continuación:

![Ejemplo de rutas](/img/ejemplo2.png)

### Verbos HTTP

| Verbo | Función |
| --- | --- |
| GET | Solicita una representación de un recurso específico. No debe tener efectos secundarios. |
| POST | Envía una entidad a un recurso específico, causando un cambio en el estado del servidor. |
| PUT | Reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la solicitud. |
| PATCH | Aplica modificaciones parciales a un recurso. |
| DELETE | Borra un recurso específico. |
| HEAD | Pide una respuesta idéntica a una solicitud GET, pero sin el cuerpo de la respuesta. |

Es importante tener en cuenta que cada uno de estos verbos tiene una función específica en el protocolo HTTP y deben ser utilizados correctamente en una aplicación web para garantizar su correcto funcionamiento.

## Nombres de ruta

Nombrar las rutas en Laravel es una buena práctica porque permite hacer referencia a ellas de manera más sencilla en la aplicación. En lugar de tener que escribir la URL completa cada vez que se requiere utilizar la ruta, se puede hacer referencia a ella por su nombre y Laravel se encarga de generar automáticamente la URL correspondiente.

Para nombrar una ruta en Laravel, se utiliza el método `name()` al definir la ruta. Por ejemplo:

```php
Route::get('/usuarios', [UserController::class, 'index'])->name('users.index');
```

En este ejemplo, la ruta `/usuarios` está siendo nombrada como `users.index`. Luego, en cualquier parte de la aplicación donde se necesite generar la URL de esta ruta, se puede hacer referencia a ella por su nombre:

```php
$url = route('users.index');
```

De esta manera, si la URL de la ruta `/usuarios` cambia en el futuro, no será necesario buscar y modificar todas las referencias a la URL en la aplicación, ya que se estará utilizando el nombre de la ruta en su lugar.

Además de hacer referencia a las rutas por su nombre para generar las URLs, también se pueden utilizar para redireccionar al usuario a una ruta específica utilizando el método `redirect()->route()`. Por ejemplo:

```php
return redirect()->route('users.index');
```

En resumen, nombrar las rutas en Laravel es importante porque permite hacer referencia a ellas de manera más sencilla en la aplicación y evita tener que modificar múltiples referencias a una URL si ésta cambia en el futuro.

## Grupos de rutas

Los grupos de rutas en Laravel son una forma eficiente de definir un conjunto de rutas que comparten ciertas características, como un prefijo común, middleware, espacio de nombres, entre otras. 

Por ejemplo, si queremos agregar un prefijo a un conjunto de rutas, como "admin", podemos hacerlo utilizando un grupo de rutas:

```php
Route::prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard']);
    Route::get('/users', [AdminController::class, 'users']);
    Route::get('/settings', [AdminController::class, 'settings']);
});
```

En este ejemplo, todas las rutas dentro del grupo tienen el prefijo "admin/", por lo que la URL de acceso a la ruta 'dashboard' sería "http://tu-dominio.com/admin/dashboard".

Además del prefijo, también podemos aplicar middleware a todo el grupo de rutas, lo que permite agregar autenticación, validación, control de acceso, entre otros:

```php
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/profile', [ProfileController::class, 'index']);
    Route::get('/settings', [SettingsController::class, 'index']);
});
```

En este ejemplo, todas las rutas dentro del grupo están protegidas por el middleware de autenticación, lo que significa que solo los usuarios autenticados pueden acceder a ellas.

Otra característica útil de los grupos de rutas es la capacidad de agregar un espacio de nombres para los controladores, lo que ayuda a organizar mejor la estructura de la aplicación y evitar conflictos de nombres:

```php
Route::namespace('Admin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::get('/users', [UserController::class, 'index']);
    Route::get('/settings', [SettingsController::class, 'index']);
});
```

En este ejemplo, todos los controladores dentro del grupo estarán ubicados en el namespace "App\Http\Controllers\Admin", lo que significa que los nombres de los controladores dentro del grupo no entrarán en conflicto con los nombres de controladores fuera del grupo.

En resumen, los grupos de rutas son una herramienta poderosa y útil en Laravel para organizar y estructurar rutas, aplicar middleware y prefijos comunes, y organizar los controladores.

## Rutas de recurso

Las rutas de recurso (resource routes) son una característica útil de Laravel que nos permite generar rápidamente varias rutas comunes para un controlador en particular. Las rutas de recurso se utilizan para manejar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en un modelo específico.

Al definir las rutas de recurso, se crean rutas predefinidas para acciones comunes como listar todos los registros, mostrar un registro específico, crear un nuevo registro, actualizar un registro existente y eliminar un registro. Cada una de estas acciones tiene una ruta y un método correspondiente en el controlador.

Para definir las rutas de recurso en Laravel, se utiliza el método `resource()` en el archivo de rutas. Este método acepta dos argumentos: la URL base para el recurso y el nombre del controlador que manejará las solicitudes para ese recurso.

Por ejemplo, si queremos definir rutas de recurso para un modelo `Anuncio`, se podría utilizar el siguiente código en el archivo de rutas:

```
Route::resource('anuncios', 'App\Http\Controllers\PostController');
```

Con esto, se generarán automáticamente las siguientes rutas:

| Verbo HTTP | URI                  | Nombre de la ruta     | Acción del controlador      |
|-----------|----------------------|----------------------|-----------------------------|
| GET       | /anuncios               | anuncios.index          | AnuncioController@index        |
| GET       | /anuncios/create        | anuncios.create         | AnuncioController@create       |
| POST      | /anuncios               | anuncios.store          | AnuncioController@store        |
| GET       | /anuncios/{anuncio}        | posts.show           | AnuncioController@show         |
| GET       | /anuncios/{anuncio}/edit   | posts.edit           | AnuncioController@edit         |
| PUT/PATCH | /anuncios/{anuncios}        | posts.update         | AnuncioController@update       |
| DELETE    | /anuncios/{anuncios}        | posts.destroy        | AnuncioController@destroy      |

Como se puede ver, la definición de rutas de recurso puede ahorrar mucho tiempo y esfuerzo al generar varias rutas comunes para un controlador específico. Además, las rutas de recurso pueden ser nombradas y utilizadas en la aplicación para generar enlaces y redireccionamientos de forma sencilla y eficiente.

:::info
Algo importante a tener en cuenta sobre las rutas es que, a medida que una aplicación Laravel se vuelve más grande y compleja, el número de rutas puede aumentar significativamente. Esto puede dificultar el mantenimiento y la comprensión del código.

Para evitar esto, es una buena práctica utilizar archivos de rutas separados para diferentes partes de la aplicación y organizar las rutas en grupos lógicos. Por ejemplo, puede tener un archivo de rutas para la autenticación de usuarios, otro para la administración del sitio y otro para la API. 

Además, es recomendable utilizar patrones de nomenclatura coherentes para las rutas, lo que facilita la identificación de las rutas en la aplicación. Por ejemplo, puede utilizar el prefijo "admin" para las rutas de administración o el prefijo "api" para las rutas de la API.

En resumen, las rutas son un componente esencial de cualquier aplicación web en Laravel y es importante entender cómo funcionan y cómo se pueden utilizar para crear una aplicación web robusta y escalable.

Estos temas los iremos desarrollando a medida que avancemos en el curso.
:::

Si desea revisar todas las rutas definidas en su aplicación puede 
utilizar el comando:

```bash
php artisan r:l
```
![php artsan r:l](/img/rutas.png)
