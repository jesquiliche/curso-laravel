---
sidebar_position: 6
---
# Roles y permisos

## Introducción

En nuestra aplicación de venta de artículos de segunda mano, vamos a implementar un sistema de roles y permisos que asigne diferentes niveles de acceso y funciones a los usuarios. Esto nos permite mantener un entorno seguro y controlado, garantizando que cada usuario tenga los privilegios adecuados para realizar sus acciones de manera eficiente.

A continuación, describiremos los tres tipos de usuarios y los roles asociados a cada uno, junto con los permisos correspondientes:

1. **Usuarios registrados**: Estos usuarios son aquellos que se han registrado en nuestra aplicación. Tienen la capacidad de publicar, editar y borrar sus propios anuncios, como hemos visto en capítulos anteriores. Sin embargo, no tienen acceso al panel de administración, lo que significa que no pueden realizar acciones relacionadas con la gestión global del sitio.

2. **Editores**: Los editores son usuarios con un nivel de acceso superior al de los usuarios registrados. Además de las acciones disponibles para los usuarios registrados, los editores tienen la capacidad de realizar tareas de mantenimiento en las categorías y subcategorías a través del panel de administración. Sin embargo, no tienen permisos para administrar usuarios, lo que les limita a la gestión de contenidos específicos relacionados con los anuncios.

3. **Administradores**: Los administradores son los usuarios con el nivel de acceso más alto en nuestra aplicación. Tienen acceso total al panel de administración, lo que les permite realizar cualquier acción en el sitio. Esto incluye publicar, editar y borrar anuncios, así como gestionar usuarios y llevar a cabo tareas de configuración y ajustes del sistema. Los administradores tienen el control total sobre todas las funciones y características de la aplicación.

Al establecer roles y permisos específicos para cada tipo de usuario, garantizamos un entorno seguro y organizado. Los usuarios registrados pueden realizar acciones relacionadas con sus propios anuncios, los editores tienen la capacidad de mantener las categorías y subcategorías, mientras que los administradores tienen el poder de gestionar todos los aspectos del sitio.

## Laravel Permissions

En el desarrollo de aplicaciones web, es común necesitar un sistema de gestión de permisos que permita controlar el acceso a diferentes partes de la aplicación según los roles y privilegios de los usuarios. El paquete "Laravel Permissions" es una solución popular y potente para implementar un sistema de permisos en aplicaciones Laravel.

"Laravel Permissions" es un paquete de terceros desarrollado por la comunidad, y está diseñado para ser fácilmente integrado en aplicaciones Laravel existentes. Proporciona una forma estructurada y flexible de definir roles, permisos y relaciones entre ellos.

Este paquete se basa en el uso de listas de control de acceso (ACL) para determinar qué usuarios tienen acceso a qué recursos y acciones en la aplicación. Con "Laravel Permissions", puedes definir roles personalizados y asignarles permisos específicos. Luego, puedes asignar roles a los usuarios y verificar los permisos en el código para permitir o denegar el acceso a ciertas funcionalidades.

Una de las ventajas de "Laravel Permissions" es su integración con el sistema de autenticación de Laravel. Puedes utilizar las facilidades proporcionadas por Laravel para autenticar a los usuarios y luego usar el paquete para gestionar los permisos de manera coherente y centralizada.

Además, "Laravel Permissions" ofrece una API intuitiva y sencilla de usar. Puedes definir permisos y roles en archivos de configuración o en una base de datos, y acceder a ellos fácilmente en tu aplicación. El paquete también proporciona métodos útiles para comprobar los permisos y realizar acciones condicionales en función de los roles y permisos de los usuarios.

En definitiva, el paquete "Laravel Permissions" es una herramienta valiosa para implementar un sistema de gestión de permisos en aplicaciones Laravel. Ofrece una forma sencilla y flexible de definir roles y permisos, y proporciona métodos para verificar y gestionar los permisos de los usuarios. Al utilizar este paquete, puedes asegurar un control de acceso adecuado y garantizar que los usuarios solo tengan acceso a las funcionalidades y recursos permitidos según sus roles y permisos asignados.

### Instalación

Para instalar el paquete "Laravel Permissions" en tu aplicación Laravel, puedes seguir estos pasos:

1. Abrir la terminal: Abre la terminal en tu sistema operativo y navega hasta la carpeta raíz de tu proyecto Laravel.

2. Ejecutar el comando de instalación: En la terminal, ejecuta el siguiente comando para instalar el paquete "Laravel Permissions" utilizando Composer:

   ```
   composer require spatie/laravel-permission
   ```

   Esto descargará e instalará el paquete en tu proyecto Laravel, junto con sus dependencias.

3. Debe publicar la migración y el config/permission.phparchivo de configuración con:

```
   php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"

```

   Estos comandos copiarán los archivos necesarios a las carpetas correspondientes de tu proyecto.

4. Ejecutar las migraciones: Una vez que los archivos de migraciones se hayan publicado, debes ejecutar las migraciones para crear las tablas necesarias en tu base de datos. Ejecuta el siguiente comando en la terminal:

   ```
   php artisan migrate
   ```

   Esto creará las tablas necesarias para el sistema de permisos en tu base de datos.

5. Configurar el modelo de usuario: Abre el archivo `app\Models\User.php` y asegúrate de que la clase `User` utilice el trait `Spatie\Permission\Traits\HasRoles`. Debería verse así:

   ```php
   use Spatie\Permission\Traits\HasRoles;

   class User extends Authenticatable
   {
       use HasRoles;

       // ...
   }
   ```

6. (Opcional) Configurar el archivo de configuración: Abre el archivo `config/permission.php` y ajusta la configuración según tus necesidades. Aquí puedes definir los nombres de las tablas y los modelos utilizados por el paquete, así como otras opciones de configuración.

7. ¡Listo! El paquete "Laravel Permissions" ha sido instalado correctamente en tu aplicación Laravel. Ahora puedes comenzar a utilizarlo para definir roles, asignar permisos y verificar los permisos de los usuarios en tu código.

Puedes consultar la documentación oficial del paquete "Laravel Permissions" para obtener más detalles sobre cómo utilizarlo y aprovechar todas sus características y funcionalidades.

## Configuración básica

Para utilizar los roles y permisos en Laravel Permissions, debes configurar el modelo de usuario para que sea compatible con este sistema. Sigue estos pasos:

1. Abre el archivo `app\Models\User.php` en tu proyecto Laravel.

2. Asegúrate de que la clase `User` importe el trait `Spatie\Permission\Traits\HasRoles`. Debería verse así:

```php
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasRoles;

    // ...
}
```

3. Al utilizar el trait `HasRoles`, el modelo de usuario adquiere nuevos métodos y relaciones relacionados con los roles y permisos.

   - Ahora puedes asignar roles a un usuario utilizando el método `assignRole`:
     ```php
     $user->assignRole('admin');
     ```

   - También puedes verificar si un usuario tiene un rol específico utilizando el método `hasRole`:
     ```php
     if ($user->hasRole('admin')) {
         // El usuario tiene el rol de administrador
     }
     ```

   - Para obtener todos los roles de un usuario, puedes usar el método `getRoleNames`:
     ```php
     $roles = $user->getRoleNames();
     ```

   - Además, puedes verificar si un usuario tiene permiso para realizar una acción utilizando el método `hasPermissionTo`:
     ```php
     if ($user->hasPermissionTo('crear anuncios')) {
         // El usuario tiene permiso para crear anuncios
     }
     ```

   - Para obtener todos los permisos de un usuario, puedes usar el método `getAllPermissions`:
     ```php
     $permissions = $user->getAllPermissions();
     ```

4. Guarda los cambios en el archivo `User.php`.

Con esta configuración, el modelo de usuario estará preparado para utilizar los roles y permisos proporcionados por Laravel Permissions. Ahora puedes asignar roles a los usuarios, verificar permisos y utilizar todos los métodos y relaciones proporcionados por el trait `HasRoles`.

Recuerda que puedes consultar la documentación oficial de Laravel Permissions para obtener más detalles y funcionalidades avanzadas sobre el manejo de roles y permisos en Laravel.

## Creación de roles y permisos

Laravel Permissions proporciona métodos sencillos para crear roles y permisos en tu aplicación. Sigue estos pasos:

1. Creación de roles:
   - Puedes crear un nuevo rol utilizando el método `create` del modelo `Role` proporcionado por Laravel Permissions. Por ejemplo:
     ```php
     use Spatie\Permission\Models\Role;

     $role = Role::create(['name' => 'admin']);
     ```
   - El código anterior creará un nuevo rol con el nombre "admin". Puedes personalizar el nombre del rol según tus necesidades.

2. Creación de permisos:
   - Para crear un permiso, puedes utilizar el método `create` del modelo `Permission` proporcionado por Laravel Permissions. Por ejemplo:
     ```php
     use Spatie\Permission\Models\Permission;

     $permission = Permission::create(['name' => 'crear anuncios']);
     ```
   - El código anterior creará un nuevo permiso con el nombre "crear anuncios". Al igual que con los roles, puedes personalizar el nombre del permiso según tus necesidades.

3. Asignación de permisos a roles:
   - Una vez que hayas creado los roles y permisos, puedes asignar permisos a un rol utilizando el método `givePermissionTo` del modelo `Role`. Por ejemplo:
     ```php
     $role->givePermissionTo('crear anuncios');
     ```
   - El código anterior asignará el permiso "crear anuncios" al rol especificado.

4. Asignación de roles a usuarios:
   - Para asignar un rol a un usuario, puedes utilizar el método `assignRole` del modelo de usuario. Por ejemplo:
     ```php
     $user->assignRole('admin');
     ```
   - El código anterior asignará el rol "admin" al usuario especificado.

Con estos pasos, habrás creado roles y permisos en tu aplicación utilizando Laravel Permissions. Ahora puedes asignar permisos a roles y roles a usuarios para controlar el acceso y las acciones permitidas en tu aplicación.

Recuerda consultar la documentación oficial de Laravel Permissions para obtener más detalles sobre cómo trabajar con roles y permisos, así como para explorar las funcionalidades avanzadas que ofrece el paquete.

## Puesta en practica

Vamos a crear un seeder para dar de altas nuestros roles y permisos. Desde la terminal sitúese dentro de la carpeta del proyecto y teclee el siguiente comando:

```bash
php artisan make:seeder RoleSeeder
```

### Implementación del Seeder

