---
sidebar_position: 5
---

# Definición, conceptos y propiedades

## ¿Qué es un modelo?

Los modelos en Laravel y otros frameworks ORM proporcionan una capa de abstracción que permite a los desarrolladores interactuar con la base de datos utilizando un lenguaje de programación orientado a objetos en lugar de SQL. 

Al utilizar un modelo, el desarrollador puede trabajar con los datos de la base de datos como si fueran objetos en lugar de filas en una tabla. Esto hace que el código sea más legible y fácil de mantener, ya que se pueden utilizar nombres de método y propiedades significativos en lugar de nombres de columna en la base de datos.

Además, los modelos permiten definir relaciones entre tablas, como una relación uno a muchos o muchos a muchos. Por ejemplo, si tienes una tabla de usuarios y una tabla de publicaciones, puedes definir una relación en el modelo de usuarios que indica que un usuario tiene muchas publicaciones. Esto facilita el acceso a los datos relacionados y permite realizar consultas complejas con facilidad.

Otra ventaja de utilizar modelos es que Laravel proporciona muchas herramientas integradas para trabajar con ellos. Por ejemplo, puedes utilizar métodos como `all()`, `find()`, `create()` y `delete()` para realizar operaciones comunes en la base de datos con una sintaxis simple y legible. También puedes utilizar el motor de consultas de Laravel para crear consultas complejas utilizando una sintaxis similar a SQL pero más amigable para el lenguaje de programación orientado a objetos.

Como conclusión, los modelos son una parte esencial de la arquitectura de Laravel y otros frameworks ORM. Proporcionan una capa de abstracción que simplifica la interacción con la base de datos y hace que el código sea más legible y fácil de mantener. Además, permiten definir relaciones entre tablas y proporcionan herramientas integradas para trabajar con ellos.

En Laravel, los modelos se utilizan para representar una tabla de la base de datos. El nombre del modelo debe ser el mismo que el nombre de la tabla, pero en singular y en CamelCase. Por ejemplo, si tienes una tabla llamada "users", el modelo correspondiente se llamaría "User".

Laravel utiliza convenciones para relacionar los modelos con las tablas de la base de datos. Por defecto, el modelo busca la tabla con el mismo nombre en plural, pero esta convención se puede cambiar si es necesario. Además, Laravel permite especificar manualmente el nombre de la tabla en caso de que necesites utilizar un nombre diferente.

Una vez que se ha definido el modelo, puedes utilizar los métodos del modelo para interactuar con la tabla correspondiente en la base de datos. Por ejemplo, el método `all()` devuelve una colección de todos los registros de la tabla, el método `find()` busca un registro por su clave primaria, el método `create()` crea un nuevo registro y el método `update()` actualiza un registro existente.

Además, puedes utilizar las relaciones en los modelos para definir relaciones entre las tablas. Por ejemplo, si tienes una tabla de usuarios y una tabla de publicaciones, puedes definir una relación en el modelo de usuarios que indica que un usuario tiene muchas publicaciones. Esto facilita el acceso a los datos relacionados y permite realizar consultas complejas con facilidad.

En conclusión, los modelos en Laravel se relacionan con las tablas de la base de datos de forma automática utilizando convenciones basadas en el nombre del modelo y la tabla. Los modelos permiten interactuar con los datos de la tabla utilizando un lenguaje de programación orientado a objetos y proporcionan herramientas integradas para trabajar con ellos. Además, permiten definir relaciones entre tablas y realizar consultas complejas con facilidad.

## ¿Cómo se relacionan los modelos con las tablas de la base de datos?

En Laravel, los modelos se utilizan para representar una tabla de la base de datos. El nombre del modelo debe ser el mismo que el nombre de la tabla, pero en singular y en CamelCase. Por ejemplo, si tienes una tabla llamada "users", el modelo correspondiente se llamaría "User".

