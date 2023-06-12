---
sidebar_position: 6
---
# Roles y permisos

## Introducción

En nuestra aplicación de venta de artículos de segunda mano, hemos implementado un sistema de roles y permisos que asigna diferentes niveles de acceso y funciones a los usuarios. Esto nos permite mantener un entorno seguro y controlado, garantizando que cada usuario tenga los privilegios adecuados para realizar sus acciones de manera eficiente.

A continuación, describiremos los tres tipos de usuarios y los roles asociados a cada uno, junto con los permisos correspondientes:

1. **Usuarios registrados**: Estos usuarios son aquellos que se han registrado en nuestra aplicación. Tienen la capacidad de publicar, editar y borrar sus propios anuncios, como hemos visto en capítulos anteriores. Sin embargo, no tienen acceso al panel de administración, lo que significa que no pueden realizar acciones relacionadas con la gestión global del sitio.

2. **Editores**: Los editores son usuarios con un nivel de acceso superior al de los usuarios registrados. Además de las acciones disponibles para los usuarios registrados, los editores tienen la capacidad de realizar tareas de mantenimiento en las categorías y subcategorías a través del panel de administración. Sin embargo, no tienen permisos para administrar usuarios, lo que les limita a la gestión de contenidos específicos relacionados con los anuncios.

3. **Administradores**: Los administradores son los usuarios con el nivel de acceso más alto en nuestra aplicación. Tienen acceso total al panel de administración, lo que les permite realizar cualquier acción en el sitio. Esto incluye publicar, editar y borrar anuncios, así como gestionar usuarios y llevar a cabo tareas de configuración y ajustes del sistema. Los administradores tienen el control total sobre todas las funciones y características de la aplicación.

Al establecer roles y permisos específicos para cada tipo de usuario, garantizamos un entorno seguro y organizado. Los usuarios registrados pueden realizar acciones relacionadas con sus propios anuncios, los editores tienen la capacidad de mantener las categorías y subcategorías, mientras que los administradores tienen el poder de gestionar todos los aspectos del sitio.

La implementación de roles y permisos en nuestra aplicación de venta de artículos de segunda mano nos permite asignar niveles de acceso y funciones específicas a cada tipo de usuario. Esto asegura un entorno controlado y seguro, promoviendo una experiencia fluida y confiable para todos los usuarios involucrados en el proceso de compra y venta.

## Laravel Permissions

En el desarrollo de aplicaciones web, es común necesitar un sistema de gestión de permisos que permita controlar el acceso a diferentes partes de la aplicación según los roles y privilegios de los usuarios. El paquete "Laravel Permissions" es una solución popular y potente para implementar un sistema de permisos en aplicaciones Laravel.

"Laravel Permissions" es un paquete de terceros desarrollado por la comunidad, y está diseñado para ser fácilmente integrado en aplicaciones Laravel existentes. Proporciona una forma estructurada y flexible de definir roles, permisos y relaciones entre ellos.

Este paquete se basa en el uso de listas de control de acceso (ACL) para determinar qué usuarios tienen acceso a qué recursos y acciones en la aplicación. Con "Laravel Permissions", puedes definir roles personalizados y asignarles permisos específicos. Luego, puedes asignar roles a los usuarios y verificar los permisos en el código para permitir o denegar el acceso a ciertas funcionalidades.

Una de las ventajas de "Laravel Permissions" es su integración con el sistema de autenticación de Laravel. Puedes utilizar las facilidades proporcionadas por Laravel para autenticar a los usuarios y luego usar el paquete para gestionar los permisos de manera coherente y centralizada.

Además, "Laravel Permissions" ofrece una API intuitiva y sencilla de usar. Puedes definir permisos y roles en archivos de configuración o en una base de datos, y acceder a ellos fácilmente en tu aplicación. El paquete también proporciona métodos útiles para comprobar los permisos y realizar acciones condicionales en función de los roles y permisos de los usuarios.

En definitiva, el paquete "Laravel Permissions" es una herramienta valiosa para implementar un sistema de gestión de permisos en aplicaciones Laravel. Ofrece una forma sencilla y flexible de definir roles y permisos, y proporciona métodos para verificar y gestionar los permisos de los usuarios. Al utilizar este paquete, puedes asegurar un control de acceso adecuado y garantizar que los usuarios solo tengan acceso a las funcionalidades y recursos permitidos según sus roles y permisos asignados.

### Instalación y configuración

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