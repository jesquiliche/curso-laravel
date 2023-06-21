---
sidebar_position: 3
---

# Operaciones CRUD

## Operaciones CRUD con SQL

- SELECT: para recuperar datos de una tabla, se utiliza la sentencia SELECT seguida de los nombres de las columnas que se quieren recuperar. Por ejemplo, si se quiere recuperar el nombre y la edad de todos los usuarios de una tabla llamada "usuarios", se podría utilizar la siguiente sentencia:

```
SELECT nombre, edad FROM usuarios;
```

- INSERT: para insertar datos en una tabla, se utiliza la sentencia INSERT seguida del nombre de la tabla y los valores a insertar. Por ejemplo, si se quiere insertar un nuevo usuario en la tabla "usuarios" con nombre "Juan" y edad 25, se podría utilizar la siguiente sentencia:

```
INSERT INTO usuarios (nombre, edad) VALUES ('Juan', 25);
```

- UPDATE: para actualizar datos en una tabla, se utiliza la sentencia UPDATE seguida del nombre de la tabla y los valores a actualizar. Por ejemplo, si se quiere actualizar la edad del usuario con nombre "Juan" en la tabla "usuarios" a 30 años, se podría utilizar la siguiente sentencia:

```
UPDATE usuarios SET edad = 30 WHERE nombre = 'Juan';
```

- DELETE: para eliminar datos de una tabla, se utiliza la sentencia DELETE seguida del nombre de la tabla y la condición para eliminar los datos. Por ejemplo, si se quiere eliminar el usuario con nombre "Juan" de la tabla "usuarios", se podría utilizar la siguiente sentencia:

```
DELETE FROM usuarios WHERE nombre = 'Juan';
```

Es importante tener en cuenta que estas operaciones deben realizarse 
con precaución, ya que pueden tener un impacto importante en los 
datos de la base de datos. Se recomienda siempre hacer copias de seguridad 
de los datos antes de realizar cualquier operación CRUD en una 
base de datos.

## Operaciones CRUD con Eloquent

- all(): para recuperar todos los registros de una tabla, se utiliza el método all(). Por ejemplo, si se tiene un modelo de "Usuarios", se podría utilizar el siguiente código para recuperar todos los usuarios:

```
$usuarios = App\Models\Usuario::all();
```

- find(): para recuperar un registro específico de una tabla, se utiliza el método find() y se le pasa el ID del registro como parámetro. Por ejemplo, si se tiene un modelo de "Usuarios" y se quiere recuperar el usuario con ID 1, se podría utilizar el siguiente código:

```
$usuario = App\Models\Usuario::find(1);
```

- create(): para insertar un nuevo registro en una tabla, se utiliza el método create() y se le pasan los valores de las columnas como un arreglo asociativo. Por ejemplo, si se tiene un modelo de "Usuarios" con las columnas "nombre" y "edad", se podría utilizar el siguiente código para crear un nuevo usuario:

```
$usuario = App\Models\Usuario::create([
    'nombre' => 'Juan',
    'edad' => 25
]);
```

- save(): para actualizar un registro existente en una tabla, se utiliza el método save() en el objeto del modelo y se modifican los valores de las columnas necesarios. Por ejemplo, si se tiene un modelo de "Usuarios" con el usuario con ID 1 y se quiere actualizar su edad a 30, se podría utilizar el siguiente código:

```
$usuario = App\Models\Usuario::find(1);
$usuario->edad = 30;
$usuario->save();
```

- delete(): para eliminar un registro existente en una tabla, se utiliza el método delete() en el objeto del modelo. Por ejemplo, si se tiene un modelo de "Usuarios" con el usuario con ID 1 y se quiere eliminarlo, se podría utilizar el siguiente código:

```
$usuario = App\Models\Usuario::find(1);
$usuario->delete();
```

Es importante tener en cuenta que estos métodos realizan las operaciones CRUD de forma segura y confiable, ya que Eloquent se encarga de generar las consultas SQL necesarias en segundo plano. Además, Eloquent permite trabajar con modelos y objetos, lo que hace que la manipulación de datos sea más 
intuitiva y fácil de entender para muchos desarrolladores.

## Diferencias entre SQL y Eloquent

Las operaciones CRUD en SQL y Eloquent comparten el mismo propósito: interactuar con la base de datos para crear, leer, actualizar y eliminar registros. Sin embargo, existen algunas diferencias en la sintaxis y complejidad entre ambas formas de realizar estas operaciones.

En SQL, las sentencias CRUD básicas son:

- SELECT: para leer registros de la base de datos.
- INSERT: para crear registros nuevos en la base de datos.
- UPDATE: para actualizar registros existentes en la base de datos.
- DELETE: para eliminar registros de la base de datos.

La sintaxis para cada una de estas sentencias puede variar dependiendo del tipo de base de datos utilizado, pero en general se siguen patrones similares. Por ejemplo, la sintaxis para una sentencia SELECT básica en MySQL es la siguiente:

```
SELECT column1, column2, ...
FROM table_name;
```

Mientras tanto, en Eloquent, las operaciones CRUD se realizan mediante métodos en los modelos de la aplicación. Algunos de los métodos más comunes son:

- all(): para obtener todos los registros de una tabla.
- find(): para buscar un registro específico por su identificador.
- create(): para crear un nuevo registro en la tabla.
- save(): para actualizar un registro existente o crear uno nuevo, dependiendo de si ya existe o no.
- delete(): para eliminar un registro de la tabla.

La sintaxis para estos métodos es específica de Eloquent y se utiliza de la siguiente manera:

```php
// Obtener todos los registros de la tabla 'users'
$users = User::all();

// Buscar un usuario por su identificador
$user = User::find(1);

// Crear un nuevo usuario
$user = new User;
$user->name = 'John Doe';
$user->email = 'johndoe@example.com';
$user->save();

// Actualizar un usuario existente
$user = User::find(1);
$user->name = 'Jane Doe';
$user->save();

// Eliminar un usuario
$user = User::find(1);
$user->delete();
```

En términos de complejidad, ambas formas de realizar operaciones CRUD tienen sus propios desafíos. SQL puede ser más complejo de aprender debido a la variedad de sentencias y la sintaxis específica para cada base de datos. Por otro lado, Eloquent puede requerir más configuración y conocimiento previo del modelo de datos y de la estructura de la base de datos en la aplicación.

En resumen, aunque SQL y Eloquent tienen objetivos similares en cuanto a las operaciones CRUD, cada uno tiene sus propias similitudes y diferencias en términos de sintaxis y complejidad. La elección entre uno u otro depende de las necesidades específicas de la aplicación y de la experiencia y preferencias del desarrollador.