Laravel utiliza convenciones para relacionar los modelos con las tablas de la base de datos. Por defecto, el modelo busca la tabla con el mismo nombre en plural, pero esta convención se puede cambiar si es necesario. Además, Laravel permite especificar manualmente el nombre de la tabla en caso de que necesites utilizar un nombre diferente.

Una vez que se ha definido el modelo, puedes utilizar los métodos del modelo para interactuar con la tabla correspondiente en la base de datos. Por ejemplo, el método `all()` devuelve una colección de todos los registros de la tabla, el método `find()` busca un registro por su clave primaria, el método `create()` crea un nuevo registro y el método `update()` actualiza un registro existente.

Además, puedes utilizar las relaciones en los modelos para definir relaciones entre las tablas. Por ejemplo, si tienes una tabla de usuarios y una tabla de publicaciones, puedes definir una relación en el modelo de usuarios que indica que un usuario tiene muchas publicaciones. Esto facilita el acceso a los datos relacionados y permite realizar consultas complejas con facilidad.
 Los modelos en Laravel se relacionan con las tablas de la base de datos de forma automática utilizando convenciones basadas en el nombre del modelo y la tabla. Los modelos permiten interactuar con los datos de la tabla utilizando un lenguaje de programación orientado a objetos y proporcionan herramientas integradas para trabajar con ellos. Además, permiten definir relaciones entre tablas y realizar consultas complejas con facilidad.

## Cómo se definen los modelos en Laravel

En Laravel, los modelos son clases PHP que representan las tablas de la base de datos y se utilizan para interactuar con los datos en la base de datos. Aquí te muestro cómo definir un modelo en Laravel:

**Paso 1:** Crear un nuevo archivo PHP para el modelo
En la carpeta `app/Models` de tu proyecto Laravel, puedes crear un nuevo archivo PHP para el modelo. Por convención, los modelos en Laravel suelen estar en el namespace `App\Models`. Puedes nombrar el archivo con el nombre del modelo en singular y en notación camelCase. Por ejemplo, si tu modelo representa una tabla de usuarios, puedes crear un archivo llamado `User.php`.

**Paso 2:** Definir la clase del modelo
Dentro del archivo del modelo, debes definir la clase del modelo extendiendo la clase base `Illuminate\Database\Eloquent\Model`. Por ejemplo:

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // Aquí se define la clase del modelo
}
```

**Paso 3:** Definir las propiedades y métodos del modelo
Dentro de la clase del modelo, puedes definir las propiedades y métodos necesarios para interactuar con la tabla de la base de datos. Algunas de las propiedades y métodos más comunes son:

- `$table`: Propiedad que define el nombre de la tabla en la base de datos a la que el modelo está asociado. Por defecto, Laravel asume que el nombre de la tabla es el nombre del modelo en plural en notación snake_case, pero puedes especificar un nombre de tabla diferente si es necesario.

- `$fillable` y `$guarded`: Propiedades que definen los campos que pueden ser llenados masivamente mediante el método `create()` o `update()`. `$fillable` especifica los campos que están permitidos, mientras que `$guarded` especifica los campos que están protegidos y no pueden ser llenados masivamente.

- Relaciones: Puedes definir las relaciones del modelo con otros modelos utilizando los métodos `hasMany()`, `belongsTo()`, `hasManyThrough()`, entre otros. Esto permite establecer relaciones entre tablas de la base de datos y acceder a los registros relacionados de forma fácil y conveniente.

- Otros métodos: También puedes definir otros métodos en el modelo según tus necesidades, como por ejemplo, mutadores y accesores para manipular los datos antes de guardarlos en la base de datos o al acceder a ellos.

**Paso 4:** Utilizar el modelo en el código
Una vez que has definido el modelo, puedes utilizarlo en tu código para interactuar con los datos en la base de datos. Puedes utilizar los métodos del modelo para realizar consultas, insertar, actualizar o eliminar registros en la base de datos de forma sencilla y elegante.

:::info Crear el modelo con artisan
Claro, para crear un modelo en Laravel utilizando Artisan, debes ejecutar el siguiente comando en la terminal en la raíz de tu proyecto:

```
php artisan make:model NombreDelModelo
```

Reemplaza "NombreDelModelo" por el nombre que quieras darle a tu modelo. Una vez ejecutado el comando, se creará un archivo en la carpeta "app/Models" con el nombre que hayas especificado, con el siguiente código básico:

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NombreDelModelo extends Model
{
    use HasFactory;
}
```

