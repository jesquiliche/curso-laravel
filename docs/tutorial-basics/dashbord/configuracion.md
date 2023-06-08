---
sidebar_position: 2
---

# Configuración e instalación

## Instalación

Estos pasos están extraídos de la documentación oficial y están pensados para una instalación limpia. No los aplicaremos todos, ya que alterarían la configuración actual de nuestro proyecto. Siga las indicaciones a continuación.

En la carpeta raíz de tu proyecto de Laravel, agrega el paquete requerido utilizando Composer:

```
composer require jeroennoten/laravel-adminlte
```

Instala los recursos necesarios del paquete utilizando el siguiente comando:

```
php artisan adminlte:install
```

Este comando instalará la plantilla AdminLTE y sus dependencias (Bootstrap, jQuery, etc.) en la carpeta `public/vendor` de tu proyecto, la configuración del paquete en el archivo `config/adminlte.php` y las traducciones del paquete en la carpeta `resources/lang/vendor/adminlte/` (o `lang/vendor/adminlte/` para las versiones de Laravel >= 9.x).

Puedes utilizar la opción `--force` para sobrescribir archivos existentes.

Puedes utilizar la opción `--interactive` para que se te guíe en el proceso y elijas qué deseas instalar.

Puedes verificar el estado de instalación de los recursos del paquete con el comando `php artisan adminlte:status`.

:::warning No aplica para este proyecto
Opcionalmente, y solo para Laravel 7 en adelante, el paquete ofrece un conjunto de vistas de autenticación con estilo AdminLTE que puedes usar en lugar de las proporcionadas por el antiguo andamiaje de autenticación laravel/ui. Si planeas usar estas vistas, primero agrega el paquete `laravel/ui` utilizando Composer e instala el andamiaje de Bootstrap. En nuestro caso, no utilizaremos esta opción, ya que ya instalamos nuestro proyecto con JetStream, el cual ya proporciona un sistema de autenticación:

```
composer require laravel/ui
php artisan ui bootstrap --auth
```

Luego, ejecuta el siguiente comando Artisan:

```
php artisan adminlte:install --only=auth_views
```
:::

Importante: El andamiaje de autenticación ofrece características como inicio de sesión, cierre de sesión y registro. Se recomienda leer siempre la documentación de autenticación de Laravel para obtener más detalles sobre el andamiaje de autenticación. Ten en cuenta que Laravel ofrece algunos kits de inicio (como Laravel Breeze) además del antiguo paquete `laravel/ui`. Por lo tanto, el uso de las vistas de autenticación de este paquete es OPCIONAL y DEPENDE DE TI.

Dirígete a la sección de Uso para obtener información sobre cómo utilizar la plantilla principal proporcionada por este paquete.

## Configuración

Ahora vamos a seguir los siguientes pasos para configurar nuestro panel de administración.

### Añadir archivo admin.php a las rutas

Dentro de la carpeta `routes`, crearemos un nuevo archivo de rutas que llamaremos `admin.php`. Este archivo nos servirá para especificar las rutas relacionadas con nuestro panel de administración. Hacemos esto para mantener cierto orden y no mezclar rutas.

Una vez creado este archivo, deberemos incluirlo en `\app\Providers\RouteServiceProvider.php` para que Laravel lo reconozca como un archivo de rutas. Edita e introduce el siguiente código:

```

Route::middleware(['web', 'auth'])
    ->prefix('admin')
    ->group(base_path('routes/admin.php'));
```

:::info ¿Qué hace?

Este código establece una ruta en el framework Laravel que utiliza los middlewares 'web' y 'auth':

- El middleware 'web' proporciona las características básicas de la aplicación web, como el manejo de sesiones y la protección CSRF.
- El middleware 'auth' verifica si el usuario está autenticado antes de permitir el acceso a la ruta.

El método `prefix('admin')` establece un prefijo de ruta para todas las rutas dentro de este grupo. En este caso, todas las rutas dentro de este grupo tendrán el prefijo '/admin', lo que significa que se accederán a través de URLs como '/admin/ruta'.

