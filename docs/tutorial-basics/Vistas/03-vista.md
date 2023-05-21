---
sidebar_position: 3
---

# Más sobre vistas


## Formulario de búsqueda

Vamos a entrar de lleno en la definición de este formulario, el cual se encuentra en la vista Home.

![Busqueda](/img/busqueda.png)

```html title='Formulario de búsqueda'
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
                            <option value="{{ $subcategoria->id }}">{{subcategoria->nombre }}
                            </option>
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
```
            


El formulario que hemos creado en esta vista de Laravel tiene como propósito principal permitir a los usuarios realizar búsquedas específicas en nuestra aplicación. A continuación, desgloso cada elemento del formulario y su función:

- **Action y Method**: El atributo `action` especifica la URL a la que se enviarán los datos del formulario cuando se envíe, en este caso, utilizamos la ruta `home.filter` para procesar la búsqueda. El atributo `method` indica que la solicitud se realizará mediante el método POST, lo que significa que los datos del formulario se enviarán de forma segura y no se mostrarán en la URL. La ruta **home.filter** deberá hallarse en nuestro fichero de rutas **web.php** de la siguiente forma:
```php
Route::post('/anunciosFilter', [HomeController::class,'anunciosFilter'])->name('home.filter');
```

- **CSRF Token**: Para proteger el formulario contra ataques de falsificación de solicitudes entre sitios (CSRF), se incluye la directiva `@csrf`. Esta directiva genera un token único para cada solicitud y ayuda a verificar que la solicitud provenga de nuestro propio sitio web y no de una fuente malintencionada.

- **Campos del formulario**: El formulario consta de varios campos que permiten a los usuarios refinar su búsqueda:
  - Un campo de texto llamado "titulo" donde los usuarios pueden ingresar palabras clave relacionadas con lo que están buscando en la aplicación.
  - Un menú desplegable llamado "subcategoria_id" que muestra las diferentes subcategorías disponibles en nuestro blog. Utilizando la directiva `@foreach`, iteramos sobre la variable `$categorias` para mostrar las opciones de subcategorías disponibles dentro de cada categoría.
  - Un campo de texto llamado "poblacion" que permite a los usuarios ingresar la localidad o lugar relacionado con su búsqueda en la aplicación.

- **Botón de envío**: El formulario incluye un botón "Buscar" con la clase de estilo `btn btn-danger` que permite a los usuarios enviar el formulario y realizar la búsqueda.

### Código del controlador

```php
 public function anunciosFilter(Request $request){

    $poblacion=$request->input('poblacion');
    $titulo=$request->input('titulo');
    $subcategoriaId=$request->input('subcategoria_id');
    
    $anuncios=DB::table('anuncios as A')
    ->select('S.nombre', 'P.nombre', 'A.*')
    ->join('subcategorias as S', 'A.subcategoria_id', '=', 'S.id')
    ->join('poblaciones as P', 'P.codigo', '=', 'A.cod_postal')
    ->where('P.nombre', 'like', $poblacion .'%')
    ->where('A.titulo', 'like', '%'.$titulo.'%')
    ->where('S.id', '=', $subcategoriaId)
    ->get();

    $estados=Estado::all();

    $categorias=Categoria::all();
    return view('anuncios.index', compact('anuncios','categorias','estados','poblacion','titulo','subcategoriaId'));

    }
```

En el controlador **HomeController**, se define una función llamada `anunciosFilter` que maneja una solicitud HTTP. Esta función se ejecuta cuando un formulario es enviado desde la vista **Home**. 

En primer lugar, se obtienen los valores de los campos `poblacion`, `titulo` y `subcategoria_id` del formulario, utilizando el objeto `$request`. Estos valores representan los criterios de búsqueda proporcionados por el usuario.

A continuación, se realiza una consulta a la base de datos utilizando el Query Builder de Laravel. Se seleccionan los campos `nombre` de subcategoría, `nombre` de población y todos los campos de la tabla `anuncios`. Se establecen las relaciones entre las tablas `anuncios`, `subcategorias` y `poblaciones` mediante las cláusulas `join`.

