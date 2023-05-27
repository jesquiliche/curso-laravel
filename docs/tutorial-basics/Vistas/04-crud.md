---
sidebar_position: 5
---

# Operaciones CRUD

## Lo que aprenderás en este capítulo

En este capítulo aprenderás a realizar las operaciones CRUD (Crear, Leer, Actualizar y Borrar) de anuncios. Para ello, crearemos las vistas correspondientes. Además, aprenderemos a utilizar **Laravel Collective** para crear nuestros formularios y el plugin JavaScript **DropZone** para subir imágenes al servidor mediante la funcionalidad de arrastrar y soltar. También exploraremos cómo realizar transacciones.

## ¿Qué es un CRUD?

CRUD es un acrónimo que significa "Crear, Leer, Actualizar y Eliminar" (en inglés: Create, Read, Update, Delete). Se utiliza para describir las operaciones básicas que se realizan en un sistema o aplicación para administrar datos en una base de datos o cualquier otro tipo de almacenamiento.

Aquí tienes una explicación breve de cada una de las operaciones CRUD:

- Crear (Create): Esta operación se utiliza para crear nuevos registros o elementos en la base de datos. Por ejemplo, al agregar un nuevo usuario a una tabla de usuarios.

- Leer (Read): Esta operación se utiliza para leer o consultar datos existentes en la base de datos. Por ejemplo, al mostrar una lista de usuarios registrados.

- Actualizar (Update): Esta operación se utiliza para modificar o actualizar registros existentes en la base de datos. Por ejemplo, al cambiar la dirección de un usuario o actualizar la información de un producto.

- Eliminar (Delete): Esta operación se utiliza para eliminar registros o elementos existentes de la base de datos. Por ejemplo, al eliminar un usuario o eliminar un producto de una lista.

Resumiendo, CRUD proporciona un conjunto básico de operaciones para interactuar con los datos en una base de datos. Estas operaciones son fundamentales en el desarrollo de aplicaciones, ya que permiten la gestión y manipulación de datos de manera eficiente.

## Publicar Anuncio

Para empezar, revisaremos la vista **anuncios.create** la encargada de crear los anuncios de
nuestra apliación. A esta vista se accede a traves de uno de los enlaces que hay definido en el menú superior de la aplicación y su ruta esta definida de la siguiente forma en el fichero de rutas **web.php**

```php
Route::get('/create', [AnuncioController::class,'create'])->middleware('auth')->name('anuncios.create');
```

El usuario, para poder acceder a esta vista, debe estar registrado y autenticado, ya que los anuncios se guardan junto con la correspondiente ficha del usuario al que pertenece cada anuncio.
Por esta razón, utilizamos el middleware 'auth', que obliga al usuario a autenticarse en caso de no haberlo hecho previamente. A continuación puede observar la vista anteriormente mencionada.

![Publicar anuncio](/img/publicar.png)

Para la creación del formulario de esta vista, vamos a utilizar una librería llamada Laravel Collective.

### ¿Qúe es Laravel Collective?

Laravel Collective es un conjunto de componentes y utilidades adicionales para Laravel que simplifican y mejoran el desarrollo de formularios HTML y generación de HTML en general. Proporciona una sintaxis más expresiva y concisa para la creación de formularios y otros elementos HTML, lo que facilita su uso y mantenimiento en proyectos Laravel.

Laravel Collective se utiliza mediante la instalación de su paquete a través de Composer y su integración en el proyecto Laravel existente. Una vez instalado, puedes aprovechar las funciones y clases proporcionadas por Laravel Collective para generar fácilmente elementos HTML, como formularios, campos de entrada, botones, listas desplegables, etc.

Algunos de los beneficios de utilizar Laravel Collective incluyen:

1. Sintaxis concisa: Laravel Collective ofrece una sintaxis simplificada y expresiva para la creación de formularios y elementos HTML en comparación con el enfoque estándar de Laravel.

2. Mayor productividad: Al proporcionar métodos y funciones específicos para generar elementos HTML, Laravel Collective agiliza el desarrollo y ahorra tiempo en la escritura de código repetitivo.

3. Mayor legibilidad: La sintaxis clara y estructurada de Laravel Collective hace que el código sea más legible y comprensible, lo que facilita la colaboración entre desarrolladores.

4. Compatibilidad con Laravel: Laravel Collective se integra sin problemas con Laravel, lo que significa que puedes utilizarlo junto con otras características y componentes de Laravel sin conflictos.

En resumen, Laravel Collective es una biblioteca complementaria para Laravel que simplifica la generación de formularios y otros elementos HTML en proyectos Laravel, mejorando la productividad y la legibilidad del código.

:::info Como se utiliza

Para utilizar los componentes de Laravel Collective, sigue estos pasos:

1. Instalación: Agrega Laravel Collective como una dependencia en tu proyecto de Laravel mediante Composer. Abre una terminal en la raíz de tu proyecto y ejecuta el siguiente comando:
   
   ```shell
   composer require laravelcollective/html
   ```

2. Configuración: Una vez instalado, Laravel Collective se registrará automáticamente en Laravel. Sin embargo, si estás utilizando Laravel 5.5 o una versión posterior, no necesitas realizar ningún paso adicional. Si estás utilizando una versión anterior, debes registrar el proveedor de servicios y la fachada manualmente en los archivos `config/app.php` y `config/app.php` respectivamente. Asegúrate de seguir las instrucciones de instalación específicas para tu versión de Laravel.

3. Uso en vistas: Puedes utilizar los componentes de Laravel Collective en tus vistas para generar elementos HTML. Aquí hay algunos ejemplos:

   - Generar un formulario:
   
     ```php
     {!! Form::open(['url' => 'ruta', 'method' => 'POST']) !!}
     // Campos del formulario
     {!! Form::text('nombre', null, ['class' => 'form-control']) !!}
     {!! Form::submit('Enviar', ['class' => 'btn btn-primary']) !!}
     {!! Form::close() !!}
     ```
     
   - Generar un enlace:
   
     ```php
     {!! Html::link('ruta', 'Texto del enlace', ['class' => 'btn btn-primary']) !!}
     ```

   - Generar una tabla:
   
     ```php
     {!! Table::open(['class' => 'table']) !!}
     {!! Table::header(['Columna 1', 'Columna 2']) !!}
     {!! Table::body([['Celda 1', 'Celda 2'], ['Celda 3', 'Celda 4']]) !!}
     {!! Table::close() !!}
     ```

4. Explora la documentación: Laravel Collective ofrece una documentación detallada y completa que puedes consultar para obtener más información sobre el uso de cada componente. Puedes visitar el sitio web oficial de Laravel Collective y acceder a la documentación para obtener ejemplos, referencias y guías de uso.

Recuerda importar las clases necesarias al principio de tus archivos de vista o utilizar las fachadas adecuadas para acceder a los métodos de los componentes.
:::

### Análisis del código

