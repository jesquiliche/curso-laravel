---
sidebar_position: 5
---

# Vistas de administración

## Introducción

En esta sección veremos cómo implementar las vistas, controladores y rutas para mantener nuestras **categorías, subcategorías y usuarios**. Al final del capítulo, también estudiaremos cómo crear un sistema de roles y permisos para nuestros **usuarios**.

## Categorías

A continuación, vamos a crear la vista, controlador y ruta necesarios para implementar nuestro mantenimiento de **categorías**.

### Creación del controlador

Todos los controladores para la administración los crearemos en una carpeta llamada **Admin** dentro de la carpeta **app\Http\Controllers** para mantener cierto orden y control. De esta manera, separaremos los controladores del **Frontend** de los controladores del panel de administración.

Para crear el controlador, teclee el siguiente comando:

```bash
php artisan make:controller Admin\CategoriaController
```

Una vez creado el controlador, diríjase a él e introduzca el siguiente código:

```php
public function index()
{
    $categorias = Categoria::paginate(4);

    return view('admin.categorias.index', compact('categorias'));
}
```

El método **paginate** indica a Eloquent que devuelva el resultado en páginas de 4 categorías por página. Volveremos a este tema en la implementación de la vista.

### Creación de la vista

Todas las vistas asociadas con nuestro **panel de administración** estarán contenidas en una carpeta denominada **admin** dentro de la carpeta **resources\views**. En el caso de las categorías, incluiremos todas las vistas asociadas en **resources\views\admin\categorias**.

Empecemos por la vista **index.blade.php**. Esta vista nos mostrará un listado paginado con todas las categorías disponibles.

```php
@extends('adminlte::page')

@section('title', 'Categorías')

@section('content_header')
    <h1>Lista de Categorías</h1>
@stop

@section('content')
    {{-- Comprobación de sesión --}}
    @if (session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Cerrar">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    @endif

    <div class="card col-lg-12 col-md-4">
        <div class="card-header mb-4">
            <table>
                <td>
                    <a href="{{ route('admin.categoria.create') }}" class="btn btn-primary btn-sm">
                        Agregar categoría
                    </a>
                </td>
                <!-- El botón "Agregar categoría" redirige a la ruta "admin.categoria.create" -->
            </table>
        </div>
        <div class="card-body mt-2">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Imagen</th>
                        <

th scope="col" colspan="2">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {{-- Iteración a través de las categorías --}}
                    @foreach ($categorias as $categoria)
                        <tr>
                            <th scope="row">{{ $categoria->id }}</th>
                            <td><b>{{ $categoria->nombre }}</b></td>
                            <td>{{ strip_tags($categoria->descripcion) }}</td>
                            <td><img src="{{ $categoria->imagen }}" width="125px"></td>
                            {{-- Botón de edición --}}
                            <td width="10px">
                                <a href="{{ route('admin.categoria.edit', ['id' => $categoria->id]) }}" class="btn btn-primary btn-sm">Editar</a>
                            </td>
                            {{-- Botón de borrado --}}
                            <td width="10px">
                                <form action="{{ route('admin.categoria.delete', ['id' => $categoria->id]) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Si borra esta categoría, borrará todas las subcategorías y anuncios asociados.\n¿Estás seguro de que deseas eliminar esta categoría?')">Eliminar</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    {{ $categorias->links('pagination::bootstrap-4') }}
@stop
```
:::info ¿Qué hace?

- `@extends('adminlte::page')`: Esta línea indica que la vista extiende el layout proporcionado por AdminLTE, lo cual significa que heredará estilos y funcionalidades predefinidas del tema.

- `@section('title', 'Categorías')`: Aquí se define el título de la página, que en este caso será "Categorías".

- `@section('content_header')`: Esta sección define el contenido que se mostrará en el encabezado de la página. En este caso, se muestra el título "Lista de Categorías".

- `@section('content')`: Aquí comienza la sección principal de contenido de la página. A partir de este punto, se empieza a definir el contenido que se mostrará en el cuerpo de la página.

- `@if (session('success'))`: En esta línea se comprueba si hay un mensaje de éxito almacenado en la sesión. Si existe, se muestra un cuadro de alerta con el mensaje.

- Luego se crea una tarjeta (`<div class="card">`) que contiene una tabla con las categorías. En esta tabla se muestra información como el id, nombre, descripción e imagen de cada categoría.

- Dentro de la iteración `@foreach ($categorias as $categoria)` se muestran los datos de cada categoría en filas de la tabla. También se incluyen botones de edición y eliminación para cada categoría.