Se aplican filtros a la consulta utilizando los valores proporcionados por el usuario. Se compara el nombre de la población con el valor ingresado, se busca coincidencias parciales en el título del anuncio y se filtra por el ID de la subcategoría seleccionada.

El resultado de la consulta se guarda en la variable `$anuncios`.

A continuación, se obtienen todos los estados y todas las categorías desde sus respectivas tablas y se almacenan en las variables `$estados` y `$categorias`.

Finalmente, se devuelve la vista `anuncios.index` pasando las variables `$anuncios`, `$categorias`, `$estados`, `$poblacion`, `$titulo` y `$subcategoriaId` utilizando la función `view()` y el método `compact()`.

En definitiva, este código procesa una solicitud de filtrado de anuncios, realiza una consulta a la base de datos utilizando los criterios de búsqueda proporcionados por el usuario y muestra los resultados en una vista específica.

:::info Análisis de la consulta $anuncios

```php
 $anuncios=DB::table('anuncios as A')
    ->select('S.nombre', 'P.nombre', 'A.*')
    ->join('subcategorias as S', 'A.subcategoria_id', '=', 'S.id')
    ->join('poblaciones as P', 'P.codigo', '=', 'A.cod_postal')
    ->where('P.nombre', 'like', $poblacion .'%')
    ->where('A.titulo', 'like', '%'.$titulo.'%')
    ->where('S.id', '=', $subcategoriaId)
    ->get();
```
Esta consulta en Laravel utiliza la sintaxis del constructor de consultas para obtener una lista de anuncios filtrados según ciertos criterios.

Aquí hay un análisis conciso de la consulta:

- En la línea `$anuncios=DB::table('anuncios as A')`, se establece la tabla principal de la consulta como 'anuncios', y se le asigna el alias 'A'.

- En la línea `->select('S.nombre', 'P.nombre', 'A.*')`, se especifican las columnas que se seleccionarán en la consulta. En este caso, se selecciona el nombre de la subcategoría, el nombre de la población y todas las columnas de la tabla 'anuncios'.

- A continuación, se realizan dos operaciones de unión (join) en las líneas `->join('subcategorias as S', 'A.subcategoria_id', '=', 'S.id')` y `->join('poblaciones as P', 'P.codigo', '=', 'A.cod_postal')`. Estas uniones se realizan utilizando las claves extranjeras y las correspondientes claves primarias de las tablas 'subcategorias' y 'poblaciones' respectivamente. Estas uniones permiten relacionar los anuncios con sus subcategorías y poblaciones correspondientes.

- Luego, se aplican tres condiciones de filtrado en las líneas `->where('P.nombre', 'like', $poblacion .'%')`, `->where('A.titulo', 'like', '%'.$titulo.'%')` y `->where('S.id', '=', $subcategoriaId)`. Estas condiciones filtran los anuncios según el nombre de la población (que debe coincidir parcialmente con la variable `$poblacion`), el título del anuncio (que debe contener la cadena de texto de la variable `$titulo`) y el identificador de la subcategoría (que debe ser igual a la variable `$subcategoriaId`).

- Finalmente, se llama al método `->get()` para ejecutar la consulta y obtener los resultados. Los resultados se asignan a la variable `$anuncios`.

Como conclusión, esta consulta utiliza el constructor de consultas de Laravel para obtener una lista de anuncios que cumplan con ciertos criterios de filtrado, como el nombre de la población, el título del anuncio y la subcategoría. Los resultados se almacenan en la variable `$anuncios` para su posterior uso.
:::

## Anuncios.index

A continuación vamos a analizar la vista **Anuncios.index** que es llamada por el controlador explicado anteriormente.

![indexfilter](/img/indexfilter.png)

El formulario permite al usuario filtrar los anuncios según diferentes criterios.

En la sección `@extends('layout.layout')`, se indica que esta vista extiende el diseño de la plantilla llamada 'layout'. Esto significa que hereda su estructura y estilos.

En la sección `@section('title', 'Página de inicio')`, se define el título de la página como 'Página de inicio'.

