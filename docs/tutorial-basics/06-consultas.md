---
sidebar_position: 6
---

# Consultas Eloquent

## ¿Qué son las consultas en Eloquent?

Las consultas en Eloquent son una forma de interactuar con la base de datos mediante la recuperación, creación, actualización o eliminación de registros. Eloquent proporciona una serie de métodos y opciones para construir y ejecutar consultas de manera intuitiva y fácil de entender.

Con Eloquent, las consultas se construyen a través de la creación de instancias de la clase `Illuminate\Database\Eloquent\Builder` y el uso de sus métodos. Los métodos de consulta de Eloquent se encargan de construir la consulta SQL adecuada según los parámetros proporcionados.

Eloquent soporta una amplia variedad de operadores y cláusulas, como `where`, `orWhere`, `whereIn`, `whereBetween`, `orderBy`, `groupBy`, `having`, entre otros. Además, es posible crear consultas complejas con múltiples condiciones y subconsultas.

Las consultas en Eloquent también soportan relaciones entre modelos, lo que permite obtener registros relacionados utilizando métodos como `with`, `has`, `whereHas`, entre otros.

## Cómo utilizar Eloquent para encadenar métodos y construir consultas.

En Eloquent, las consultas son utilizadas para recuperar datos de la base de datos. Una de las características más poderosas de Eloquent es su lenguaje fluido, que permite encadenar métodos para construir consultas complejas de forma muy legible y mantenible.

Para construir una consulta en Eloquent, se empieza por llamar al método `DB::table` o al método estático `Model::query` del modelo en cuestión, dependiendo de si se quiere construir una consulta para una tabla en particular o para un modelo específico. A partir de ahí, se pueden encadenar una serie de métodos para construir la consulta deseada.

Algunos ejemplos de métodos que se pueden utilizar para construir consultas en Eloquent son:

- `select`: para seleccionar las columnas que se quieren recuperar.
- `where`: para filtrar los resultados según una condición dada.
- `orWhere`: para agregar una condición "o".
- `whereIn` / `whereNotIn`: para filtrar según si el valor de una columna está en una lista de valores dada.
- `orderBy`: para ordenar los resultados por una columna dada.
- `groupBy`: para agrupar los resultados por una columna dada.
- `join`: para realizar una unión con otra tabla.
- `leftJoin`: para realizar una unión izquierda con otra tabla.
- `count`, `max`, `min`, `sum`: para obtener valores agregados de una columna.

Por ejemplo, para construir una consulta que seleccione los usuarios cuyo correo electrónico termine en "@gmail.com" y los ordene por orden alfabético, se puede utilizar el siguiente código:

```php
$users = DB::table('users')
            ->select('name', 'email')
            ->where('email', 'like', '%@gmail.com')
            ->orderBy('name')
            ->get();
```

Este código primero selecciona las columnas `name` y `email` de la tabla `users`, luego filtra los resultados para seleccionar solo aquellos donde la columna `email` termina en "@gmail.com", y finalmente los ordena por la columna `name`.

El resultado de la consulta se almacena en la variable `$users`, que contendrá una colección de objetos que representan los resultados de la consulta.


## métodos

Los métodos Eloquent son un conjunto de funciones
 proporcionadas por el ORM de Laravel, Eloquent, para interactuar 
 con la base de datos a través de modelos. Estos métodos permiten 
 realizar diversas operaciones en la base de datos, como recuperar 
 datos, insertar, actualizar y eliminar registros, establecer 
 relaciones entre tablas, entre otras. Los métodos Eloquent son 
 llamados directamente en los modelos y se encargan de generar las 
 consultas SQL correspondientes y manejar los resultados devueltos. 
 Son una de las características clave que hacen de Laravel y 
 Eloquent una combinación tan poderosa para el desarrollo de 
 aplicaciones web.

 ### all

El método `all` de Eloquent es utilizado para obtener todos los registros de una tabla en la base de datos. Este método devuelve una colección de objetos de modelo, que representan a cada registro en la tabla.

El uso básico del método `all` es el siguiente:

```
$users = App\Models\User::all();
```

En este ejemplo, se obtienen todos los registros de la tabla `users` en la base de datos y se almacenan en la variable `$users`. Cada registro es representado por un objeto de modelo `User`.

El método `all` también acepta una lista de columnas para seleccionar solamente aquellas columnas específicas de la tabla. Por ejemplo:

```
$users = App\Models\User::all(['id', 'name']);
```

En este ejemplo, se seleccionan solamente las columnas `id` y `name` de la tabla `users`.

Cabe mencionar que el método `all` puede no ser adecuado para tablas con 
grandes cantidades de registros, ya que puede consumir una gran cantidad 
de recursos al cargar todos los registros en memoria. En estos casos, 
es recomendable utilizar métodos que permitan la paginación o la 
limitación de resultados, como `paginate` o `take`.

### avg()

El método `avg()` de Eloquent se utiliza para obtener el promedio de los valores de una columna específica en la tabla de la base de datos. Por ejemplo, si queremos obtener el promedio de la edad de todos los usuarios en una tabla de usuarios, podemos usar el método `avg()` de la siguiente manera:

```php
$averageAge = User::avg('age');
```

En este ejemplo, `User` es el modelo de Eloquent para la tabla de usuarios, y `age` es el nombre de la columna que contiene la edad de cada usuario. El método `avg()` devuelve un valor decimal que representa el promedio de la columna especificada. Si no hay registros en la tabla que coincidan con la consulta, el método devuelve `null`.

También es posible utilizar el método `avg()` en combinación con el método `groupBy()` para obtener el promedio de una columna específica para cada grupo en la tabla. Por ejemplo, si queremos obtener el promedio de la edad de los usuarios para cada ciudad en la tabla de usuarios, podemos usar el siguiente código:

```php
$averageAgeByCity = User::groupBy('city')
                        ->selectRaw('city, AVG(age) as average_age')
                        ->get();
```

En este ejemplo, el método `groupBy()` agrupa los resultados por 
la columna `city`, y el método `selectRaw()` se utiliza para seleccionar 
la columna `city` y el promedio de la columna `age` para cada grupo. 
El resultado es una colección de objetos que contienen el nombre de la 
ciudad y el promedio de la edad de los usuarios en esa ciudad.

### chunk

El método `chunk` de Eloquent permite recuperar registros de la base de datos en lotes, en lugar de recuperar todos los registros de una vez. Esto es especialmente útil cuando se manejan grandes conjuntos de datos que pueden consumir mucha memoria.

El método acepta dos argumentos: el tamaño del lote y una función de retorno de llamada que se ejecutará para cada lote de registros recuperados. La función de retorno de llamada recibe como argumento una instancia de colección que contiene los registros recuperados.

Un ejemplo de uso del método `chunk` sería el siguiente:

```php
// Recuperar todos los usuarios en lotes de 100
User::chunk(100, function ($users) {
    foreach ($users as $user) {
        // procesar cada usuario
    }
});
```

Este código recuperará los registros de la tabla `users` en lotes de 100 y
 ejecutará la función de retorno de llamada para cada lote. 
 La función de retorno de llamada recibirá una 
colección que contiene hasta 100 registros.

### count()

El método `count()` de Eloquent permite contar la cantidad de registros que hay en una tabla de la base de datos que correspondan a las condiciones especificadas en la consulta.

Se puede llamar al método sin ningún parámetro para obtener el total de registros de la tabla, o con uno o varios argumentos para obtener el total de registros que cumplan las condiciones especificadas.

Por ejemplo, si queremos obtener el total de usuarios en una tabla llamada `users`, podemos usar el método de la siguiente manera:

```php
$totalUsers = User::count();
```

También podemos obtener el total de usuarios que cumplan ciertas condiciones, por ejemplo, que tengan el campo `status` igual a "activo":

```php
$totalActiveUsers = User::where('status', 'activo')->count();
```

Este método puede ser útil en diversas situaciones, 
como para obtener estadísticas sobre la cantidad de registros que cumplen 
ciertas condiciones, para realizar paginación, entre otros casos.

### create

El método `create` de Eloquent permite crear un nuevo registro en la base de datos a partir de un array asociativo de atributos. Es decir, podemos crear un nuevo modelo y persistirlo en la base de datos en una sola operación. La sintaxis básica es la siguiente:

```php
// Creamos un nuevo modelo
$user = User::create([
    'name' => 'John Doe',
    'email' => 'johndoe@example.com',
    'password' => bcrypt('secret'),
]);
```

En este ejemplo, estamos creando un nuevo modelo de `User` y especificando los atributos que queremos asignarle mediante un array asociativo. Los nombres de las claves del array deben coincidir con los nombres de las columnas de la tabla en la base de datos.

El método `create` también devuelve una instancia del modelo recién creado, lo que nos permite encadenar métodos adicionales si lo deseamos. Además, si existe una restricción de clave única en la tabla para algún campo incluido en el array de atributos, Laravel lanzará una excepción de tipo `Illuminate\Database\QueryException` si intentamos crear un registro que viole esa restricción.

Es importante tener en cuenta que el método `create` no valida automáticamente los datos proporcionados. Si necesitamos validar los datos antes de crear el modelo, deberíamos utilizar el método `validate` del objeto `Illuminate\Validation\Validator` antes de llamar al método `create`.

```php
// Validamos los datos
$validator = Validator::make($request->all(), [
    'name' => 'required|string|max:255',
    'email' => 'required|string|email|max:255|unique:users',
    'password' => 'required|string|min:8|confirmed',
]);

if ($validator->fails()) {
    return redirect('register')
                ->withErrors($validator)
                ->withInput();
}

// Creamos un nuevo modelo
$user = User::create([
    'name' => $request->input('name'),
    'email' => $request->input('email'),
    'password' => bcrypt($request->input('password')),
]);
``` 

En este ejemplo, estamos utilizando el objeto `Validator` para validar 
los datos del formulario antes de crear el modelo. Si la validación falla, 
redirigimos al usuario de vuelta al formulario con los errores 
correspondientes. Si la validación pasa, creamos un nuevo modelo de `User` 
a partir de los datos proporcionados por el usuario.