```html
@extends('layout.layout') <!-- Extiende el diseño de la plantilla principal -->

@section('title', 'Página de inicio') <!-- Define el título de la página -->

@section('content') <!-- Sección del contenido de la página -->

    <div class="card2 col-lg-10 mx-auto mt-8 p-4"> <!-- Contenedor de la tarjeta -->
        <h4 class="text-center resaltado"><b>Publicar anuncio<b></h4> <!-- Título de la tarjeta -->
        @if ($errors->any()) <!-- Verifica si hay errores y muestra una alerta de error -->
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error) <!-- Itera sobre los errores y los muestra en una lista -->
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        {!! Form::open(['url' => route('anuncios.store'), 'method' => 'POST', 'enctype' => 'multipart/form-data']) !!} <!-- Apertura del formulario -->
        {!! Form::token() !!} <!-- Genera un token CSRF para proteger el formulario -->
        <div class="row"> <!-- Fila de la cuadrícula -->

            <div class="col-lg-6"> <!-- Columna de la cuadrícula -->

                <div class="form-group">
                    {!! Form::label('titulo', 'Título', ['class' => 'text-sm']) !!} <!-- Etiqueta del campo de texto -->
                    {!! Form::text('titulo', null, ['class' => 'form-control', 'required']) !!} <!-- Campo de texto -->
                    @error('titulo') <!-- Verifica si hay un error en el campo 'titulo' y muestra un mensaje de error -->
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    {!! Form::label('description', 'Descripción') !!} <!-- Etiqueta del campo de texto de área -->
                    {!! Form::textarea('description', null, ['class' => 'form-control', 'rows' => 5, 'required']) !!} <!-- Campo de texto de área -->
                    @error('description') <!-- Verifica si hay un error en el campo 'description' y muestra un mensaje de error -->
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    {!! Form::label('imagen', 'Imagen') !!} <!-- Etiqueta del campo de archivo -->
                    {!! Form::file('imagen', ['class' => 'form-control-file', 'accept' => 'image/*', 'required', 'max' => '2048']) !!} <!-- Campo de archivo -->
                    @error('imagen') <!-- Verifica si hay un error en el campo 'imagen' y muestra un mensaje de error -->
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="col-lg-10">
                    {!! Form::select( <!-- Etiqueta del campo de selección -->
                        'subcategoria_id',
                        $categorias->flatMap(function ($categoria) { <!-- Genera opciones de selección a partir de los datos proporcionados -->
                            return [$categoria->nombre => $categoria->subcategorias->pluck('nombre', 'id')];
                        }),
                        null,
                        ['class' => 'form-control'],
                    ) !!} <!-- Campo de selección -->
                    @error('subcategoria_id') <!-- Verifica si hay un error en el campo 'subcategoria_id' y muestra un mensaje de error -->
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>
            </div>
            
            <div class="col-lg-6"> <!-- Columna de la cuadrícula -->

                <div class="form-group">
                    {!! Form::label('telefono', 'Teléfono') !!} <!-- Etiqueta del campo de teléfono -->
                    {!! Form::tel('telefono', null, ['class' => 'form-control']) !!} <!-- Campo de teléfono -->
                    @error('telefono') <!-- Verifica si hay un error en el campo 'telefono' y muestra un mensaje de error -->
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    {!! Form::label('estado_id', 'Estado') !!} <!-- Etiqueta del campo de selección -->
                    {!! Form::select('estado_id', $estados->pluck('nombre', 'id'), null, ['class' => 'form-control', 'required']) !!} <!-- Campo de selección -->
                    @error('estado_id') <!-- Verifica si hay un error en el campo 'estado_id' y muestra un mensaje de error -->
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    {!! Form::label('provincia', 'Provincia') !!} <!-- Etiqueta del campo de selección -->
                    {!! Form::select('provincia', $provincias->pluck('nombre', 'codigo'), null, ['class' => 'form-control', 'required']) !!} <!-- Campo de selección -->
                    @error('provincia') <!-- Verifica si hay un error en el campo 'provincia' y muestra un mensaje de error -->
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    {!! Form::label('poblacion', 'Población') !!} <!-- Etiqueta del campo de selección -->
                    {!! Form::select('cod_postal', $poblaciones->pluck('nombre', 'codigo'), null, ['class' => 'form-control', 'required']) !!} <!-- Campo de selección -->
                    @error('cod_postal') <!-- Verifica si hay un error en el campo 'cod_postal' y muestra un mensaje de error -->
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    {!! Form::label('precio', 'Precio') !!} <!-- Etiqueta del campo de número -->
                    {!! Form::number('precio', null, ['class' => 'form-control','required']) !!} <!-- Campo de número -->
                    @error('precio') <!-- Verifica si hay un error en el campo 'precio' y muestra un mensaje de error -->
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>
            </div>
        </div>

        <div class="form-group">
            {!! Form::submit('Guardar', ['class' => 'btn btn-danger mx-auto']) !!} <!-- Botón de envío del formulario -->
        </div>

        {!! Form::close() !!} <!-- Cierre del formulario -->
    </div>
</div>
@endsection <!-- Cierre de la sección de contenido -->
```
#### Análisis general

- La sección de código `@if ($errors->any())` verifica si hay errores de validación. En caso afirmativo, se muestra una alerta de color rojo utilizando la clase CSS "alert alert-danger". Dentro de la alerta, se muestra una lista desordenada `<ul>` que contiene todos los errores encontrados. Esto se logra utilizando un bucle `@foreach` para recorrer la variable `$errors->all()`, que contiene todos los errores de validación.

- Para cada error de validación, se muestra un elemento de lista `<li>` con el contenido del error utilizando la sintaxis `{{ $error }}`. Esto asegura que cada error se muestre como un elemento de la lista en la alerta de errores.

- Cada campo del formulario tiene una validación asociada utilizando la directiva `@error`. Dentro de la directiva, se muestra un mensaje de error utilizando la variable `$message`, que contiene el mensaje de error específico para el campo dado. El mensaje de error se muestra en rojo utilizando la clase CSS "text-danger".

- Los controles de formulario se generan utilizando el componente `Form` de Laravel Collective. Por ejemplo, el campo de entrada de texto se genera utilizando `Form::text()`, el campo de texto de área se genera utilizando `Form::textarea()`, el campo de archivo se genera utilizando `Form::file()`, y así sucesivamente.

- Para cada control de formulario, se establecen atributos específicos utilizando el segundo argumento de la función `Form::` correspondiente. Por ejemplo, se establece el atributo "required" para indicar que un campo es obligatorio, se establece el atributo "rows" para especificar el número de filas en un campo de texto de área, se establece el atributo "accept" para especificar el tipo de archivo aceptado en un campo de archivo, y se establece el atributo "max" para limitar el tamaño máximo del archivo en kilobytes.

- Además de los controles de formulario, se utilizan etiquetas `<label>` para proporcionar una descripción legible de cada campo. Estas etiquetas se generan utilizando la función `Form::label()` y se asocian con los respectivos campos de entrada utilizando el atributo "for" en la etiqueta `<label>`.

En resumen, el código utiliza el componente `Form` de Laravel Collective para generar controles de formulario y manejar la validación de manera conveniente. Los mensajes de error se muestran de manera adecuada utilizando la directiva `@error` y se proporciona retroalimentación visual al usuario con una alerta de errores. Esto ayuda a garantizar que los datos ingresados por el usuario cumplan con las reglas de validación definidas en el código.

#### Análisis en detalle

:::info @error y @errors

1. `@error`: La directiva `@error` se utiliza para mostrar mensajes de error específicos asociados a un campo de formulario en particular. Funciona en conjunto con la validación de formularios en Laravel. Cuando se realiza la validación y se encuentran errores, puedes usar la directiva `@error` para mostrar mensajes de error personalizados junto al campo correspondiente.

   Ejemplo de uso:
   ```html
   @error('campo')
       <span class="text-danger">{{ $message }}</span>
   @enderror
   ```

   Explicación:
   - `'campo'` hace referencia al nombre del campo en el formulario que se está validando.
   - `$message` es una variable predefinida en Laravel que contiene el mensaje de error específico asociado al campo validado.

   La directiva `@error` se utiliza dentro del bloque de código del formulario para mostrar mensajes de error debajo de los campos correspondientes. Si se encuentra un error de validación para el campo especificado, se mostrará el mensaje de error.

2. `@errors`: La directiva `@errors` se utiliza para verificar si hay errores de validación en general, sin hacer referencia a campos específicos. Proporciona una forma conveniente de comprobar si hay algún error en cualquier campo del formulario.

   Ejemplo de uso:
   ```html
   @if ($errors->any())
       <div class="alert alert-danger">
           <ul>
               @foreach ($errors->all() as $error)
                   <li>{{ $error }}</li>
               @endforeach
           </ul>
       </div>
   @endif
   ```

   Explicación:
   - `$errors` es una variable predefinida en Laravel que contiene los errores de validación. Proporciona métodos para verificar si hay errores, obtener los errores en diferentes formatos, etc.
   - `$errors->any()` es un método que verifica si hay algún error de validación.

   La directiva `@errors` se utiliza para envolver un bloque de código que se ejecutará solo si se encuentran errores de validación en cualquier campo del formulario. En el ejemplo anterior, se muestra una alerta de color rojo que contiene una lista desordenada con todos los mensajes de error encontrados.

Resumiendo, la directiva `@error` se utiliza para mostrar mensajes de error específicos asociados a campos de formulario individuales, mientras que la directiva `@errors` se utiliza para verificar si hay errores de validación en general y mostrar mensajes de error generales. Ambas directivas son herramientas poderosas para manejar la validación y proporcionar retroalimentación adecuada al usuario en los formularios de Laravel.
:::