A partir de aquí, podrás agregar las propiedades y métodos necesarios para definir la estructura y comportamiento de tu modelo en función de tus necesidades, como hemos veremos en proximos temas.
:::

En conclusión, para definir un modelo en Laravel, necesitas crear un archivo PHP en la carpeta `app/Models`, definir la clase del modelo que extienda de `Illuminate\Database\Eloquent\Model`, y luego definir las propiedades y métodos necesarios para interactuar con los datos en la base de datos. Una vez definido, puedes utilizar el modelo en tu código para interactuar con la base de datos de manera fácil y conveniente.

## Propiedades especiales de los modelos

### protected $table

En Laravel, cada modelo se corresponde con una tabla de la base de datos. Por defecto, Laravel asume que el nombre de la tabla será el nombre del modelo en minúsculas y en plural. Sin embargo, es posible especificar el nombre de la tabla correspondiente a un modelo en particular a través de la propiedad `$table` del modelo.

La propiedad `$table` es una propiedad protegida que se utiliza para definir el nombre de la tabla correspondiente al modelo en particular. Por ejemplo, si tienes un modelo llamado `Book`, y la tabla correspondiente en la base de datos se llama `libros`, puedes especificar el nombre de la tabla en el modelo de la siguiente manera:

```php
class Book extends Model
{
    protected $table = 'libros';
}
```
:::info Importante
Por defecto Laravel si no se especifica esta propiedad, asumira que la tabla
de BB.DD correspondiente es igual al  nombre del modelo más una s al final y en minusculas.
:::

De esta manera, Laravel utilizará la tabla `libros` en lugar de la tabla `books` por defecto.

La propiedad `$table` también es útil si necesitas trabajar con una tabla que no sigue las convenciones de nombres de Laravel o si necesitas trabajar con múltiples conexiones de bases de datos.

La propiedad `$table` es una propiedad protegida de los modelos de Laravel que se utiliza para definir el nombre de la tabla correspondiente al modelo en particular.

### Propiedad fillable

La propiedad `$fillable` es otra propiedad protegida de los modelos que se utiliza para especificar qué atributos de un modelo pueden ser asignados de forma masiva. Cuando se crea un nuevo registro en la base de datos utilizando la función `create()` o la función `fill()`, se pueden asignar múltiples valores a la vez utilizando un arreglo asociativo. Sin embargo, por razones de seguridad, no todos los atributos de un modelo deben ser asignados masivamente.

Por defecto, todos los atributos de un modelo son "protegidos" y no pueden ser asignados masivamente. Para permitir la asignación masiva de un atributo en particular, debes incluirlo en la propiedad `$fillable`. Por ejemplo, si tienes un modelo `User` con los atributos `name`, `email` y `password`, pero solo quieres permitir la asignación masiva del `name` y del `email`, puedes especificar esto en el modelo de la siguiente manera:

```php
class User extends Model
{
    protected $fillable = ['name', 'email'];
}
```

De esta manera, solo los atributos `name` y `email` pueden ser asignados masivamente utilizando la función `create()` o la función `fill()`, mientras que el atributo `password` se mantiene "protegido".

La propiedad `$fillable` es una medida de seguridad importante para evitar la asignación masiva de datos no deseados a la base de datos. Por lo tanto, es importante ser cuidadoso al utilizar esta propiedad y solo permitir la asignación masiva de los atributos que sean realmente necesarios.