### delete

El método `delete` de Eloquent se utiliza para eliminar un registro de la base de datos. Puede ser llamado en un modelo específico, lo que eliminará la fila correspondiente en la tabla de la base de datos.

Por ejemplo, supongamos que tenemos un modelo `User` y queremos eliminar un usuario en particular con un ID de 1. Podemos hacerlo así:

```
$user = User::find(1);
$user->delete();
```

También se puede llamar al método `delete` directamente en una consulta, lo que eliminará todas las filas que satisfagan los criterios de la consulta.

```
User::where('active', false)->delete();
```

Este ejemplo eliminará todas las filas de la tabla "users" donde el campo "active" es falso. Cabe destacar que este método elimina directamente las filas de la base de datos sin pasar por la papelera de reciclaje, 
por lo que se debe tener cuidado al utilizarlo.

### distinct 

El método `distinct()` se utiliza para obtener un conjunto de resultados distintos y únicos de una columna específica en una consulta. Por defecto, las consultas de Eloquent devuelven todos los resultados que coinciden con los criterios de la consulta, lo que puede incluir filas duplicadas. Pero si se desea obtener solamente los valores únicos de una columna, se puede utilizar el método `distinct()`.

Este método se puede encadenar después del método `select()` para indicar que se desea obtener valores únicos de la columna seleccionada. Por ejemplo:

```php
$uniqueResults = DB::table('users')->select('name')->distinct()->get();
```

Este código devuelve una colección de objetos de usuario, cada uno de los cuales tiene una propiedad `name`, pero sin duplicados.

Cabe mencionar que el método `distinct()` no puede ser 
utilizado junto con algunos métodos de agregación, como 
`count()`, `max()`, `min()`, `avg()` y `sum()`. En tales casos, se puede 
utilizar una subconsulta para obtener los resultados únicos de una columna 
en lugar de usar el método `distinct()`.

### find

El método `find()` es utilizado para recuperar un solo modelo por su clave primaria. Toma como argumento la clave primaria del modelo que se desea recuperar y devuelve una instancia del modelo correspondiente. Si no se encuentra un modelo con la clave primaria especificada, se devuelve `null`. 

Por ejemplo, para recuperar un registro de la tabla `users` por su clave primaria `id`:

```php
$user = User::find(1); // devuelve el usuario con ID 1 o null si no existe
```

También es posible pasar un array de claves primarias como argumento para recuperar varios modelos a la vez:

```php
$users = User::find([1, 2, 3]); // devuelve una colección de usuarios con IDs 1, 2 y 3
```

Es importante destacar que `find()` solo busca por clave primaria, 
no se pueden utilizar otros campos de la tabla como criterios de búsqueda.

### first

El método `first()` es utilizado para obtener el primer registro que cumple con las condiciones especificadas en una consulta. Es similar al método `get()`, pero en lugar de devolver una colección de registros, devuelve solo el primer registro. 

Por ejemplo, para obtener el primer usuario registrado en la base de datos, se puede utilizar el método `first()` de la siguiente manera:

```php
$user = User::first();
```

Si se quiere obtener el primer usuario que cumpla con ciertas condiciones, se puede encadenar el método `where()` a la consulta:

```php
$user = User::where('name', 'John')->first();
```

Este método es útil cuando se sabe que solo se necesita un registro específico y no es necesario recuperar todos los registros que 
cumplen con las condiciones especificadas.

### get 

El método `get()` es utilizado para recuperar todos los registros de una tabla. Este método es utilizado para ejecutar una consulta y recuperar una colección de objetos `Illuminate\Database\Eloquent\Model`. 

Por defecto, `get()` devuelve todos los registros de la tabla asociada al modelo. También se puede utilizar para obtener un conjunto de registros que coincidan con una condición específica pasada como argumento en el método `where()`. 

Por ejemplo, si queremos obtener todos los usuarios que tengan un nombre específico "John", podemos hacer lo siguiente:

```php
$users = App\Models\User::where('name', 'John')->get();
```

Esto devolverá una colección de objetos `User` que coincidan con la condición especificada. También podemos encadenar múltiples condiciones en una consulta utilizando el lenguaje fluido:

```php
$users = App\Models\User::where('name', 'John')
                ->where('email', 'like', '%example.com')
                ->get();
```

Este ejemplo devolverá una colección de objetos `User` que tengan el nombre "John" y cuyo correo electrónico termine en "example.com". 

Una vez que se ha recuperado la colección de objetos, 
se puede iterar sobre ella y acceder a sus propiedades y métodos, 
como cualquier otro objeto de Eloquent.

### groupBy

El método `groupBy` se utiliza para agrupar los resultados de la consulta por una columna determinada. Toma como argumento el nombre de la columna por la cual se desea agrupar los resultados.

Por ejemplo, si deseamos agrupar los registros de una tabla `users` por su país de origen, podríamos utilizar el método `groupBy` de la siguiente manera:

```
$usersByCountry = DB::table('users')
                    ->select('country', DB::raw('count(*) as total'))
                    ->groupBy('country')
                    ->get();
```