El método `group(base_path('routes/admin.php'))` indica que todas las rutas definidas en el archivo 'routes/admin.php' estarán agrupadas bajo este middleware y prefijo. En otras palabras, las rutas definidas en 'routes/admin.php' estarán protegidas por los middlewares 'web' y 'auth' y tendrán el prefijo '/admin'.

Esto es útil cuando se desea crear un grupo de rutas que estén protegidas por autenticación y tengan un prefijo específico, como en un panel de administración de un sitio web.
:::

Para probar todo lo que hemos hecho hasta ahora, vamos a definir la ruta para acceder a nuestro panel de administración.

```php
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Bienvenido a nuestro panel de administración';
})->name('admin.home');
```

Ahora puedes probar si todo funciona correctamente ingresando a **localhost:8000/admin**. Si se muestra el mensaje "Bienvenido a nuestro panel de administración", todo funciona correctamente.

### Crear controlador para nuestro panel de administración

Crea el siguiente controlador ejecutando el siguiente comando:

```bash
php artisan make:controller Admin\HomeController
```

Dirígete al controlador que hemos creado e introduce el siguiente código:

```php
<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('admin.index');
    }
}
```

### Creación de la vista principal

En nuestra carpeta `resources/views`, crearemos una carpeta llamada `admin`. En esta carpeta guardaremos todas las vistas asociadas a nuestro panel de administración. Dentro de esta carpeta, crearemos la vista `index.blade.php`. Crea la vista e introduce el siguiente código:

```php
@extends('adminlte::page')

@section('title', 'Panel de administración')

@section('content_header')
    <h1>Anuncios</h1>
@stop

@section('content')
    <p>Panel de administración</p>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
    <script> console.log('¡Hola!'); </script>
@stop
```

:::info ¿Qué hace?

Este código utiliza la plantilla AdminLTE en Laravel para construir una página de panel de administración.

- `@extends('adminlte::page')` indica que esta vista extiende la plantilla 'adminlte::page', lo que significa que hereda la estructura y estilos definidos en esa plantilla.

- `@section('title', 'Panel de administración')` establece el título de la página como '

Panel de administración'. Este valor será utilizado en la etiqueta `<title>` del HTML generado.

- `@section('content_header')` define una sección llamada 'content_header' donde se puede incluir contenido específico del encabezado de la página. En este caso, se muestra el encabezado 'Anuncios'.

- `@section('content')` define una sección llamada 'content' donde se puede incluir el contenido principal de la página. En este caso, se muestra un párrafo 'Panel de administración'.

- `@section('css')` define una sección llamada 'css' donde se pueden agregar estilos CSS adicionales para esta página en particular. En este caso, se enlaza una hoja de estilos personalizada '/css/admin_custom.css'.

- `@section('js')` define una sección llamada 'js' donde se pueden agregar scripts JavaScript adicionales para esta página en particular. En este caso, se muestra un mensaje de consola '¡Hola!' utilizando JavaScript.

Estas directivas de sección (`@section`) se utilizan para estructurar y definir secciones específicas dentro de la plantilla base. La plantilla base (`adminlte::page`) contendrá los marcadores `@yield` correspondientes a estas secciones, donde se insertará el contenido definido en cada sección en la página final generada.
:::

Volvamos al fichero de rutas **admin.php** y cambie el código que escribimos anteriormente por este otro código:

```php
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\Admin\HomeController;

Route::get('/', [HomeController::class,'index'])->name('admin.home');
```

Ahora, si vas a la barra de direcciones de tu navegador y escribes **http:/localhost:8000/admin**, se te pedirá un correo electrónico y una contraseña:

Email: admin@pruebas.com
Contraseña: password123

![Contraseña](/img/autenticacion.png)

Una vez validado el usuario, deberías poder ver el panel de administración:

![Contraseña](/img/panel2.png)