### Propiedad guarded

La propiedad `$guarded` es otra propiedad protegida de los modelos de Eloquent en Laravel que se utiliza para especificar qué atributos no pueden ser asignados masivamente. Es decir, los atributos que se especifiquen en la propiedad `$guarded` no se podrán asignar utilizando la función `create()` o la función `fill()`, pero sí se pueden asignar de forma individual.

Por defecto, la propiedad `$guarded` está vacía, lo que significa que todos los atributos del modelo son "fillable" y se pueden asignar masivamente. Sin embargo, a veces es útil especificar ciertos atributos que nunca deberían ser asignados masivamente, incluso si no están en la propiedad `$fillable`.

Por ejemplo, si tienes un modelo `User` con los atributos `name`, `email`, `password` y `admin`, y deseas que el atributo `admin` nunca sea asignado masivamente, puedes especificarlo en la propiedad `$guarded` de la siguiente manera:

```php
class User extends Model
{
    protected $fillable = ['name', 'email', 'password'];
    protected $guarded = ['admin'];
}
```

En este caso, todos los atributos excepto `admin` son "fillable" y se pueden asignar masivamente. El atributo `admin` está "guarded" y no se puede asignar masivamente. Sin embargo, el atributo `admin` todavía se puede asignar de forma individual utilizando la función `setAttribute()`.

En general, es importante tener en cuenta que la asignación masiva puede ser una vulnerabilidad de seguridad si no se maneja correctamente, y es recomendable utilizar la propiedad `$fillable` o la propiedad `$guarded` para proteger los atributos del modelo de la asignación masiva no deseada.

### Propiedad primarykey

La propiedad `$primaryKey` se utiliza para indicar el nombre de la columna que se utilizará como clave primaria en la tabla de la base de datos asociada al modelo de Eloquent. Por defecto, Laravel asume que la clave primaria es una columna llamada "id". Sin embargo, en algunos casos puede ser necesario utilizar una columna con un nombre diferente como clave primaria, y es ahí donde entra en juego `$primaryKey`.

Por ejemplo, si queremos que la clave primaria sea una columna llamada "codigo_producto" en lugar de "id", podemos establecer la propiedad `$primaryKey` en el modelo de la siguiente manera:

```php
class Producto extends Model
{
    protected $primaryKey = 'codigo_producto';
}
```

De esta forma, Eloquent utilizará la columna "codigo_producto" como clave primaria en lugar de "id". Es importante destacar que, si se utiliza una columna diferente a "id" como clave primaria, es necesario indicarlo al momento de realizar relaciones entre tablas en la base de datos.

### Propiedad keyType

La propiedad `$keyType` se utiliza en los modelos de Eloquent de Laravel para especificar el tipo de datos de la clave primaria de la tabla asociada al modelo. Por defecto, Laravel asume que la clave primaria es un campo de tipo entero (`integer`), pero en algunos casos puede ser necesario utilizar otro tipo de datos para la clave primaria.

Si se quiere definir un tipo de datos diferente para la clave primaria, se puede utilizar la propiedad `$keyType` en el modelo de la siguiente forma:

```php
class Usuario extends Model
{
    protected $keyType = 'string';
}
```

En este ejemplo, se está indicando que el tipo de datos de la clave primaria de la tabla asociada al modelo `Usuario` es una cadena de texto (`string`) en lugar de un número entero por defecto.

Es importante mencionar que al utilizar un tipo de datos diferente para la clave primaria, se debe asegurar que las relaciones definidas en el modelo estén configuradas para utilizar el mismo tipo de datos en las claves foráneas, de lo contrario pueden surgir errores de integridad referencial.

### Propiedad incrementing

La propiedad `$incrementing` es una propiedad de los modelos de Eloquent en Laravel que se utiliza para indicar si la clave primaria de la tabla asociada al modelo es un número autoincremental (`true`) o no (`false`).