En este ejemplo, la consulta selecciona la columna `country` de la tabla `users`, junto con una columna calculada utilizando la función `count(*)` de SQL que cuenta el número total de registros agrupados por país. Luego, se llama al método `groupBy('country')` para agrupar los registros por país, y finalmente se obtienen los resultados con el método `get()`.

El método `groupBy` también puede tomar múltiples 
argumentos para agrupar los resultados por varias columnas.

### has

El método `has` se utiliza para verificar si una relación específica existe para un modelo. Por ejemplo, si tenemos un modelo de `Usuario` que tiene una relación de `Posts`, podemos verificar si un usuario tiene algún post utilizando el método `has`:

```php
$user = User::find(1);

if ($user->has('posts')) {
    // El usuario tiene al menos un post
} else {
    // El usuario no tiene ningún post
}
```

También es posible agregar restricciones a la consulta de la relación. Por ejemplo, para verificar si un usuario tiene al menos un post publicado, se puede utilizar:

```php
$user = User::find(1);

if ($user->has('posts', '>', 0)->where('publicado', true)->exists()) {
    // El usuario tiene al menos un post publicado
} else {
    // El usuario no tiene ningún post publicado
}
```

El método `has` también puede ser utilizado en una consulta, para filtrar los resultados basados en la existencia de una relación. Por ejemplo, para obtener todos los usuarios que tienen al menos un post publicado:

```php
$users = User::has('posts', '>', 0)->whereHas('posts', function ($query) {
    $query->where('publicado', true);
})->get();
```

En este ejemplo, utilizamos el método `whereHas` para agregar una restricción a la consulta de la relación. La consulta resultante incluirá únicamente 
los usuarios que tengan al menos un post publicado.

### join

El método `join()` se utiliza para realizar una unión entre dos o más tablas en una consulta SQL. Permite especificar la relación entre las tablas mediante la cláusula `ON`. 

El método acepta varios parámetros: 

- La primera variable es la tabla a la que se va a unir.
- La segunda variable es la columna de la tabla base que se va a utilizar para unir la tabla especificada.
- La tercera variable es la columna de la tabla especificada que se va a utilizar para unir la tabla base.
- El cuarto parámetro es un operador lógico como `AND` o `OR`.

El método `join()` devuelve una instancia de la clase `Illuminate\Database\Query\Builder` que se puede utilizar para construir consultas más complejas. 

Aquí hay un ejemplo de cómo utilizar el método `join()` para unir dos tablas:

```
$users = DB::table('users')
            ->join('orders', 'users.id', '=', 'orders.user_id')
            ->select('users.*', 'orders.price')
            ->get();
```

Este ejemplo une la tabla `users` con la tabla `orders` usando la columna `id` 
de la tabla `users` y la columna `user_id` de la tabla `orders`. 
La consulta devuelve todas las columnas de la tabla `users` y la columna 
`price` de la tabla `orders`.

### max

El método `join()` se utiliza para realizar una unión entre dos o más tablas en una consulta SQL. Permite especificar la relación entre las tablas mediante la cláusula `ON`. 

El método acepta varios parámetros: 

- La primera variable es la tabla a la que se va a unir.
- La segunda variable es la columna de la tabla base que se va a utilizar para unir la tabla especificada.
- La tercera variable es la columna de la tabla especificada que se va a utilizar para unir la tabla base.
- El cuarto parámetro es un operador lógico como `AND` o `OR`.

El método `join()` devuelve una instancia de la clase `Illuminate\Database\Query\Builder` que se puede utilizar para construir consultas más complejas. 

Aquí hay un ejemplo de cómo utilizar el método `join()` para unir dos tablas:

```
$users = DB::table('users')
            ->join('orders', 'users.id', '=', 'orders.user_id')
            ->select('users.*', 'orders.price')
            ->get();
```

Este ejemplo une la tabla `users` con la tabla `orders` usando la columna `id` de la tabla `users` y la columna `user_id` de la tabla `orders`. La consulta devuelve todas las columnas de la tabla `users` y 
la columna `price` de la tabla `orders`.

### min

El método `min` de Eloquent es utilizado para obtener el valor mínimo de una columna de la tabla de la base de datos.

Para utilizar este método, se debe encadenar al objeto de consulta el método `min` y pasarle como parámetro el nombre de la columna a la que se desea aplicar el método:

```
$minPrice = DB::table('products')->min('price');
```

En este ejemplo, se obtendrá el precio mínimo de todos los productos de la tabla "products".

También se puede utilizar este método con el modelo Eloquent:

```
$minPrice = Product::min('price');
```

En este caso, se obtendrá el precio mínimo de todos los productos representados por el modelo `Product`.

Es importante mencionar que este método sólo funciona con columnas numéricas. Si se intenta utilizar con una columna de tipo cadena, 
se obtendrá un resultado inesperado o un error.

### orderBy

El método `orderBy` se utiliza para ordenar los resultados de una consulta según una o más columnas especificadas. Se pueden encadenar múltiples llamadas a este método para ordenar por varias columnas.

La sintaxis básica del método `orderBy` es la siguiente:

```php
->orderBy('columna', 'dirección');
```

