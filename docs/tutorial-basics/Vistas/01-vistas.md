---
sidebar_position: 2
---

# Creando nuestro primer Layout

## ¿Qué es un Layout?

Un layout en Laravel es como una plantilla o un marco para diseñar la apariencia de las páginas web en tu aplicación. Imagina que estás construyendo un sitio web con varias páginas, y todas ellas tienen una estructura común, como el encabezado, la barra de navegación y el pie de página.

En lugar de repetir el mismo código HTML en cada página, puedes crear un layout que contenga esa estructura común y luego simplemente "rellenar" el contenido específico de cada página en áreas designadas.

Por ejemplo, puedes tener un archivo llamado `layout.blade.php` que contiene la estructura básica de tu sitio web. Dentro de este archivo, puedes definir secciones o áreas utilizando la directiva `@yield`. Por ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi sitio web</title>
  </head>
  <body>
    <header>
      <!-- Aquí iría el contenido del encabezado -->
    </header>

    <nav>
      <!-- Aquí iría el contenido de la barra de navegación -->
    </nav>

    <main>
      @yield('content')
      <!-- Esta línea indica dónde se insertará el contenido específico de cada página -->
    </main>

    <footer>
      <!-- Aquí iría el contenido del pie de página -->
    </footer>
  </body>
</html>
```

Luego, en cada página que desees utilizar este layout, puedes extenderlo utilizando la directiva `@extends` y definir el contenido específico de esa página dentro de una sección utilizando la directiva `@section`. Por ejemplo:

```html
@extends('layout')
@section('content')
    <h1>Bienvenido a mi sitio web</h1>
    <p>Este es el contenido de la página de inicio.</p>
@endsection
```

De esta manera, el contenido que defines dentro de la sección `@section('content')` de cada página se insertará automáticamente en el lugar designado del layout.

La utilización de layouts en Laravel te permite mantener una estructura consistente en todas las páginas de tu sitio web, evitando la repetición de código y facilitando la actualización del diseño global. Además, separa claramente el diseño visual de la lógica subyacente, lo que hace que tu código sea más limpio y mantenible.

## Creando nuestro primer Layout

A continuación presentaremos el Layout básico que servirá como plantilla base para nuestra aplicación. Si presta atención al Layout observara que existen dos directivas **@yield**, la primera permite definir estilos CSS para cada una de nuestras vistas y **@yield('conten')** que nos permite definir el contenido especifico de cada una de nuestras primera vistas. Este Layout lo iremos modificando a medida que vayamos avanzando en este curso.

```html
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Anuncios segunda mano</title>
    <!-- Otros elementos del head -->

    <!-- Incluye los estilos de Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
        integrity="sha512-rqQltXRuHxtPWhktpAZxLHUVJ3Eombn3hvk9PHjV/N5DMUYnzKPC1i3ub0mEXgFzsaZNeJcoE0YHq0j/GFsdGg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Incluye los estilos de Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- Incluye los scripts de jQuery, Popper.js y Bootstrap -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>

    <!-- Incluye los estilos de Font Awesome (versión 5.15.3) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <title>@yield('title')</title>

    <!-- Incluye los estilos personalizados -->
    <link rel="stylesheet" href="{{ asset('css/anuncios.css') }}">

    @yield('estilos')
    <!-- Incluye estilos específicos de la vista actual -->
</head>
<main>
    <!-- Barra de navegación -->
    <div class="menu container-fluid fixed-top bg-white">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <a class="navbar-brand" href="/">
                    <img src="/images/logo.png" width="60" alt="..." loading="lazy">
                    <span class="nav-item resaltado">Anuncios segunda mano</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-item" href=""><i class="fas fa-home"></i> Home<span
                                    class="sr-only">(current)</span></a>
                        </li>

                        <li class="nav-item ml-2 dropdown">
                            <a class="nav-item dropdown-toggle ml-2" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-user-plus"></i>
                                @if (!auth()->check())
                                @else
                                    {{ auth()->user()->name }}
                                @endif

                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="">Registro</a>
                                <a class="dropdown-item" href="">Iniciar sesión</a>
                                <a class="dropdown-item" href=""></a>

                                <div class="dropdown-divider"></div>
                                <form id="logout-form" action="" method="POST"                                      style="display: none;">
                                        @csrf
                                </form>
                            </div>
                        </li>
                        <li class="nav-item ml-2">
                            <a href=""><i class="far fa-file-alt"></i> Publicar anuncio</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>

    @yield('content')
    <!-- Contenido específico de cada vista -->

    <!-- Footer -->
    <footer>
        <div class="container-fluid text-center mt-5 bg-dark">
            <h5 class="text-gray-300">Copyrigth Jesús Quintana Esquiliche</h5>
            <ul class="social-icons">
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
        </div>
    </footer>