```php 
 {!! Form::open(['url' => route('anuncios.store'), 'method' => 'POST', 'enctype' => 'multipart/form-data']) !!}
    {!! Form::token() !!}
    <div class="row">
        <div class="col-lg-6">
            <div class="form-group">
                {!! Form::label('titulo', 'Título', ['class' => 'text-sm']) !!}
                {!! Form::text('titulo', null, ['class' => 'form-control', 'required']) !!}
                @error('titulo')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                {!! Form::label('description', 'Descripción') !!}
                {!! Form::textarea('description', null, ['class' => 'form-control', 'rows' => 5, 'required']) !!}
                @error('description')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                {!! Form::label('imagen', 'Imagen') !!}
                {!! Form::file('imagen', ['class' => 'form-control-file', 'accept' => 'image/*', 'required', 'max' => '2048']) !!}
                @error('imagen')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="col-lg-10">
                {!! Form::select(
                    'subcategoria_id',
                    $categorias->flatMap(function ($categoria) {
                        return [$categoria->nombre => $categoria->subcategorias->pluck('nombre', 'id')];
                    }),
                    null,
                    ['class' => 'form-control'],
                ) !!}
                @error('subcategoria_id')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
        </div>
        
        <div class="col-lg-6">
            
            <div class="form-group">
                {!! Form::label('telefono', 'Teléfono') !!}
                {!! Form::tel('telefono', null, ['class' => 'form-control']) !!}
                @error('telefono')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                {!! Form::label('estado_id', 'Estado') !!}
                {!! Form::select('estado_id', $estados->pluck('nombre', 'id'), null, ['class' => 'form-control', 'required']) !!}
                @error('estado_id')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                {!! Form::label('provincia', 'Provincia') !!}
                {!! Form::select('provincia', $provincias->pluck('nombre', 'codigo'), null, [
                    'class' => 'form-control',
                    'required',
                ]) !!}
                @error('provincia')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>

            <div class="form-group">
                {!! Form::label('poblacion', 'Población') !!}
                {!! Form::select('cod_postal', $poblaciones->pluck('nombre', 'codigo'), null, [
                    'class' => 'form-control',
                    'required',
                ]) !!}
                @error('cod_postal')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>

            <div class="form-group">
                {!! Form::label('precio', 'Precio') !!}
                {!! Form::number('precio', null, ['class' => 'form-control','required']) !!}
                @error('precio')
                    <span class="text-danger">{{ $message }}</span>
                @enderror
            </div>
        </div>
    </div>
    <div class="form-group">
        {!! Form::submit('Guardar', ['class' => 'btn btn-danger mx-auto']) !!}

    </div>
    {!! Form::close() !!}
```

:::info Análisis del formulario

Veamos en detalle lo que hace cada parte del formulario:

1. `{!! Form::open(['url' => route('anuncios.store'), 'method' => 'POST', 'enctype' => 'multipart/form-data']) !!}`: Esta línea genera la etiqueta de apertura del formulario. `Form::open` se utiliza para especificar la ruta y el método HTTP que se utilizará cuando se envíe el formulario. En este caso, la URL se establece mediante la función `route('anuncios.store')`, que genera la URL correspondiente a la ruta con nombre `'anuncios.store'`. El método HTTP se establece en `'POST'`, lo que significa que los datos del formulario se enviarán al servidor como parte del cuerpo de la solicitud POST. El atributo `enctype` se establece en `'multipart/form-data'`, lo que permite el envío de archivos junto con los datos del formulario.

2. `{!! Form::token() !!}`: Esta línea genera un campo oculto en el formulario que contiene un token CSRF (Cross-Site Request Forgery). El token CSRF ayuda a proteger el formulario contra ataques maliciosos. Laravel incluye automáticamente este campo oculto cuando se utiliza `Form::open()` para abrir un formulario.

3. El formulario contiene varios grupos de campos de entrada y selección. Cada grupo de campos está envuelto en una etiqueta `div` con la clase "form-group". Dentro de cada grupo, se generan elementos de formulario usando las funciones proporcionadas por Laravel Collective.

   - `Form::label`: Genera una etiqueta de formulario `<label>`. Toma tres parámetros: el nombre del campo, el texto del etiqueta y, opcionalmente, un array de atributos adicionales para el elemento HTML.
   - `Form::text`, `Form::textarea`, `Form::file`, `Form::select`, `Form::tel`, `Form::number`: Generan campos de entrada de texto, áreas de texto, campos de archivo, selectores, campos de teléfono y campos numéricos, respectivamente. Toman tres parámetros: el nombre del campo, el valor predeterminado (opcional) y un array de atributos adicionales para el elemento HTML.
   - `@error`: Se utiliza para mostrar mensajes de error asociados a cada campo de entrada. Si se encuentra un error de validación para un campo específico, se muestra el mensaje de error correspondiente.

4. `{!! Form::submit('Guardar', ['class' => 'btn btn-danger mx-auto']) !!}`: Esta línea genera un botón de envío del formulario. Toma dos parámetros: el texto del botón y un array de atributos adicionales para el elemento HTML.

5. `{!! Form::close() !!}`: Esta línea genera la etiqueta de cierre del formulario. Marca el final del formulario generado por Laravel Collective.

En resumen, el formulario generado por Laravel Collective permite al usuario ingresar datos en diferentes campos y enviarlos al servidor mediante una solicitud POST. Los campos de entrada están predefinidos con nombres y atributos específicos, y se incluyen mensajes de error personalizados utilizando la directiva `@error`. Al enviar el formulario, los datos se enviarán a la ruta `'anuncios.store'` en el servidor para su procesamiento.
:::

Recordemos que todas las validaciones se implementan a nivel de controlador. En este caso, en el método `store` del controlador `AnuncioController`:

```php
public function store(Request $request)
{
    // Validar los datos del formulario
    $request->validate([
        'titulo' => 'required|string|max:255',
        'description' => 'required|string',
        'imagen' => 'required|image|max:2048',
        'precio' => 'required|numeric',
        'subcategoria_id' => 'required|exists:subcategorias,id',
        'provincia' => 'required|string|max:255',
        'telefono' => 'required|string|max:255',
        'estado_id' => 'required'
    ]);

    $userId = Auth::id(); // Obtener el ID del usuario autenticado

    // Crear una nueva instancia de Anuncio con los datos del formulario
    $anuncio = new Anuncio($request->all());

    $anuncio->user_id = $userId; // Asignar el ID del usuario al anuncio

    if ($request->hasFile('imagen')) {
        // Si se ha proporcionado una imagen, almacenarla en el sistema de archivos
        $path = $request->file('imagen')->store('/public/images');
        $url = '/storage/images/' . basename($path);
        $anuncio->imagen = $url; // Asignar la URL de la imagen al anuncio
    }

    $anuncio->save(); // Guardar el anuncio en la base de datos

    // Retornar la vista 'anuncios.showCreateFotos' y pasar el anuncio como dato
    return view('anuncios.showCreateFotos', compact('anuncio'));
}
```

Los mensajes de error o validación se definen en el archivo `lang/es/validation.php`, donde `es` se corresponde con el idioma predefinido en el archivo `config/app.php`.

Por otra parte, cabe mencionar que las validaciones se efectuarán en dos fases:

1. Una validación en el cliente que se define de la siguiente forma:

```php
<div class="form-group">
    {!! Form::label('titulo', 'Título', ['class' => 'text-sm']) !!}
    {!! Form::text('titulo', null, ['class' => 'form-control', 'required']) !!}
    @error('titulo')
        <span class="text-danger">{{ $message }}</span>
    @enderror
</div>
```

En este caso, en el tercer parámetro de `Form::text`, se indica que el campo del formulario 'titulo' es de la clase 'form-control' y es requerido.

2. La validación del lado del servidor, como se explicó anteriormente, se encarga el controlador. Si estas validaciones no se cumplen y deseamos mostrar un mensaje al usuario, utilizamos la directiva `@error` debajo del input 'titulo'. Esta directiva mostrará el mensaje de error asociado al campo 'Título' en texto de color rojo. De esta forma se define para cada uno de los controles de nuestro formulario.

### Subida de imágenes al servidor

Como has podido observar en nuestro formulario, tenemos un campo de tipo 'input file'. Este tipo de input nos permite subir archivos al servidor. Para ello, también debemos indicar en `Form::open`, además de la action y el método, la propiedad `enctype`:

```html
{!! Form::open(['url' => route('anuncios.store

'), 'method' => 'POST', 'enctype' => 'multipart/form-data']) !!}
```

Este `input file` tiene las siguientes características:

```html
<div class="form-group">
    {!! Form::label('imagen', 'Imagen') !!}
    {!! Form::file('imagen', ['class' => 'form-control-file', 'accept' => 'image/*', 'required', 'max' => '2048']) !!}
    @error('imagen')
        <span class="text-danger">{{ $message }}</span>
    @enderror
</div>
```