- Al final de la vista, se muestra la paginación utilizando el componente de paginación de Bootstrap 4 (`{{ $categorias->links('pagination::bootstrap-4') }}`).

En resumen, esta vista muestra una lista de categorías con la posibilidad de agregar, editar y eliminar categorías. Utiliza el diseño y los estilos proporcionados por AdminLTE para lograr una apariencia agradable y coherente.
:::

Si después de implementar el código y especificar la ruta desea probar la vista, sustituya las rutas especificadas por el símbolo "#" para evitar errores. Una vez probado, le recomendamos volver a las rutas originales.

A continuación, vamos a definir la ruta asociada a la vista. Diríjase al archivo de rutas **routes\admin.php** y escriba el siguiente código:

```php
use App\Http\Controllers\Admin\CategoriaController;

Route::get('/categorias', [CategoriaController::class, 'index'])->name('admin.categoria.index');
```

No olvide incluir la referencia al controlador **CategoriaController** al principio del archivo:

```php
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\CategoriaController;
use App\Http\Controllers\Admin\SubCategoriaController;
use App\Http\Controllers\Admin\UserController;
```
Ahora si desde la barra de direcciones tecla la siguiente dirección `'http://localhost:8000/admin/categorias'`, obtendrá la siguiente vista.

![Vista categorias](/img/categorias2.png)

Como esta forma de acceder a la vista no es de lo más cómodo para el usuario, vamos a modificar el **sidebar** de nuestro **panel de administración**. Para ello editaremos el archivo **config\adminlte.php**, busque la siguiente sección y  modifiquela.

```php
['header' => 'ADMINISTRACIÓN'],
[
    'text' => 'Categorías',
    'route'  => 'admin.categoria.index',
    'icon' => 'fas fa-fw fa-layer-group',
],
```
### Agregar categorías

En este apartado vamos a ver como habilitar el botón de **Agregar** de nuestra vista index. Para ello deberemos crear un nuevo método en nuestro controlador **CategoriaController**.

```php
public function create()
    {
        return view('admin.categorias.create');
    }
```
Como puede observar el código del método **create** es bastante simplemente, llamamos a la vista `admin.categorias.create`. Diríjase la carpeta `resources\views\admin\categorias` y cree el archivo `create.blade.php`.

```php
@extends('adminlte::page')

@section('title', 'Agregar Categoría')

@section('content_header')
    <h1>Agregar Categoría</h1>
@stop

@section('content')
    <div class="container">
        <div class="card col-lg-12 p-4">
            {!! Form::open(['route' => 'admin.categoria.store', 'files' => true, 'method' => 'POST']) !!}

            <div class="form-group">
                {!! Form::label('nombre', 'Nombre:') !!}
                {!! Form::text('nombre', null, ['class' => 'form-control'.($errors->has('nombre') ? ' is-invalid' : ''), 'required']) !!}
                @if ($errors->has('nombre'))
                    <div class="invalid-feedback">
                        {{ $errors->first('nombre') }}
                    </div>
                @endif
            </div>

            <div class="form-group">
                {!! Form::label('descripcion', 'Descripción:') !!}
                {!! Form::textarea('descripcion', null, ['class' => 'form-control'.($errors->has('descripcion') ? ' is-invalid' : ''), 'required']) !!}
                @if ($errors->has('descripcion'))
                    <div class="invalid-feedback">
                        {{ $errors->first('descripcion') }}
                    </div>
                @endif
            </div>

            <div class="form-group">
                {!! Form::label('imagen', 'Imagen:') !!}
                {!! Form::file('imagen', ['class' => 'form-control-file'.($errors->has('imagen') ? ' is-invalid' : ''), 'accept' => 'image/*', 'onchange' => 'previewImage(event)']) !!}
                @if ($errors->has('imagen'))
                    <div class="invalid-feedback">
                        {{ $errors->first('imagen') }}
                    </div>
                @endif
                <img id="preview" src="#" alt="Preview de la imagen" style="display: none; max-width: 200px; margin-top: 10px;">
            </div>

            {!! Form::submit('Agregar', ['class' => 'btn btn-primary']) !!}

            {!! Form::close() !!}
        </div>
    </div>

    <script>
        function previewImage(event) {
            var input = event.target;
            var preview = document.getElementById('preview');

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                }

                reader.readAsDataURL(input.files[0]);
            }
        }
    </script>
@stop
@extends('adminlte::page')

@section('title', 'Agregar Categoría')

@section('content_header')
    <h1>Agregar Categoría</h1>
@stop
```
:::info ¿Qué hace?