</main>

</html>
```
### Sección head

```html
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Anuncios segunda mano</title>
    <!-- Otros elementos del head -->

    <!-- Incluye los estilos de Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
        integrity="sha512-rqQltXRuHxtPWhktpAZxLHUVJ3Eombn3hvk9PHjV/N5DMUYnzKPC1i3ub0mEXgFzsaZNeJcoE0YHq0j/GFsdGg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Incluye los estilos de Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- Incluye los scripts de jQuery, Popper.js y Bootstrap -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>

    <!-- Incluye los estilos de Font Awesome (versión 5.15.3) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <title>@yield('title')</title>

    <!-- Incluye los estilos personalizados -->
    <link rel="stylesheet" href="{{ asset('css/anuncios.css') }}">

    @yield('css')
    <!-- Incluye estilos específicos de la vista actual -->
</head>
````
Este código corresponde a la sección `<head>` de nuestro Laayout. Aquí se definen las configuraciones y elementos relacionados con la presentación y estilos de la página. Veamos una explicación sencilla de cada parte:

- `<meta charset="utf-8">`: Especifica el conjunto de caracteres utilizado en la página, en este caso, UTF-8, que es compatible con varios idiomas.

- `<meta name="viewport" content="width=device-width, initial-scale=1">`: Define cómo se debe ajustar y mostrar la página en diferentes dispositivos y tamaños de pantalla.

- `<title>Anuncios segunda mano</title>`: Establece el título de la página que se mostrará en la pestaña del navegador.

- Enlaces a estilos externos:
  - `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">`: Incluye los estilos de Font Awesome, una biblioteca de iconos.
  - `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">`: Incluye los estilos de Bootstrap, un framework CSS popular.
  - `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">`: Incluye los estilos de Font Awesome en su versión 5.15.3.

- Scripts externos:
  - `<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js">`: Incluye el script de jQuery, una biblioteca de JavaScript.
  - `<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js">`: Incluye el script de Popper.js, una biblioteca utilizada por Bootstrap para la manipulación de elementos emergentes y desplegables.
  - `<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js">`: Incluye el script de Bootstrap, que proporciona funcionalidades y estilos adicionales para la interfaz de usuario.

- `<link rel="stylesheet" href="{{ asset('css/anuncios.css') }}">`: Incluye un archivo de estilos personalizados llamado `anuncios.css` ubicado en la carpeta `css` dentro del proyecto. La función `asset()` se utiliza para generar la URL correcta del archivo.

- `@yield('css')`: Es una directiva de Blade (un motor de plantillas en Laravel) que permite incluir estilos específicos de la vista actual. Esto significa que puedes agregar estilos adicionales en las secciones de contenido que heredan de esta plantilla.

En resumen, esta sección del código establece las configuraciones básicas del documento, incluye estilos y scripts externos necesarios, y permite la inclusión de estilos personalizados y específicos de cada vista.

### Funcionalidad de la barra de navegación



A continuación procederemos a explicar la funcionalidad y codificación de la barra de navegación.

![Menu de navegación](/img/menu.png)

```html
 <div class="menu container-fluid fixed-top bg-white">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <a class="navbar-brand" href="/">
                    <img src="/images/logo.png" width="60" alt="..." loading="lazy">
                    <span class="nav-item resaltado">Anuncios segunda mano</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-item" href="{{ route('home') }}"><i class="fas fa-home"></i> Home<span
                                    class="sr-only">(current)</span></a>
                        </li>

                        <li class="nav-item ml-2 dropdown">
                            <a class="nav-item dropdown-toggle ml-2" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-user-plus"></i>
                                @if (!auth()->check())
                                @else
                                    {{ auth()->user()->name }}
                                @endif

                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="{{ route('registro') }}">Registro</a>
                                @if (!auth()->check())
                                    <a class="dropdown-item" href="{{ route('login2') }}">Iniciar sesión</a>
                                @endif
                                @can('admin.home')
                                    <a class="dropdown-item" href={{ route('admin.home') }}>Administración</a>
                                @endcan
                                <div class="dropdown-divider"></div>
                                @if (auth()->check())
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                        style="display: none;">
                                        @csrf
                                    </form>
                                    <a class="dropdown-item " href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                            document.getElementById('logout-form').submit();">
                                        Logout
                                    </a>
                                @endif
                            </div>
                        </li>
                        <li class="nav-item ml-2">
                            <a href="{{ route('anuncios.create') }}"><i class="far fa-file-alt"></i> Publicar
                                anuncio</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
```