En el atributo `'accept' => 'image/*'`, se permite cualquier archivo de tipo imagen, y en el atributo `'max' => '2048'`, se establece el límite de tamaño del archivo en 2 MB.

#### Implementación en el lado del servidor

Los pasos anteriormente descritos, solo sirven para preparar nuestro formulario para la subida de imágenes, nos falta implementar la lógica de negocio nuestro controlador en el método **store**.

```php
if ($request->hasFile('imagen')) {
    $path = $request->file('imagen')->store('/public/images');
    $url = '/storage/images/' . basename($path);
    $anuncio->imagen = $url;
}
```
Por supuesto, aquí tienes una explicación del código:

```php
if ($request->hasFile('imagen')) {
    $path = $request->file('imagen')->store('/public/images');
    $url = '/storage/images/' . basename($path);
    $anuncio->imagen = $url;
}
```

En este fragmento de código verifica si se ha enviado un archivo con el nombre 'imagen' en la solicitud `$request` utilizando el método `hasFile`. Si el archivo está presente, se ejecuta el bloque de código dentro del condicional.

Dentro del bloque condicional, se almacena el archivo en el sistema de archivos utilizando el método `store`. La función `store` recibe una ubicación de almacenamiento como argumento. En este caso, se especifica `'/public/images'` como ubicación de almacenamiento, lo que significa que el archivo se almacenará en la carpeta `public/images` dentro del sistema de archivos de la aplicación.

Después de almacenar el archivo, se crea una URL para acceder a él. La variable `$path` contiene la ruta completa del archivo almacenado. Se utiliza la función `basename` para obtener solo el nombre del archivo con su extensión. Luego, se concatena este nombre de archivo con `'/storage/images/'` para formar la URL completa donde se puede acceder al archivo.

Finalmente, se asigna la URL de la imagen al atributo `imagen` del objeto `$anuncio`. Esto puede ser parte de la lógica de guardar la información del anuncio junto con la URL de la imagen en la base de datos.

Resumiendo, este código verifica si se ha enviado un archivo de imagen en la solicitud y, en caso afirmativo, lo almacena en el sistema de archivos y guarda la URL correspondiente en el objeto `$anuncio`. Esto permite que el anuncio tenga una imagen asociada que se puede mostrar o utilizar posteriormente en la aplicación.

Por último deberá ejecutar el siguiente comando de su terminal:

```bash
php artisan storage:link
```

:::info Storage Link

`storage:link` es un comando de Artisan en Laravel que crea un enlace simbólico (symbolic link) entre la carpeta `public/storage` y la carpeta `storage/app/public`. Este enlace simbólico permite acceder a los archivos almacenados en la carpeta `storage/app/public` a través de la URL pública de la aplicación.

Cuando se utiliza el método `store` para guardar un archivo en el sistema de archivos en Laravel, por defecto se guarda en la carpeta `storage/app/public`. Sin embargo, para acceder a estos archivos desde la web, es necesario que estén ubicados en la carpeta `public`, que es la carpeta raíz pública de la aplicación.

Aquí es donde entra en juego `storage:link`. Al ejecutar este comando, se crea un enlace simbólico entre `public/storage` y `storage/app/public`. Esto significa que cualquier archivo almacenado en `storage/app/public` será accesible a través de la URL pública utilizando la ruta `storage/`.

Por ejemplo, si tienes un archivo de imagen llamado `imagen.jpg` almacenado en `storage/app/public/images`, después de ejecutar `storage:link`, podrás acceder a esa imagen a través de la URL `public/storage/images/imagen.jpg`.

En resumen, `storage:link` es necesario para crear un enlace simbólico entre la carpeta de almacenamiento privada de Laravel y la carpeta pública de la aplicación. Esto permite acceder a los archivos almacenados en la carpeta `storage/app/public` a través de URLs públicas y utilizarlos en la interfaz de usuario de la aplicación.

:::

### Subida múltiple de imágenes al servidor

Después de hacer clic en el botón "Guardar" en la vista anterior, seremos redirigidos a la vista **Anuncios.showCreateFotos**, que tendrá un aspecto similar a la siguiente imagen:

![Anuncio de PC](/img/anuncio_pc2.png)

En esta vista, podemos ver la imagen principal del artículo/anuncio, su descripción, precio, etc. Después de mostrar todos estos datos, se nos presenta un recuadro que nos invita a insertar más imágenes. Este recuadro ha sido desarrollado utilizando el plugin JavaScript **DropZone**.

Este plugin tiene características muy interesantes, como la capacidad de subir múltiples imágenes a la vez simplemente arrastrándolas y soltándolas.

#### ¿Qué es DropZone?

Dropzone es una librería que te permite subir archivos a tu página web de manera sencilla. Puedes imaginarlo como una caja especial en tu sitio web donde puedes arrastrar y soltar archivos desde tu computadora.

En lugar de buscar los archivos en tu computadora y hacer clic en un botón para subirlos, con Dropzone solo necesitas arrastrar los archivos y soltarlos en la caja. Los archivos se cargarán automáticamente en tu página web.

La ventaja es que puedes subir varios archivos a la vez, lo cual es más rápido y cómodo. Mientras los archivos se están cargando, Dropzone te mostrará mensajes y el progreso para que sepas cómo va todo.

Además, puedes personalizar la apariencia de Dropzone para que se vea bien en tu página web. Puedes cambiar los colores y hacer que se adapte a tu diseño.

En resumen, Dropzone es una manera fácil y práctica de subir archivos a tu página web. Solo arrastra y suelta los archivos y estarán listos para usar.

En el siguiente ejemplo vamos a subir 5 imágenes utilizando DropZone.

![Soltar y arrastrar con DropZone](/img/dropzone.png)

```html title='Código de la vista'
@extends('layout.layout') <!-- Extiende la plantilla de diseño llamada 'layout.layout' -->

@section('title', 'Página de inicio') <!-- Define el título de la página -->

@section('content') <!-- Inicia la sección de contenido principal -->
    <section class="container mt-8 ">
        <div class="card col-lg-10 mx-auto">
            <div class="card-header m-1">

                <!-- Muestra el título del anuncio -->
                <h4 class="resaltado text-center"><b>{{ $anuncio->titulo }}</b></h4>

                <!-- Muestra el precio del anuncio -->
                <h5 class="text-center">Precio : <b>{{ $anuncio->precio }}</h5>

                <!-- Muestra el estado del anuncio, la categoría y la subcategoría -->
                <h5 class="text-center"></b> Estado :
                    <b>{{ $anuncio->estado->nombre }}</b>
                    Categoría : <b>{{ $anuncio->subcategoria->categoria->nombre }}</b>
                    SubCategoría : <b>{{ $anuncio->subcategoria->nombre }}</b>
                </h5>
            </div>
            <div class="card-body m-1">

                <!-- Muestra la imagen del anuncio -->
                <img src="{{ $anuncio->imagen }}" class="d-block w-100" alt="{{ $anuncio->titulo }}">
                <div class="container mt-4">
                    <!-- Muestra la descripción del anuncio -->
                    <h5>{{ $anuncio->description }}</h5>
                </div>

                <div class="form-group">
                    <h4 class="text-center resaltado">¿Desea incluir más imágenes?</h4>
                    <!-- DropZone -->
                    <form action="{{ route('fotos.store') }}" method="POST" enctype="multipart/form-data" class="dropzone"
                        id="myDropzone">
                        @csrf
                        <input type="hidden" name="anuncio_id" value="{{ $anuncio->id }}">
                    </form>
                </div>
            </div>
        </div>

    </section>
@endsection

@section('css')
    <!-- Estilos de la vista-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.2/min/dropzone.min.css"
        crossorigin="anonymous" />
@endsection

@section('js')
    <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
    <script>
        Dropzone.options.myDropzone = {
            paramName: 'imagen',
            maxFilesize: 2, <!-- Tamaño máximo del archivo en megabytes -->
            acceptedFiles: '.jpg, .jpeg, .png', <!-- Tipos de archivo aceptados -->
            dictDefaultMessage: 'Arrastra los archivos aquí para subirlos',
            maxFiles: 6, <!-- Límite máximo de archivos -->
            init: function() {
                this.on('error', function(file, errorMessage) {
                    // Manejar errores de carga de archivos aquí
                });
            },
        };
    </script>
@endsection
```

#### Configuración de DropZone

En esta vista, se utiliza Dropzone para permitir a los usuarios cargar imágenes adicionales para un anuncio. Aquí hay una explicación paso a paso de cómo funciona:

1. Se incluye la biblioteca **Dropzone** en la sección de JavaScript:
```html
<script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
```

2. Se configura Dropzone en el formulario de carga de imágenes con el ID `myDropzone`:
```html
<form action="{{ route('fotos.store') }}" method="POST" enctype="multipart/form-data" class="dropzone" id="myDropzone">
```
- La acción del formulario se establece en la ruta `fotos.store`, que es la ruta para almacenar las imágenes en el servidor.
- El atributo `enctype` se establece en `multipart/form-data` para permitir la carga de archivos.

3. Se configuran opciones específicas de Dropzone dentro de la sección de JavaScript:
```html
<script>
    Dropzone.options.myDropzone = {
        paramName: 'imagen',
        maxFilesize: 2,
        acceptedFiles: '.jpg, .jpeg, .png',
        dictDefaultMessage: 'Arrastra los archivos aquí para subirlos',
        maxFiles: 6,
        init: function() {
            this.on('error', function(file, errorMessage) {
                // Manejar errores de carga de archivos aquí
            });
        },
    };
</script>
```
- `paramName` indica el nombre del campo en el formulario que contendrá los archivos cargados. En este caso, se establece en `'imagen'`.
- `maxFilesize` establece el tamaño máximo permitido para los archivos, en este caso, 2 megabytes.
- `acceptedFiles` especifica los tipos de archivos aceptados, en este caso, archivos con extensión `.jpg`, `.jpeg` y `.png`.
- `dictDefaultMessage` establece el mensaje predeterminado que se muestra en el área de carga de archivos.
- `maxFiles` establece el número máximo de archivos que se pueden cargar.
- `init` es una función de inicialización de Dropzone que permite ejecutar código personalizado. En este caso, se agrega un controlador de eventos para manejar errores de carga de archivos.

La operativa de carga en el servidor y la lógica de negocio se implementa en el controlador 
**FotoController** en su método **store**.


```php title='Método store del controlador FotoController'
 public function store(Request $request)
    {
        // Validar la solicitud
       $request->validate([
            'imagen' => 'required|image|max:2048',// Reemplaza las reglas de validación según tus necesidades
            'anuncio_id'=>'required'
        ]);

        // Obtener el archivo de imagen
        $imagen = $request->file('imagen');

        // Procesar y guardar la imagen
        $ruta = $imagen->store('public/images'); // Guarda la imagen en una carpeta específica, ajusta la ruta según tus necesidades
        $url = '/storage/images/' . basename($ruta);
        // Crear una nueva instancia de Foto y guardarla en la base de datos
        $foto = Foto::create([
            'path' => $url,
            'anuncio_id' => $request->anuncio_id,
        ]);
    }
```

#### ¿Qué hace?

1. **Validación de la solicitud:** Se valida que la solicitud contenga los campos requeridos y cumpla con ciertas reglas de validación. En este caso, se valida que el campo "imagen" sea requerido y que sea un archivo de imagen válido con un tamaño máximo de 2048 KB.

2. **Obtener el archivo de imagen:** Se obtiene el archivo de imagen enviado en la solicitud utilizando el método `file('imagen')` del objeto `$request`.

3. **Procesar y guardar la imagen:** El siguiente paso es procesar y guardar la imagen en el servidor. En este caso, se utiliza el método `store()` del objeto `$imagen`. Este método guarda el archivo en una ubicación específica en el sistema de archivos y devuelve la ruta donde se almacenó.

4. **Crear una nueva instancia de Foto y guardarla en la base de datos:** Se crea una nueva instancia del modelo `Foto` y se asigna la ruta de la imagen guardada y el ID del anuncio relacionado. Luego, se guarda esta instancia en la base de datos utilizando el método `create()` del modelo `Foto`.

En definitiva, este método se encarga de validar y procesar una imagen enviada a través de una solicitud HTTP. Valida que el archivo sea una imagen válida y cumpla con los requisitos de tamaño. Luego, guarda la imagen en una ubicación específica en el servidor y crea un registro en la base de datos asociado a un anuncio.

Ahora si consultamos nuestra base de datos de Anuncios y consultamos la tabla **fotos** podremos observar commo se han insertado 5 anuncios.

![Tabla fotos](/img/fotos_insertadas.png)

## Editar y borrar anuncios

En esta sección nos concentraremos en la parte edición y borrado de anuncios. Estas operaciones están restringidas solo a usuarios registrados como pudimos ver en la sección de publicación de anuncios, sin embargo estas operaciones también contemplan algunas restricciones más, como que solo pueden borrar y editar anuncios los usuarios propietarios del anuncio, así como los administradores.

### Modificando nuestra vista Home

![Anuncios](/img/anuncios_editar.png)

En esta vista podemos observar como en el tercer anuncio, en la parte superior aparece un icono. Este icono indica que este anuncio puede ser editado y borrado por el usuario actualmente autenticado, ya que es el propietario de este anuncio.

Para añadir esta nueva característica, deberemos modificar el código de la vista Home e introducir las siguientes modificaciones en la parte que corresponda.

```html
 @foreach ($anuncios as $anuncio)
    <div class="card3 col-lg-4 mx-auto">
        <a href="/anuncios/{{ $anuncio->id }}">
            <div class="card-title m-1">
                <p class="resaltado">
                    <!-- Si el usuario esta autenticado -->
                    @auth
                        <!-- Si el propietario del anuncio coincide con
                            el usuario utenticado -->
                        @if (auth()->user()->id == $anuncio->user_id)
                            <i class="fas fa-edit mr-1"></i>
                        @endif
                    @endauth
                    {{ $anuncio->titulo }}</p>
            </div>
            <div class="card-body m-1">
                
                <img src="{{ $anuncio->imagen }}" class="d-block w-100 rounded" alt="{{ $anuncio->titulo }}">
                <p>{{ $anuncio->description }}</p>
                precio : <b>{{ $anuncio->precio ."€"}}</b>
            </div>
        </a>
    </div>
@endforeach
```
#### ¿Qué hace el código?

Aquí está una descripción simplificada de lo que hace:

- Para cada anuncio en la lista de anuncios:
  - Se muestra una tarjeta que contiene el título, la imagen, la descripción y el precio del anuncio.
  - Si el usuario está autenticado y es el propietario del anuncio, se muestra un icono de edición junto al título.
  - El título del anuncio es un enlace que lleva al usuario a la página del anuncio específico.
  - La imagen del anuncio se muestra con un borde redondeado y ocupa todo el ancho de la tarjeta.
  - La descripción y el precio del anuncio se muestran debajo de la imagen.

En resumen, el código genera una interfaz visualmente agradable para mostrar una lista de anuncios, con opciones de edición para los propietarios de los anuncios.

### Modificando la vista anuncios.show

 A esta vista le vamos a introducirle un par de modificaciones como se puede observar
 en la imagen:

![Anuncio.show](/img/anuncio_edit.png)

Notará que a parte de ampliar y formatear datos en la cabecera en la tarjeta del producto hemos introducido dos botones nuevo. Uno para editar y borrar. Estos botones solo se muestran
si el usuario esta autenticado y es propietario del anuncio. El código asociado a esta vista quedaría así.

