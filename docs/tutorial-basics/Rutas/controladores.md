---
sidebar_position: 30
---

# Controladores

## ¿Qué son y para que sirven?

En el contexto de Laravel, un controlador es una clase que maneja la lógica de una o varias rutas definidas en una aplicación web. Los controladores permiten separar la lógica de la aplicación de la lógica de las rutas, lo que hace que el código sea más legible, mantenible y escalable.

En términos más simples, los controladores son como intermediarios entre las rutas y las respuestas que se devuelven al usuario. Cuando se define una ruta en Laravel, se especifica qué controlador se encargará de manejar la petición que llega a esa ruta.

En lugar de incluir la lógica de la aplicación en la propia ruta, se utiliza un controlador para manejar la lógica de la aplicación. Los controladores pueden manejar una variedad de acciones, como obtener datos de una base de datos, validar entradas del usuario, devolver vistas y más.

En definitiva, los controladores son una parte esencial de la estructura de una aplicación Laravel, ya que permiten separar la lógica de la aplicación de las rutas, lo que hace que el código sea más organizado y fácil de mantener.

## ¿Cómo se crean?

En Laravel, se pueden crear controladores utilizando el comando `php artisan make:controller`. Este comando generará un nuevo archivo de controlador en el directorio `app/Http/Controllers`.

Por ejemplo, si queremos crear un controlador llamado `UserController`, podemos ejecutar el siguiente comando en la terminal:

```
php artisan make:controller UserController
```

Esto creará un archivo `UserController.php` en el directorio `app/Http/Controllers`. Dentro de este archivo, podemos definir los métodos que se utilizarán para manejar las diferentes acciones de nuestra aplicación.

Por ejemplo, si queremos crear un método para mostrar la lista de usuarios, podemos agregar lo siguiente al archivo `UserController.php`:

```php
public function index()
{
    $users = User::all();
    return view('users.index', compact('users'));
}
```

Este método obtiene todos los usuarios de la base de datos y los pasa a una vista llamada `users.index` como una variable `$users`. Luego, en la vista, podemos mostrar la lista de usuarios utilizando la variable `$users`.

Una vez que hemos creado nuestro controlador y definido nuestros métodos, podemos utilizarlos en nuestras rutas para manejar las diferentes acciones de nuestra aplicación.

## Definición de métodos

Vamos a mostrar como crear un controlador para el modelo Anuncio, aquí te muestro cómo se podría definir un controlador para la entidad "Anuncio" en Laravel 10 con todos los métodos disponibles:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Anuncio;
use Illuminate\Http\Request;

class AnuncioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Listar todos los anuncios
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // Mostrar el formulario para crear un nuevo anuncio
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Almacenar un nuevo anuncio
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Mostrar un anuncio específico
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // Mostrar el formulario para editar un anuncio
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Actualizar un anuncio específico
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Eliminar un anuncio específico
    }
}
```

Cada uno de estos métodos maneja una solicitud HTTP específica para la entidad "Anuncio", ya sea para listar todos los anuncios, crear uno nuevo, actualizar uno existente o eliminarlo.

:::info Encargar a Laravel que cree un controlador con el método Resource
En Laravel, se puede generar un controlador con los métodos necesarios para realizar un CRUD completo en un solo paso utilizando el comando `php artisan make:controller --resource`. Este comando generará un controlador con los siguientes métodos:

- index: muestra una lista de recursos.
- create: muestra el formulario para crear un nuevo recurso.
- store: almacena un nuevo recurso en la base de datos.
- show: muestra un recurso específico.
- edit: muestra el formulario para editar un recurso existente.
- update: actualiza un recurso existente en la base de datos.
- destroy: elimina un recurso existente de la base de datos.

Para generar un controlador con estos métodos, ejecute el siguiente comando en la terminal:

```
php artisan make:controller NombreDelControlador --resource
```

Reemplace "NombreDelControlador" por el nombre que desee darle al controlador. Por ejemplo, si desea generar un controlador para el modelo "Anuncio", puede ejecutar el siguiente comando:

```
php artisan make:controller AnuncioController --resource
```

Esto generará un controlador llamado "AnuncioController" en la carpeta "app/Http/Controllers" con los métodos necesarios para realizar un CRUD completo.
:::