Este código representa una barra de navegación o menú de nuestra aplicación web. Tiene un logotipo, enlaces de navegación, un menú desplegable y un enlace para publicar anuncios. Aquí está la estructura básica:

- `<div class="menu container-fluid fixed-top bg-white">`: Contenedor principal de la barra de navegación.
- `<nav class="navbar navbar-expand-lg navbar-light bg-white">`: Barra de navegación.
- `<a class="navbar-brand" href="/">`: Logotipo del sitio web.
- `<div class="collapse navbar-collapse" id="navbarSupportedContent">`: Contenedor para los elementos de navegación.
- `<ul class="navbar-nav ml-auto">`: Lista de elementos de navegación.
- `<li class="nav-item active">`: Elemento de navegación activo o seleccionado.
- `<a class="nav-item" href="{{ route('home') }}">`: Enlace de navegación a la página de inicio.
- `<li class="nav-item ml-2 dropdown">`: Elemento de navegación con menú desplegable.
- `<a class="nav-item dropdown-toggle ml-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`: Botón de alternancia para el menú desplegable.
- `<div class="dropdown-menu" aria-labelledby="navbarDropdown">`: Menú desplegable con opciones.
- `<a class="dropdown-item" href="{{ route('registro') }}">`: Opción del menú desplegable.
- `<li class="nav-item ml-2">`: Elemento de navegación con enlace para publicar anuncios.

Este código crea una barra de navegación con enlaces y opciones de menú desplegable para navegar por el sitio web.

### Directivas más comunes en los Layouts

Aquí tienes un resumen de las directivas Blade comunes que se pueden utilizar en los layouts de Laravel:

1. `@yield('nombre_seccion')`: Esta directiva se utiliza para definir una sección en el layout donde el contenido de una vista específica será insertado. Se coloca en el lugar donde se desea que aparezca el contenido de la sección.

2. `@section('nombre_seccion') ... @endsection`: Esta directiva se utiliza en las vistas para definir el contenido de una sección específica que será insertado en el layout. El contenido se coloca entre las directivas `@section` y `@endsection` con el nombre de la sección especificado.

3. `@include('nombre_vista')`: Esta directiva se utiliza para incluir una vista parcial en el layout. Puedes especificar el nombre de la vista que deseas incluir y se insertará el contenido de esa vista en el lugar donde se coloca la directiva.

4. `@extends('nombre_layout')`: Esta directiva se utiliza al comienzo de una vista para indicar que la vista extiende un layout específico. El nombre del layout se especifica como parámetro y la vista heredará la estructura y el contenido del layout.

5. `@yield('nombre_seccion', 'contenido_predeterminado')`: Esta directiva es similar a `@yield`, pero también permite especificar un contenido predeterminado que se mostrará si no se proporciona ningún contenido para esa sección en la vista.

6. `@parent`: Esta directiva se utiliza dentro de una sección para indicar que el contenido de la sección en la vista debe incluir el contenido de la sección en el layout. Se utiliza en combinación con `@section` y `@endsection`.

Estas son algunas de las directivas Blade comunes que se utilizan en los layouts de Laravel. Proporcionan una forma flexible y poderosa de estructurar y organizar el contenido en tus vistas y layouts.

## Creando nuestra página de inicio (Home)

A continuación procederemos a cambiar la página de inicio de la aplicación, la cual se muestra en la siguiente captura de pantalla.

![Pagina Home](/img/home.png)

El código correspondiente a esta página se encuentra en la carpeta **resources\views\home.blade.php** de nuestro proyecto y el código asociado a esta vista es el siguiente:

```html
@extends('layout.layout')

@section('title', 'Página de inicio')

@section('content')
    <section class="container mt-8 ">
        <div class="card2 col-lg-12 py-2 mx-auto">
            <h4 class="text-center m-5"><b class="resaltado">¿Qué quieres encontrar?</b></h4>
            <div class="card-body">
                <form action="{{ route('home.filter') }}" method="POST">
                    @csrf
                    <div class="row">
                        <div class="col-lg-4">
                            <input type="text" name="titulo" class="form-control" placeholder="Que estas buscando...">
                        </div>
                        <div class="col-lg-3">
                            <select name="subcategoria_id" class="form-control">
                                <!-- Iteración sobre las categorías -->
                                @foreach ($categorias as $categoria)
                                    <optgroup label="{{ $categoria->nombre }}">
                                        <!-- Iteración sobre las subcategorías -->
                                        @foreach ($categoria->subcategorias as $subcategoria)
                                            <option value="{{ $subcategoria->id }}">{{ $subcategoria->nombre }}</option>
                                        @endforeach
                                    </optgroup>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-lg-3">
                            <input type="text" name="poblacion" class="form-control" placeholder="Localidad">
                        </div>
                        <div class="col-lg-2">
                            <input type="submit" value="Buscar" class="form-control btn btn-danger">
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="container mt-3 col-lg-12">
            <h4 class="text-center resaltado"><b>Categorías</b></h4>
            <div id="carouselExample" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <!-- Iteración sobre las categorías en grupos de cuatro -->
                    @foreach ($categorias->chunk(4) as $categoriasChunk)
                        <div class="carousel-item col-lg-12 {{ $loop->first ? 'active' : '' }}">
                            <div class="row">
                                <!-- Iteración sobre las categorías del grupo -->
                                @foreach ($categoriasChunk as $categoria)
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <img src="{{ $categoria->imagen }}" width="100" height="180" class="d-block w-100" alt="{{ $categoria->nombre }}">
                                        <div class="carousel-caption">
                                            <h5>{{ $categoria->nombre }}</h5>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @endforeach
                </div>
                <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only"><b>Anterior</b></span>
                </a>
                <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                </a>
            </div>

            <div class="container-fluid mt-3 col-lg-12 mx-auto">
                <h4 class="text-center resaltado"><b>Anuncios</b></h4>
                <div class="row">
                    <!-- Iteración sobre los anuncios -->
                    @foreach ($anuncios as $anuncio)
                        <div class="card3 col-lg-4 mx-auto">
                            <a href="/anuncios/{{ $anuncio->id }}">
                                <div class="card-title m-1">
                                    <p class="resaltado">{{ $anuncio->titulo }}</b></p>
                                </div>
                                <div class="card-body m-1">
                                    precio : <b>{{ $anuncio->precio }}</b>
                                    <img src="{{ $anuncio->imagen }}" class="d-block w-100" alt="{{ $anuncio->titulo }}">
                                    <p>{{ $anuncio->description }}</p>
                                </div>
                            </a>
                        </div>
                    @endforeach

                    <div class="pagination">
                        @if ($anuncios->previousPageUrl())
                            <a href="{{ $anuncios->previousPageUrl() }}" class="btn btn-danger m-1" rel="prev">Anterior</a>
                        @endif

                        @if ($anuncios->nextPageUrl())
                            <a href="{{ $anuncios->nextPageUrl() }}" class="btn btn-danger m-1" rel="next">Siguiente</a>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
```

Seguidamente pasaremos a estudiar con mas detalle el código de la página.

:::info Secciones de la página

1. `@extends('layout.layout')`: Esta línea indica que la vista actual extiende (hereda) la estructura y el diseño de otra plantilla llamada "layout.layout". En otras palabras, se utiliza esta plantilla como base para construir la vista actual. Esto es útil para mantener un diseño consistente en todas las páginas del sitio web.

2. `@section('title', 'Página de inicio')`: Esta sección define el título de la página. En este caso, establece el título como "Página de inicio". El valor especificado aquí se utilizará en la etiqueta HTML `<title>` de la página, lo que afectará el texto que se muestra en la pestaña del navegador.

3. `@section('content')`: Esta sección delimita el contenido principal de la página. Aquí es donde se coloca el contenido específico de la página de inicio. Puedes incluir HTML, formularios, imágenes, texto y otros elementos dentro de esta sección. El contenido colocado aquí se insertará en el diseño general definido por la plantilla extendida.

Estas secciones permiten estructurar y organizar el código de la vista de manera modular, facilitando la reutilización de plantillas y la gestión del contenido específico de cada página.
:::

### Descripción de la sección Content

La sección `@section('content')` define el contenido principal de la página de inicio. Aquí se encuentran tres partes principales:

1. Formulario de búsqueda: Permite a los usuarios buscar anuncios en función de ciertos criterios. El formulario incluye campos como "Qué estás buscando" (input de texto), "Subcategoría" (select) y "Localidad" (input de texto). Al enviar el formulario, los datos se envían a la ruta `home.filter` mediante el método POST.

2. Categorías: Muestra una serie de categorías en forma de carrusel. Las categorías se obtienen del conjunto de datos `$categorias` y se muestran en grupos de cuatro. Cada categoría se muestra en una tarjeta con su imagen y nombre. El carrusel permite a los usuarios desplazarse hacia la izquierda y hacia la derecha para ver todas las categorías.

3. Anuncios: Muestra una serie de anuncios en forma de tarjetas. Los anuncios se obtienen del conjunto de datos `$anuncios` y se muestran en columnas de tres tarjetas por fila. Cada tarjeta de anuncio muestra información como el título, el precio, la imagen y la descripción. Además, se proporcionan enlaces para ver más detalles del anuncio. Al final de la sección, se incluye una paginación que permite a los usuarios navegar entre las páginas de resultados de los anuncios.

Como conclusión, esta sección de contenido incluye un formulario de búsqueda, muestra las categorías en un carrusel y muestra una lista de anuncios en tarjetas.

```html
@section('content')
    <section class="container mt-8 ">
        <div class="card2 col-lg-12 py-2 mx-auto">
            <h4 class="text-center m-5"><b class="resaltado">¿Qué quieres encontrar?</b></h4>
            <div class="card-body">
                <form action="{{ route('home.filter') }}" method="POST">
                    @csrf
                    <div class="row">
                        <div class="col-lg-4">
                            <input type="text" name="titulo" class="form-control" placeholder="Que estas buscando...">
                        </div>
                        <div class="col-lg-3">
                            <select name="subcategoria_id" class="form-control">
                                <!-- Iteración sobre las categorías -->
                                @foreach ($categorias as $categoria)
                                    <optgroup label="{{ $categoria->nombre }}">
                                        <!-- Iteración sobre las subcategorías -->
                                        @foreach ($categoria->subcategorias as $subcategoria)
                                            <option value="{{ $subcategoria->id }}">{{ $subcategoria->nombre }}</option>
                                        @endforeach
                                    </optgroup>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-lg-3">
                            <input type="text" name="poblacion" class="form-control" placeholder="Localidad">
                        </div>
                        <div class="col-lg-2">
                            <input type="submit" value="Buscar" class="form-control btn btn-danger">
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="container mt-3 col-lg-12">
            <h4 class="text-center resaltado"><b>Categorías</b></h4>
            <div id="carouselExample" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <!-- Iteración sobre las categorías en grupos de cuatro -->
                    @foreach ($categorias->chunk(4) as $categoriasChunk)
                        <div class="carousel-item col-lg-12 {{ $loop->first ? 'active' : '' }}">
                            <div class="row">
                                <!-- Iteración sobre las categorías del grupo -->
                                @foreach ($categoriasChunk as $categoria)
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <img src="{{ $categoria->imagen }}" width="100" height="180" class="d-block w-100" alt="{{ $categoria->nombre }}">
                                        <div class="carousel-caption">
                                            <h5>{{ $categoria->nombre }}</h5>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @endforeach
                </div>
                <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only"><b>Anterior</b></span>
                </a>
                <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                </a>
            </div>

            <div class="container-fluid mt-3 col-lg-12 mx-auto">
                <h4 class="text-center resaltado"><b>Anuncios</b></h4>
                <div class="row">
                    <!-- Iteración sobre los anuncios -->
                    @foreach ($anuncios as $anuncio)
                        <div class="card3 col-lg-4 mx-auto">
                            <a href="/anuncios/{{ $anuncio->id }}">
                                <div class="card-title m-1">
                                    <p class="resaltado">{{ $anuncio->titulo }}</b></p>
                                </div>
                                <div class="card-body m-1">
                                    precio : <b>{{ $anuncio->precio }}</b>
                                    <img src="{{ $anuncio->imagen }}" class="d-block w-100" alt="{{ $anuncio->titulo }}">
                                    <p>{{ $anuncio->description }}</p>
                                </div>
                            </a>
                        </div>
                    @endforeach

                    <div class="pagination">
                        @if ($anuncios->previousPageUrl())
                            <a href="{{ $anuncios->previousPageUrl() }}" class="btn btn-danger m-1" rel="prev">Anterior</a>
                        @endif

                        @if ($anuncios->nextPageUrl())
                            <a href="{{ $anuncios->nextPageUrl() }}" class="btn btn-danger m-1" rel="next">Siguiente</a>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
```
### Aspectos programáticos de la página