```html title='anuncios.show'
@extends('layout.layout')

@section('title', 'Página de inicio')

@section('content')
    <section class="container mt-8 ">
        <div class="card col-lg-10 mx-auto">
            <!-- 
                Solo si el usuario esta autenticado -->
            @auth
                <!-- Si el usuario autenticado coincidde con
                    el propietario del anuncios -->
                @if (auth()->user()->id == $anuncio->user_id)
                    <div class="row m-2">
                        <div class="col-sm-2 mt-1">
                            <!-- Botón para editar el anuncio -->
                            <a href="{{ route('anuncios.edit', ['id' => $anuncio->id]) }}"
                                class="btn btn-danger col-sm-12">Editar</a>
                        </div>
                        <form action="{{ route('anuncios.delete', ['id' => $anuncio->id]) }}" method="POST" class="col-sm-2">
                            @csrf
                            @method('DELETE')
                            <!-- Botón para borrar el anuncio -->
                            <button type="submit" class="btn btn-danger col-sm-12 m-1">Borrar</button>
                        </form>

                    </div>
                @endif
            @endauth
            <div class="card-header m-1">
                <h4 class="resaltado text-center"><b>{{ $anuncio->titulo }}</b></h4>
                <h5>
                    <div class="row">
                        <div class="col-lg-6">
                            <p><b>Estado:</b> {{ $anuncio->estado->nombre }}</p>
                            <p>Categoría: <b>{{ $anuncio->subcategoria->categoria->nombre }}</b></p>
                            <p>SubCategoría: <b>{{ $anuncio->subcategoria->nombre }}</b></p>
                        </div>
                        <div class="col-lg-6">
                            <p>Precio: <b>{{ $anuncio->precio . '€' }}</b></p>
                            <p>Teléfono: <b>{{ $anuncio->telefono }}</b></p>
                            <p>Provincia: <b>{{ $provincia->nombre }}</b></p>
                            <p>Población: <b>{{ $poblacion->nombre }}</b></p>
                        </div>
                </h5>
            </div>
            <div class="card-body m-1">
                <div class="container mt-4">
                    <h5>{{ $anuncio->description }}</h5>
                </div>
                <!-- Imagen principal del anuncio -->
                <img src="{{ $anuncio->imagen }}" class="d-block w-100" alt="{{ $anuncio->titulo }}">
                <div class="card3 mx-auto mt-1">
                    <div class="row">
                        <!-- Bucle para mostrar las fotos adicionales del anuncio -->
                        @foreach ($anuncio->fotos as $foto)
                            <div class="card3 col-lg-3 mx-auto mt-3">
                                <img src="{{ $foto->path }}" alt="Foto del anuncio" width="180px" class="zoom">
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
```

Este código hace lo siguiente:


- Muestra los detalles del anuncio, incluyendo el título, estado, categoría, subcategoría, precio, teléfono, provincia y población.
- Muestra la descripción del anuncio.
- Muestra la imagen principal del anuncio.
- Muestra las fotos adicionales del anuncio en tarjetas individuales.
- Si el usuario autenticado es el propietario del anuncio, muestra los botones de "Editar" y "Borrar" para el anuncio.

## Editar anuncio

La vista de edición de anuncios nos permite editar todos los datos del anuncio, cambiar la imagen principal del anuncio, añadir y borrar imágenes al anuncio.

![Vista editar](/img/vista_editar.png)

A continuación muestro el código de esta vista, el cual iremos analizando a lo largo de esta sección.

```html title='anuncios.edit'

@extends('layout.layout')

@section('title', 'Editar aanuncio')

@section('content')

    <div class="card2 col-lg-10 mx-auto mt-8 p-4">
        <h4 class="text-center resaltado"><b>Editar anuncio<b></h4>
        @if ($errors->any())
            <!-- Muestra los errores de validación -->
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <!-- Formulario de edición de datos,
            rellena los controles cob los valores del anuncio,
            utiliza el método PUT para utilizar y el enctype`multipart/form-data'
            para poder subir imagenres -->
        {!! Form::open([
            'route' => ['anuncios.update', $anuncio->id],
            'method' => 'PUT',
            'enctype' => 'multipart/form-data',
        ]) !!}
        <!-- CRSF token -->
        {!! Form::token() !!}
        <div class="row">
            <div class="col-lg-6">
                <div class="form-group">
                    {!! Form::label('titulo', 'Título', ['class' => 'text-sm']) !!}
                    {!! Form::text('titulo', $anuncio->titulo, ['class' => 'form-control', 'required']) !!}
                    @error('titulo')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-group">
                    <img id="preview-image" src="{{ $anuncio->imagen }}" class="d-block col-lg-10"
                        alt="{{ $anuncio->titulo }}">
                    {!! Form::label('imagen', 'Imagen') !!}
                    {!! Form::file('imagen', [
                        'class' => 'form-control-file',
                        'accept' => 'image/*',
                        'max' => '2048',
                        'id' => 'image-input',
                    ]) !!}
                    <!-- Mostrar errores de validación -->
                    @error('imagen')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-group">
                    {!! Form::label('subcategoria_id', 'Categoría') !!}
                    {!! Form::select(
                        'subcategoria_id',
                        $categorias->flatMap(function ($categoria) {
                            return [$categoria->nombre => $categoria->subcategorias->pluck('nombre', 'id')];
                        }),
                        $anuncio->subcategoria_id,
                        ['class' => 'form-control'],
                    ) !!}
                     <!-- Mostrar errores de validación -->
                    @error('subcategoria_id')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-group">
                    {!! Form::label('estado_id', 'Estado') !!}
                    {!! Form::select('estado_id', $estados->pluck('nombre', 'id'), $anuncio->id, [
                        'class' => 'form-control',
                        'required',
                    ]) !!}
                    <!-- Mostrar errores de validación -->
                    @error('estado_id')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>
            </div>
            <div class="col-lg-6">
                <div class="form-group">
                    {!! Form::label('description', 'Descripción') !!}
                    {!! Form::textarea('description', $anuncio->description, ['class' => 'form-control', 'rows' => 5, 'required']) !!}
                    @error('description')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-group">
                    {!! Form::label('telefono', 'Teléfono') !!}
                    {!! Form::tel('telefono', $anuncio->telefono, ['class' => 'form-control', 'required']) !!}
                    @error('telefono')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    {!! Form::label('provincia', 'Provincia') !!}
                    {!! Form::select('provincia', $provincias->pluck('nombre', 'codigo'), $anuncio->provincia, [
                        'class' => 'form-control',
                        'required',
                    ]) !!}
                    @error('provincia')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    {!! Form::label('poblacion', 'Población') !!}
                    {!! Form::select('cod_postal', $poblaciones->pluck('nombre', 'codigo'), $anuncio->cod_postal, [
                        'class' => 'form-control',
                        'required',
                    ]) !!}
                    @error('cod_postal')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>

                <div class="form-group">
                    {!! Form::label('precio', 'Precio') !!}
                    {!! Form::number('precio', $anuncio->precio, ['class' => 'form-control', 'required']) !!}
                    @error('precio')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                </div>
                <div class="form-group">
                    {!! Form::submit('Actualizar', ['class' => 'btn btn-danger mx-auto']) !!}
                    {!! Form::close() !!}
                </div>

            </div>
            </div>
            <div class="card3 mx-auto mt-1">
                <div class="row">
                    <!-- Mostrar todas las imágnenes opcionales asociadas
                        al anuncio -->
                    @foreach ($anuncio->fotos as $foto)
                        <div class="card3 col-lg-3 mx-auto mt-3">
                            <img src="{{ $foto->path }}" alt="Foto del anuncio" width="180px" class="zoom mx-auto">
                            <!-- Anadir opcion de poder borrar la imagen -->
                            <div class="text-center">
                                <form action="{{ route('fotos.destroy', ['id' => $foto->id]) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger mt-2 ml-6 btn-block">Borrar</button>
                                </form>
                            </div>
                        </div>
                    @endforeach
                </div>
                <div class="form-group">
                    <h4 class="text-center resaltado mt-4">¿Desea incluir más imágenes?</h4>
                    <!-- DropZone -->
                    <!-- Permite anadir imagenes solo con arrastrar y soltar -->
                    <form action="{{ route('fotos.store') }}" method="POST" enctype="multipart/form-data" class="dropzone"
                        id="myDropzone">
                        @csrf
                        <input type="hidden" name="anuncio_id" value="{{ $anuncio->id }}">
                    </form>
                </div>

        </div>
    </div>
@endsection


@section('css')
    <!-- Estilos de DropZone-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.9.2/min/dropzone.min.css"
        crossorigin="anonymous" />
@endsection

@section('js')
    <script>ç
        // Permite cambiar la imagen principal del anuncio y
        //    hace un preview 
        document.getElementById('image-input').addEventListener('change', function(e) {
            var reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('preview-image').src = event.target.result;
            }
            reader.readAsDataURL(e.target.files[0]);
        });
    </script>
    <!-- opciones para Dropzzne -->
    <script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
      <script>
          Dropzone.options.myDropzone = {
              //Como se llamara al campo el resquest
              paramName: 'imagen',
              maxFilesize: 2, <!-- Tamaño máximo del archivo en megabytes -->
              acceptedFiles: '.jpg, .jpeg, .png', <!-- Tipos de archivo aceptados -->
              dictDefaultMessage: 'Arrastra los archivos aquí para subirlos',
              maxFiles: 6, <!-- Límite máximo de archivos -->
              init: function() {
                  this.on('error', function(file, errorMessage) {
                      // Manejar errores de carga de archivos aquí
                  });
              },
          };
      </script>
  
