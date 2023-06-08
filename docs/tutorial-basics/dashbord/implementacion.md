---
sidebar_position: 4
---

# Implementación

En este capítulo veremos cómo implementar las distintas opciones del menú de **Administración**.

## Creación de la opción de mantenimiento de Categorías

Para crear las diferentes vistas de nuestro panel de administración, crearemos una carpeta llamada **admin** dentro de nuestra carpeta **resources/views**. Dentro de esta carpeta, crearemos las siguientes vistas dentro de la carpeta **categorías**:


- admin
    - categorias
        - create.blade.php
        - edit.blade.php
        - index.blade.php


### Index.blade

![categorias.index](/img/categorias_index.png)


```html
@extends('adminlte::page')

@section('title', 'Tablero')

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
                    <a href="#" class="btn btn-primary btn-sm">
                        Agregar categoría
                    </a>
                </td>
                <td>
                    <form method="POST" action="#">
                        @csrf
                        <button type="submit" class="btn btn-primary btn-sm ml-2">Exportar a JSON</button>
                    </form>
                </td>
        </div>
        <div class="card-body mt-2">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Imagen</th>
                        <th scope="col" colspan="2">Acción</th>
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
                                <a href="#" class="btn btn-primary btn-sm">Editar
                                </a>
                            </td>
                            {{-- Botón de borrado --}}
                            <td width="10px">
                                <form action="#" method="POST">
                                    @csrf
                                    @method('delete')
                                    <button type="submit" class="btn btn-danger btn-sm"
                                        onclick="return confirm('¿Estás seguro de que deseas eliminar este bloque?')">
                                        Eliminar
                                    </button>
                                </form>

                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    {{ $categorias->links('pagination::bootstrap-4') }}
    </div>
@stop

@section('css')
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/dataTables.bootstrap4.min.css">
@stop
```
#### ¿Qué hace?

- El título de la página se establece como "Tablero".
- En el encabezado del contenido se muestra el título "Lista de Categorías".
- Si existe una variable de sesión llamada "success", se muestra un mensaje de éxito en una alerta.
- Dentro de una tarjeta, se encuentran dos elementos: un botón para agregar una nueva categoría y un formulario para exportar los datos a JSON.
- Se muestra una tabla con columnas para el id, nombre, descripción, imagen y acciones de cada categoría.
- Utilizando un bucle `@foreach`, se recorren todas las categorías y se muestra cada una en una fila de la tabla.
- Para cada categoría, se muestra su id, nombre, descripción y una imagen.
- Se proporciona un botón de "Editar" para cada categoría, que permite realizar cambios en los datos de la categoría.
- También se proporciona un botón de "Eliminar" para cada categoría, que permite eliminar la categoría después de una confirmación.
- Al final de la vista, se agrega la funcionalidad de paginación para mostrar un número limitado de categorías por página y facilitar la navegación.
- Se carga un archivo CSS adicional para aplicar estilos específicos a la tabla.

En definitiva, esta vista muestra una lista de categorías con opciones para agregar, editar y eliminar categorías. Proporciona mensajes de éxito, una interfaz de usuario organizada en una tarjeta y utiliza la paginación para mejorar la experiencia de navegación.

#### Explicación en seudocódigo
```
Extender la plantilla "adminlte::page"

Sección 'title' con el valor 'Tablero'

Sección 'content_header'
    Mostrar el título "Lista de Categorías"

Sección 'content'
    Si existe una variable de sesión llamada 'success'
        Mostrar una alerta de éxito con el contenido de la variable

    Mostrar una tarjeta con las siguientes secciones:
        Encabezado de la tarjeta con margen inferior
            Mostrar una tabla dentro de un elemento <table>
                Encabezado de la tabla
                    Mostrar las columnas '#', 'Nombre', 'Descripción', 'Imagen' y 'Acción'

                Cuerpo de la tabla
                    Por cada categoría en la variable $categorias
                        Mostrar una fila de la tabla con los siguientes elementos:
                            Celda con el valor del campo 'id' de la categoría
                            Celda con el valor del campo 'nombre' de la categoría, en negrita
                            Celda con el valor del campo 'descripcion' de la categoría, sin etiquetas HTML
                            Celda con una imagen cuya fuente es el campo 'imagen' de la categoría, con ancho de 125px
                            Celda con un botón "Editar"
                            Celda con un formulario de eliminación, incluyendo un botón "Eliminar" y una confirmación

    Mostrar la paginación utilizando el estilo de Bootstrap

Sección 'css'
    Cargar el archivo CSS de DataTables para aplicar estilos a la tabla
```

### Implementación del controlador

```php title='app\Http\Controllers\Admin\CategoriaController.php'
<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     
    public function index()
    {
        $categorias = Categoria::paginate(4);

        return view('admin.categorias.index', compact('categorias'));
    }
}
```

El código muestra la lista de categorías en el panel de administración. Utiliza el modelo `Categoria` para obtener una lista paginada de categorías y la pasa a la vista `'admin.categorias.index'` utilizando la función `compact()`. La vista renderiza la lista de categorías y la muestra al usuario. Utiliza paginación y muestra las categorías de cuatro en cuatro. En resumen, el controlador se encarga de obtener y mostrar las categorías en el panel de administración.

### Implementación de la ruta

```php title='routes\admin.php'
Route::get("/categorias",[CategoriaController::class,'index'])->name('admin.categoria.index');
```

### Configurar opción de menú

Diríjase al archivo **config\adminlte.php** y cambie la url de la siguiente sección
por **admin/categorias**.

```php
 ['header' => 'ADMINISTRACIÓN'],
        [
            'text' => 'Categorías',
            'url'  => 'admin/categorias',
            'icon' => 'fas fa-fw fa-layer-group',
        ],
```