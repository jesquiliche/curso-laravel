---
sidebar_position: 3
---
# Migraciones

## ¿Qué es una migración?

En términos simples, una migración en Laravel es un conjunto de instrucciones que permiten a los desarrolladores crear o modificar la estructura de una base de datos en su aplicación web. En lugar de modificar manualmente la base de datos, los desarrolladores pueden crear archivos de migración que describen los cambios que deben hacerse. Estos archivos de migración se ejecutan automáticamente utilizando comandos de Artisan, lo que permite a los desarrolladores actualizar la estructura de la base de datos de manera controlada y coherente con la evolución de la aplicación. En conclusión, las migraciones son una herramienta útil que permite a los desarrolladores administrar la estructura de la base de datos de manera programática y coherente, lo que puede ahorrar tiempo y reducir errores en la gestión de la base de datos.

Uno de los beneficios clave de utilizar migraciones es el control de versiones. Al utilizar archivos de migración, los desarrolladores pueden mantener un registro de los cambios en la estructura de la base de datos a medida que evoluciona la aplicación. Esto es especialmente útil cuando hay varios desarrolladores trabajando en el mismo proyecto o cuando se realiza un seguimiento de diferentes versiones de la aplicación. Cada archivo de migración se puede etiquetar con un número de versión, lo que ayuda a los desarrolladores a realizar un seguimiento de los cambios y a asegurarse de que todos los miembros del equipo estén trabajando con la misma versión de la base de datos.

Otro beneficio importante de las migraciones es que pueden ahorrar tiempo y reducir errores en la gestión de la base de datos. En lugar de tener que modificar manualmente la base de datos cada vez que se realizan cambios en la estructura de la base de datos, los desarrolladores pueden crear archivos de migración que describen los cambios que deben hacerse. Estos archivos de migración se pueden ejecutar automáticamente utilizando comandos de Artisan, lo que ahorra tiempo y reduce la posibilidad de errores humanos.

Además, las migraciones en Laravel también son muy flexibles. Los desarrolladores pueden crear migraciones para agregar nuevas tablas, modificar columnas existentes, agregar restricciones de clave foránea, crear índices, eliminar tablas y mucho más. Cada migración se compone de dos métodos principales: el método "up" que describe los cambios que deben realizarse en la base de datos y el método "down" que describe cómo deshacer esos cambios.

:::info Cómo funcionan
Las migraciones en Laravel funcionan de la siguiente manera:

1. Los desarrolladores crean archivos de migración en PHP que describen los cambios que se deben hacer en la estructura de la base de datos. Estos archivos de migración se almacenan en el directorio `database/migrations` de la aplicación Laravel.

2. Cada archivo de migración se compone de dos métodos principales: el método `up`, que describe los cambios que deben realizarse en la base de datos, y el método `down`, que describe cómo deshacer esos cambios.

3. Cuando se ejecuta el comando `php artisan migrate`, Laravel ejecuta cada archivo de migración que aún no se ha ejecutado en la base de datos. Para hacer esto, Laravel mantiene un registro de las migraciones que ya se han ejecutado en la base de datos y compara este registro con los archivos de migración disponibles. Si encuentra un archivo de migración que aún no se ha ejecutado, Laravel ejecuta el método `up` de ese archivo de migración para realizar los cambios en la base de datos.

4. Si es necesario deshacer una migración, se puede ejecutar el comando `php artisan migrate:rollback`, que ejecutará el método `down` de la última migración que se ejecutó, deshaciendo los cambios realizados en la base de datos. Si se necesita deshacer varias migraciones, se puede utilizar el comando `php artisan migrate:rollback --step=N`, donde `N` es el número de migraciones que se deben deshacer.
:::

Laravel proporciona algunas migraciones por defecto que se ejecutan al crear un nuevo proyecto con el comando `laravel new` o al instalar Laravel mediante Composer. Estas migraciones por defecto se encuentran en el directorio `database/migrations` del proyecto Laravel.

Las migraciones por defecto de Laravel son las siguientes:

1. `create_users_table.php`: Esta migración crea la tabla `users` en la base de datos. La tabla `users` contiene los campos `id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at` y `updated_at`.

2. `create_password_resets_table.php`: Esta migración crea la tabla `password_resets` en la base de datos. La tabla `password_resets` contiene los campos `email`, `token` y `created_at`.

3. `create_failed_jobs_table.php`: Esta migración crea la tabla `failed_jobs` en la base de datos. La tabla `failed_jobs` se utiliza para almacenar información sobre trabajos fallidos en la cola de trabajos de Laravel.

