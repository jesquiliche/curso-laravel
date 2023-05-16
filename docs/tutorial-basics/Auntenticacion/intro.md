---
sidebar_position: 1
---

# Introducción

## Registro de usuarios

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

Espero que esto te ayude.