Donde `'columna'` es el nombre de la columna por la que se desea ordenar, y `'dirección'` es la dirección de la ordenación (opcional). La dirección predeterminada es ascendente (`'asc'`), pero se puede especificar `'desc'` para ordenar descendente.

También se puede pasar un arreglo de columnas y direcciones de ordenación para ordenar por múltiples columnas. Por ejemplo:

```php
->orderBy([
    'columna1' => 'asc',
    'columna2' => 'desc',
]);
```

Este método es muy útil para ordenar los resultados de una consulta según diferentes criterios, como por ejemplo ordenar por fecha y hora, 
o por un campo numérico de forma descendente.

### pluck

El método `pluck` en Eloquent se utiliza para obtener un array de valores de una única columna de la tabla de la base de datos. Se proporciona el nombre de la columna de la que se desea recuperar los valores y devuelve una colección de esos valores.

La sintaxis básica del método `pluck` es la siguiente:

```
$users = DB::table('users')->pluck('name');
```

Esto recuperará todos los valores de la columna `name` de la tabla `users` y los almacenará en la variable `$users`. Si desea recuperar los valores de otra columna, simplemente cambie el nombre de la columna en el método `pluck`.

También puede especificar un segundo argumento para indicar el nombre de la columna que se utilizará como clave de la matriz resultante. Por ejemplo:

```
$users = DB::table('users')->pluck('name', 'id');
```

Esto recuperará los valores de la columna `name` y los utilizará como valores de la matriz resultante. Los valores de la columna `id` se utilizarán como claves de la matriz.

También es posible encadenar otros métodos de consulta a `pluck` 
para filtrar o limitar los resultados recuperados.

### save

El método `save()` se utiliza para guardar un modelo en la base de datos. Si el modelo ya existe en la base de datos, se actualizará con los nuevos valores proporcionados en el modelo, de lo contrario, se creará un nuevo registro con los valores proporcionados.

Por ejemplo, si tenemos un modelo `User` con los atributos `name` y `email`, podemos crear un nuevo registro en la base de datos utilizando el método `save()` de la siguiente manera:

```php
$user = new User;
$user->name = 'John Doe';
$user->email = 'john@example.com';
$user->save();
```

También podemos actualizar un registro existente utilizando el método `save()`:

```php
$user = User::find(1);
$user->name = 'Jane Doe';
$user->email = 'jane@example.com';
$user->save();
```

El método `save()` automáticamente determina si se debe 
crear un nuevo registro o actualizar uno existente en función del valor 
de la clave primaria del modelo.

### select 

El método `select()` se utiliza para seleccionar columnas específicas de una tabla en una consulta. Toma una lista de columnas como argumento y devuelve una instancia del constructor de consultas Eloquent con la lista de columnas seleccionadas. Por ejemplo, para seleccionar las columnas 'name' y 'email' de la tabla 'users':

```
$users = DB::table('users')->select('name', 'email')->get();
```

También es posible seleccionar todas las columnas de una tabla utilizando el método `select('*')`. Además, el método `selectRaw()` permite seleccionar columnas con una expresión SQL personalizada. 

Es importante tener en cuenta que el método `select()` no modifica la consulta actual sino que devuelve una nueva instancia del constructor de consultas con la selección realizada. Por lo tanto, es necesario encadenar otros métodos de consulta, como `where()` o 
`orderBy()`, para completar la consulta.




### sum

El método `sum()` de Eloquent permite obtener la suma de un campo específico en los registros de una tabla. Su sintaxis es la siguiente:

```php
$suma = MiModelo::sum('campo');
```

Donde `MiModelo` es el nombre del modelo de Eloquent asociado a la tabla, y `'campo'` es el nombre del campo del que se desea obtener la suma.

Por ejemplo, si se desea obtener la suma del campo `cantidad` de la tabla `ventas`, se puede 
utilizar el método de la siguiente manera:

```php
$suma = Venta::sum('cantidad');
```

Este método devuelve un valor numérico con la suma de todos los registros
 de la tabla que contengan un valor en el campo especificado.

### update

El método `update` es utilizado para actualizar uno o varios registros en la base de datos a partir de un modelo o una consulta Eloquent.

El método acepta un arreglo de datos clave-valor que representan los campos y valores que se desean actualizar en la tabla correspondiente. Por ejemplo:

```
$affectedRows = DB::table('users')
              ->where('id', 1)
              ->update(['name' => 'John']);
```

Este código actualizaría el nombre del usuario con `id` igual a 1 a "John".

También es posible utilizar el método `update` directamente desde un modelo Eloquent, lo que resulta en un código más legible. Por ejemplo:

```
$user = User::find(1);
$user->name = 'John';
$user->save();
```

Este código hace exactamente lo mismo que el ejemplo anterior, pero utilizando un modelo Eloquent. Primero se busca el usuario con `id` igual a 1 y se actualiza su atributo `name` a "John". Finalmente, se guarda el modelo 
para persistir los cambios en la base de datos.

### where

El método `where` se utiliza para añadir una cláusula WHERE a la consulta de Eloquent. Esta cláusula permite filtrar los resultados de la consulta en función de una o varias condiciones. 