Todas estas migraciones están diseñadas para ser ejecutadas en orden. En otras palabras, `create_users_table.php` debe ejecutarse antes que `create_password_resets_table.php`, ya que la tabla `password_resets` depende de la existencia de la tabla `users`. 

Es importante destacar que estas migraciones por defecto pueden ser modificadas o eliminadas según las necesidades del proyecto. Por ejemplo, se puede agregar campos adicionales a la tabla `users` o eliminar la tabla `failed_jobs` si no se va a utilizar la cola de trabajos en el proyecto. Además, los desarrolladores pueden crear sus propias migraciones para modificar la estructura de la base de datos de acuerdo con las necesidades específicas de la aplicación.

***Código de la migración correspondiente a la tabla Users***

```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
```

Esta migración crea la tabla `users` con varios campos comunes como `id`, `name`, `email`, `password`, `remember_token` y `timestamps`. El método `up()` se utiliza para crear la tabla, mientras que el método `down()` se utiliza para revertir la creación de la tabla. 

Este archivo se guarda en el directorio `database/migrations` y se ejecutará cuando se ejecute el comando `php artisan migrate` en la línea de comandos. Si ya existe una tabla `users`, Laravel no volverá a crearla, pero si faltan campos nuevos, los agregará según se describen en la migración.

Este es solo un ejemplo básico de una migración de tabla en Laravel. Las migraciones pueden ser mucho más complejas y personalizadas según las necesidades de la aplicación.

## Modelo ER
Este es el modelo entidad/relación de nuestra BB.DD.

![Mi imagen](/img/modelo.png)

:::info Análisis funcional

¡Claro! A continuación te describo todas las tablas y sus relaciones:

1. **Users**: Esta tabla almacena la información de los usuarios que utilizan la aplicación, como su nombre, correo electrónico, contraseña y fecha de registro. Cada usuario tiene un identificador único (ID) que se utiliza para relacionarlos con otras tablas.

2. **Anuncios**: Esta tabla almacena la información de los anuncios que los usuarios publican, como el título, la descripción, el precio y la fecha de publicación. Cada anuncio tiene un ID único que se utiliza para relacionarlo con otras tablas.

3. **Categorías**: Esta tabla almacena la información de las categorías de los anuncios, como "vehículos", "hogar", "electrónica", etc. Cada categoría tiene un ID único que se utiliza para relacionarla con los anuncios.

4. **Tags**: Esta tabla almacena la información de las etiquetas que los usuarios pueden agregar a sus anuncios para describirlos con más detalle, como "nuevo", "usado", "en buen estado", etc. Cada etiqueta tiene un ID único que se utiliza para relacionarla con los anuncios.

5. **Anuncio-Tag**: Esta tabla relaciona los anuncios con las etiquetas que se les han asignado. Debido a que un anuncio puede tener múltiples etiquetas y una etiqueta puede estar asociada con múltiples anuncios, la relación entre estas dos tablas es de muchos a muchos. Esta tabla tiene dos columnas, una para el ID del anuncio y otra para el ID de la etiqueta.

6. **Estados**: Esta tabla almacena la información del estado de los artículos. 

En resumen, la tabla de usuarios está relacionada con la tabla de anuncios a través de una relación uno a muchos, la tabla de anuncios está relacionada con la tabla de categorías a través de una relación uno a muchos, la tabla de etiquetas(tagss) está relacionada con la tabla de anuncios a través de una relación muchos a muchos, y la tabla de estados está relacionada con la tabla anuncios a través de relaciones uno a muchos.

:::

## Creación de relaciones

En Laravel, puedes crear relaciones entre tablas usando migraciones. Aquí hay un ejemplo de código que muestra cómo crear una relación de uno a muchos:
```js
<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('body');
            $table->unsignedInteger('user_id');
            $table->timestambash();
            
            $table->foreign('user_id')
                  ->references('id')->on('users')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
?>
```
:::tip Explicación
En este ejemplo, se está creando una tabla posts con una columna user_id que hace referencia a la columna id en la tabla users. La opción onDelete('cascade') indica que si un usuario es eliminado, sus publicaciones también deben ser eliminadas.