En nuestra página aparecen varias directivas como `@foreach` que se encargan de construir dinámicamente listas de la página como las subcategorías.

```html title=Lista de categorías
<select name="subcategoria_id" class="form-control">
    <!-- Iteración sobre las categorías -->
    @foreach ($categorias as $categoria)
        <optgroup label="{{ $categoria->nombre }}">
            <!-- Iteración sobre las subcategorías -->
            @foreach ($categoria->subcategorias as $subcategoria)
                <option value="{{ $subcategoria->id }}">{{ $subcategoria->nombre }}</option>
            @endforeach
        </optgroup>
    @endforeach
</select>
```

El código muestra un menú desplegable `<select>` en un formulario. Este menú se crea utilizando dos bucles `foreach` anidados.

1. El primer bucle `foreach` recorre una lista de categorías (`$categorias`) y crea un grupo `<optgroup>` para cada categoría. La etiqueta del grupo `<optgroup>` muestra el nombre de la categoría.

2. El segundo bucle `foreach` recorre las subcategorías asociadas a cada categoría actual y crea una opción `<option>` para cada una. El valor de cada opción es el ID de la subcategoría, y el texto visible es el nombre de la subcategoría.

En resumen, el código genera un menú desplegable que muestra todas las subcategorías agrupadas por categoría. Esto permite al usuario seleccionar una subcategoría específica dentro de una categoría determinada en el formulario.

El resultado lo puedes observar en la siguiente imagen:

![Lista de categoria](/img/categorias.png)

### Carrusel de categorías 

![Carrusel](/img/carrusel.png)

```html title=Carrusel
    <div id="carouselExample" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <!-- Iteración sobre las categorías en grupos de cuatro -->
                    @foreach ($categorias->chunk(4) as $categoriasChunk)
                        <div class="carousel-item col-lg-12 {{ $loop->first ? 'active' : '' }}">
                            <div class="row">
                                <!-- Iteración sobre las categorías del grupo -->
                                @foreach ($categoriasChunk as $categoria)
                                    <div class="col-sm-6 col-md-4 col-lg-3">
                                        <img src="{{ $categoria->imagen }}" width="100" height="180" class="d-block w-100" alt="{{ $categoria->nombre }}">
                                        <div class="carousel-caption">
                                            <h5>{{ $categoria->nombre }}</h5>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @endforeach
                </div>
                <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only"><b>Anterior</b></span>
                </a>
                <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                </a>
            </div>
```

Este código representa un carrusel de imágenes en nuestra página web. Veamos cómo funciona:

1. `<div id="carouselExample" class="carousel slide" data-ride="carousel">`: Este es el contenedor principal del carrusel. Tiene un identificador único (`id="carouselExample"`) y una clase llamada `carousel`. Esto permite que el carrusel funcione de manera automática.

2. `<div class="carousel-inner">`: Este es el contenedor que alberga las imágenes del carrusel. Cada imagen se muestra en un elemento llamado `carousel-item`.

3. `@foreach ($categorias->chunk(4) as $categoriasChunk)`: Esta línea indica que se va a recorrer una lista de categorías y se agruparán en grupos de cuatro.

4. `<div class="carousel-item col-lg-12">`: Este es el contenedor de cada grupo de imágenes en el carrusel. Se le da una clase llamada `carousel-item`, y `col-lg-12` indica que ocupará todo el ancho disponible en dispositivos grandes.

5. `@foreach ($categoriasChunk as $categoria)`: Aquí se recorre cada categoría dentro del grupo actual.

6. `<div class="col-sm-6 col-md-4 col-lg-3">`: Este es el contenedor de cada imagen y leyenda en el carrusel. Se le da una clase que define el tamaño y la disposición de las columnas en diferentes tamaños de pantalla.

7. `<img src="{{ $categoria->imagen }}" width="100" height="180" alt="{{ $categoria->nombre }}">`: Esta etiqueta `<img>` muestra la imagen de cada categoría. La URL de la imagen se toma de la variable `$categoria->imagen`. También se especifica el ancho (`width`) y la altura (`height`) de la imagen, y se muestra el nombre de la categoría como texto alternativo (`alt`).