Por defecto, Laravel asume que la clave primaria de la tabla es un número autoincremental, por lo que la propiedad `$incrementing` se establece en `true` automáticamente. Si se desea utilizar una clave primaria que no sea autoincremental, se debe establecer la propiedad `$incrementing` en `false`.

```php
class Usuario extends Model
{
    protected $primaryKey = 'codigo';
    public $incrementing = false;
}
```

En este ejemplo, se está indicando que la clave primaria de la tabla asociada al modelo `Usuario` se llama `codigo` y que no es un número autoincremental.

Es importante mencionar que si se establece la propiedad `$incrementing` en `false`, también se debe establecer la propiedad `$keyType` con el tipo de dato correspondiente a la clave primaria, ya que Laravel no podrá inferir automáticamente el tipo de datos de la clave primaria.

### Propiedad timestamps

La propiedad `$timestamps` es una propiedad de los modelos de Eloquent en Laravel que se utiliza para indicar si la tabla asociada al modelo tiene las columnas `created_at` y `updated_at` para el registro de la fecha y hora de creación y actualización de los registros.

Por defecto, Laravel asume que la tabla asociada al modelo tiene estas dos columnas, por lo que la propiedad `$timestamps` se establece en `true` automáticamente. Si se desea desactivar esta funcionalidad, se debe establecer la propiedad `$timestamps` en `false`.

```php
class Usuario extends Model
{
    public $timestamps = false;
}
```

En este ejemplo, se está indicando que la tabla asociada al modelo `Usuario` no tiene las columnas `created_at` y `updated_at`, por lo que no se utilizará la funcionalidad de registro automático de fechas y horas de creación y actualización.

Es importante mencionar que si se utiliza la funcionalidad de registro automático de fechas y horas de creación y actualización, Laravel espera que las columnas `created_at` y `updated_at` de la tabla asociada al modelo sean del tipo `timestamp`, a menos que se especifique lo contrario mediante la propiedad `$dateFormat`.

### Propiedad dateFormat

La propiedad `$dateFormat` es una propiedad de los modelos de Eloquent en Laravel que se utiliza para indicar el formato de las fechas almacenadas en las columnas `created_at` y `updated_at` de la tabla asociada al modelo, en caso de utilizar la funcionalidad de registro automático de fechas y horas.

Por defecto, Laravel asume que el formato de fecha utilizado es el formato ISO 8601, es decir, `Y-m-d\TH:i:sP`. Si se desea cambiar este formato, se debe establecer la propiedad `$dateFormat` en el formato deseado.

```php
class Usuario extends Model
{
    protected $dateFormat = 'd/m/Y H:i:s';
}
```

En este ejemplo, se está indicando que las fechas almacenadas en las columnas `created_at` y `updated_at` de la tabla asociada al modelo `Usuario` se almacenan en el formato `d/m/Y H:i:s`. Esto es útil si se desea utilizar un formato de fecha diferente al predeterminado por Laravel.

### Propiedad connection

La propiedad `$connection` es una propiedad de los modelos de Eloquent en Laravel que se utiliza para indicar la conexión de base de datos que se utilizará para interactuar con la tabla asociada al modelo.

Por defecto, Laravel utiliza la conexión de base de datos predeterminada para interactuar con las tablas de la base de datos. Sin embargo, en algunas ocasiones se puede necesitar interactuar con una conexión diferente, por ejemplo, cuando se está trabajando con múltiples bases de datos.

```php
class Usuario extends Model
{
    protected $connection = 'conexion_alternativa';
}
```

En este ejemplo, se está indicando que la tabla asociada al modelo `Usuario` debe interactuar con la conexión de base de datos llamada `conexion_alternativa` en lugar de la conexión de base de datos predeterminada. Es importante destacar que se debe asegurar que la conexión definida en la propiedad `$connection` esté configurada correctamente en el archivo `config/database.php`.