- `@extends('adminlte::page')`: Esta línea indica que la vista extiende el layout proporcionado por AdminLTE, lo cual significa que heredará estilos y funcionalidades predefinidas del tema.

- `@section('title', 'Agregar Categoría')`: Aquí se define el título de la página, que en este caso será "Agregar Categoría".

- `@section('content_header')`: Esta sección define el contenido que se mostrará en el encabezado de la página. En este caso, se muestra el título "Agregar Categoría".

- `@section('content')`: Aquí comienza la sección principal de contenido de la página. A partir de este punto, se empieza a definir el contenido que se mostrará en el cuerpo de la página.

- Dentro del `div` con clase "container" se crea una tarjeta (`<div class="card">`) que contendrá un formulario para agregar una categoría.

- El formulario se crea utilizando el método `Form::open`, que especifica la ruta de destino del formulario, los atributos `files` y `method`, que permiten el envío de archivos y el método HTTP POST respectivamente.

- Dentro del formulario, hay tres campos de entrada: nombre, descripción e imagen. Cada campo se crea utilizando el método `Form::text` o `Form::textarea`, y se le asignan atributos como clase y validación de errores. Si hay errores de validación, se muestra un mensaje de error debajo del campo correspondiente.

- El campo de imagen utiliza el método `Form::file` y tiene un evento `onchange` que llama a la función `previewImage` para mostrar una vista previa de la imagen seleccionada. La vista previa se muestra en un elemento `img` con id "preview".

- El botón "Agregar" se crea utilizando el método `Form::submit` y tiene la clase "btn btn-primary".

- Al final de la vista, se encuentra un script JavaScript que define la función `previewImage`. Esta función lee el archivo de imagen seleccionado por el usuario y muestra una vista previa de la imagen en el elemento `img` con id "preview".

En definitiva, esta vista muestra un formulario para agregar una categoría, que incluye campos para el nombre, descripción e imagen de la categoría. También permite la visualización de una vista previa de la imagen seleccionada antes de enviar el formulario.
:::

A continuación, dentro de la vista **index.blade.php** se encuentra el siguiente código:

```php
<td>
    <a href="{{ route('admin.categoria.create') }}" class="btn btn-primary btn-sm">
        Agregar categoría
    </a>
</td>
```

Este enlace redirige a la ruta asociada a la vista **admin.categoria.create**. El código crea un enlace dentro de una celda de una tabla. Al hacer clic en el enlace, el usuario será redirigido a la ruta definida en `route('admin.categoria.create')`, que se ha configurado para estar asociada a la vista `admin.categoria.create`.

Ahora si se dirige al listado de categorías y hace click sobre el botón agregar se le debería mostrar la siguiente vista.

![Agregar categoria](/img/agregar_categoria.png)

### Editar categoría

A continuación, vamos a estudiar cómo implementar la vista. Empecemos por el controlador. Diríjase al archivo **app\Http\Controllers\Admin\CategoriaController.php** e introduzca el siguiente código:

```php
public function edit($id)
{
    // Buscar la categoría que se va a editar
    $categoria = Categoria::find($id);
    return view('admin.categorias.edit', compact('categoria'));
}
```

No es necesario comentar este código, ya que su funcionalidad es evidente. Aprovecharemos para crear otro método en el controlador llamado **update**. Este método se encargará de validar los datos introducidos en la vista y actualizar nuestra base de datos.

```php
public function update(Request $request, $id)
{
    // Validar los campos de la petición
    $request->validate([
        'nombre' => 'required',
        'descripcion' => 'required',
        'imagen' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    // Buscar la categoría que se va a actualizar
    $categoria = Categoria::find($id);
    $categoria->nombre = $request->nombre;
    $categoria->descripcion = $request->descripcion;

    // Verificar si se ha seleccionado un archivo de imagen para subir
    if ($request->hasFile('imagen')) {
        // Recuperar el archivo de imagen
        $imagen = $request->file('imagen');
        // Generar un nombre único para el archivo
        $imagenNombre = time() . '_' . $imagen->getClientOriginalName();
        // Mover el archivo a la carpeta public/images
        $imagen->move(public_path('images'), $imagenNombre);
        // Guardar la ruta de la imagen en el campo 'imagen' de la categoría
        $categoria->imagen = '/images/' . $imagenNombre;
    }

    // Guardar los cambios en la base de datos
    $categoria->save();

    // Redirigir a la lista de categorías con un mensaje de éxito
    return redirect()->route('admin.categoria.index')->with('success', 'Categoría actualizada correctamente');
}
```

