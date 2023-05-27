---
sidebar_position: 4
---

# Vistas y rutas protegidas

## Introducción

En nuestra aplicación habrá apartados que solo serán accesibles por usuarios registrados o autorizados, como la publicación de anuncio.

:::info Explicación conceptual
Imagina que estás en un parque de diversiones con diferentes áreas: una montaña rusa, una piscina, una zona de juegos y un área VIP. Para ingresar al área VIP, necesitas un pase especial.

En una aplicación web, las rutas son como las áreas del parque. Cada ruta tiene una dirección única, como "tupagina.com/montañarusa" o "tupagina.com/zonavip". Las rutas determinan qué contenido se mostrará al usuario cuando visite esa dirección.

Ahora, las vistas son como los lugares dentro del parque. Cada vista es una página o una sección específica de tu aplicación web. Puede ser la página de inicio, un formulario de registro o una página de perfil de usuario.

Aquí viene lo interesante: las rutas protegidas son como el área VIP en el parque de diversiones. Son rutas especiales que requieren un "pase" para acceder. En el caso de una aplicación web, este "pase" es la autenticación del usuario, lo que significa que deben iniciar sesión con un nombre de usuario y contraseña.

Cuando tienes una ruta protegida, como "tupagina.com/zonavip", solo los usuarios que han iniciado sesión y tienen el "pase" (es decir, la autenticación) pueden acceder a esa ruta. Si alguien intenta visitar la ruta protegida sin haber iniciado sesión, se le redireccionará a otra página, como la página de inicio de sesión, para obtener el "pase" necesario.

Las vistas protegidas son como las atracciones dentro del área VIP. Contienen contenido exclusivo que solo los usuarios autenticados pueden ver y disfrutar. Puede ser información confidencial, funcionalidades avanzadas o simplemente una experiencia especial reservada para usuarios registrados.

En resumen, las rutas y vistas protegidas son como áreas especiales y exclusivas en un parque de diversiones. Las rutas protegidas requieren que los usuarios inicien sesión para acceder a ellas, y las vistas protegidas contienen contenido exclusivo para usuarios autenticados. De esta manera, puedes mantener la seguridad y privacidad en tu aplicación web, permitiendo solo a los usuarios autorizados acceder a ciertas áreas o ver cierta información.
:::

## JetStream

JetStream es una biblioteca de autenticación y scaffolding (generación de código inicial) para Laravel. JetStream proporciona un conjunto de herramientas y características para agilizar el proceso de autenticación y gestión de usuarios en tu aplicación.

Una de las principales características de JetStream es su enfoque en la autenticación basada en la API (API-based authentication). Esto significa que JetStream está diseñado para admitir tanto aplicaciones web tradicionales como aplicaciones de una sola página (SPA) o aplicaciones móviles que se comunican con una API. Proporciona un sistema de autenticación completo que incluye registro, inicio de sesión, recuperación de contraseñas y gestión de sesiones.

JetStream utiliza la biblioteca de componentes de front-end Livewire o Inertia.js para generar la interfaz de usuario de las páginas de autenticación. Livewire es una biblioteca que combina la interactividad del front-end con la comodidad del back-end de Laravel, mientras que Inertia.js permite a los desarrolladores construir aplicaciones de una sola página utilizando componentes de Laravel y Vue.js o React.js.

Además de la autenticación, JetStream también incluye características como la verificación de correo electrónico, el sistema de dos factores de autenticación (2FA) para mejorar la seguridad, la gestión de equipos (para aplicaciones con colaboradores) y la administración de perfiles de usuario.

JetStream proporciona una configuración sencilla y un flujo de trabajo simplificado para la autenticación en Laravel. Puedes personalizar y adaptar las vistas y funcionalidades según las necesidades de tu aplicación, lo que te permite ahorrar tiempo en la implementación y centrarte en el desarrollo de las características específicas de tu proyecto.

JetStream es una biblioteca que agiliza la implementación de la autenticación y la gestión de usuarios en aplicaciones web Laravel. Proporciona un sistema de autenticación completo, características de seguridad adicionales y una experiencia de desarrollo eficiente, lo que te permite crear rápidamente aplicaciones seguras y escalables. En este libro nos concentraremos en la parte de autenticación de JetStream.

## Cambiar la página de inicio de la aplicación

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
## Modificando nuestro Layout

A continuación vamos a modificar el menú de la aplicación para restringir el acceso de ciertas partes de la aplicación a determinados usuarios.

```php
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
```

:::info Que hace

1. Comprobación del estado de autenticación: Se utiliza la condición `@if (!auth()->check())` para verificar si el usuario actual ha iniciado sesión. La función `auth()->check()` comprueba si hay un usuario autenticado en el sistema.

2. Mostrar el nombre del usuario autenticado: Si el usuario ha iniciado sesión, se muestra su nombre en el menú de navegación. Esto se logra utilizando `{{ auth()->user()->name }}`. La función `auth()->user()` devuelve la instancia del usuario autenticado y `name` es una propiedad del usuario que contiene su nombre.

3. Opciones de autenticación: Dependiendo del estado de autenticación del usuario, se muestran diferentes opciones en el menú de navegación. 

   - Si el usuario no ha iniciado sesión (`@if (!auth()->check())`), se muestran las opciones "Registro" y "Iniciar sesión". Estas opciones redirigen a las rutas `registro` y `login2`, respectivamente.
   
   - Si el usuario ha iniciado sesión, se muestra la opción "Logout" que permite al usuario cerrar sesión. Al hacer clic en "Logout", se envía una solicitud POST al servidor a través del formulario con el id `logout-form`. El formulario contiene un campo CSRF (Token de protección contra falsificaciones de solicitudes entre sitios) generado por Laravel para proteger contra ataques CSRF.

4. Acceso de administrador: Se utiliza la directiva `@can('admin.home')` para verificar si el usuario autenticado tiene el permiso de "admin.home". Si el usuario tiene ese permiso, se muestra la opción "Administración" en el menú de navegación. La opción "Administración" redirige a la ruta `admin.home`.

Estas características permiten que el menú de navegación se adapte al estado de autenticación del usuario, mostrando las opciones adecuadas según corresponda.
:::