Dentro de la sección `@section('content')`, se encuentra el contenido principal de la página. Comienza con un contenedor y una fila que albergan dos secciones de la página: el filtro y la lista de anuncios.

La sección de filtro está contenida en una tarjeta (`<div class="card2 col-lg-3 mx-auto">`). Incluye un formulario con varios campos de entrada, como título, población, rango de precios, categoría y estado. Estos campos permiten al usuario especificar los criterios de búsqueda para filtrar los anuncios.

La sección de anuncios está contenida en otra tarjeta (`<div class="card3 col-lg-8 mx-auto">`). Contiene una lista de anuncios que se generan dinámicamente utilizando un bucle `@foreach`. Cada anuncio se muestra en una tarjeta individual con su título, precio e imagen. Al hacer clic en un anuncio, el usuario será redirigido a una página detallada del anuncio.

El código utiliza variables Blade, como `$titulo`, `$poblacion`, `$subcategoriaId`, `$anuncios`, `$categorias` y `$estados`, para pasar y mostrar los datos necesarios en la vista.

Esta vista muestra un formulario de filtro para buscar anuncios y una lista de anuncios filtrados. Los usuarios pueden ingresar diferentes criterios de búsqueda para encontrar los anuncios que les interesen.

```php
@extends('layout.layout')

@section('title', 'Página de inicio')

@section('content')
    <div class="container-fluid col-lg-12 mt-8">
        <div class="row">
            <div class="card2 col-lg-3 mx-auto">
                <h4 class="text-center  mx-auto resaltado mt-3"><b>Filtro</b></h4>
                <div class="container mt-4">
                <!-- formulario de filtro-->
                    <form action="{{ route('home.filterMultiple') }}" method="POST">
                        @csrf
                        <div class="col-md-12">
                            <label for="desde" class="form-label">
                                <p class="text-sm">Título
                                <p>
                            </label>
                            <div class="mb-3">

                                <input type="text" placeholder="Título" class="form-control" id="titulo"
                                    name="titulo" value="{{ $titulo }}"">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="mb-3">
                                <label for="desde" class="form-label">
                                    <p class="text-sm">Población
                                    <p>
                                </label>
                                <input type="text" placeholder="Población" class="form-control" id="poblacion"
                                    value="{{ $poblacion }}" name="poblacion">
                            </div>
                        </div>
                        <div class="row col-lg-12 mx-auto">
                            <div class="col-md-6">
                                <label for="desde" class="form-label">
                                    <p class="text-sm">Desde..
                                    <p>
                                </label>
                                <input type="number" class="form-control" id="desde" name="desde" min="0"
                                    value=0 max="10000">
                            </div>
                            <div class="col-md-6">
                                <label for="hasta" class="form-label">
                                    <p class="text-sm">Hasta
                                    <p>
                                </label>
                                <input type="number" class="form-control" id="hasta" name="hasta" min="0"
                                    value="10000" max="10000">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-2">
                                <label>
                                    <p class="text-sm">Categoría
                                    <p>
                                </label>
                                <select name="subcategoria_id" class="form-control">
                                    @foreach ($categorias as $categoria)
                                        <optgroup label="{{ $categoria->nombre }}">
                                            @foreach ($categoria->subcategorias as $subcategoria)
                                                <option value="{{ $subcategoria->id }}"
                                                    {{ $subcategoria->id == $subcategoriaId ? 'selected' : '' }}>
                                                    {{ $subcategoria->nombre }}
                                                </option>
                                            @endforeach
                                        </optgroup>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="mb-2">
                                <label>
                                    <p class="text-sm">Estado
                                    <p>
                                </label>
                                <select name="estado_id" class="form-control">
                                    @foreach ($estados as $estado)
                                        <option value="{{ $estado->id }}">{{ $estado->nombre }}</option>
                                    @endforeach
                                </select>
                            </div>

                        </div>
                        <button type="submit" class="btn btn-danger col-lg-12 m-1">buscar</button>
                    </form>
                </div>
            </div>
            <div class="card3 col-lg-8 mx-auto ">
                <h4 class="text-center resaltado mx-auto mt-3"><b>Anuncios</b></h4>
                <div class="row ">
                    @foreach ($anuncios as $anuncio)
                        <div class="card3 col-lg-4 mx-auto my-1">
                            <a href="/anuncios/{{ $anuncio->id }}">
                                <div class="card-title m-1">
                                    <p class="resaltado">{{ $anuncio->titulo }}</p>
                                </div>
                                <div class="card-body m-1">
                                    precio : <b>{{ $anuncio->precio }}</b>
                                    <img src="{{ $anuncio->imagen }}" class="d-block w-100" alt="{{ $anuncio->titulo }}">
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
```
### Análisis del formulario de filtro

