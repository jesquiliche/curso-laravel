---
sidebar_position: 3
---

# Directivas Blade


En capítulos anteriores hemos hecho uso de las directivas Blade, en esta capítulo entraremos con más detalle para ver su funcionamiento y sintaxis dada su gran importancia en el motor de plantillas.

Las directivas Blade son una característica fundamental del motor de plantillas de Laravel. Son una forma conveniente y expresiva de trabajar con código PHP en las vistas de Laravel. Las directivas Blade proporcionan una sintaxis sencilla y legible para generar contenido dinámico y controlar el flujo de la lógica en las vistas.

El propósito principal de las directivas Blade es separar la lógica de presentación del código PHP en las vistas. Esto permite mantener un código más limpio, legible y mantenible. Las directivas Blade facilitan la creación de vistas elegantes y poderosas al proporcionar una serie de construcciones especializadas que simplifican tareas comunes, como iterar sobre datos, condicionar la visualización de elementos, incluir fragmentos de código y definir estructuras de plantillas reutilizables.

Con las directivas Blade, puedes realizar tareas como:

1. Controlar el flujo de ejecución: Puedes usar directivas como `@if`, `@else`, `@elseif`, `@unless`, `@switch`, `@for`, `@foreach` y `@while` para tomar decisiones y repetir acciones en función de condiciones y datos específicos.

2. Incluir fragmentos de código: La directiva `@include` te permite reutilizar fragmentos de código en múltiples vistas. Puedes dividir tu código en componentes más pequeños y mantener la legibilidad y la modularidad en tus vistas.

3. Heredar y extender plantillas: Con la directiva `@extends`, puedes heredar una plantilla base y reemplazar o agregar secciones específicas en las vistas hijas utilizando `@section` y `@yield` o `@section`.

4. Trabajar con variables y datos: Blade te permite mostrar el contenido de variables usando `{{ $variable }}` y realizar operaciones y filtros en las expresiones Blade. También puedes utilizar directivas condicionales como `@isset`, `@empty` y `@unless` para mostrar u ocultar contenido según las condiciones de las variables.

5. Crear directivas personalizadas: Puedes crear tus propias directivas Blade personalizadas utilizando la función `Blade::directive`. Esto te permite extender la funcionalidad de Blade y crear construcciones específicas para tu aplicación.

Las directivas Blade en Laravel proporcionan una forma poderosa y elegante de trabajar con la lógica de presentación en las vistas. Su propósito principal es mejorar la legibilidad, modularidad y reutilización del código al separar la lógica de presentación del código PHP en las vistas. Con las directivas Blade, puedes crear vistas dinámicas y flexibles de manera eficiente y mantener un código limpio y estructurado en tu aplicación Laravel.

## Ventajas de usar directivas en lugar de código PHP

El uso de directivas Blade en lugar de código PHP puro en Laravel ofrece varias ventajas:

:::info Ventajas
1. Sintaxis más legible: Blade utiliza una sintaxis más simple y legible en comparación con el código PHP tradicional. Las directivas Blade utilizan símbolos especiales, como `@if`, `@foreach`, `@section`, que facilitan la comprensión del código y su estructura.

2. Separación clara de la lógica de presentación: Blade promueve una separación clara entre la lógica de presentación y la lógica de negocio. Permite que los desarrolladores se centren en escribir código HTML y CSS limpio, sin tener que mezclarlo con lógica de programación compleja.

3. Reutilización de código: Blade facilita la reutilización de código a través de la utilización de plantillas y componentes. Puedes definir secciones reemplazables en una plantilla base y extenderla en vistas hijas, lo que te permite crear un diseño coherente y evitar la duplicación de código.

4. Mayor productividad: Las directivas Blade simplifican tareas comunes en el desarrollo web, como iterar sobre datos, mostrar condicionalmente elementos y trabajar con formularios. Esto permite a los desarrolladores ser más productivos y escribir código de forma más rápida y eficiente.

5. Integración con Laravel: Blade está diseñado específicamente para trabajar con Laravel, lo que significa que aprovecha al máximo las características del framework. Puedes utilizar directamente las funciones y métodos de Laravel en tus vistas Blade, lo que facilita el acceso a la base de datos, a la autenticación, a las rutas y a otros componentes del framework.
:::

## ¿Cómo se procesan?

Las directivas Blade se procesan en dos fases durante la ejecución de una aplicación Laravel.

En la primera fase, el compilador de Blade toma el archivo de plantilla con las directivas y las convierte en código PHP. Esta fase se realiza en tiempo de desarrollo y se ejecuta solo una vez para cada archivo de plantilla. El compilador Blade genera un archivo PHP que contiene el código equivalente a las directivas Blade del archivo de plantilla original.