@endsection
```
#### Análisis del código

1. La directiva `@extends('layout.layout')` indica que la vista utiliza la plantilla de diseño `layout.layout`.

2. Las directivas `@section('title', 'Editar anuncio')` y `@section('content')` definen el título de la página y el contenido principal de la vista, respectivamente.

3. El bloque `@if ($errors->any())` verifica si hay errores de validación y, si es así, muestra una alerta de color rojo con los mensajes de error.

4. El formulario principal para editar los datos del anuncio está dentro del bloque `{!! Form::open(...) !!}` y se cierra con `{!! Form::close() !!}`. Este formulario utiliza el método PUT para enviar los datos y el atributo `enctype` establecido en `'multipart/form-data'` para permitir la carga de imágenes.

5. El campo de entrada de texto para el título del anuncio está controlado por el control `Form::text('titulo', ...)`. Si hay errores de validación para este campo, se muestra un mensaje de error.

6. La etiqueta `<img>` y el campo de carga de archivo `Form::file('imagen', ...)` están relacionados con la imagen del anuncio. La imagen se muestra en la etiqueta `<img>` y se puede cambiar seleccionando un archivo en el campo de carga de archivo. Si hay errores de validación para este campo, se muestra un mensaje de error.

7. El menú desplegable para seleccionar la categoría del anuncio está controlado por el control `Form::select('subcategoria_id', ...)`. Las opciones del menú se generan a partir de una colección de categorías y subcategorías. Si hay errores de validación para este campo, se muestra un mensaje de error.

8. El menú desplegable para seleccionar el estado del anuncio está controlado por el control `Form::select('estado_id', ...)`. Las opciones del menú se generan a partir de una colección de estados. Si hay errores de validación para este campo, se muestra un mensaje de error.

9. El campo de texto para la descripción del anuncio está controlado por el control `Form::textarea('description', ...)`. Si hay errores de validación para este campo, se muestra un mensaje de error.

10. El campo de entrada de teléfono está controlado por el control `Form::tel('telefono', ...)`. Si hay errores de validación para este campo, se muestra un mensaje de error.

11. Los menús desplegables para seleccionar la provincia y la población del anuncio están controlados por los controles `Form::select('provincia', ...)` y `Form::select('cod_postal', ...)`, respectivamente. Las opciones de los menús se generan a partir de colecciones de provincias y poblaciones. Si hay errores de validación para estos campos, se muestran mensajes de error.

12. El campo de entrada numérico para el precio del anuncio está controlado por el control `Form::number('precio', ...)`. Si hay errores de validación para este campo, se muestra un mensaje de error.

13. El botón "Actualizar" para enviar los datos del formulario está controlado por el control `Form::submit('Actualizar', ...)`.

14. La sección que muestra las imágenes asociadas al anuncio se encuentra en un bucle `@foreach ($anuncio->fotos as $foto)`. Cada imagen

 se muestra en una tarjeta individual junto con un botón "Borrar". El formulario para eliminar la imagen está controlado por el control `Form::submit('Borrar', ...)`.

15. La sección adicional que permite cargar más imágenes utiliza la biblioteca Dropzone y se encuentra dentro del bloque `<div id="dropzone">`.

### scripts js

```js
 <script>
    // Permite cambiar la imagen principal del anuncio y
    //    hace un preview 
    document.getElementById('image-input').addEventListener('change', function(e) {
        var reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('preview-image').src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    });
</script>
```
Este código JavaScript se encarga de proporcionar una funcionalidad de vista previa de imagen. Cuando seleccionas una imagen en el campo de carga (identificado como 'image-input'), se dispara el evento 'change'. Dentro de la función manejadora de eventos, se crea un objeto FileReader que permite leer el contenido del archivo seleccionado. Luego, se establece una función de devolución de llamada (onload) para ejecutar cuando la lectura del archivo se complete. Dentro de esta función, se obtiene la URL de datos de la imagen cargada (event.target.result) y se asigna como origen (src) de la imagen de vista previa (identificada como 'preview-image'). En resumen, este código permite mostrar una vista previa de la imagen seleccionada antes de que se cargue.

```js
<script src="https://unpkg.com/dropzone@5/dist/min/dropzone.min.js"></script>
      <script>
          Dropzone.options.myDropzone = {
              //Como se llamara al campo el resquest
              paramName: 'imagen',
              maxFilesize: 2, <!-- Tamaño máximo del archivo en megabytes -->
              acceptedFiles: '.jpg, .jpeg, .png', <!-- Tipos de archivo aceptados -->
              dictDefaultMessage: 'Arrastra los archivos aquí para subirlos',
              maxFiles: 6, <!-- Límite máximo de archivos -->
              init: function() {
                  this.on('error', function(file, errorMessage) {
                      // Manejar errores de carga de archivos aquí
                  });
              },
          };
      </script>
```

Este código incluye la biblioteca Dropzone, que proporciona una funcionalidad de carga de archivos con una interfaz de arrastrar y soltar. La primera línea importa el archivo JavaScript de la biblioteca desde el enlace proporcionado. Luego, dentro de la etiqueta `<script>`, se configura la opción de Dropzone para personalizar su comportamiento.

En este caso, se utiliza `Dropzone.options.myDropzone` para definir las opciones de configuración para el elemento con el ID "myDropzone" (debe haber un elemento HTML con ese ID en tu página). Las opciones configuradas son las siguientes:

- `paramName`: Especifica el nombre del campo utilizado en la solicitud para enviar los archivos al servidor. En este caso, se establece como "imagen".
- `maxFilesize`: Define el tamaño máximo permitido para cada archivo en megabytes. Aquí se establece en 2 MB.
- `acceptedFiles`: Define los tipos de archivo aceptados para la carga. En este caso, se especifican los archivos con extensiones ".jpg", ".jpeg" y ".png".
- `dictDefaultMessage`: Establece el mensaje predeterminado que se muestra en el área de Dropzone para indicar al usuario que arrastre los archivos allí.
- `maxFiles`: Define el número máximo de archivos permitidos para la carga. Aquí se establece en 6 archivos.
- `init`: Define una función de inicialización que se ejecuta cuando Dropzone se inicializa. Dentro de esta función, se puede configurar el manejo de eventos y otras personalizaciones. En este caso, se define una función de manejo de errores que se ejecuta cuando ocurre un error durante la carga de archivos.

En definitiva, este código configura las opciones de Dropzone para permitir la carga de archivos con determinadas restricciones y proporciona la funcionalidad de manejar errores durante la carga de archivos.

### Controladores

```php title='Método edit del controlador AnuncioController'
public function edit($id)
    {
        $subcategorias = Subcategoria::all();
        $categorias = Categoria::all();
        $estados = Estado::all();
        $provincias = Provincia::all();
        $poblaciones = Poblacion::orderBy('nombre')->get();
        $anuncio = Anuncio::findOrFail($id);
        
        //Llamada al formulario de Edición de anuncios
        return view('anuncios.edit', compact('anuncio',
            'categorias','estados','provincias','poblaciones'));
    }
```

El método `edit($id)` es una función dentro del controlador. Este método se utiliza para cargar los datos necesarios y mostrar el formulario de edición de un anuncio específico.

Aquí está la explicación paso a paso del método:

1. Recibe el parámetro `$id`, que representa el identificador único del anuncio que se desea editar.

2. Realiza consultas a la base de datos para obtener los datos necesarios para el formulario de edición. Estas consultas incluyen:
   - `$subcategorias = Subcategoria::all();`: Obtiene todas las subcategorías existentes en la base de datos.
   - `$categorias = Categoria::all();`: Obtiene todas las categorías existentes en la base de datos.
   - `$estados = Estado::all();`: Obtiene todos los estados existentes en la base de datos.
   - `$provincias = Provincia::all();`: Obtiene todas las provincias existentes en la base de datos.
   - `$poblaciones = Poblacion::orderBy('nombre')->get();`: Obtiene todas las poblaciones existentes en la base de datos, ordenadas alfabéticamente por nombre.

3. Utiliza el modelo `Anuncio` para encontrar el anuncio específico que se desea editar. Se utiliza el método `findOrFail($id)` para buscar el anuncio por su identificador único. Si el anuncio no se encuentra, se lanzará una excepción.

4. Llama a la vista `anuncios.edit` y pasa las variables necesarias para el formulario de edición mediante el método `compact`. Las variables que se pasan son:
   - `'anuncio'`: El anuncio específico que se desea editar.
   - `'categorias'`: Todas las categorías existentes.
   - `'estados'`: Todos los estados existentes.
   - `'provincias'`: Todas las provincias existentes.
   - `'poblaciones'`: Todas las poblaciones existentes.

5. Finalmente, retorna la vista con los datos necesarios para mostrar el formulario de edición del anuncio.

Conclusión, este método se encarga de cargar los datos necesarios y mostrar el formulario de edición de un anuncio específico, utilizando los modelos y las consultas a la base de datos correspondientes.

### Método para cargar images en el servidor 

Las imágenes insertadas en el control **DropZone** utilizan el siguiente método del controlador FotoController para subir las imágenes al servidor.

```php title='Método store del controlador FotoController'
public function store(Request $request)
    {
        // Validar la solicitud
       $request->validate([
            'imagen' => 'required|image|max:2048',// Reemplaza las reglas de validación según tus necesidades
            'anuncio_id'=>'required'
        ]);

        // Obtener el archivo de imagen
        $imagen = $request->file('imagen');

        // Procesar y guardar la imagen
        $ruta = $imagen->store('public/images'); // Guarda la imagen en una carpeta específica, ajusta la ruta según tus necesidades
        $url = '/storage/images/' . basename($ruta);
        // Crear una nueva instancia de Foto y guardarla en la base de datos
        $foto = Foto::create([
            'path' => $url,
            'anuncio_id' => $request->anuncio_id,
        ]);
    }