![Filtro](/img/filtro2.png)

Este formulario es utilizado para filtrar anuncios según ciertos criterios. Vamos a analizar sus elementos:

1. El formulario tiene un atributo `action` que especifica la ruta a la que se enviarán los datos cuando se envíe el formulario. En este caso, la ruta se llama "home.filterMultiple".

2. El campo `@csrf` es una directiva de Blade que genera un token CSRF (Cross-Site Request Forgery) para proteger contra ataques CSRF.

3. El formulario contiene varios campos de entrada donde el usuario puede ingresar información para filtrar los anuncios:

   - Hay un campo de texto llamado "Título" donde el usuario puede ingresar el título del anuncio que desea buscar.

   - Hay un campo de texto llamado "Población" donde el usuario puede ingresar el nombre de la población que desea filtrar.

   - Hay dos campos numéricos llamados "Desde" y "Hasta" donde el usuario puede ingresar un rango de precios para filtrar los anuncios.

   - Hay un menú desplegable llamado "Categoría" donde el usuario puede seleccionar una categoría específica para filtrar los anuncios.

   - Hay otro menú desplegable llamado "Estado" donde el usuario puede seleccionar un estado específico para filtrar los anuncios.

4. Al final del formulario, hay un botón de tipo "submit" con el texto "Buscar". Cuando el usuario hace clic en este botón, los datos del formulario se enviarán a la ruta especificada en el atributo `action`.

El formulario permite al usuario ingresar criterios de búsqueda para filtrar los anuncios. Cuando se envía el formulario, los criterios seleccionados se enviarán a la ruta correspondiente para realizar la búsqueda y mostrar los resultados.

```php
  <!-- formulario de filtro-->
    <form action="{{ route('home.filterMultiple') }}" method="POST">
        @csrf
        <div class="col-md-12">
            <label for="desde" class="form-label">
                <p class="text-sm">Título
                <p>
            </label>
            <div class="mb-3">

                <input type="text" placeholder="Título" class="form-control" id="titulo"
                    name="titulo" value="{{ $titulo }}"">
            </div>
        </div>
        <div class="col-md-12">
            <div class="mb-3">
                <label for="desde" class="form-label">
                    <p class="text-sm">Población
                    <p>
                </label>
                <input type="text" placeholder="Población" class="form-control" id="poblacion"
                    value="{{ $poblacion }}" name="poblacion">
            </div>
        </div>
        <div class="row col-lg-12 mx-auto">
            <div class="col-md-6">
                <label for="desde" class="form-label">
                    <p class="text-sm">Desde..
                    <p>
                </label>
                <input type="number" class="form-control" id="desde" name="desde" min="0"
                    value=0 max="10000">
            </div>
            <div class="col-md-6">
                <label for="hasta" class="form-label">
                    <p class="text-sm">Hasta
                    <p>
                </label>
                <input type="number" class="form-control" id="hasta" name="hasta" min="0"
                    value="10000" max="10000">
            </div>
        </div>
        <div class="col-lg-12">
            <div class="mb-2">
                <label>
                    <p class="text-sm">Categoría
                    <p>
                </label>
                <select name="subcategoria_id" class="form-control">
                    @foreach ($categorias as $categoria)
                        <optgroup label="{{ $categoria->nombre }}">
                            @foreach ($categoria->subcategorias as $subcategoria)
                                <option value="{{ $subcategoria->id }}"
                                    {{ $subcategoria->id == $subcategoriaId ? 'selected' : '' }}>
                                    {{ $subcategoria->nombre }}
                                </option>
                            @endforeach
                        </optgroup>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="mb-2">
                <label>
                    <p class="text-sm">Estado
                    <p>
                </label>
                <select name="estado_id" class="form-control">
                    @foreach ($estados as $estado)
                        <option value="{{ $estado->id }}">{{ $estado->nombre }}</option>
                    @endforeach
                </select>
            </div>

        </div>
        <button type="submit" class="btn btn-danger col-lg-12 m-1">buscar</button>
    </form>
```
## Vista indexFilter