En la segunda fase, durante la ejecución de la aplicación Laravel, se ejecuta el código PHP generado en la fase de compilación. Este proceso es rápido y eficiente, ya que el código PHP ya está optimizado y listo para ser ejecutado. La salida del código PHP se envía al navegador del usuario como HTML.

En definitiva, el uso de directivas Blade en lugar de código PHP puro en Laravel ofrece una sintaxis más legible, una separación clara de la lógica de presentación, la reutilización de código, mayor productividad y una mejor integración con el framework. Estas ventajas contribuyen a un desarrollo más eficiente y mantenible de aplicaciones web en Laravel.

## Sintaxis básica de las directivas Blade

Las directivas Blade en Laravel utilizan una sintaxis sencilla y expresiva. A continuación se muestra la sintaxis básica de algunas de las directivas más comunes:

1. Comentarios:
   ```blade
   {{-- Esto es un comentario en Blade --}}
   ```

2. Estructuras de control (if, else, elseif):
   ```blade
   @if($condicion)
       {{-- Código si se cumple la condición --}}
   @elseif($otraCondicion)
       {{-- Código si se cumple la otra condición --}}
   @else
       {{-- Código si no se cumple ninguna condición --}}
   @endif
   ```

3. Bucles (foreach):
   ```blade
   @foreach($array as $elemento)
       {{-- Código para cada elemento --}}
   @endforeach
   ```

4. Incluir otros archivos de plantilla:
   ```blade
   @include('nombre_archivo')
   ```

5. Asignación de valores a variables:
   ```blade
   @php
       $variable = valor;
   @endphp
   ```

6. Impresión de variables:
   ```blade
   {{ $variable }}
   ```

7. Instrucciones de apertura y cierre:
   ```blade
   @section('nombre_seccion')
       {{-- Contenido de la sección --}}
   @endsection
   ```

Estos son solo algunos ejemplos básicos de la sintaxis de las directivas Blade. Laravel proporciona muchas más directivas que permiten una mayor flexibilidad y control en la construcción de plantillas HTML dinámicas.

## Ejemplos de las directivas Blade más comunes

Aquí tienes algunos ejemplos de directivas Blade comunes:

1. Directiva `@if`:
```blade
@if($condicion)
    {{-- Código si se cumple la condición --}}
@else
    {{-- Código si no se cumple la condición --}}
@endif
```

2. Directiva `@foreach`:
```blade
@foreach($array as $elemento)
    {{-- Código para cada elemento --}}
@endforeach
```

3. Directiva `@while`:
```blade
@while($condicion)
    {{-- Código mientras se cumple la condición --}}
@endwhile
```

4. Directiva `@for`:
```blade
@for($i = 0; $i < 5; $i++)
    {{-- Código ejecutado en cada iteración --}}
@endfor
```

5. Directiva `@switch` y `@case`:
```blade
@switch($valor)
    @case('opcion1')
        {{-- Código si $valor es igual a 'opcion1' --}}
        @break

    @case('opcion2')
        {{-- Código si $valor es igual a 'opcion2' --}}
        @break

    @default
        {{-- Código por defecto si no se cumple ninguna condición --}}
@endswitch
```

Estos son solo algunos ejemplos de directivas Blade comunes. Recuerda que puedes combinar estas directivas con HTML y código PHP para construir plantillas dinámicas y expresivas en Laravel.

## Estructuras de control y condicionales

En Blade, las estructuras de control y las expresiones condicionales se utilizan para controlar el flujo del código y tomar decisiones basadas en condiciones. Aquí tienes una explicación de las principales estructuras de control y expresiones condicionales en Blade:

1. Estructura `@if`
La estructura `@if` permite ejecutar un bloque de código si se cumple una condición. Puede ir acompañada de las directivas `@elseif` y `@else` para especificar condiciones adicionales y un bloque de código alternativo si ninguna de las condiciones anteriores se cumple.

Ejemplo:
```blade
@if($condicion)
    // Código si la condición es verdadera
@elseif($otraCondicion)
    // Código si la otra condición es verdadera
@else
    // Código si ninguna condición se cumple
@endif
```

2. Estructura `@switch` y `@case`
La estructura `@switch` se utiliza para evaluar una expresión y ejecutar diferentes bloques de código según el valor de esa expresión. Dentro de `@switch`, se utilizan las directivas `@case` para definir los diferentes casos y su código asociado. También se puede utilizar la directiva `@default` para definir un caso por defecto si ninguno de los casos anteriores coincide.