:::info Como se configura el archivo **config/database**
En el archivo `config/database.php` se encuentran las configuraciones de las conexiones de base de datos que se pueden utilizar en la aplicación. Por defecto, Laravel define una conexión de base de datos por defecto y puede definir conexiones adicionales.

Para configurar una nueva conexión de base de datos, se debe agregar una nueva entrada al arreglo de conexiones en el archivo `config/database.php`. La entrada debe contener la información necesaria para establecer la conexión, como el controlador de la base de datos, el host, el nombre de la base de datos, el nombre de usuario y la contraseña. Por ejemplo:

```php
'connections' => [

    'mysql' => [
        'driver' => 'mysql',
        'host' => env('DB_HOST', '127.0.0.1'),
        'port' => env('DB_PORT', '3306'),
        'database' => env('DB_DATABASE', 'forge'),
        'username' => env('DB_USERNAME', 'forge'),
        'password' => env('DB_PASSWORD', ''),
        'charset' => 'utf8mb4',
        'collation' => 'utf8mb4_unicode_ci',
        'prefix' => '',
        'strict' => true,
        'engine' => null,
    ],

    'conexion_alternativa' => [
        'driver' => 'mysql',
        'host' => env('DB_HOST_ALT', '127.0.0.1'),
        'port' => env('DB_PORT_ALT', '3306'),
        'database' => env('DB_DATABASE_ALT', 'forge'),
        'username' => env('DB_USERNAME_ALT', 'forge'),
        'password' => env('DB_PASSWORD_ALT', ''),
        'charset' => 'utf8mb4',
        'collation' => 'utf8mb4_unicode_ci',
        'prefix' => '',
        'strict' => true,
        'engine' => null,
    ],

],
```

En este ejemplo, se ha definido una nueva conexión de base de datos llamada `conexion_alternativa` que utiliza las variables de entorno `DB_HOST_ALT`, `DB_PORT_ALT`, `DB_DATABASE_ALT`, `DB_USERNAME_ALT` y `DB_PASSWORD_ALT` para establecer la conexión.

Una vez que se ha definido la conexión en el archivo `config/database.php`, se puede utilizar la propiedad `$connection` en un modelo de Eloquent para indicar qué conexión se debe utilizar para interactuar con la tabla asociada al modelo.
:::

### Propiedad casts

La propiedad `casts` es utilizada en los modelos de Eloquent para 
especificar cómo se deben castear o convertir los valores de los 
atributos de la base de datos a tipos de datos de PHP. 
Esto nos permite trabajar con los atributos de la base de datos
como si fueran tipos de datos nativos de PHP en nuestro código, 
y Laravel se encarga de la conversión automáticamente. 
Las opciones de cast que se pueden usar son `integer`, `real`,
 `float`, `double`, `string`, `boolean`, `object`, `array`, 
 `collection`, `date`, `datetime`, y `timestamp`. 
 La propiedad `casts` debe ser un array asociativo en el que 
 las claves son los nombres de los atributos de la base de datos, 
 y los valores son las opciones de cast correspondientes.

:::info Ejemplo
Supongamos que tenemos una tabla `users` en la que queremos almacenar un campo `settings` que contenga datos en formato JSON. Podemos definir en nuestro modelo `User` la propiedad `casts` de la siguiente manera:

```bash
protected $casts = [
    'settings' => 'array',
];
```

De esta manera, cuando se recuperan los datos del campo 
`settings`, Laravel automáticamente convertirá el valor de 
JSON a un array PHP. Lo mismo ocurre cuando se asigna un valor 
a ese campo: si le pasamos un array PHP, 
Laravel automáticamente lo convertirá a JSON antes de guardarlo 
en la base de datos. Esto nos permite trabajar con datos 
en formato array en nuestro código, y no tener que preocuparnos 
por la conversión de JSON.
:::