Vamos primero a ver la ruta **home.filterMultiple** que es invocada cuando presionamos el botón
buscar del formulario.

```php
Route::post('/anunciosFilterMultiple', [HomeController::class,'anunciosFilterMultiple'])->name('home.filterMultiple');
```

A continuación vamos a estudiar el método invocado en el controlador.

```php
public function anunciosFilterMultiple(Request $request){
        $poblacion=$request->input('poblacion');
        $titulo=$request->input('titulo');
        $subcategoriaId=$request->input('subcategoria_id');
        $estadoId=$request->input('estado_id');
        $desde=$request->input('desde');
        $hasta=$request->input('hasta');

        $anuncios = Anuncio::select('subcategorias.nombre as subcategoria_nombre', 'poblaciones.nombre as poblacion_nombre', 'estados.nombre as estado_nombre', 'anuncios.*')
        ->join('subcategorias', 'anuncios.subcategoria_id', '=', 'subcategorias.id')
        ->join('poblaciones', 'anuncios.cod_postal', '=', 'poblaciones.codigo')
        ->join('estados', 'anuncios.estado_id', '=', 'estados.id')
        ->where('poblaciones.nombre', 'like', $poblacion.'%')
        ->where('anuncios.titulo', 'like', '%'.$titulo.'%')
        ->where('estados.id', '=', $estadoId)
        ->where('subcategorias.id', '=', $subcategoriaId)
        ->whereBetween('precio', [$desde, $hasta])
        ->get();
    
        $categorias=Categoria::all();
        $estados=Estado::all();
        return view('anuncios.indexFilter', compact('anuncios','categorias','estados','poblacion','titulo','subcategoriaId','desde','hasta'));
      }
```
### Tablas relacionadas en la consulta
![Relacion de tablas utilizada en anunciosFilter](/img/filterMultipleR.png)
El método `anunciosFilterMultiple` se utiliza para filtrar los anuncios según múltiples criterios. Veamos su funcionamiento paso a paso:

1. El método recibe un objeto `Request` que proporciona acceso a los datos enviados en la solicitud HTTP.

2. El método utiliza el objeto `Request` para obtener los valores de los campos enviados desde el formulario. Estos valores se asignan a variables como `$poblacion`, `$titulo`, `$subcategoriaId`, `$estadoId`, `$desde` y `$hasta`. Estos valores representan los criterios de búsqueda ingresados por el usuario en el formulario.

3. A continuación, se realiza una consulta a la base de datos para obtener los anuncios que cumplen con los criterios de búsqueda. La consulta se realiza utilizando el modelo `Anuncio` y los métodos `select`, `join`, `where`, `whereBetween` y `get`.

   - En la cláusula `select`, se especifican los campos que se desean recuperar de la base de datos, incluyendo campos de tablas relacionadas como `subcategorias`, `poblaciones` y `estados`.

   - Mediante los métodos `join`, se establecen las relaciones entre las tablas `anuncios`, `subcategorias`, `poblaciones` y `estados`.

   - Mediante los métodos `where`, se aplican las condiciones de búsqueda utilizando los valores de las variables `$poblacion`, `$titulo`, `$estadoId` y `$subcategoriaId`.

   - El método `whereBetween` se utiliza para buscar anuncios que tengan un precio dentro del rango especificado por las variables `$desde` y `$hasta`.

   - Finalmente, el método `get` se utiliza para obtener los resultados de la consulta.