El método acepta varios tipos de parámetros, como una cadena con el nombre de una columna y su valor correspondiente, un array con varias condiciones, o incluso una función de callback que permita crear condiciones más complejas.

Por ejemplo, si queremos obtener todos los usuarios cuyo nombre sea "Juan", podemos utilizar el método `where` de la siguiente manera:

```php
$users = User::where('name', 'Juan')->get();
```

También es posible utilizar operadores lógicos para combinar varias condiciones. Por ejemplo, si queremos obtener todos los usuarios cuyo nombre sea "Juan" y su edad sea mayor que 25, podemos utilizar el método `where` de la siguiente manera:

```php
$users = User::where('name', 'Juan')
             ->where('age', '>', 25)
             ->get();
```

En este ejemplo, se están encadenando dos métodos `where`, lo que indica que la consulta debe incluir usuarios que cumplan ambas condiciones. Si en su lugar queremos que se cumpla al menos una de las dos condiciones, podemos utilizar el método `orWhere` en lugar de `where`.

```php
$users = User::where('name', 'Juan')
             ->orWhere('age', '>', 25)
             ->get();
```

Este ejemplo devolverá todos los usuarios cuyo nombre sea "Juan", 
así como aquellos cuya edad sea mayor que 25.

## Otros métodos

### findOrFaild

El método `findOrFail` de Eloquent busca un modelo por su clave primaria y lanza una excepción de tipo `ModelNotFoundException` si no lo encuentra. Este método es útil cuando se espera que el modelo exista en la base de datos y se quiere manejar la excepción en caso de que no sea así.

Por ejemplo, si se quiere buscar un usuario por su ID y se espera que el usuario exista, se puede usar `findOrFail` de la siguiente manera:

```php
$user = User::findOrFail($id);
```

Si el usuario con el ID especificado no existe en la base de datos, 
se lanzará una excepción `ModelNotFoundException`.

### first

El método `first` en Eloquent se utiliza para recuperar el primer registro que cumple con las condiciones especificadas. Es similar al método `get`, pero en lugar de recuperar todos los registros que cumplen con las condiciones, solamente retorna el primer registro encontrado.

Este método toma como parámetro opcional una cláusula `where` para especificar las condiciones de búsqueda. Por ejemplo, si deseas recuperar el primer usuario en la tabla de usuarios que tenga un nombre específico, podrías hacer lo siguiente:

```php
$user = User::where('name', 'John')->first();
```

Si no se especifican condiciones de búsqueda, `first` retorna el primer registro de la tabla. Si no hay registros en la tabla, `first` retorna `null`.

Es importante destacar que si se desea lanzar una excepción si no se encuentra ningún registro que cumpla con las condiciones especificadas, 
se puede utilizar el método `firstOrFail`.

### firstOrFail

El método `firstOrFail` es similar al método `first` en que devuelve el primer modelo que cumple con las condiciones de la consulta. Sin embargo, si el modelo no se encuentra, lanza una excepción `ModelNotFoundException`. 

Esto puede ser útil si se espera que el modelo exista y se desea manejar explícitamente el caso en que no se encuentre en lugar de tener que verificar si el resultado es nulo después de llamar a `first`.

Por ejemplo, supongamos que tenemos una tabla `users` con un campo `email` que debe ser único. Podemos buscar un usuario por su dirección de correo electrónico utilizando el método `firstOrFail` de la siguiente manera:

```
$user = User::where('email', $email)->firstOrFail();
```

Si no hay ningún usuario con la dirección de correo electrónico especificada en la consulta,
se lanzará una excepción `ModelNotFoundException`.

### exist

El método `exists` en Eloquent se utiliza para verificar si existe al menos un registro que cumple con las condiciones especificadas. Devuelve `true` si existe al menos un registro, y `false` en caso contrario.

Este método puede ser útil para verificar si un registro existe antes de intentar realizar alguna acción sobre él. Por ejemplo, si se quiere actualizar un registro específico, se puede usar `exists` 
para verificar si existe antes de intentar actualizarlo.

Aquí hay un ejemplo de cómo se puede usar `exists`:

```php
if (User::where('email', '=', 'johndoe@example.com')->exists()) {
    // hacer algo si existe al menos un usuario con el correo electrónico especificado
} else {
    // hacer algo si no existe ningún usuario con el correo electrónico especificado
}
```

En este ejemplo, se verifica si existe al menos un usuario en la 
tabla `users` con el 
correo electrónico `'johndoe@example.com'`. Si existe, 
se ejecutará el primer bloque de código, y si no existe, 
se ejecutará el segundo bloque de código.

### orWhere

El método `orWhere` se utiliza en consultas de Eloquent para agregar una cláusula `OR` a la consulta. Esto significa que se agregarán condiciones adicionales a la consulta, pero en lugar de ser `AND`, serán `OR`.

Por ejemplo, supongamos que tenemos una tabla de usuarios y queremos buscar usuarios que tengan un nombre específico o un correo electrónico específico. Podríamos escribir una consulta usando `orWhere` de la siguiente manera:

```php
$users = User::where('name', 'John')
             ->orWhere('email', 'john@example.com')
             ->get();
```

Esta consulta buscará usuarios que tengan el nombre "John" o el correo electrónico "john@example.com". Si hubiéramos utilizado `where` en lugar de `orWhere`, la consulta habría buscado usuarios que tengan tanto el nombre "John" como el correo electrónico "john@example.com", lo cual probablemente no es lo que queremos en este caso.

El método `orWhere` se puede encadenar con otros métodos de consulta de Eloquent, como `where`, `whereIn`, `whereBetween`, etc., para construir consultas más complejas.

### whereIn

El método `whereIn` se utiliza para agregar una cláusula `WHERE IN` a la consulta. Toma dos parámetros: el nombre de la columna y un array de valores a buscar. La consulta resultante buscará registros en los que el valor de la columna especificada esté contenido en el array de valores.

Por ejemplo, si queremos buscar todos los usuarios cuyo `id` sea 1, 2 o 3, podemos hacer lo siguiente:

```
$usuarios = DB::table('users')
                ->whereIn('id', [1, 2, 3])
                ->get();
```

Este código generará la siguiente consulta SQL:

```
SELECT * FROM users WHERE id IN (1, 2, 3);
```

Y devolverá una colección con los usuarios correspondientes.

### whereNotIn

El método `whereNotIn` agrega una cláusula `WHERE NOT IN` a la consulta, para buscar registros donde el valor de una columna no se encuentre en un conjunto de valores especificado.

Por ejemplo, supongamos que tenemos una tabla de `usuarios` y queremos buscar aquellos que no se encuentren en una lista de IDs específicos:

```php
$users = DB::table('usuarios')
                ->whereNotIn('id', [1, 2, 3])
                ->get();
```

En este caso, la consulta buscará todos los usuarios cuyo ID no sea 1, 2 o 3.

El método `whereNotIn` acepta dos argumentos: el nombre de la columna que queremos buscar, y un array de valores que la columna no debe tener. También podemos pasar una subconsulta en lugar de un array de valores para hacer la búsqueda más compleja.

```php
$users = DB::table('usuarios')
                ->whereNotIn('id', function($query) {
                    $query->select('usuario_id')
                          ->from('registros')
                          ->where('fecha', '>', '2022-01-01');
                })
                ->get();
```

En este ejemplo, la consulta buscará todos los usuarios cuyo ID no 
aparezca en una subconsulta que seleccione los IDs de 
usuarios que hayan hecho un registro después del 1 de enero de 2022.

### whereBetween

El método `whereBetween` es utilizado para agregar una cláusula `WHERE BETWEEN` a la consulta de Eloquent. Esta cláusula es utilizada para buscar registros cuyo valor en una determinada columna se encuentre dentro de un rango de valores especificado.

La sintaxis básica del método es la siguiente:

```php
whereBetween(string $column, array $values, string $boolean = 'and', bool $not = false)
```

Donde:

- `$column`: es el nombre de la columna en la que se desea buscar el rango de valores.
- `$values`: es un arreglo con dos valores que representan el rango de valores a buscar.
- `$boolean`: indica si se debe agregar una cláusula `AND` o `OR` a la consulta. Por defecto es `AND`.
- `$not`: indica si se debe negar la cláusula, es decir, buscar valores que no estén dentro del rango. Por defecto es `false`.

Por ejemplo, si se desea buscar todos los usuarios cuya edad esté entre 18 y 25 años, se puede utilizar el método de la siguiente manera:

```php
$users = DB::table('users')
                ->whereBetween('age', [18, 25])
                ->get();
```

Esto generará una consulta SQL similar a la siguiente:

```sql
SELECT * FROM users WHERE age BETWEEN 18 AND 25;
```

### whereNull

El método `whereNull` permite agregar una cláusula WHERE a la consulta para buscar registros donde el valor de una determinada columna es nulo (`NULL`).

Ejemplo de uso:

Supongamos que tenemos una tabla llamada `users` con una columna `email` que puede ser nula en algunos casos. Si queremos buscar los usuarios que no tienen correo electrónico registrado, podemos hacerlo de la siguiente manera:

```php
$users = DB::table('users')
            ->whereNull('email')
            ->get();
```

Este código generará la siguiente consulta SQL:

```sql
SELECT * FROM users WHERE email IS NULL;
```

El método `whereNull` también acepta un segundo argumento opcional que se utilizará como operador para la cláusula WHERE. Por ejemplo, si queremos buscar los usuarios cuyo correo electrónico no está definido pero que sí tienen un nombre de usuario, podemos hacer lo siguiente:

```php
$users = DB::table('users')
            ->whereNull('email', 'AND')
            ->whereNotNull('username')
            ->get();
```

Este código generará la siguiente consulta SQL:

```sql
SELECT * FROM users WHERE email IS NULL AND username IS NOT NULL;
```

### whereNotNull

El método `whereNotNull` de Eloquent agrega una cláusula WHERE a la consulta para buscar los registros de la base de datos donde el valor de una columna específica no sea nulo. Por ejemplo, si queremos obtener todos los usuarios que tienen un correo electrónico en la base de datos, podemos hacer lo siguiente:

