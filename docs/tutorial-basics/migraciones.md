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

![Mi imagen](/assets/images/modelo.png)

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

Para generar una migración en Laravel 9, puedes usar el comando Artisan make:migration:

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
use Illuminate\Validation\Rules\Unique;

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
            $table->string("nombre",150)->Unique();
            $table->text("descripcion");
            $table->text("imagen")->nullable();
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
imagen: una columna de tipo texto que puede ser nula.
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
Este código define una migración en Laravel. Una migración es un archivo que contiene instrucciones para crear, modificar o eliminar tablas en la base de datos.

El código crea una clase anónima que extiende la clase Migration de Illuminate y define dos métodos: up() y down().

El **método up()** es invocado cuando se ejecuta el comando php artisan migrate y se utiliza para crear la tabla "subcategorias" en la base de datos con las siguientes columnas:

- **id**: una columna con clave primaria que se genera automáticamente como una secuencia incremental.
- **nombre:** una columna de tipo cadena con un tamaño máximo de 150 caracteres que es única.
- **descripcion:** una columna de tipo texto.
- **imagen:** una columna de tipo texto que puede ser nula.
- **categoria_id:** una columna sin signo que representa un identificador de categoría.

La columna categoria_id está definida como una clave foránea que se refiere a la columna id de la tabla categorias.
- **created_at y updated_at:** dos columnas de tipo fecha y hora que se generan automáticamente y se actualizan automáticamente al insertar o actualizar un registro.
El **método down()** es invocado cuando se ejecuta el comando php artisan migrate:rollback y se utiliza para eliminar la tabla "subcategorias".

### Tabla ivas

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de categorias"
php artisan make:migration create_ivas_table
```
Diríjase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
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
        Schema::create('ivas', function (Blueprint $table) {
            $table->id();
            $table->float("tanto_porciento",4,2);
            $table->string("nombre",50);
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
        Schema::dropIfExists('ivas');
    }
};
```

### Tabla productos

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de categorias"
php artisan make:migration create_productos_table
```
Diríjase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
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
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string("nombre")->unique();
            $table->text("descripcion");
            $table->float("precio");
            $table->text("imagen")->nullable();
            $table->unsignedBigInteger("subcategoria_id");
            $table->foreign("subcategoria_id"
            )->references("id")->on("subcategorias");
            $table->unsignedBigInteger("iva_id");
            $table->foreign("iva_id")->references("id")->on("ivas");
            $table->unsignedBigInteger("marca_id");
            $table->foreign("marca_id")->references("id")->on("marcas");
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
        Schema::dropIfExists('productos');
    }
};


```
### Tabla ofertas

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de ofertas"
php artisan make:migration create_ofertas_table
```
Diríjase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
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
        Schema::create('ofertas', function (Blueprint $table) {
            $table->id();
            $table->float("precio");
            $table->string("descripcion");
            $table->date("fecha_ini");
            $table->date("fecha_fin");
            $table->unsignedBigInteger("producto_id");
            $table->foreign("producto_id")->references("id")->on("productos");

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
        Schema::dropIfExists('ofertas');
    }
};

```
### Tabla proveedores

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de proveedores"
php artisan make:migration create_proveedores_table
```
Diríjase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
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
        Schema::create('proveedores', function (Blueprint $table) {
            $table->id();
            $table->string("nif",9);
            $table->string("nombre");
            $table->string("cod_provincia",2);
            $table->string("cod_postal",5);
            $table->string("calle");
            $table->integer("numero");
            $table->text("notas")->nullable();
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
        Schema::dropIfExists('proveedores');

    }
};
```

### Tabla producto_proveedor

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de producto_proveerdor"
php artisan make:migration create_producto_proveedor_table
```
Diríjase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

:::tip información
Esta tabla se utiliza para crear una relación mucho a muchos entre productos y proveedores.
:::


Sustituya el código generado por el siguinte código:
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
        Schema::create('producto_proveedor', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("producto_id");
            $table->unsignedBigInteger("proveedor_id");
            $table->foreign("producto_id")->references("id")->on("productos");
            $table->foreign("proveedor_id")->references("id")->on("proveedores");
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
        Schema::dropIfExists('producto_proveedor');
    }
};
```
La migración crea una tabla llamada "producto_proveedor" en la base de datos que tendrá los siguientes campos:

- **id:** campo de identificación (clave primaria) que se generará automáticamente
- **producto_id:** campo que almacena la identificación de un producto
- **proveedor_id:** campo que almacena la identificación de un proveedor
- **timestambash:** dos campos de tiempo que registran la fecha y hora de creación y actualización de cada registro en la tabla.

Además, establece relaciones entre la tabla "producto_proveedor" y las tablas "productos" y "proveedores" mediante claves foráneas. La función "up" se utiliza para aplicar la migración y crear la tabla, mientras que la función "down" se utiliza para revertir la migración y eliminar la tabla.

### Tabla provincias

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de provincias"
php artisan make:migration create_provincias_table
```
Diríjase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
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
            $table->id();
            $table->string("codigo",2)->unique();
            $table->string("nombre");
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
        Schema::dropIfExists('provincias');
    }
};

```
La migración crea una tabla llamada provincias donde se guaradaran todas las provincias de España.

### Tabla poblaciones

Para crear la migración ejecute el siguiente comando desde su terminal.

```bash title="Migración de poblaciones"
php artisan make:migration create_poblaciones_table
```
Diríjase el directorio database/migrations y siga el mismo procedimiento que el ejemplo anterior.

Sustituya el código generado por el siguinte código:
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
        Schema::create('poblaciones', function (Blueprint $table) {
            $table->id();
            $table->string("codigo",5)->unique();
            $table->string("nombre");
            $table->string("provincia_cod",2);
            $table->foreign("provincia_cod")->references("codigo")->on("provincias");
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
        Schema::dropIfExists('poblaciones');
    }
};

```
La migración crea una tabla llamada poblaciones donde se guaradaran todas las provincias de España.

### Modificando la tabla proveedores

En la siguiente migración modificaremos la tabla proveedores.

```bash title="Modficación de la tabla proveedores"
php artisan make:migration add_foreign_key_proveedores_table
```
Sustituya el código generador por el siguiente código:

```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
    
        DB::statement("CREATE OR REPLACE
        VIEW `v_productos` AS
        SELECT 
            `p`.`id` AS `id`,
            `p`.`nombre` AS `nombre`,
            `p`.`descripcion` AS `descripcion`,
            `p`.`iva_id` AS `iva_id`,
            `s`.`nombre` AS `subcategoria`,
            `c`.`nombre` AS `categoria`,
            `m`.`nombre` AS `marca`,
            `p`.`imagen` AS `imagen`
        FROM
            (((`productos` `p`
            LEFT JOIN `subcategorias` `s` ON ((`p`.`subcategoria_id` = `s`.`id`)))
            JOIN `categorias` `c` ON ((`c`.`id` = `s`.`categoria_id`)))
            JOIN `marcas` `m` ON ((`m`.`id` = `p`.`marca_id`))) ORDER BY CATEGORIA,SUBCATEGORIA;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW v_productos;');
    }
};