4. Se recuperan todas las categorías y estados de la base de datos utilizando los modelos `Categoria` y `Estado`, respectivamente.

5. Se devuelve una vista llamada "anuncios.indexFilter" y se pasan los datos recuperados de la consulta y las variables de los criterios de búsqueda a la vista utilizando el método `compact`.

En definitiva, este método de controlador recibe los criterios de búsqueda enviados desde un formulario, realiza una consulta a la base de datos para obtener los anuncios que cumplen con esos criterios y devuelve una vista con los resultados de la búsqueda. Además, también recupera las categorías y estados para mostrarlos en la vista.

## Vista anuncios.show
Esta vista sera responsable de mostrar el detalle de un anuncio determinado.

![Anuncios show](/img/anuncio1.png)

Para ello deberemos antes definir la **ruta** y el **controlador**.

```php title=Ruta
Route::get('anuncios/{id}', [AnuncioController::class,'show'])->name('anuncios.show');
```
```php title=Controlador
public function show($id)
    {
        $anuncio = Anuncio::findOrFail($id);

        return view('anuncios.show', compact('anuncio'));
    }
```

Pasemos a estudiar el código de la vista:

```php title=anuncios.show
@extends('layout.layout')

@section('title', 'Página de inicio')

@section('content')
       <section class="container mt-8 ">
        <div class="card col-lg-10 mx-auto">
            <div class="card-header m-1">
                <h4 class="resaltado text-center"><b>{{ $anuncio->titulo }}</b></h4>
                <h5 class="text-center">Precio : <b>{{ $anuncio->precio }}</h5>
                    <h5 class="text-center"></b> Estado :
                    <b>{{ $anuncio->estado->nombre }}</b>
                    Categoría : <b>{{ $anuncio->subcategoria->categoria->nombre }}</b>
                    SubCategoría : <b>{{ $anuncio->subcategoria->nombre }}</b>
                </h5>
            </div>
            <div class="card-body m-1">
                <img src="{{ $anuncio->imagen }}" class="d-block w-100" alt="{{ $anuncio->titulo }}">
                <div class="container mt-4">
                    <h5>{{ $anuncio->description }}</h5>
                </div>
            </div>
        </div>
    </section>
@endsection
```

Veamos qué hace cada una de las directivas utilizadas en esta vista:

1. `@extends('layout.layout')`: Esta línea indica que esta vista extiende o hereda el contenido de otra plantilla llamada 'layout.layout'. Esto significa que el contenido de 'layout.layout' se incluirá en esta vista, y esta vista puede agregar o sobrescribir secciones específicas de la plantilla base.

2. `@section('title', 'Página de inicio')`: Esta directiva define una sección llamada 'title' y establece su valor como 'Página de inicio'. Las secciones son áreas dentro de la plantilla base donde se puede insertar contenido específico de cada vista. En este caso, se está definiendo la sección 'title' y se le está asignando el valor 'Página de inicio'.

3. `@section('content')`: Esta directiva define una sección llamada 'content'. Aquí es donde se colocará el contenido específico de esta vista. El contenido que se coloque dentro de esta sección se insertará en el lugar correspondiente de la plantilla base.

4. A partir de aquí, se encuentra el contenido específico de esta vista. En este caso, se trata de un código HTML y PHP que muestra los detalles de un anuncio. Dentro de este contenido, se utilizan variables para acceder a los datos del anuncio, como `$anuncio->titulo`, `$anuncio->precio`, etc. Estas variables se supone que están disponibles en la vista y contienen los datos del anuncio.

5. `@endsection`: Esta directiva marca el final de la sección 'content'. Indica que el contenido de esta sección ha terminado y se debe insertar en la plantilla base.

En resumen, esta vista extiende una plantilla llamada 'layout.layout', define una sección 'title' con el valor 'Página de inicio', y tiene un contenido específico que muestra los detalles de un anuncio. Cuando se renderiza esta vista, el contenido de la sección 'content' se inserta en la plantilla base en el lugar correspondiente.