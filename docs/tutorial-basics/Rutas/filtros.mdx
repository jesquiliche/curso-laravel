---
sidebar_position: 40
---

# Filtros y middleware

## ¿Qué son y para que sirven?

En Laravel, los filtros (filters) y middleware son herramientas que se utilizan para procesar las solicitudes HTTP y las respuestas de una aplicación. Estas herramientas permiten agregar lógica personalizada a las solicitudes antes de que sean manejadas por la aplicación y después de que se envíen las respuestas. 

Los filtros se utilizan para procesar las solicitudes HTTP antes de que se manejen en una ruta específica o en un grupo de rutas. Los filtros se definen en el archivo app/Http/filters.php y se pueden asignar a una ruta o grupo de rutas utilizando el método Route::filter(). Por ejemplo, se puede definir un filtro para verificar si el usuario está autenticado antes de permitir el acceso a una ruta específica.

Por otro lado, los middleware se utilizan para procesar tanto las solicitudes como las respuestas HTTP y se pueden aplicar a una ruta o grupo de rutas. Los middleware son similares a los filtros, pero ofrecen una mayor flexibilidad ya que se pueden asignar a diferentes etapas del ciclo de solicitud-respuesta. Además, los middleware se pueden definir en el archivo app/Http/Kernel.php y se pueden asignar a una ruta o grupo de rutas utilizando el método Route::middleware(). 

En resumen, tanto los filtros como los middleware son herramientas importantes para agregar lógica personalizada a las solicitudes y respuestas en una aplicación Laravel, y se utilizan para procesar y modificar datos antes de que sean manejados por la aplicación.

## ¿Cómo se crean?

En Laravel, se pueden crear filtros y middleware para aplicar lógica de la aplicación a las solicitudes HTTP. Los filtros y middleware se utilizan para agregar capas adicionales de funcionalidad a una aplicación, como autenticación, validación y autorización.

Para crear un filtro, se puede utilizar el comando `php artisan make:middleware` para generar una clase de middleware. Esta clase contendrá un método `handle` que se ejecutará en cada solicitud que pase a través del middleware. Dentro del método `handle`, se puede agregar la lógica necesaria para filtrar o modificar la solicitud. Por ejemplo, se puede verificar si el usuario está autenticado antes de permitir que la solicitud se procese más.

```php
namespace App\Http\Middleware;

use Closure;

class VerificarAutenticacion
{
    public function handle($request, Closure $next)
    {
        if (auth()->check()) {
            return $next($request);
        }

        return redirect('/login');
    }
}
```

Para aplicar el middleware a una ruta, se puede utilizar el método `middleware` en la definición de la ruta. Por ejemplo, para aplicar el middleware de autenticación creado anteriormente a una ruta que muestra los anuncios, se puede hacer lo siguiente:

```php
Route::get('/anuncios', [AnuncioController::class, 'index'])->middleware('auth');
```

Además de los filtros y middleware predefinidos, Laravel también permite crear filtros y middleware personalizados 
que se pueden utilizar en la aplicación. 
Los filtros y middleware personalizados se pueden agregar al archivo
`App\Http\Kernel.php`, que es el archivo principal de 
configuración de middleware de la aplicación. Para agregar un 
filtro o middleware personalizado, se debe agregar su 
nombre a la matriz de middleware en el archivo `kernel.php`. 
Luego, se puede usar el nombre del filtro o middleware al definir rutas o 
al aplicar el middleware a grupos de rutas.

:::info 
Este middleware esta puesto a modo de ejemplo y no es necesaria su implementación
ya que existe un middleware 'auth' que ya viene definido por defecto y el cual
veremos en capítulos posteriores.
:::

### ¿Cómo se aplican?

En Laravel, se pueden aplicar filtros y middleware a las rutas utilizando el método `middleware` en la definición de la ruta. El método `middleware` acepta uno o varios nombres de filtros o middleware que se aplicarán a la ruta.

Por ejemplo, para aplicar el middleware `VerificarAutenticacion` definido anteriormente a una ruta que muestra los anuncios, se puede hacer lo siguiente:

```php
use App\Http\Middleware\VerificarAutenticacion;

Route::get('/anuncios', 'AnuncioController@index')->middleware(VerificarAutenticacion::class);
```

También es posible aplicar varios middleware a una ruta en una sola llamada al método `middleware`. Por ejemplo, para aplicar tanto el middleware de autenticación predefinido de Laravel como el middleware `VerificarAutenticacion` a la ruta de los anuncios, se puede hacer lo siguiente:

```php
use App\Http\Middleware\VerificarAutenticacion;

Route::get('/anuncios', 'AnuncioController@index')->middleware('auth', VerificarAutenticacion::class);
```

También se puede aplicar middleware a un grupo de rutas utilizando el método `middleware` en la definición del grupo de rutas. Por ejemplo, para aplicar el middleware `VerificarAutenticacion` a todas las rutas que comienzan con `/admin`, se puede hacer lo siguiente:

```php
use App\Http\Middleware\VerificarAutenticacion;

Route::middleware([VerificarAutenticacion::class])->prefix('admin')->group(function () {
    // Definición de rutas para la sección de administración
});
```

En este ejemplo, todas las rutas definidas dentro del grupo de rutas que comienzan con `/admin` tendrán el middleware `VerificarAutenticacion` aplicado.