:::info ¿Qué hace?

1. El método `update` recibe dos parámetros: `$request` (que parece ser una instancia de la clase `Request`) y `$id` (el identificador de la categoría que se va a actualizar).

2. Se realiza una validación de los campos enviados en la petición utilizando el método `validate()` del objeto `$request`. En este caso, se verifica que los campos `nombre` y `descripcion` sean requeridos, y que el campo `imagen` sea una imagen válida con un tamaño máximo de 2048 kilobytes.

3. A continuación, se busca la categoría que se va a actualizar utilizando el modelo `Categoria` y el identificador `$id`. Esto permite obtener la categoría correspondiente en la base de datos.

4. Se asignan los valores recibidos en los campos `nombre` y `descripcion` al objeto `$categoria`, actualizando así los datos de la categoría.

5. Si se ha seleccionado un archivo de imagen en la petición utilizando el método `hasFile()` del objeto `$request`, se procede a procesarlo.

6. Se recupera el archivo de imagen utilizando el método `file()` del objeto `$request` y se genera

 un nombre único para el archivo concatenando la marca de tiempo actual con el nombre original del archivo.

7. Luego, se mueve el archivo de imagen a una carpeta específica dentro de la carpeta pública (`public/images`) utilizando el método `move()` del objeto `$imagen`. La función `public_path()` se utiliza para obtener la ruta completa de la carpeta pública.

8. La ruta del archivo de imagen actualizado se guarda en el campo `imagen` del objeto `$categoria`.

9. Se guardan los cambios en la base de datos utilizando el método `save()` del objeto `$categoria`.

10. Finalmente, se redirige a la lista de categorías utilizando la ruta con nombre `'admin.categoria.index'` y se incluye un mensaje de éxito en la sesión (`'success'`) que se mostrará en la vista de destino.

En resumen, este código actualiza una categoría en la base de datos, permitiendo cambiar su nombre, descripción y también subir una imagen asociada a ella. Después de realizar la actualización, se redirige a la lista de categorías con un mensaje de éxito.
:::

#### Creación de la vista

```php
@extends('adminlte::page')

@section('title', 'Agregar Categoría')

@section('content_header')
    <h1>Agregar Categoría</h1>
@stop

@section('content')
    <div class="container">
        <div class="card col-lg-12 p-4">
            {!! Form::model($categoria, [
                'route' => ['admin.categoria.update', $categoria->id],
                'files' => true,
                'method' => 'PUT',
            ]) !!}

            <div class="form-group">
                <!-- Etiqueta del campo "nombre" -->
                {!! Form::label('nombre', 'Nombre:') !!}
                <!-- Campo de entrada de texto para el nombre -->
                {!! Form::text('nombre', $categoria->nombre, [
                    'class' => 'form-control' . ($errors->has('nombre') ? ' is-invalid' : ''),
                    'required',
                ]) !!}
                @if ($errors->has('nombre'))
                    <div class="invalid-feedback">
                        <!-- Mensaje de error si el campo "nombre" tiene errores de validación -->
                        {{ $errors->first('nombre') }}
                    </div>
                @endif
            </div>

            <div class="form-group">
                <!-- Etiqueta del campo "descripcion" -->
                {!! Form::label('descripcion', 'Descripción:') !!}
                <!-- Campo de entrada de texto (área de texto) para la descripción -->
                {!! Form::textarea('descripcion', $categoria->descripcion, [
                    'class' => 'form-control' . ($errors->has('descripcion') ? ' is-invalid' : ''),
                    'required',
                ]) !!}
                @if ($errors->has('descripcion'))
                    <div class="invalid-feedback">
                        <!-- Mensaje de error si el campo "descripcion" tiene errores de validación -->
                        {{ $errors->first('descripcion') }}
                    </div>
                @endif
            </div>

            <div class="form-group">
                <table>
                    <td>
                        <!-- Etiqueta del campo "imagen" -->
                        {!! Form::label('imagen', 'Imagen:') !!}
                        <!-- Campo de selección de archivo de imagen -->
                        {!! Form::file('imagen', [
                            'class' => 'form-control-file' . ($errors->has('imagen') ? ' is-invalid' : ''),
                            'accept' => 'image/*',
                            'onchange' => 'previewImage(event)',
                        ]) !!}
                        @if ($errors->has('imagen'))
                            <div class="invalid-feedback">
                                <!-- Mensaje de error si el campo "imagen" tiene errores de validación -->
                                {{ $errors->first('imagen') }}
                            </div>
                        @endif
                    </td>
                    <td>
                        <!-- Elemento de imagen para previsualizar la imagen seleccionada -->
                        <img id="preview" src="{{ $categoria->imagen }}" alt="Preview de la imagen"
                            style="max-width: 200px; margin-top: 10px; padding-left: 20px;">
                    </td>
                </table>
            </div>

            <!-- Botón de envío del formulario -->
            {!! Form::submit('Actualizar', ['class' => 'btn btn-primary']) !!}

            {!! Form::close() !!}
        </div>
    </div>

    <script>
        // Función para previsualizar la imagen seleccionada
        function previewImage(event) {
            var input = event.target;
            var preview = document.getElementById('preview');

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    // Actualizar la fuente de la imagen para mostrar la previsualización
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                }

                // Leer el archivo de imagen como una URL de datos
                reader.readAsDataURL(input.files[0]);
            }
        }
    </script>
@stop
```