Ejemplo:
```blade
@switch($valor)
    @case('opcion1')
        // Código si $valor es igual a 'opcion1'
        @break

    @case('opcion2')
        // Código si $valor es igual a 'opcion2'
        @break

    @default
        // Código por defecto si ninguna condición se cumple
@endswitch
```

3. Expresiones condicionales en atributos
Blade también permite utilizar expresiones condicionales en los atributos de HTML. Esto es útil cuando deseas mostrar u ocultar elementos HTML basados en ciertas condiciones.

Ejemplo:
```blade
<div class="mi-clase {{ $condicion ? 'visible' : 'oculto' }}">
    <!-- Contenido del div -->
</div>
```

En este ejemplo, la clase `mi-clase` se asignará al div, y dependiendo de la condición, se añadirá la clase `visible` si la condición es verdadera, o la clase `oculto` si la condición es falsa.

Estas son algunas de las estructuras de control y expresiones condicionales más utilizadas en Blade. Proporcionan flexibilidad y capacidad de toma de decisiones en la construcción de tus plantillas Blade en Laravel.

## Inclusión de archivos parciales

En Blade, puedes incluir archivos parciales dentro de tus plantillas utilizando la directiva `@include`. Esto te permite reutilizar bloques de código en múltiples vistas y mantener un código más organizado. Aquí tienes una explicación de cómo funciona la inclusión de archivos parciales en Blade:

1. Creación del archivo parcial
Comienza creando un archivo parcial en el cual deseas encapsular cierto bloque de código. Por ejemplo, podrías tener un archivo llamado `_menu.blade.php` que contiene el código HTML de un menú de navegación.

Ejemplo del archivo `_menu.blade.php`:
```blade
<nav>
    <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/servicios">Servicios</a></li>
    </ul>
</nav>
```

2. Inclusión del archivo parcial
En la vista principal donde deseas incluir el archivo parcial, utiliza la directiva `@include` seguida del nombre del archivo parcial que deseas incluir. Puedes especificar la ruta completa del archivo o simplemente el nombre si se encuentra en el mismo directorio o en un directorio de vistas común.

Ejemplo de inclusión del archivo parcial en `mi_vista.blade.php`:
```blade
<html>
<head>
    <!-- Código del encabezado -->
</head>
<body>
    @include('_menu')
    
    <div class="contenido">
        <!-- Contenido de la vista -->
    </div>
    
    <!-- Código del pie de página -->
</body>
</html>
```

En este ejemplo, el archivo parcial `_menu.blade.php` se incluye en la vista `mi_vista.blade.php` utilizando la directiva `@include('_menu')`. El contenido del archivo parcial se insertará en ese lugar de la vista.

Al incluir archivos parciales, puedes reutilizar bloques de código en múltiples vistas y mantener una estructura modular en tu aplicación. Esto facilita la actualización y el mantenimiento del código, ya que solo necesitas realizar cambios en un solo lugar (el archivo parcial) en lugar de modificar cada vista individualmente.

## Herencia de plantillas

La herencia de plantillas es una característica poderosa de Blade que te permite definir una plantilla base y extenderla en múltiples vistas. Esto te permite crear una estructura común para tus vistas y reutilizar código de manera eficiente. Aquí tienes una explicación básica de cómo funciona la herencia de plantillas en Blade:

1. Creación de la plantilla base
Comienza creando una plantilla base que servirá como el diseño común para tus vistas. Puedes crear un archivo llamado `layout.blade.php` y definir en él la estructura HTML básica de tu aplicación.

Ejemplo del archivo `layout.blade.php`:
```blade
<html>
<head>
    <title>@yield('title')</title>
    <!-- Otros elementos del encabezado -->
</head>
<body>
    <header>
        <!-- Contenido del encabezado -->
    </header>
    
    <div class="contenido">
        @yield('content')
    </div>
    
    <footer>
        <!-- Contenido del pie de página -->
    </footer>
</body>
</html>
```

En esta plantilla base, hemos utilizado `@yield` para definir secciones que serán reemplazadas en las vistas que extienden esta plantilla.

2. Extensión de la plantilla base en una vista
En tus vistas individuales, puedes extender la plantilla base utilizando la directiva `@extends` y especificando el nombre del archivo de la plantilla base que deseas extender. Luego, puedes definir el contenido específico de esa vista utilizando `@section`.