8. `<div class="carousel-caption">`: Este es el contenedor de la leyenda de cada imagen. En este caso, muestra el nombre de la categoría.

9. Los enlaces para controlar el carrusel: `<a class="carousel-control-prev">` y `<a class="carousel-control-next">`. Estos enlaces permiten al usuario avanzar y retroceder entre las imágenes del carrusel.

En definitiva, el código crea un carrusel de imágenes en el que las imágenes se agrupan por categorías y se muestran en grupos de cuatro. Cada imagen tiene su nombre como leyenda y se puede navegar entre las imágenes utilizando los controles de avance y retroceso.

### Anuncios

![Anuncios](/img/Anuncios.png)

```html title=Código de la sección de anuncios
    <div class="container-fluid mt-3 col-lg-12 mx-auto">
    <h4 class="text-center resaltado"><b>Anuncios</b></h4>
    <div class="row">
        <!-- Iteración sobre los anuncios -->
        @foreach ($anuncios as $anuncio)
            <div class="card3 col-lg-4 mx-auto">
                <a href="/anuncios/{{ $anuncio->id }}">
                    <div class="card-title m-1">
                        <p class="resaltado">{{ $anuncio->titulo }}</b></p>
                    </div>
                    <div class="card-body m-1">
                        precio : <b>{{ $anuncio->precio }}</b>
                        <img src="{{ $anuncio->imagen }}" class="d-block w-100" alt="{{ $anuncio->titulo }}">
                        <p>{{ $anuncio->description }}</p>
                    </div>
                </a>
            </div>
        @endforeach

        <div class="pagination">
            <!-- Mostrar botón "Anterior" si hay una página anterior disponible -->
            @if ($anuncios->currentPage() > 1)
                <a href="{{ $anuncios->previousPageUrl() }}" class="btn btn-danger m-1" rel="prev">Anterior</a>
            @endif

            <!-- Iteración sobre las páginas disponibles -->
            @foreach(range(1, $anuncios->lastPage()) as $page)
                <!-- Resaltar la página actual -->
                @if ($page == $anuncios->currentPage())
                    <span class="btn btn-success m-1 active">{{ $page }}</span>
                @else
                    <!-- Mostrar enlace a la página correspondiente -->
                    <a href="{{ $anuncios->url($page) }}" class=" m-1 mt-2">{{ $page }}</a>
                @endif
            @endforeach

            <!-- Mostrar botón "Siguiente" si hay una página siguiente disponible -->
            @if ($anuncios->hasMorePages())
                <a href="{{ $anuncios->nextPageUrl() }}" class="btn btn-danger m-1" rel="next">Siguiente</a>
            @endif
        </div>
    </div>
</div>
```
El código muestra una sección de anuncios con su título, precio, imagen y descripción. También incluye una paginación para navegar entre los anuncios. En este caso como estamos utilizando bootstrap hemos optado por una paginación personalizada, en caso de querer utilizar la paginación estándar de Laravel puede leer el recuadro de informativo.

- La sección principal está dentro de un contenedor y muestra el título "Anuncios".

- Cada anuncio se muestra en una tarjeta individual con su título, precio, imagen y descripción.

- Al hacer clic en el enlace del anuncio, se redirecciona a una página con más detalles sobre ese anuncio.

- Al final de la sección de anuncios, hay una paginación que permite navegar entre las diferentes páginas de anuncios. Se muestra un botón "Anterior" si hay una página anterior disponible y un botón "Siguiente" si hay una página siguiente disponible. También se muestran números de página para acceder directamente a una página específica.

Esta paginación te permite moverte por los anuncios de forma más cómoda y rápida, especialmente cuando hay muchos anuncios en la lista.Claro, aquí tienes una explicación más sencilla y funcional de ese fragmento de código:

:::info como funciona la páginación en Laravel

La paginación en Laravel es un mecanismo incorporado que te permite dividir y mostrar grandes conjuntos de datos en varias páginas. Esto es útil cuando tienes una gran cantidad de registros y deseas mostrarlos de forma ordenada y accesible para el usuario.

En Laravel, la paginación se realiza utilizando el método `paginate()` en una consulta de Eloquent o en una colección de resultados. Aquí tienes una explicación básica de cómo funciona:

1. En tu controlador, realizas una consulta a la base de datos o obtienes una colección de resultados que deseas paginar.

2. Utilizas el método `paginate()` en tu consulta o colección y le pasas el número de elementos que deseas mostrar por página. Por ejemplo, `$anuncios = Anuncio::paginate(10);` indica que deseas mostrar 10 anuncios por página.

3. Laravel automáticamente divide los resultados en páginas basadas en el número de elementos por página que especificaste. Cada página contiene una porción de los resultados totales.

4. Laravel devuelve un objeto `LengthAwarePaginator` que contiene los resultados paginados y proporciona métodos útiles para trabajar con la paginación, como `currentPage()`, `lastPage()`, `hasMorePages()`, entre otros.

5. En tu vista, puedes acceder a los resultados de la paginación utilizando el objeto `LengthAwarePaginator`. Por ejemplo, `$anuncios->items()` te dará una colección de los anuncios para mostrar en la página actual.

6. Puedes iterar sobre los resultados y mostrarlos en tu vista.

7. Para mostrar los enlaces de paginación, puedes utilizar el método `links()` en el objeto `LengthAwarePaginator`. Este método genera los enlaces HTML necesarios para navegar entre las diferentes páginas.

8. Al hacer clic en los enlaces de paginación, Laravel se encarga de cargar y mostrar los resultados de la página seleccionada.

En resumen, en Laravel 10, puedes utilizar el método `paginate()` para realizar la paginación de tus resultados. Laravel se encarga de manejar la división de los resultados y generar los enlaces de paginación necesarios. Esto hace que sea más fácil y eficiente mostrar y navegar a través de grandes conjuntos de datos en tu aplicación Laravel.
:::

Aquí tienes el código del controlador encargado de la paginación anteriormente comentada:

```php title=HomeController
class HomeController extends Controller
{
    public function index(){
        $categorias = Categoria::with('subcategorias')->get();
        $anuncios = Anuncio::paginate(3);

        return view('home',compact('categorias','anuncios'));
    }
```

## Estableciendo Home como página de Inicio

Nuestra aplicación siempre que acedamos a ella nos mostrara la página **Welcome**, que es la página por defecto que nos crea Laravel a modo de ejemplo cuando creamos nuestro proyecto.
Vamos a cambiar este comportamiento para que la página de Inicio sea nuestra página **Home**.

Primero asegúrese de que en el fichero de rutas **web.php** se encuentra definida la siguiente ruta:

```php
Route::get('/', [HomeController::class,'index'])->name('home');
```
También deberá comprobar que su controlador **HomeController** disponga del siguiente código:

```php
public function index(){
        $categorias = Categoria::with('subcategorias')->get();
        $anuncios = Anuncio::paginate(3);

        return view('home',compact('categorias','anuncios'));
    }
```
Este método se encarga de llamar a la vista y pasarle las categorías y los anuncios para que estos puedan ser mostrados en la vista. Si recuerda bien en nuestra vista **Home** podiamos encontrar código como el siguiente: 

```php
<select name="subcategoria_id" class="form-control">
<!-- Iteración sobre las categorías -->
    @foreach ($categorias as $categoria)
        <optgroup label="{{ $categoria->nombre }}">
        <!-- Iteración sobre las subcategorías -->
        @foreach ($categoria->subcategorias as $subcategoria)
            <option value="{{ $subcategoria->id }}">{{ $subcategoria->nombre }}</option>
            @endforeach
        </optgroup>
    @endforeach
</select>
```
Este código rellena un control Select de forma dinámica con todas las subcategorías definidas en la base de datos, por eso nuestra vista necesita recibir estos datos a traves de los parámetros que se le pasan en la llamada desde el controlador.

En Jetstream, se puede personalizar la redirección después del registro en el archivo `app/Providers/RouteServiceProvider.php`.

Busca el método `public const HOME = '/dashboard';` en la parte superior de la clase y cambia la ruta '/dashboard' por la ruta que desees, en este caso '/home':

```php
public const HOME = '/home';
```

Luego, agrega el uso del namespace para `RedirectResponse` y el facad de `Auth` al comienzo de la clase:

```php
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
```

Finalmente, actualiza el método `public function redirectTo(): RedirectResponse` para redirigir al usuario a la ruta deseada:

```php
public function redirectTo(): RedirectResponse
{
    return redirect()->route('home');
}
```
En el siguiente capítulo veremos más detalladamente el tema de las directivas Blade.