Este código pertenece a la vista **resources\views\admin\categorias\edit.blade.php**. A continuación, comentaré cada sección del código para una mejor comprensión:

```php
@extends('adminlte::page')
```
Esta línea indica que esta vista extiende la plantilla base proporcionada por AdminLTE.

```php
@section('title', 'Agregar Categoría')
```
Esta sección define el título de la página.

```php
@section('content_header')
    <h1>Agregar Categoría</h1>
@stop
```
Esta sección define el encabezado de contenido de la página.

```php
@section('content')
    <!-- Contenido de la página -->
@stop
```
Esta sección define el contenido principal de la página.

```php
<div class="container">
    <div class="card col-lg-12 p-4">
```
Aquí se crea un contenedor y una tarjeta para agrupar el formulario.

```php
{!! Form::model($categoria, [
    'route' => ['admin.categoria.update', $categoria->id],
    'files' => true,
    'method' => 'PUT',
]) !!}
```
Se inicia un formulario utilizando la función `Form::model` de Laravel Collective. El modelo `$categoria` se asocia con el formulario, y se especifica la ruta de actualización, permitiendo enviar archivos (`'files' => true`) y utilizando el método PUT.

```php
<div class="form-group">
    {!! Form::label('nombre', 'Nombre:') !!}
    {!! Form::text('nombre', $categoria->nombre, [
        'class' => 'form-control' . ($errors->has('nombre') ? ' is-invalid' : ''),
        'required',
    ]) !!}
    @if ($errors->has('nombre'))
        <div class="invalid-feedback">
            {{ $errors->first('nombre') }}
        </div>
    @endif
</div>
```
Este código representa un campo de formulario para el nombre de la categoría. Se utiliza la función `Form::label` para generar una etiqueta, `Form::text` para generar un campo de entrada de texto, y se utiliza la variable `$errors` para mostrar mensajes de error si existen.

Se sigue una estructura similar para el campo de descripción y el campo de imagen.

```php
{!! Form::submit('Actualizar', ['class' => 'btn btn-primary']) !!}
```
Este código representa el botón de envío del formulario con el texto "Actualizar" y la clase de estilo CSS "btn btn-primary".

```php
{!! Form::close() !!}
```
Aquí se cierra el formulario.

```html
<script>
    function previewImage(event) {
        var input = event.target;
        var preview = document.getElementById('preview');

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
</script>
```
Este es un script JavaScript que maneja la vista previa de la imagen seleccionada. Cuando se selecciona un archivo de imagen, se lee el archivo utilizando la clase `FileReader` y se asigna la URL de la imagen al elemento `<img>` con el id "preview".

En resumen, este código representa una vista de formulario para editar una categoría. El formulario muestra los campos de nombre, descripción e imagen de la categoría. También incluye la funcionalidad para mostrar una vista previa de la imagen

Por último deberíamos dirigirnos al archivo de rutas **routes\admin.php** y comprobar si la siguiente ruta existe, de no existir ahora es el momento justo de crearla.

```php
Route::put("/categorias/update/{id}",[CategoriaController::class,'update'])->name('admin.categoria.update');
```
Nuestra vista debería quedar tal como se muestra en la imagen:

![Editar imagen](/img/editar_categoria.png)


### Borrado de categoría