A continuación edite el seeder `database\seeders\RoleSeeder.php`, copie y pegue el siguiente código:

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Crear roles
        $adminRole = Role::create(['name' => 'Admin']);
        $editorRole = Role::create(['name' => 'Editor']);

        // Crear permisos
        Permission::create(['name' => 'admin.home']);
		Permission::create(['name' => 'admin.user.index']);
		Permission::create(['name' => 'admin.user.create']);
		Permission::create(['name' => 'admin.user.edit']);
		Permission::create(['name' => 'admin.user.destroy']);
        Permission::create(['name' => 'admin.categoria.index']);
        Permission::create(['name' => 'admin.categoria.create']);
        Permission::create(['name' => 'admin.categoria.edit']);
        Permission::create(['name' => 'admin.categoria.destroy']);
        Permission::create(['name' => 'admin.subcategorias.index']);
        Permission::create(['name' => 'admin.subcategorias.create']);
        Permission::create(['name' => 'admin.subcategorias.edit']);
        Permission::create(['name' => 'admin.subcategorias.destroy']);
      
        // Asignar permisos a roles
        $adminRole->givePermissionTo([
            'admin.home',
            'admin.categoria.index',
            'admin.categoria.create',
            'admin.categoria.edit',
            'admin.categoria.destroy',
            'admin.subcategorias.index',
            'admin.subcategorias.create',
            'admin.subcategorias.edit',
            'admin.subcategorias.destroy',
           	'admin.user.index',
			'admin.user.create',
			'admin.user.edit',
			'admin.user.destroy'
        ]);

        $editorRole->givePermissionTo([
            'admin.home',
            'admin.categoria.index',
            'admin.categoria.create',
            'admin.categoria.edit',
            'admin.categoria.destroy',
            'admin.subcategorias.index',
            'admin.subcategorias.create',
            'admin.subcategorias.edit',
            'admin.subcategorias.destroy'
        ]);

        // Crear usuario administrador
        $adminUser = User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
        ]);

        //Asignar Role al usuario
        $adminUser->assignRole($adminRole);

        //Crear usuario editor
        $editorUser = User::create([
            'name' => 'Editor User',
            'email' => 'editor@example.com',
            'password' => bcrypt('password'),
        ]);
    
        //Asignar Role de
        $editorUser->assignRole($editorRole);
    }
}
```

#### ¿Qué hace?

**Creación de roles**
En este bloque se crean los roles "Admin" y "Editor" utilizando la clase `Role` del paquete Spatie\Permission\Models. Estos roles representan diferentes niveles de privilegios en el sistema.

```php
// Crear roles
$adminRole = Role::create(['name' => 'Admin']);
$editorRole = Role::create(['name' => 'Editor']);
```

**Creación de permisos**
En este bloque se crean los permisos utilizando la clase `Permission` del paquete Spatie\Permission\Models. Se definen permisos para diferentes acciones relacionadas con usuarios, categorías y subcategorías en el sistema de administración.

```php
// Crear permisos
Permission::create(['name' => 'admin.home']);
Permission::create(['name' => 'admin.user.index']);
Permission::create(['name' => 'admin.user.create']);
Permission::create(['name' => 'admin.user.edit']);
Permission::create(['name' => 'admin.user.destroy']);
Permission::create(['name' => 'admin.categoria.index']);
Permission::create(['name' => 'admin.categoria.create']);
Permission::create(['name' => 'admin.categoria.edit']);
Permission::create(['name' => 'admin.categoria.destroy']);
Permission::create(['name' => 'admin.subcategorias.index']);
Permission::create(['name' => 'admin.subcategorias.create']);
Permission::create(['name' => 'admin.subcategorias.edit']);
Permission::create(['name' => 'admin.subcategorias.destroy']);
```

**Asignación de permisos a roles**
En este bloque se asignan los permisos creados previamente a los roles. Se utiliza el método `givePermissionTo()` para asignar múltiples permisos a cada rol. Los permisos asignados determinan las acciones y rutas que los usuarios con esos roles pueden realizar en el sistema.

```php
// Asignar permisos a roles
$adminRole->givePermissionTo([
    'admin.home',
    'admin.categoria.index',
    'admin.categoria.create',
    'admin.categoria.edit',
    'admin.categoria.destroy',
    'admin.subcategorias.index',
    'admin.subcategorias.create',
    'admin.subcategorias.edit',
    'admin.subcategorias.destroy',
    'admin.user.index',
    'admin.user.create',
    'admin.user.edit',
    'admin.user.destroy'
]);

$editorRole->givePermissionTo([
    'admin.home',
    'admin.categoria.index',
    'admin.categoria.create',
    'admin.categoria.edit',
    'admin.categoria.destroy',
    'admin.subcategorias.index',
    'admin.subcategorias.create',
    'admin.subcategorias.edit',
    'admin.subcategorias.destroy'
]);
```

**Creación de usuarios y asignación de roles**
En este bloque se crean dos usuarios utilizando la clase `User`. Se crea un usuario administrador con nombre, correo electrónico y contraseña predefinidos, y se crea un usuario editor con la misma estructura. Luego, se asignan los roles correspondientes a cada usuario utilizando el método `assignRole()`.

```php
// Crear usuario administrador
$adminUser = User::create([
    'name' => 'Admin User',
    'email' => 'admin@example.com',
    'password' => bcrypt('password'),
]);

// Asignar

 Role al usuario administrador
$adminUser->assignRole($adminRole);

// Crear usuario editor
$editorUser = User::create([
    'name' => 'Editor User',
    'email' => 'editor@example.com',
    'password' => bcrypt('password'),
]);

// Asignar Role al usuario editor
$editorUser->assignRole($editorRole);
```

Este seeder crea roles, permisos y usuarios predefinidos en la base de datos, lo que te permite tener una configuración inicial del sistema con usuarios de diferentes roles y permisos asignados.

### Modificación del archivo DatabaseSeeder

Modifica el archivo **database/seeders/DatabaseSeeder.php** de la siguiente manera:

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategoriaSeeder::class);
        $this->call(SubcategoriaSeeder::class);
        $this->call(ProvinciaSeeder::class);
        $this->call(PoblacionSeeder::class);
        $this->call(EstadoSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(AnuncioSeeder::class);
   }
}
```


Con esta modificación, al utilizar el comando `'php artisan migrate:fresh --seed'`, la base de datos se inicializará con los roles y permisos adecuados. Si no deseas inicializar la base de datos y solo ejecutar el seeder de roles, puedes utilizar el comando `'php artisan db:seed --class=RoleSeeder'`.

