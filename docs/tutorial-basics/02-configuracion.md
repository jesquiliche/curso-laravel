---
sidebar_position: 3
---
# Instalación y configuración

:::danger Importante
Para poder trabajar con la versión 10 de Laravel debera tener instalada 
la versión de PHP 8.1.
Para comprobar que versión de PHP esta utilizando debera teclear el siguiente
comando en su consola.
```bash
   php -v
```
:::

## Instalar LAMP

Si no dispone de ningún entorno de programación PHP como Laragon, WAMPP, 
puedes instalar XAMPP. Esta aplicación te instalara el lenguaje programación
PHP, el servidor HTTP Apache y la BB.DD MySQL.

Para instalar LAMP en tu máquina, sigue los siguientes pasos:

1. Descarga la versión de XAMPP desde la página oficial: https://www.apachefriends.org/es/download.html.
Recuerda seleccionar el paquete con la versión 8.1

2. Una vez descargado, ejecuta el instalador y sigue las instrucciones. Es posible que te solicite permisos de administrador para instalar algunos componentes.

3. Durante el proceso de instalación, te preguntará qué componentes deseas instalar. Asegúrate de seleccionar Apache, MySQL y PHP.

4. Cuando finalice la instalación, inicia XAMPP. Si estás en Windows, puedes hacerlo desde el menú Inicio. Si estás en Linux, abre una terminal y escribe el siguiente comando: `sudo /opt/lampp/lampp start`.

5. Si todo funciona correctamente, verás que los servicios de Apache y MySQL están activos en el panel de control de XAMPP.

¡Listo! Ahora puedes comenzar a trabajar con LAMP en tu máquina. Recuerda que debes configurar la base de datos de MySQL y las rutas de PHP para que todo funcione correctamente.




## Instalación de Laravel con Jetstream (Modalidad Global)