Luego de crear la migración, debes ejecutar el comando php artisan migrate para aplicar los cambios en la base de datos. Para más información consulte [la documentació oficial](httbash://laravel.com/docs/9.x/readme)
:::

## ¿Qué es una migración?

Una **migración** en Laravel es un archivo de PHP que describe una operación de base de datos, como la creación de una tabla o la modificación de una columna existente. Las migraciones permiten que los desarrolladores gestionen los cambios en la estructura de la base de datos de manera sencilla y segura, ya que todos los cambios se realizan a través de archivos que se pueden controlar con un sistema de control de versiones como Git.

Cuando se ejecutan las migraciones, Laravel las aplica automáticamente a la base de datos mediante una serie de comandos SQL. Esto garantiza que la estructura de la base de datos sea la misma en todas las instancias del proyecto, ya sea en un entorno de desarrollo local, en un servidor de pruebas o en producción.

Además, las migraciones también proporcionan un mecanismo para revertir los cambios en la base de datos, lo que es útil en caso de que se deban hacer cambios en la estructura de la base de datos y luego se deba revertir a una versión anterior.

En conclusión, las migraciones en Laravel son una herramienta esencial para el desarrollo de aplicaciones que requieren una gestión de base de datos robusta y fácil de usar.
:::tip Para saber más
Para más información consulte [la documentación oficial de Laravel.](httbash://laravel.com/docs/9.x/migrations#generating-migrations)
:::

## Generando migraciones en Laravel

Tecle el siguiente comando para crear la migración de la tabla categorías.

```bash
php artisan make:migration create_categorias_table
```

Para generar una migración en Laravel 10, puedes usar el comando Artisan make:migration:

Abre la terminal en la raíz de tu proyecto Laravel
Ejecuta el siguiente comando: 
```bash title="Como generar una migración"
php artisan make:migration NombreDeLaMigracion --create=nombre_de_la_tabla
```
Donde NombreDeLaMigracion es el nombre que le quieres dar a la migración y nombre_de_la_tabla es el nombre de la tabla que se creará en la base de datos.

Esto creará un archivo de migración en la carpeta database/migrations con un nombre similar a yyyy_mm_dd_hhmmss_NombreDeLaMigracion.php.

Luego, puedes editar ese archivo para definir las columnas que deseas agregar a la tabla. Finalmente, ejecuta el comando php artisan migrate para aplicar las migraciones a la base de datos.

## Definiendo las tablas de la BB.DD

Para los ejemplos de este tutorial utilizaremos las siguientes migraciones. Puede obtener el código del repositorio de github especificado en la introducción de este curso.

:::info Importante
  
- Es importante seguir una nomenclatura coherente y clara para los nombres de las tablas y de los campos en las migraciones.

- Cuando se hace referencia a otra tabla en un campo, se debe asegurar que ese campo tenga el mismo tipo de datos y longitud que la clave primaria de la tabla referenciada. Por ejemplo, si se hace referencia a una tabla "users" y su clave primaria es un campo "id" de tipo "integer" y longitud "unsigned" de 10, entonces el campo referenciado debería tener el mismo tipo y longitud.

- Al crear una tabla, se debe definir siempre una clave primaria. Si no se define explícitamente, Laravel agregará automáticamente un campo "id" como clave primaria.

- Es recomendable crear primero las tablas que tienen claves primarias, luego las tablas que tienen claves foráneas que apuntan a esas tablas, y finalmente las tablas que tienen relaciones con ellas. Es importante seguir este orden ya que si se intenta crear una clave foránea hacia una tabla que aún no tiene una clave primaria, la migración fallará. Por eso, es importante planificar y diseñar cuidadosamente la estructura de la base de datos antes de comenzar a crear las migraciones, para asegurarse de que se cumplan todas las dependencias de las tablas.

- Es buena práctica agregar comentarios en las migraciones para explicar su propósito y detalles importantes. Esto puede ayudar a otros desarrolladores a entender rápidamente lo que hace cada migración en particular.

- Cuando se crea una clave foránea, se debe asegurar que exista un índice en la columna referenciada para mejorar el rendimiento de las consultas. Esto se puede lograr usando el método `index()` en la migración que crea la columna referenciada.

- Es importante asegurarse de que las migraciones se hayan ejecutado correctamente antes de proceder a la siguiente fase del desarrollo. Se pueden usar comandos de Artisan para verificar el estado de las migraciones, como `php artisan migrate:status` para ver la lista de migraciones ejecutadas y pendientes, o `php artisan migrate:rollback` para revertir la última migración.
:::

No te preocupes si de momento no entiendes bien estos conceptos, los iremos desarrollando a medida que avancemos en este curso.

### Tabla categorías
Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de categorías"
php artisan make:migration create_categorias_table
```
Si todo a marchado bien, deberia haberse creado un fichero PHP dentro de la carpeta database/migrations.

:::caution Importante
Siga la convención en sus creaciones de tabla  utilizando **create_nombre_de_tabla_table**, si quiere evitarse problemas en el futuro.
:::

Diríjase al directorio database/migrations y edite al fichero con la migración.

Copie el siguiente código y sustituya el código del fichero.
```js

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categorias', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->unique();
            $table->text('descripcion')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categorias');
    }
};