Ejemplo de una vista que extiende la plantilla base en `mi_vista.blade.php`:
```blade
@extends('layout')

@section('title', 'Mi Vista')

@section('content')
    <h1>Bienvenido a mi vista</h1>
    <p>Este es el contenido específico de la vista.</p>
@endsection
```

En este ejemplo, la vista `mi_vista.blade.php` extiende la plantilla base `layout.blade.php` utilizando `@extends('layout')`. Luego, se define el contenido específico de esa vista dentro de `@section('content')`.

3. Renderización de la vista completa
Cuando renderizas la vista `mi_vista.blade.php`, Blade combinará el contenido específico de la vista con la plantilla base, reemplazando las secciones definidas con `@yield` con el contenido correspondiente de la vista.

El resultado final será un archivo HTML completo que incluye tanto la estructura común de la plantilla base como el contenido específico de la vista.

La herencia de plantillas en Blade te permite crear un diseño coherente para tus vistas y reutilizar código de manera eficiente. Además, puedes utilizar las secciones para definir áreas flexibles en tus vistas, permitiéndote personalizar el contenido según tus necesidades específicas en cada vista individual.

## Uso de variables y datos en Blade

En Blade, puedes utilizar variables y datos de manera sencilla para mostrar información dinámica en tus vistas. Aquí tienes una explicación básica de cómo puedes usar variables y datos en Blade:

1. Asignación de variables
Puedes asignar valores a variables en tus controladores de Laravel y luego acceder a esas variables en tus vistas de Blade. Por ejemplo, supongamos que tienes una variable `$nombre` con el valor "Juan" en tu controlador:

```php
$nombre = 'Juan';
return view('mi_vista', compact('nombre'));
```

En tu vista, puedes acceder a la variable utilizando la sintaxis de doble llave `{{ }}`:

```blade
<h1>Hola, {{ $nombre }}</h1>
```

Esto mostrará "Hola, Juan" en tu vista.

2. Uso de expresiones y funciones
Además de las variables, también puedes utilizar expresiones y funciones en tus vistas de Blade. Por ejemplo, supongamos que tienes una variable `$precio` con el valor 1000 en tu controlador. Puedes realizar cálculos y manipulaciones con esa variable en tu vista:

```blade
<p>El precio con impuestos es: {{ $precio * 1.10 }}</p>
```

Esto mostrará "El precio con impuestos es: 1100" en tu vista.

También puedes utilizar funciones incorporadas de PHP o funciones personalizadas en tus vistas. Por ejemplo, supongamos que tienes una función personalizada `obtenerDescuento()` que devuelve el descuento actual. Puedes llamar a esa función en tu vista:

```blade
<p>Tu descuento actual es: {{ obtenerDescuento() }}</p>
```

3. Iteración sobre datos
En Blade, puedes utilizar la directiva `@foreach` para iterar sobre una colección de datos, como un arreglo o una colección de Eloquent. Por ejemplo, supongamos que tienes un arreglo `$usuarios` con nombres de usuarios en tu controlador:

```php
$usuarios = ['Juan', 'María', 'Carlos'];
return view('mi_vista', compact('usuarios'));
```

En tu vista, puedes utilizar `@foreach` para recorrer el arreglo y mostrar cada nombre de usuario:

```blade
<ul>
    @foreach ($usuarios as $usuario)
        <li>{{ $usuario }}</li>
    @endforeach
</ul>
```

Esto mostrará una lista con los nombres de usuario en tu vista.

En resumen, en Blade puedes utilizar variables, expresiones y funciones para mostrar información dinámica en tus vistas. También puedes iterar sobre datos utilizando `@foreach`. Esto te permite crear vistas dinámicas y flexibles en tu aplicación Laravel.

## Directivas de control de flujo avanzadas

Además de las directivas de control de flujo básicas como `@if` y `@foreach`, Blade también ofrece directivas avanzadas para controlar el flujo de tu código en las vistas. Aquí tienes algunas de las directivas de control de flujo avanzadas en Blade:

1. @forelse
La directiva `@forelse` se utiliza para iterar sobre una colección de datos, al igual que `@foreach`. Sin embargo, también te permite especificar un bloque de código que se ejecutará si la colección está vacía. Aquí tienes un ejemplo:

```blade
@forelse ($usuarios as $usuario)
    <li>{{ $usuario }}</li>
@empty
    <li>No hay usuarios</li>
@endforelse
```

En este ejemplo, si la colección `$usuarios` está vacía, se mostrará "No hay usuarios". De lo contrario, se mostrará cada usuario en elementos de lista.