## Directivas Blade relacionadas

En Laravel, las directivas Blade relacionadas con permisos son utilizadas en conjunción con el paquete "Laravel Permissions" de Spatie. Estas directivas permiten mostrar o ocultar contenido en función de los roles y permisos asignados a los usuarios. A continuación, te explico las directivas Blade más comunes que se utilizan para aplicar permisos en Laravel:

1. `@role('rol')`: Esta directiva permite mostrar contenido solo si el usuario tiene el rol especificado. Por ejemplo:
   ```html
   @role('Admin')
       <!-- Contenido visible solo para usuarios con el rol "Admin" -->
   @endrole
   ```

2. `@hasrole('rol')`: Esta directiva muestra contenido si el usuario tiene el rol especificado, al igual que la directiva `@role`. Sin embargo, a diferencia de `@role`, `@hasrole` no admite varios roles. Por ejemplo:
   ```html
   @hasrole('Admin')
       <!-- Contenido visible solo para usuarios con el rol "Admin" -->
   @endhasrole
   ```

3. `@unlessrole('rol')`: Esta directiva muestra contenido si el usuario no tiene el rol especificado. Por ejemplo:
   ```html
   @unlessrole('Admin')
       <!-- Contenido visible para usuarios que no tienen el rol "Admin" -->
   @endunlessrole
   ```

4. `@can('permiso')`: Esta directiva muestra contenido si el usuario tiene el permiso especificado. Por ejemplo:
   ```html
   @can('admin.user.index')
       <!-- Contenido visible solo si el usuario tiene el permiso "admin.user.index" -->
   @endcan
   ```

5. `@cannot('permiso')`: Esta directiva muestra contenido si el usuario no tiene el permiso especificado. Por ejemplo:
   ```html
   @cannot('admin.user.index')
       <!-- Contenido visible si el usuario no tiene el permiso "admin.user.index" -->
   @endcannot
   ```

Estas directivas Blade permiten condicionar la visualización de secciones de una plantilla según los roles y permisos del usuario. Al utilizarlas, puedes crear interfaces de usuario más dinámicas y personalizadas según los privilegios asignados a cada usuario en tu aplicación Laravel.

## Adaptando nuestra vistas

### Vistas de administración

Hasta ahora, nuestro panel de administración es accesible para cualquier usuario registrado. Sin embargo, vamos a realizar un cambio para restringir el acceso a los usuarios con roles de **editor** o **administrador** únicamente. Edite el fichero **config\adminlte.php** y cambie la siguiente sección:

```php
['header' => 'ADMINISTRACIÓN'],
        [
            'text' => 'Categorías',
            'route'  => 'admin.categoria.index',
            'icon' => 'fas fa-fw fa-layer-group',
            //Solo usuarios con permisos 'admin.categoria.index' (Admin y editor)
            'can'=> 'admin.categoria.index',
        ],
        [
            'text' => 'Subcategorías',
            'route'  => 'admin.subcategorias.index',
            'icon' => 'fas fa-fw fa-folder',
            //Solo usuarios con permisos 'admin.subcategorias.index' (Admin y editor)
            'can'=> 'admin.subcategorias.index',
        ],
        ['header' => 'USUARIOS'],
        [
            'text'       => 'Usuarios',
            'icon_color' => '',
            'icon'      =>'fas fa-fw fa-user',
            'route'        => 'admin.user.index',
            //Solo usuarios con permisos 'admin.user.index' (Admin y editor)
            'can'=> 'admin.user.index',
        ],
```

En el código proporcionado, hemos agregado la condición `'can' => 'permiso'` a cada sección del menú en el panel de administración. Esto significa que solo los usuarios con los permisos específicos mencionados podrán acceder a esas secciones. 

Para las secciones de "Categorías" y "Subcategorías", solo los usuarios con los permisos `'admin.categoria.index'` y `'admin.subcategorias.index'` respectivamente ***(administradores y editores)***, podrán acceder. 

Para la sección de "Usuarios", solo los usuarios con el permiso `'admin.user.index'` ***(administradores)*** podrán acceder. 