```
:::tip tipos de datos más comunes en Laravel
En Laravel, los tipos de datos en las migraciones se refieren a las especificaciones de los tipos de columnas en las tablas de la base de datos. Algunos de los tipos de datos más comunes incluyen:

- bigIncrements: Incremento automático de ID grande
- bigInteger: Entero grande
- binary: Datos binarios
- boolean: Valor booleano
- char: Cadena fija de longitud
- date: Fecha
- dateTime: Fecha y hora
- decimal: Número decimal con precisión y escala específicas
- double: Número de punto flotante de doble precisión
- enum: Valor de una lista predefinida
- float: Número de punto flotante
- increments: Incremento automático de ID
- integer: Entero
- json: Datos en formato JSON
- longText: Texto largo
- mediumText: Texto de tamaño medio
- smallInteger: Entero pequeño
- string: Cadena
- text: Texto
- time: Tiempo
- timestamp: Marca de tiempo
- unsignedBigInteger: Entero grande sin signo
- unsignedInteger: Entero sin signo.

Estos son algunos de los tipos de datos más comunes que puedes usar en tus migraciones en Laravel.
:::

El código crea una clase anónima que extiende la clase Migration de Illuminate y define dos métodos: up() y down().

El método up() es invocado cuando se ejecuta el comando php artisan migrate y se utiliza para crear la tabla "categorías" en la base de datos con las siguientes columnas:

id: una columna con clave primaria que se genera automáticamente como una secuencia incremental.
nombre: una columna de tipo cadena con un tamaño máximo de 150 caracteres que es única.
descripcion: una columna de tipo texto.
created_at y updated_at: dos columnas de tipo fecha y hora que se generan automáticamente y se actualizan automáticamente al insertar o actualizar un registro.
El método down() es invocado cuando se ejecuta el comando php artisan migrate:rollback y se utiliza para eliminar la tabla "categorías".

### Tabla subcategorías

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de categorías"
php artisan make:migration create_categorias_table
```
Diríjase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguiente código:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subcategorias', function (Blueprint $table) {
            $table->id();
            $table->string("nombre",150)->unique();
            $table->text("descripcion");
            $table->text("imagen")->nullable();
            $table->unsignedBigInteger("categoria_id");
            $table->foreign("categoria_id")->references("id")->on("categorias");
            $table->timestambash();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subcategorias');
    }
};
```
Este código define una migración en Laravel. Una migración es un archivo que contiene instrucciones para crear, modificar o eliminar tablas en la base de datos. Estos son los pasos que sigue:

1. Se importan las clases `Migration`, `Blueprint` y `Schema` para poder utilizarlas dentro de la migración.

2. Se retorna una nueva instancia anónima de la clase `Migration`. Esto se utiliza para poder escribir una migración en una sola línea de código y sin tener que nombrar explícitamente la clase.

3. Dentro de la clase anónima, se define el método `up()`, el cual es llamado cuando se ejecuta la migración. Este método se encarga de crear la tabla `subcategorias`.

4. Se llama al método `create` de la clase `Schema`, el cual recibe como argumento el nombre de la tabla que se quiere crear y una función anónima que define las columnas de la tabla. En este caso, se define la columna `id` como un `unsigned big integer` autoincremental, la columna `nombre` como una cadena de texto de máximo 150 caracteres y se establece una restricción de unicidad para las columnas `id` y `nombre`. También se definen las columnas `descripcion`, `imagen` y `categoria_id`, donde la última de ellas es una clave foránea que referencia la columna `id` de la tabla `categorias`.

5. Finalmente, se define el método `down()`, el cual se encarga de revertir los cambios realizados en el método `up()`. En este caso, simplemente se elimina la tabla `subcategorias` utilizando el método `dropIfExists` de la clase `Schema`.

:::info Importante

Una Foreign Key (FK) es una columna o conjunto de columnas en una tabla que hace referencia a la Primary Key (PK) de otra tabla. Las FK se utilizan para establecer relaciones entre dos o más tablas en una base de datos relacional.

La importancia de las FK radica en que nos permiten mantener la integridad de los datos en la base de datos, al evitar que se inserten registros con valores que no existen en la tabla referenciada. Además, también nos permiten realizar consultas entre tablas relacionadas, lo que nos da la capacidad de obtener información más precisa y relevante.

Un ejemplo en Laravel de cómo se crea una FK en una migración sería el siguiente:

Supongamos que tenemos dos tablas: `posts` y `users`, donde un `post` pertenece a un `user`. En este caso, tendríamos una relación uno a muchos, donde un usuario puede tener varios posts, pero un post solo puede pertenecer a un usuario.

Para crear esta relación en Laravel, en la migración de la tabla `posts` tendríamos que añadir un campo que haga referencia a la PK de la tabla `users`, como se muestra a continuación:

```php
Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->text('content');
    $table->unsignedBigInteger('user_id');
    $table->timestamps();

    $table->foreign('user_id')->references('id')->on('users');
});
```

En este ejemplo, el campo `user_id` de la tabla `posts` es una FK que hace referencia a la PK `id` de la tabla `users`. Esto significa que cuando se inserte un nuevo registro en la tabla `posts`, el valor del campo `user_id` debe existir en la tabla `users`.

Además, al añadir la FK mediante la función `foreign()`, también estamos definiendo una relación entre las tablas `posts` y `users` en Laravel, lo que nos permitirá acceder fácilmente a los posts de un usuario específico, por ejemplo:

```php
$user = User::find(1);
$posts = $user->posts;
```

Esta consulta nos devolverá todos los posts del usuario con id igual a 1.
:::

### Estados

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estados', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estados');
    }
};
```
Esta migración crea una nueva tabla llamada "estados" en la base de datos usando Laravel's Schema Builder. La tabla tiene tres columnas: "id" (la clave principal), "nombre" (que contiene el nombre del estado) y "timestamps" (que contiene los registros de fecha y hora de creación y actualización de cada fila). La migración se utiliza para configurar la estructura de la tabla en la base de datos y se puede ejecutar mediante el comando "php artisan migrate" en la terminal. Además, la migración tiene una función "down()" que elimina la tabla "estados" de la base de datos en caso de que se desee deshacer la migración en el futuro.