```
$usuarios = Usuario::whereNotNull('email')->get();
```

Esto generará una consulta SQL que buscará todos los registros de la tabla "usuarios" donde el valor de la columna "email" no sea nulo.

Es importante tener en cuenta que este método solo busca registros 
donde el valor de la columna es diferente de nulo. Si se necesita 
buscar registros donde el valor de una columna específica es 
igual a cero o a una cadena vacía, por ejemplo, se debe utilizar 
otro método como `where` o `orWhere`.

### whereDate

El método `whereDate` permite agregar una cláusula WHERE a la consulta para comparar fechas. Toma dos argumentos: el nombre de la columna de fecha y la fecha a comparar en formato `YYYY-MM-DD`. Por ejemplo, si deseas obtener todos los usuarios que se registraron en un día específico, 
podrías hacer lo siguiente:

```php
$users = User::whereDate('created_at', '2022-04-24')->get();
```

Esto buscará todos los usuarios que se registraron en el 24 de abril de 
2022 y devolverá una colección de objetos de modelo correspondientes. 
También puedes utilizar `whereMonth`, `whereDay` y `whereYear` 
para comparar partes específicas de una fecha.

### whereMonth

El método `whereMonth` se utiliza para agregar una cláusula `where` a una consulta Eloquent para buscar registros cuyo valor de fecha correspondiente al campo especificado tenga un mes determinado.

La sintaxis básica es la siguiente:

```
->whereMonth('campo', $mes);
```

Donde `'campo'` es el nombre del campo de fecha en la tabla y `$mes` es el número del mes (1-12) que se quiere buscar.

Por ejemplo, si queremos buscar todos los usuarios que nacieron en marzo, podemos hacer lo siguiente:

```
$usuarios = DB::table('usuarios')
                ->whereMonth('fecha_nacimiento', 3)
                ->get();
```

Este código buscará todos los registros en la tabla de usuarios donde 
el campo "fecha_nacimiento" tenga un valor de mes igual a 3 (marzo).

### whereDay

El método `whereDay` en Eloquent permite agregar una cláusula `where` a la consulta para comparar el día de un campo de fecha con un valor específico.

Por ejemplo, para obtener todos los registros de la tabla `pedidos` donde el día de la fecha de `created_at` sea igual a `23`, se puede usar el siguiente código:

```
$pedidos = Pedido::whereDay('created_at', '=', 23)->get();
```

Este método también acepta un segundo parámetro opcional que permite especificar el operador de comparación. Por ejemplo, para obtener todos los registros de la tabla `pedidos` donde el día de la fecha de `created_at` sea mayor o igual a `23`, se puede usar el siguiente código:

```
$pedidos = Pedido::whereDay('created_at', '>=', 23)->get();
``` 

También se puede encadenar varias cláusulas `whereDay` 
para agregar múltiples condiciones a la consulta.

### whereYear

El método `whereYear` es un método de consulta en Eloquent que agrega una cláusula WHERE a la consulta para comparar el año de una columna de fecha o fecha y hora. Toma dos parámetros: el primero es el nombre de la columna y el segundo es el año que se utilizará para comparar. Por ejemplo:

```php
$users = DB::table('users')
            ->whereYear('created_at', '=', 2022)
            ->get();
```

En este ejemplo, se obtienen todos los usuarios cuya columna 
`created_at` tiene un valor de año igual a `2022`.

### whereHas

El método `whereHas` se utiliza para buscar modelos que tienen una relación con otro modelo. Por ejemplo, si tienes una relación `hasMany` entre `Post` y `Comment`, puedes usar `whereHas` para buscar todos los posts que tienen al menos un comentario. Este método toma dos argumentos: el nombre de la relación y una función de cierre que define las condiciones que deben cumplir los modelos relacionados.

Aquí hay un ejemplo:

```
$posts = Post::whereHas('comments', function($query) {
    $query->where('status', 'approved');
})->get();
```

Este código buscará todos los `Post` que tengan 
al menos un `Comment` con el estado `approved`.

### whereDoesntHave

El método `whereDoesntHave` se utiliza para agregar una cláusula WHERE a la consulta para buscar modelos que no tienen una relación dada. 

Por ejemplo, si tenemos una relación entre los modelos `User` y `Post` donde un usuario tiene muchos posts, podemos usar `whereDoesntHave` para buscar los usuarios que no tienen ningún post. La sintaxis básica del método es la siguiente:

```
$query->whereDoesntHave('relationshipName');
```

Donde `relationshipName` es el nombre de la relación que se está buscando. También se puede proporcionar una función de cierre para agregar más condiciones a la consulta, por ejemplo:

```
$query->whereDoesntHave('posts', function ($query) {
    $query->where('status', 'published');
});
```

En este caso, se buscarán los usuarios que no tienen ningún post con el estado "publicado".

Es importante tener en cuenta que el método `whereDoesntHave` sólo busca modelos que no tienen una relación en particular. Si queremos buscar modelos que no tienen una relación o que tienen una relación que no cumple con ciertas condiciones, se puede usar el método `doesntHave` en su lugar.