```
 La migración modifica la tabla "proveedores" agregándole una relación con la tabla "poblaciones" mediante una clave foránea. La columna "cod_postal" de la tabla "proveedores" se vincula con la columna "codigo" de la tabla "poblaciones". 

## Creación de vistas

### Vista v_productos
Ejecute la siguiente orde en su consola o terminal:

```bash title="Creación vista v_productos"
php artisan make:migration create_view_productos
```
:::tip Explicación de la vista
La migración crea una vista llamada "v_productos" en la base de datos. La vista es una selección de información de varias tablas (productos, subcategorias, categorias y marcas) con una combinación de JOINs y proyecciones de columnas. La función "up" se utiliza para crear la vista, mientras que la función "down" se utiliza para eliminar la vista en caso de que sea necesario revertir la migración. La cláusula "ORDER BY" ordena los resultados de la vista por categoría y subcategoría.
:::

Sustituya el código generado por el siguiente código:
```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
    
        DB::statement("CREATE OR REPLACE
        VIEW `v_productos` AS
        SELECT 
            `p`.`id` AS `id`,
            `p`.`nombre` AS `nombre`,
            `p`.`descripcion` AS `descripcion`,
            `p`.`iva_id` AS `iva_id`,
            `s`.`nombre` AS `subcategoria`,
            `c`.`nombre` AS `categoria`,
            `m`.`nombre` AS `marca`,
            `p`.`imagen` AS `imagen`
        FROM
            (((`productos` `p`
            LEFT JOIN `subcategorias` `s` ON ((`p`.`subcategoria_id` = `s`.`id`)))
            JOIN `categorias` `c` ON ((`c`.`id` = `s`.`categoria_id`)))
            JOIN `marcas` `m` ON ((`m`.`id` = `p`.`marca_id`))) ORDER BY CATEGORIA,SUBCATEGORIA;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW v_productos;');
    }
};
```
### Vista v_ofertas

Ejecute el siguiente comando en su terminal:

```bash title="Creación vista v_ofertas"
php artisan make:migration create_view_ofertas
```
:::tip Explicación de la vista
Este código define una migración en PHP para la creación y eliminación de una vista en una base de datos relacional. La vista se llama "v_ofertas" y se crea a partir de una unión de los datos de las tablas "v_productos" y "ofertas". La vista incluirá las siguientes columnas: "id", "nombre", "descripción", "iva_id", "subcategoría", "categoría", "marca", "imAGEN", "descripción_oferta" y "id_oferta". La función "down" se utiliza para eliminar la vista.
:::

```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
    
        DB::statement("CREATE OR REPLACE
        ALGORITHM = UNDEFINED 
        DEFINER = `admin`@`localhost` 
        SQL SECURITY DEFINER
    VIEW `v_ofertas` AS
        SELECT 
            `v`.`id` AS `id`,
            `v`.`nombre` AS `nombre`,
            `v`.`descripcion` AS `descripcion`,
            `v`.`iva_id` AS `iva_id`,
            `v`.`subcategoria` AS `subcategoria`,
            `v`.`categoria` AS `categoria`,
            `v`.`marca` AS `marca`,
            `v`.`imAGEN` AS `imAGEN`,
            `o`.`descripcion` AS `descripcio_oferta`,
            `o`.`id` AS `id_oferta`
        FROM
            (`v_productos` `v`
            JOIN `ofertas` `o` ON ((`v`.`id` = `o`.`producto_id`)));");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement("DROP VIEW v_ofertas");
    }
};
```

### Vista v_proveedor

Ejecute el siguiente comando desde su terminal:

```bach
php artisan 

```js
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        
        DB::statement("CREATE OR REPLACE v_proveedores AS SELECT pr.*,pob.nombre as poblacion,pro.nombre as provincia 
        FROM comercio.proveedores pr INNER JOIN poblaciones pob ON pr.cod_postal=pob.codigo
        INNER JOIN provincias pro ON pro.codigo=pob.provincia_cod;");
    }
    

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('v_proveedores');
    }
};
?>
```
Este código crea una migración de Laravel para crear una vista llamada **"v_proveedores"**. La vista se basa en una consulta SQL que une tres tablas: **"proveedores", "poblaciones" y "provincias"**. La vista mostrará información de los proveedores con los nombres de la población y la provincia correspondiente.

El método "up" se ejecuta cuando se ejecuta el comando **"php artisan migrate"** para aplicar la migración y crear la vista. El método "down" se ejecuta cuando se ejecuta el comando **"php artisan migrate:rollback"** para revertir la migración y eliminar la vista.
## ¿Cómo ejecutar las migraciones?

Desde la terminal ejecutar el siguiente comando:

```bash title="Creación vista v_ofertas"
php artisan make:migration create_view_proveedor
```

```bash
php artisan migrate
```
:::tip Opciones del comando
php artisan migrate es un comando que se utiliza en Laravel para realizar migraciones en la base de datos. Con este comando, Laravel crea o modifica las tablas en la base de datos según las definiciones especificadas en las migraciones.

Además, también existen otros comandos relacionados con migraciones en Laravel:

- **php artisan migrate:install:** Este comando crea la tabla de migraciones en la base de datos.

- **php artisan migrate:rollback:** Este comando revierte la última migración realizada.

- **php artisan migrate:status:** Este comando muestra el estado de las migraciones, es decir, si están pendientes, realizadas o revertidas.

- **php artisan migrate:refresh:** Este comando revierte todas las migraciones y las vuelve a ejecutar.

- **php artisan migrate:fresh:** Este  comando borra todas las tablas de la base de datos y crea todas las tablas y vuelve a ejecutar el método up. Se utiliza en sustitución de **refresh** cuando alguna tabla no ha podido borrarse.
- **php artisan migrate:reset:** Este comando revierte todas las migraciones.

Estos son algunos de los comandos más comunes que se utilizan con el fin de gestionar las migraciones en Laravel.
:::