Esto asegurará que solo los usuarios con los roles de administrador o editor tengan acceso a estas secciones en el panel de administración, y cualquier otro usuario registrado no podrá ver ni acceder a estas secciones restringidas.

### Menú general de la aplicación

Hasta ahora, solo hemos tenido acceso a nuestro panel de administración a través de la barra de navegación. Vamos a habilitar la opción de **Administración** en el menú. Para ello, debemos realizar cambios en el archivo **resources\views\layout\layout.blade.php**.

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

    @yield('css')
    <!-- Incluye estilos específicos de la vista actual -->
</head>
<main>
    <!-- Barra de navegación -->
    <div class="menu container-fluid fixed-top bg-white

">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <a class="navbar-brand" href="/">
                    <img src="/images/logo.jpeg" width="60" alt="..." loading="lazy">
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
                        <!-- menú usuario -->
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
                                    <a class="dropdown-item" href="{{ route('admin.home') }}">Administración</a>
                                @endcan
                                <div class="dropdown-divider"></div>
                                @if (auth()->check())
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                        style="display: none;">
                                        @csrf
                                    </form>

                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                            document.getElementById('logout-form').submit();">
                                        Logout
                                    </a>
                                @endif

                            </div>
                        </li>
                        <!-- menú usuario -->

                        <li class="nav-item ml-2">
                            <a href="{{ route('anuncios.create') }}"><i class="far fa-file-alt"></i> Publicar
                                anuncio</a>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>

    </div>

    @yield('content')
    <!-- Contenido específico de cada vista -->
    
    @yield('js')
    <footer>
        <div class="container-fluid text-center mt-4 bg-dark">
            <div class="container mx-auto bg-dark">
                <br/>
            <h6 class="text-white text-center mt-4">Copyrigth &copy; Jesús Quintana Esquiliche
                
            </h6>
            <br/>
            </div>
            
        </div>
    </footer>
    

</main>

</html>
```

En la sección del menú de usuario, se encuentra la configuración de roles y permisos de la aplicación.

```html
<!-- menú usuario -->
<li class="nav-item ml-2 dropdown">
    <a class="nav-item dropdown-toggle ml-2" href="#" id="navbarDropdown" role="button"
        data

-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-user-plus"></i>
        @guest
        @else
            {{ auth()->user()->name }}
        @endguest
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="{{ route('registro') }}">Registro</a>
        @guest
            <a class="dropdown-item" href="{{ route('login2') }}">Iniciar sesión</a>
        @endguest
        @can('admin.home')
            <a class="dropdown-item" href="{{ route('admin.home') }}">Administración</a>
        @endcan
        <div class="dropdown-divider"></div>
        @auth
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
            <a class="dropdown-item" href="{{ route('logout') }}"
                onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                Logout
            </a>
        @endauth
    </div>
</li>
<!-- menú usuario -->
```

#### ¿Qué hace?

1. Si el usuario no está autenticado (es un invitado), se muestra un enlace para registrarse y otro para iniciar sesión.

```html
<a class="dropdown-item" href="{{ route('registro') }}">Registro</a> <!-- Enlace para registrarse -->
@guest <!-- Comprueba si el usuario es un invitado -->
    <a class="dropdown-item" href="{{ route('login2') }}">Iniciar sesión</a> <!-- Enlace para iniciar sesión -->
@endguest
```

2. Si el usuario está autenticado, se muestra su nombre.

```html
@else
    {{ auth()->user()->name }} <!-- Muestra el nombre del usuario autenticado -->
@endif
```

3. Si el usuario tiene permisos de administrador, se muestra un enlace para acceder a la sección de administración.

```html
@can('admin.home') <!-- Comprueba si el usuario tiene permisos de administrador -->
    <a class="dropdown-item" href="{{ route('admin.home') }}">Administración</a> <!-- Enlace para acceder a la sección de administración -->
@endcan
```

4. Se incluye una línea divisoria en el menú desplegable.

```html
<div class="dropdown-divider"></div> <!-- Línea divisoria en el menú desplegable -->
```

5. Si el usuario está autenticado, se muestra un enlace para cerrar sesión.

```html
@auth <!-- Comprueba si el usuario está autenticado -->
    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;"> <!-- Formulario para cerrar sesión -->
        @csrf
    </form>
    <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
        Logout <!-- Enlace para cerrar sesión -->
    </a>
@endauth
```