2. @while
La directiva `@while` se utiliza para crear bucles while en tus vistas. Puedes especificar una condición y el bloque de código se ejecutará mientras se cumpla esa condición. Aquí tienes un ejemplo:

```blade
@php
    $contador = 0;
@endphp

@while ($contador < 5)
    <p>{{ $contador }}</p>
    @php
        $contador++;
    @endphp
@endwhile
```

En este ejemplo, se mostrarán los números del 0 al 4 en párrafos.

3. @switch y @case
Las directivas `@switch` y `@case` se utilizan para crear estructuras de selección switch en tus vistas. Puedes comparar una variable con diferentes casos y ejecutar el código correspondiente al caso que coincida. Aquí tienes un ejemplo:

```blade
@switch($tipo)
    @case('rojo')
        <p>El tipo es rojo</p>
        @break

    @case('azul')
        <p>El tipo es azul</p>
        @break

    @default
        <p>Tipo desconocido</p>
@endswitch
```

En este ejemplo, el texto se mostrará dependiendo del valor de la variable `$tipo`.

Estas son solo algunas de las directivas de control de flujo avanzadas que ofrece Blade. Puedes utilizar estas directivas para crear lógica condicional y bucles más complejos en tus vistas de Laravel.

## Personalización de las directivas Blade

Además de las directivas de control de flujo básicas como `@if` y `@foreach`, Blade también ofrece directivas avanzadas para controlar el flujo de tu código en las vistas. Aquí tienes algunas de las directivas de control de flujo avanzadas en Blade:

1. @forelse
La directiva `@forelse` se utiliza para iterar sobre una colección de datos, al igual que `@foreach`. Sin embargo, también te permite especificar un bloque de código que se ejecutará si la colección está vacía. Aquí tienes un ejemplo:

```blade
@forelse ($usuarios as $usuario)
    <li>{{ $usuario }}</li>
@empty
    <li>No hay usuarios</li>
@endforelse
```

En este ejemplo, si la colección `$usuarios` está vacía, se mostrará "No hay usuarios". De lo contrario, se mostrará cada usuario en elementos de lista.

2. @while
La directiva `@while` se utiliza para crear bucles while en tus vistas. Puedes especificar una condición y el bloque de código se ejecutará mientras se cumpla esa condición. Aquí tienes un ejemplo:

```blade
@php
    $contador = 0;
@endphp

@while ($contador < 5)
    <p>{{ $contador }}</p>
    @php
        $contador++;
    @endphp
@endwhile
```

En este ejemplo, se mostrarán los números del 0 al 4 en párrafos.

3. @switch y @case
Las directivas `@switch` y `@case` se utilizan para crear estructuras de selección switch en tus vistas. Puedes comparar una variable con diferentes casos y ejecutar el código correspondiente al caso que coincida. Aquí tienes un ejemplo:

```blade
@switch($tipo)
    @case('rojo')
        <p>El tipo es rojo</p>
        @break

    @case('azul')
        <p>El tipo es azul</p>
        @break

    @default
        <p>Tipo desconocido</p>
@endswitch
```

En este ejemplo, el texto se mostrará dependiendo del valor de la variable `$tipo`.

Estas son solo algunas de las directivas de control de flujo avanzadas que ofrece Blade. Puedes utilizar estas directivas para crear lógica condicional y bucles más complejos en tus vistas de Laravel.

## Conclusiones

En conclusión, Blade es el motor de plantillas incorporado en el framework Laravel que proporciona una sintaxis sencilla y expresiva para trabajar con vistas en PHP. Al utilizar Blade, puedes mejorar la legibilidad y la eficiencia de tus archivos de vista.

Las directivas Blade te permiten controlar el flujo de tu código de forma clara y concisa. Puedes utilizar directivas como `@if`, `@foreach`, `@while` y muchas más para realizar acciones condicionales y bucles en tus vistas.

Además, Blade ofrece características avanzadas como la inclusión de archivos parciales, la herencia de plantillas y la manipulación de variables y datos. Estas características te permiten reutilizar y organizar tu código de manera eficiente, lo que facilita el mantenimiento y la creación de vistas dinámicas y flexibles.

Otra ventaja de Blade es su rendimiento. Blade compila tus vistas en código PHP puro antes de ser ejecutadas, lo que resulta en una ejecución más rápida en comparación con la ejecución directa de código PHP embebido en las vistas.

En resumen, las directivas Blade y su sintaxis intuitiva y poderosa facilitan la creación de vistas dinámicas y estructuradas en Laravel. Blade te ayuda a mantener un código limpio y legible, mejora la productividad y optimiza el rendimiento de tus aplicaciones web.