```

El método `store(Request $request)` es una función dentro del controlador. Este método se utiliza para procesar y guardar una imagen enviada a través de una solicitud de DropZone y luego crear una nueva instancia de `Foto` en la base de datos.

Aquí está la explicación paso a paso del método:

1. Recibe el parámetro `$request`, que es una instancia de la clase `Request` en Laravel. Esta clase contiene la información de la solicitud HTTP realizada.

2. Valida la solicitud utilizando el método `validate()` del objeto `$request`. En este caso, se están aplicando dos reglas de validación:
   - `'imagen' => 'required|image|max:2048'`: La imagen es requerida, debe ser un archivo de imagen y su tamaño máximo es de 2048 kilobytes. Puedes ajustar las reglas de validación según tus necesidades.

3. Obtén el archivo de imagen de la solicitud utilizando el método `$request->file('imagen')`. Esto obtiene el archivo cargado en el campo de formulario llamado 'imagen'.

4. Procesa y guarda la imagen en una ubicación específica en el servidor. En este caso, se utiliza el método `store()` del objeto `$imagen` para guardar la imagen en la carpeta 'public/images'. Puedes ajustar la ruta según tus necesidades.

5. Crea la URL de la imagen utilizando la ruta donde se guardó la imagen. Se concatena '/storage/images/' con el nombre del archivo de imagen obtenido de la ruta.

6. Crea una nueva instancia del modelo `Foto` utilizando el método `create()`. Se pasan los datos necesarios para crear la instancia, que son:
   - `'path' => $url`: La URL de la imagen que se guardó.
   - `'anuncio_id' => $request->anuncio_id`: El identificador del anuncio asociado a la foto, obtenido de la solicitud.

7. La instancia de `Foto` se guarda en la base de datos.

Conclusión, este método se encarga de procesar y guardar una imagen enviada a través de una solicitud, creando una nueva instancia de `Foto` en la base de datos con la URL de la imagen y el identificador del anuncio asociado. También realiza la validación de la solicitud para asegurarse de que se cumplan ciertas reglas antes de guardar la imagen. Las fotos están relacionadas con el anuncio a través del campo `anucnio_id`.

### Método para borrar imágenes

```php title='Método destroy de FotoController'
    public function destroy($id)
    {
        $foto = Foto::find($id); // Obtener el objeto Foto por su ID

        if ($foto) {
            //Eliminar foto dinamicamente
            unlink(public_path($foto->path));
            $foto->delete(); // Eliminar la foto de la base de datos        
            // Realizar otras acciones o redirigir según tus necesidades
            return redirect()->back();
        }
    }
```
El método `destroy` tiene la finalidad de eliminar una foto específica de la base de datos y del sistema de archivos. A continuación se explica su funcionamiento:

1. Se recibe el parámetro `$id`, que corresponde al identificador único de la foto que se desea eliminar.

2. Se busca la foto en la base de datos utilizando el modelo `Foto` y el método `find($id)`. Si se encuentra la foto, se procede a eliminarla.

3. En primer lugar, se utiliza la función `unlink()` para eliminar físicamente el archivo de imagen asociado a la foto. Se utiliza `public_path($foto->path)` para obtener la ruta completa del archivo en el sistema de archivos.

4. Luego, se llama al método `delete()` en el objeto `$foto` para eliminar la entrada de la foto de la base de datos.

5. Después de eliminar la foto, se pueden realizar otras acciones o redirigir a una página específica según las necesidades del sistema. En este caso, se utiliza `redirect()->back()` para redirigir al usuario a la página anterior.

El texto que has proporcionado contiene algunos errores y mejoras en la redacción. Aquí está el texto corregido y mejorado:

## Borrar anuncio

Esta es la operación más sencilla, ya que no requiere ningún formulario de entrada de datos. Como se puede observar en secciones anteriores, hemos añadido un botón de borrado a nuestra vista **anuncios.show**. El código asociado a este botón es el siguiente:

```html
<form action="{{ route('anuncios.delete', ['id' => $anuncio->id]) }}" method="POST" class="col-sm-2">
    @csrf
    @method('DELETE')
    <!-- Botón para borrar el anuncio con confirmación -->
    <button type="submit" onclick="return confirm('¿Estás seguro de que quieres borrar este anuncio?')" class="btn btn-danger col-sm-12 m-1">Borrar</button>
</form>
```

Este código simplemente llama a la ruta especificada, la cual se encargará de llamar al controlador **AnuncioController** y su método **destroy**. A continuación, vamos a observar el código del controlador.

```php
public function destroy($id){
    try {
        // Comienza la transacción
        DB::transaction(function () use ($id) {
            $anuncio = Anuncio::findOrFail($id);
            
            // Iterar sobre todas las fotos opcionales
            foreach ($anuncio->fotos as $foto) {
                // Borrar la foto físicamente
                unlink(public_path($foto->path));
                $foto->delete();
            }
            
            // Borrar la imagen principal
            unlink(public_path($anuncio->imagen));
            
            $anuncio->delete();
        });
        
        // Si la transacción se completa sin errores, redirecciona a la ruta deseada
        return redirect()->route('home');
    } catch (\Throwable $e) {
        // Manejo de errores en caso de fallo en la transacción
        return back()->withErrors(['error' => 'Se produjo un error al borrar el anuncio.']);
    }
}
```

### ¿Qué hace el código?

Este código utiliza el método `destroy` del controlador. Aquí está su explicación:

1. El método `destroy` recibe el parámetro `$id`, que representa el ID del anuncio que se va a eliminar.

2. Se inicia una transacción utilizando el método `DB::transaction()`. Esto asegura que todas las operaciones realizadas dentro de la transacción se completen correctamente o se reviertan si ocurre algún error.

3. Dentro de la transacción, se busca el anuncio correspondiente al ID proporcionado utilizando `Anuncio::findOrFail($id)`. Si el anuncio no se encuentra, se lanzará una excepción.

4. A continuación, se itera sobre todas las fotos opcionales asociadas al anuncio utilizando `$anuncio->fotos`. Para cada foto, se borra físicamente el archivo utilizando `unlink(public_path($foto->path))` y luego se elimina la entrada de la foto de la base de datos mediante `$foto->delete()`.

5. Después de eliminar las fotos opcionales, se borra el archivo de imagen principal del anuncio utilizando `unlink(public_path($anuncio->imagen))`.

6. Finalmente, se elimina el anuncio llamando a `$anuncio->delete()`.

7. Si todas las operaciones dentro de la transacción se completan correctamente, se redirecciona al usuario a la ruta especificada, en este caso

, `home`.

8. Si ocurre algún error durante la transacción, se captura la excepción utilizando un bloque `catch (\Throwable $e)`. En caso de error, se redirecciona al usuario de vuelta a la página anterior (utilizando `back()`) y se muestra un mensaje de error utilizando `withErrors(['error' => 'Se produjo un error al borrar el anuncio.'])`.

En conclusión, este código elimina un anuncio y todas sus fotos asociadas de la base de datos y del sistema de archivos. Utiliza una transacción para garantizar la integridad de los datos y maneja posibles errores mostrando un mensaje de error en caso de que algo salga mal durante la eliminación.

En este proyecto, es la primera vez que se utilizan transacciones. Si no estás familiarizado con este concepto, te remito al capítulo correspondiente **Eloquent y SQL**.