1. Verificar si tienes instalado Composer: Para instalar Laravel, necesitas tener Composer instalado en tu computadora. Para verificar si lo tienes instalado, abre la terminal (en Windows: Command Prompt o PowerShell) y escribe el siguiente comando:

   ```
   composer --version
   ```

   Si Composer está instalado, se mostrará su versión. Si no está instalado, puedes descargarlo desde [getcomposer.org](https://getcomposer.org/).

2. Instalar Laravel: Para instalar Laravel, abre la terminal y escribe el siguiente comando:

   ```
   composer global require laravel/installer
   ```

   Este comando descargará e instalará Laravel de manera global en tu computadora. Después de la instalación, verifica que Laravel se haya instalado correctamente escribiendo el siguiente comando:

   ```
   laravel --version
   ```

3. Crear un nuevo proyecto de Laravel con Jetstream: Para crear un nuevo proyecto de Laravel con Jetstream, abre la terminal y escribe el siguiente comando:

   ```
   laravel new nombre-del-proyecto --jet
   ```

   Este comando creará un nuevo proyecto de Laravel con Jetstream y todas las dependencias necesarias instaladas.

## Instalación de Laravel con Jetstream (Modalidad Local)

1. Verificar si tienes instalado Composer: Para instalar Laravel, necesitas tener Composer instalado en tu computadora. Para verificar si lo tienes instalado, abre la terminal (en Windows: Command Prompt o PowerShell) y escribe el siguiente comando:

   ```
   composer --version
   ```

   Si Composer está instalado, se mostrará su versión. Si no está instalado, puedes descargarlo desde [getcomposer.org](https://getcomposer.org/).
   ![composer](/img/composer.png)


2. Crear un directorio para el proyecto: Crea un nuevo directorio en tu computadora donde guardarás el proyecto de Laravel.

3. Navegar al directorio del proyecto: Abre la terminal y navega hasta el directorio que acabas de crear.

4. Descargar Laravel con Jetstream: Para descargar Laravel con Jetstream, escribe el siguiente comando en la terminal:

   ```
   composer create-project --prefer-dist laravel/laravel nombre-del-proyecto
   ```

   Este comando descargará Laravel en el directorio del proyecto que acabas de crear.

5. Instalar Jetstream: Para instalar Jetstream, navega hasta el directorio del proyecto en la terminal y escribe el siguiente comando:

   ```
   composer require laravel/jetstream
   ```

   Este comando instalará Jetstream y todas las dependencias necesarias.

6. Ejecutar Jetstream: Para ejecutar Jetstream, escribe el siguiente comando en la terminal:

   ```
   php artisan jetstream:install livewire
   ```

   Este comando instalará Jetstream con el stack de Livewire.

## Configuración de Base de datos

Para configurar las variables de entorno para conectar Laravel con la base de datos, sigue estos pasos:

1. Abre tu proyecto Laravel en tu editor de código preferido.
2. Crea un archivo llamado `.env` en la raíz del proyecto. Si estás utilizando Windows, puedes hacer esto abriendo la línea de comandos, navegando hasta el directorio raíz del proyecto y escribiendo el comando `copy .env.example .env`. Si estás utilizando Mac o Linux, puedes usar el comando `cp .env.example .env`.
3. Abre el archivo `.env` y configura las siguientes variables de entorno:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nombre_de_la_base_de_datos
DB_USERNAME=nombre_de_usuario_de_la_base_de_datos
DB_PASSWORD=contraseña_de_usuario_de_la_base_de_datos
```

4. Asegúrate de reemplazar `nombre_de_la_base_de_datos`, `nombre_de_usuario_de_la_base_de_datos` y `contraseña_de_usuario_de_la_base_de_datos` con los valores correspondientes para tu base de datos.
5. Guarda el archivo `.env`.

Ahora Laravel utilizará estas variables de entorno para conectarse a la base de datos. Si estás utilizando XAMPP o WAMP, asegúrate de que el servicio de MySQL esté ejecutándose en el puerto especificado en la variable `DB_PORT` (por defecto, el puerto es 3306).

Si ya has configurado las variables de entorno pero no estás seguro de si funcionan correctamente, puedes probar la conexión a la base de datos ejecutando el comando `php artisan migrate` en la línea de comandos en la raíz del proyecto. Este comando ejecutará las migraciones de la base de datos y te indicará si hay algún problema de conexión.
:::info
En nuestro ejemplo utilzaremos como base de anuncios, esta debera estar creada antes de continuar con los siguientes pasos.
:::

6. Ejecute el comando php artisan migrate si todavia no lo ha ejecutado.

## Traducir Laravel al español

Laravel se instala por defecto en idioma Ingles, si desea que laravel trabaje en idioma español
deberá seguir los siguientes pasos:

1.- En su archivo **App\config\app.php** debera cambiar la siguiente linea:

```php
 'locale' => 'en',
 ```
 Por esta otra:
```php
 'locale' => 'es',
```
2.- Deberá instalar a traves de composer el paquete Laravel-lang y 
ejecutar los siguientes comandos desde su terminal.

```bash
composer require laravel-lang/common --dev

php artisan lang:add es

php artisan lang:update
```
Con esto ya tendra traducido su aplicación Laravel 10 al Español.


## Iniciar el servidor

Para iniciar el servidor web en Laravel, puedes usar el siguiente comando desde la terminal:

```
php artisan serve
```

Este comando iniciará el servidor en `http://localhost:8000` por defecto. Si deseas especificar un puerto diferente, puedes utilizar la opción `-p` o `--port`, seguido del número de puerto que deseas usar. Por ejemplo, para iniciar el servidor en el puerto 9000, utilizarías el siguiente comando:

```
php artisan serve --port=9000
```

Una vez que el servidor esté en marcha, podrás acceder a tu aplicación Laravel a través del navegador web visitando la dirección `http://localhost:8000` (o la dirección que especificaste al usar la opción `--port`).

Si todo ha ido bien el navegador debera mostrarle una página como esta:
 
 ![laravel](/img/Server.png)

## ¿Qué es Jetstream?

Jetstream es un paquete de Laravel que proporciona una estructura de autenticación y un conjunto de características de seguridad comunes para agilizar el proceso de creación de aplicaciones web. En esencia, Jetstream proporciona una interfaz de usuario y una capa de backend para administrar la autenticación y la autorización de usuarios, así como otras funcionalidades como la verificación de correo electrónico, el restablecimiento de contraseñas, la autenticación de dos factores, el control de acceso a nivel de equipo y mucho más.

Jetstream utiliza el sistema de plantillas de Blade de Laravel para generar vistas preconstruidas y proporciona una arquitectura modular que facilita la personalización y la extensión del paquete. También viene con una integración integrada de Laravel Livewire, lo que permite la construcción de interfaces de usuario dinámicas sin necesidad de escribir JavaScript.

En resumen, Jetstream es una herramienta muy útil para los desarrolladores de Laravel que quieren ahorrar tiempo en la implementación de la autenticación y otras funcionalidades de seguridad comunes en sus aplicaciones web.


## ¿Qué hemos hecho?

 Aquí hay un ejemplo de cómo podría verse un proyecto de Laravel 10 con Jetstream:

Estructura de carpetas:

```
/app
    /Http
        /Controllers
        /Livewire
    /Models
/database
    /migrations
/resources
    /views
    /js
    /scss
```

Migraciones:

```
create_users_table.php
create_password_resets_table.php
create_failed_jobs_table.php
create_teams_table.php
create_team_user_table.php
create_projects_table.php
```

Jetstream incluye modelos y migraciones para usuarios, restablecimiento de contraseñas, trabajos fallidos y equipos. Además, he agregado migraciones para proyectos, que permiten que los usuarios creen y administren proyectos en su equipo.

Controladores:

```
AuthController.php
ProjectController.php
```

El controlador de autenticación viene incluido con Jetstream, y he agregado un controlador de proyectos que maneja la creación, actualización y eliminación de proyectos.

Livewire Components:

```
CreateProjectForm.php
EditProjectForm.php
```

Utilicé Livewire para crear componentes reutilizables que manejan la lógica de creación y edición de proyectos.

Rutas:

```
Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');

    Route::resource('projects', ProjectController::class);
});
```

Las rutas para el controlador de proyectos se definen con `Route::resource()`, lo que genera automáticamente las rutas necesarias para crear, leer, actualizar y eliminar proyectos. También hay una ruta protegida por autenticación para el dashboard del usuario.