Esta es la parte más sencilla de implementar en nuestra vista **resources\views\admin\categorias\index.blade.php**. Empezaremos creando el método adecuado del controlador:

```php
public function destroy($id)
{
    $categoria = Categoria::find($id);

    if (!$categoria) {
        return redirect()->route('admin.categoria.index')->with('error', 'Categoría no encontrada');
    }

    // Eliminar la imagen asociada si existe
    /*
    if ($categoria->imagen) {
        // Obtener la ruta completa de la imagen
        $imagenPath = public_path($categoria->imagen);

        // Verificar si la imagen existe en el servidor
        if (file_exists($imagenPath)) {
            // Eliminar la imagen
            unlink($imagenPath);
        }
    }*/

    $categoria->delete();

    return redirect()->route('admin.categoria.index')->with('success', 'Categoría eliminada correctamente');
}
```

El código proporcionado realiza las siguientes acciones:

1. Se busca una categoría en la base de datos utilizando el identificador `$id` proporcionado.
2. Si no se encuentra la categoría, se redirige a la lista de categorías (`admin.categoria.index`) y se muestra un mensaje de error en la sesión indicando que la categoría no fue encontrada.
3. (Comentario): Se comprueba si la categoría tiene una imagen asociada y, de ser así, se obtiene la ruta completa de la imagen y se verifica si existe en el servidor. Si la imagen existe, se elimina utilizando la función `unlink()`.
4. Se elimina la categoría de la base de datos utilizando el método `delete()`.
5. Se redirige a la lista de categorías (`admin.categoria.index`) y se muestra un mensaje de éxito en la sesión indicando que la categoría fue eliminada correctamente.

Es importante destacar que el bloque de código comentado (desde `/*` hasta `*/`) indica una sección que ha sido deshabilitada y no se ejecutará. En este caso, se trata de la eliminación de la imagen asociada a la categoría. Si deseas utilizar esta funcionalidad, deberás eliminar los comentarios (`/*` y `*/`) para activar ese bloque de código.

A continuación vamos a definir la ruta en nuestro fichero **routes\admin.php**.

```php
Route::delete("/categorias/delete/{id}",[CategoriaController::class,'destroy'])->name('admin.categoria.delete');
```

Por último editaremos la vista **resources\views\admin\categorias\index.blade.php** y donde se define el código de borrado deberemos introducir el siguiente código si este no esta definido, este el último tag `<td>` de la tabla.

```php
{{-- Botón de borrado --}}
<td width="10px">
<form action="{{ route('admin.categoria.delete', ['id' => $categoria->id]) }}"" method="POST">
    @csrf
    @method('DELETE')
    <button type="submit" class="btn btn-danger btn-sm"
        onclick="return confirm('Si borrar esta cagegoria borra todas las subcegorias y anuncios asociados,\n¿Estás seguro de que deseas eliminar esta categoría?')">
        Eliminar
    </button>
</form>

</td>
```

El código proporcionado muestra un botón de borrado dentro de una celda de una tabla. A continuación, se explica su funcionamiento:

- Se crea un formulario con el atributo `action` que apunta a la ruta `admin.categoria.delete` y se le pasa el parámetro `id` con el valor de `$categoria->id`. Esto indica que al enviar el formulario, se realizará una solicitud HTTP DELETE a la ruta especificada, enviando el ID de la categoría a ser eliminada.
- Se utiliza la directiva `@csrf` para agregar un campo de token CSRF al formulario. Este token ayuda a proteger contra ataques de falsificación de solicitudes entre sitios (CSRF).
- Se utiliza la directiva `@method('DELETE')` para indicar que la solicitud HTTP debe ser de tipo DELETE.
- Se muestra un botón con la clase CSS `btn btn-danger btn-sm`, que representa un botón de color rojo y tamaño pequeño.
- Se agrega un evento `onclick` al botón, que muestra un cuadro de confirmación con un mensaje antes de enviar la solicitud de eliminación. El mensaje de confirmación incluye una advertencia sobre la eliminación de la categoría y cómo esto también eliminará todas las subcategorías y anuncios asociados.
- Si el usuario confirma la acción, el formulario se envía y se realiza la solicitud de eliminación.

En resumen, este código muestra un botón de eliminación en forma de formulario dentro de una celda de una tabla. Al hacer clic en el botón y confirmar la acción, se envía una solicitud de eliminación de la categoría correspondiente a través de una solicitud HTTP DELETE a la ruta especificada.