### Provincias

```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('provincias', function (Blueprint $table) {
            $table->string('codigo',2)->primary();
            $table->string('nombre');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('provincias');
    }
};
```
Esta migración crea la tabla `provincias` con tres columnas: `codigo`, `nombre` y `timestamps`. La columna `codigo` es de tipo `string` y tiene una longitud máxima de 2 caracteres, se define como clave primaria de la tabla. La columna `nombre` también es de tipo `string` y almacena el nombre de la provincia. La columna `timestamps` es opcional y se utiliza para registrar la fecha y hora de creación y actualización de cada registro en la tabla.

Esta migración permite almacenar información sobre las provincias, como su código y nombre, en una tabla de base de datos que puede ser consultada y actualizada mediante consultas SQL o Eloquent, el ORM de Laravel. Además, al utilizar las herramientas de migración proporcionadas por Laravel, esta tabla se puede crear y eliminar fácilmente junto con cualquier otra tabla relacionada con ella.

### Anuncios

```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('anuncios', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->text('description')->nullable();
            $table->text('imagen')->nullable();
            $table->decimal('precio', 10, 2)->default(0);
            $table->unsignedBigInteger("user_id");
            $table->foreign('user_id')->references('id')->on('users');
            $table->unsignedBigInteger('subcategoria_id');
            $table->string('telefono');
            $table->foreign('subcategoria_id')->references('id')->on('subcategorias');
            $table->unsignedBigInteger('estado_id');
            $table->foreign('estado_id')->references('id')->on('estados');
            $table->string('provincia',2);
            $table->string('cod_postal',5)->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anuncios');
    }
};
```
Esta migración crea una tabla llamada `anuncios` que contiene información sobre los anuncios publicados en un sitio web. La tabla tiene las siguientes columnas:

- `id`: clave primaria autoincremental.
- `titulo`: el título del anuncio.
- `description`: una descripción más detallada del anuncio, es un campo opcional que permite nulos.
- `imagen`: una imagen asociada al anuncio, también es un campo opcional que permite nulos.
- `precio`: el precio del artículo, con un máximo de 10 dígitos y 2 decimales.
- `user_id`: la clave foránea del usuario que publicó el anuncio.
- `subcategoria_id`: la clave foránea de la subcategoría a la que pertenece el anuncio.
- `telefono`: el número de teléfono del anunciante.
- `estado_id`: la clave foránea del estado del artículo (nuevo, usado, etc).
- `provincia`: el código de dos letras de la provincia en la que se encuentra el artículo.
- `cod_postal`: el código postal de la ubicación del artículo.
- `timestamps`: dos columnas `created_at` y `updated_at` para registrar las fechas de creación y actualización de los registros.

Esta migración también crea las claves foráneas necesarias y las restricciones de integridad referencial para mantener la coherencia de los datos en la base de datos. La migración se puede revertir eliminando la tabla `anuncios`.

### Poblaciones

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('poblaciones', function (Blueprint $table) {
    
            $table->string("codigo",5)->primary();
            $table->string("nombre");
            $table->string("provincia_cod",2);
        
            $table->foreign("provincia_cod")->on("provincias")->references("codigo");
            $table->foreign("codigo")->on("anuncios")->references("cod_postal");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('poblacions');
    }
};
```
Esta migración crea la tabla `poblaciones` con tres columnas: `codigo`, `nombre` y `provincia_cod`. La columna `codigo` se define como clave primaria y como una cadena de longitud máxima de 5 caracteres. La columna `nombre` es una cadena que contiene el nombre de la población. La columna `provincia_cod` es una cadena que hace referencia a la columna `codigo` en la tabla `provincias`. 

Además, se definen dos restricciones de clave externa en la tabla. La primera restricción establece que la columna `provincia_cod` es una clave externa que hace referencia a la columna `codigo` en la tabla `provincias`. La segunda restricción establece que la columna `codigo` es una clave externa que hace referencia a la columna `cod_postal` en la tabla `anuncios`.

En resumen, esta migración crea una tabla `poblaciones` para almacenar información sobre las poblaciones, y establece relaciones de clave externa con las tablas `provincias` y `anuncios`.

### Tags

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tags');
    }
}
```
La migración `CreateTagsTable` crea la tabla `tags` con tres columnas: `id`, `name` y `timestamps`. La columna `id` es una clave primaria autoincremental, la columna `name` es una cadena de caracteres que almacena el nombre del tag y la columna `timestamps` es un registro de la fecha y hora de la creación y modificación de la entrada de la tabla. 

La migración tiene una función `up()` que ejecuta la creación de la tabla utilizando el método `create` de la fachada `Schema`. Y una función `down()` que deshace la migración, eliminando la tabla `tags` utilizando el método `dropIfExists` de la fachada `Schema`.

### Anuncio_tag

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('anuncio_tag', function (Blueprint $table) {
            
            $table->unsignedBigInteger('anuncio_id');
            $table->unsignedBigInteger('tag_id');
            $table->primary('anuncio_id','tag_id');
            $table->timestamps();
            $table->foreign('anuncio_id')->references('id')->on('anuncios')->onDelete('cascade');
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
        });
    }
    
};
```
Esta migración crea una tabla pivote llamada `anuncio_tag` que se utiliza para almacenar la relación muchos a muchos entre los anuncios y los tags. La tabla tiene dos columnas que son claves foráneas que hacen referencia a las tablas `anuncios` y `tags`. Ambas claves foráneas están configuradas para eliminar en cascada, lo que significa que si se elimina un registro en la tabla principal (`anuncios` o `tags`), también se eliminarán los registros relacionados en la tabla pivote (`anuncio_tag`). La tabla pivote también tiene una marca de tiempo para registrar cuándo se creó o actualizó la relación entre un anuncio y un tag.

### Fotos

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fotos', function (Blueprint $table) {
            $table->id();
            $table->string('path')->unique();
            $table->unsignedBigInteger("anuncio_id");
            $table->foreign("anuncio_id")->references("id")->on("anuncios");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fotos');
    }
};
```
Esta migración crea una tabla llamada "fotos" que almacena las fotos de los anuncios. La tabla tiene los siguientes campos:

- "id": clave primaria autoincremental.
- "path": ruta del archivo de imagen. Este campo es único, lo que significa que no puede haber dos fotos con la misma ruta en la tabla.
- "anuncio_id": clave foránea que hace referencia a la tabla "anuncios", indicando a qué anuncio pertenece cada foto.
- "timestamps": dos campos que registran la fecha y hora de creación y actualización de cada registro.

En resumen, esta migración crea una tabla que permite almacenar múltiples fotos para cada anuncio.s
