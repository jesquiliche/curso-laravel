---
sidebar_position: 5
---

# Vistas del panel de administración

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