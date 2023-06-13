---
sidebar_position: 5
---
# Rellenando la BB.DD
## Seeders

### ¿Qué es un seeder?
![Seeder](/assets/images/bd.webp)

Un seeder en Laravel es una clase que se utiliza para poblar una base de datos con datos de prueba. Los seeders son útiles para probar aplicaciones, crear datos de prueba para desarrolladores y para personalizar una base de datos con información específica.

Cada seeder en Laravel extiende de la clase **Illuminate\Database\Seeder** y contiene un método run que se ejecuta cuando se llama el comando **php artisan db:seed**. Dentro de este método, puedes escribir cualquier lógica que necesites para insertar datos en tu base de datos.

Puedes crear varios seeders y ejecutarlos todos o solo algunos según tus necesidades. Al ejecutar un seeder, sus datos se insertan en la base de datos de forma automática, lo que te permite rellenar tus tablas de forma rápida y sencilla.

### 📇¿Cómo se crea un seeder?

Para crear un seeder en Laravel, puedes usar el siguiente comando de Artisan:
```bash
php artisan make:seeder NombreSeeder
```

Donde NombreSeeder es el nombre que le quieres dar a tu seeder. Este comando creará un archivo en la carpeta database/seeds con el nombre que le hayas especificado y con una estructura básica de código para que puedas empezar a escribir tu lógica de seeding.

Aquí tienes un ejemplo básico de código para un seeder:

```js
<?php
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NombreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('table_name')->insert([
            'column1' => 'value1',
            'column2' => 'value2',
            // ...
        ]);
    }
}
?>
```

Puedes agregar más datos o lógica para rellenar tus tablas de forma más compleja.

Para ejecutar los seeders, puedes usar el siguiente comando:

```bash
php artisan db:seed
```
También puedes ejecutar un seeder específico utilizando el siguiente comando:

```bash
php artisan db:seed --class=NombreSeeder
```
## Seeders del proyecto

A continuación procederemos a explicar uno a uno los diferentes seeders que utilizaremos en este proyecto.

Recuerde que para crear el esqueleto del seeder debe ejecutar el siguiente commando:

```bash
php artisan make:seeder nombre_de_seeder
```

### CategoriaSeeder

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $data = [
            [
                'nombre' => "Motor y accesorios"
            ],
            [
                'nombre' => "Moda y accesorios"
            ],
            [
                'nombre' => "Alquiler"
            ],
            [
                'nombre' => "TV, audio y foto"
            ],
            [
                'nombre' => "Móviles y telefonía"
            ],
            [
                'nombre' => "Informática y electronica"
            ],
            [
                'nombre' => "Deporte y ocio"
            ],
            [
                'nombre' => "Consolas y videojuegos"
            ],
            [
                'nombre' => "Bicicletas"
            ],
            [
                'nombre' => "Hogar y jardín"
            ],
            [
                'nombre' => "Electrodomésticos"
            ],
            [
                'nombre' => "Cine,libros y música"
            ],
            [
                'nombre' => "Niños y bebes"
            ],
            [
                'nombre' => "Coleccionismo"
            ],
            [
                'nombre' => "Empleo"
            ],
            [
                'nombre' => "Servicios"
            ]

        ];
        DB::table('categorias')->insert($data);
    }
}
```
Este Seeder se utiliza para poblar la base de datos **Anuncios** con datos que se utilizarán comúnmente en la aplicación. En este caso, el seeder se llama "CategoriaSeeder" y crea registros en la tabla "categorias" con los nombres de varias categorías, como "Motor y accesorios", "Moda y accesorios", "Alquiler", etc. 

El seeder utiliza el ORM de Laravel para insertar los datos en la tabla. En la función "run()", la matriz "$data" contiene los nombres de las categorías y se pasa como argumento a la función "insert()" del objeto DB. Cada registro es un array asociativo que tiene solo una clave "nombre" y su valor es el nombre de la categoría. 

Una vez que se ejecuta el seeder, la tabla "categorias" se poblará con estos registros.

### SubcategoriaSeeder

Este seeder se utiliza para poblar la table **Subcategorias** La clase **SubcategoriaSeeder** es una clase de semilla de base de datos que se encarga de poblar la tabla de subcategorías. La tabla de subcategorías tiene las columnas categoria_id y nombre.

En el método run(), se define una matriz de datos con las subcategorías a insertar en la tabla. Cada elemento de la matriz es una subcategoría con el id de su categoría y su nombre. Luego, se utiliza la clase DB de Laravel para insertar los datos en la tabla de subcategorías utilizando el método insert().

El código completo se encuentra a continuación:

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubcategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'categoria_id'=>1,
                'nombre' => "GPS y electrónica"
            ],
            [
                'categoria_id'=>1,
                'nombre' => "Herramientas"
            ],
            [
                'categoria_id'=>1,
                'nombre' => "Recambios"
            ],
            [
                'categoria_id'=>1,
                'nombre' => "Otros"
            ],
            [
                'categoria_id'=>2,
                'nombre' => "Abrigos y chaquetas"
            ],
            [
                'categoria_id'=>2,
                'nombre' => "Accesorios"
            ],
            [
                'categoria_id'=>2,
                'nombre' => "Bañadores y biquinis"
            ],
            [
                'categoria_id'=>2,
                'nombre' => "Belleza y cosmetica"
            ],
            [
                'categoria_id'=>3,
                'nombre' => "Piso"
            ],
            [
                'categoria_id'=>3,
                'nombre' => "Casa"
            ],
            [
                'categoria_id'=>3,
                'nombre' => "Habitación"
            ],
            [
                'categoria_id'=>3,
                'nombre' => "Local/Oficina"
            ],
            [
                'categoria_id'=>3,
                'nombre' => "Garage"
            ],
            [
                'categoria_id'=>3,
                'nombre' => "Trastero"
            ],
            [
                'categoria_id'=>4,
                'nombre' => "Pilas y cargadores"
            ],
            [
                'categoria_id'=>4,
                'nombre' => "Cámaras y fotografía"
            ],
            [
                'categoria_id'=>4,
                'nombre' => "Drones"
            ],
            [
                'categoria_id'=>4,
                'nombre' => "Auriculares y cascos"
            ],
            [
                'categoria_id'=>4,
                'nombre' => "Reproductores"
            ],
            [
                'categoria_id'=>4,
                'nombre' => "Proyectores y accesorios"
            ],
            [
                'categoria_id'=>5,
                'nombre' => "Accesorios"
            ],
            [
                'categoria_id'=>5,
                'nombre' => "Cables"
            ],
            [
                'categoria_id'=>5,
                'nombre' => "Piezas y recambios"
            ],
            [
                'categoria_id'=>5,
                'nombre' => "Tablets"
            ],
            [
                'categoria_id'=>5,
                'nombre' => "Teléfonos antiguos"
            ],
            [
                'categoria_id'=>5,
                'nombre' => "Teléfonos móviles"
            ],
            [
                'categoria_id'=>5,
                'nombre' => "Otros"
            ],
            [
                'categoria_id'=>6,
                'nombre' => "Cargadores y baterías"
            ],
            [
                'categoria_id'=>6,
                'nombre' => "Cables"
            ],
            [
                'categoria_id'=>6,
                'nombre' => "Ordenadores y accesorios"
            ],
            [
                'categoria_id'=>6,
                'nombre' => "Monitores"
            ],
            [
                'categoria_id'=>6,
                'nombre' => "Realidad virtual y aumentada"
            ],
            [
                'categoria_id'=>6,
                'nombre' => "Software"
            ],
            [
                'categoria_id'=>6,
                'nombre' => "Impresoras y accesorios"
            ],
            [
                'categoria_id'=>6,
                'nombre' => "Otros"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Baloncesto"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Balonmano"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Estáticas y elípticas"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Fitness, running y yoga"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Fútbol"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Golf"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Juegos recreativos y de mesa"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Manualidades"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Montaña y esquí"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Natación y accesorios piscina"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Otros deportes"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Patinetes y patinaje"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Rugby"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Tenis y pádel"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Vóley"
            ],
            [
                'categoria_id'=>7,
                'nombre' => "Otros"
            ],
            [
                'categoria_id'=>8,
                'nombre' => "Accesorios de consola"
            ],
            [
                'categoria_id'=>8,
                'nombre' => "Consolas"
            ],
            [
                'categoria_id'=>8,
                'nombre' => "Manuales y guías"
            ],
            [
                'categoria_id'=>8,
                'nombre' => "Merchandising de videojuegos"
            ],
            [
                'categoria_id'=>8,
                'nombre' => "Recambios de consolas"
            ],
            [
                'categoria_id'=>8,
                'nombre' => "Otros"
            ],
            [
                'categoria_id'=>9,
                'nombre' => "Bicicletas ciudad"
            ],
            [
                'categoria_id'=>9,
                'nombre' => "Bicicletas de carretera"
            ],
            [
                'categoria_id'=>9,
                'nombre' => "Bicicletas plegables"
            ],
            [
                'categoria_id'=>9,
                'nombre' => "Bicicletas eléctricas"
            ],
            [
                'categoria_id'=>9,
                'nombre' => "Bicicletas Infantiles"
            ],
            [
                'categoria_id'=>9,
                'nombre' => "Bicicletas Infantiles"
            ],
            [
                'categoria_id'=>9,
                'nombre' => "Bicicletas Estaticas"
            ],
            [
                'categoria_id'=>9,
                'nombre' => "Otros"
            ],
            [
                'categoria_id'=>10,
                'nombre' => "Caseta préfabricada"
            ],
            [
                'categoria_id'=>10,
                'nombre' => "Mueble de cocina"
            ],
            [
                'categoria_id'=>10,
                'nombre' => "Mesa para jardin"
            ],
            [
                'categoria_id'=>10,
                'nombre' => "Otro"
            ]
        ];
        DB::table('subcategorias')->insert($data);
    }
}
```
### EstadoSeeder

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EstadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
       $data= [
        [
            
            'nombre' => "Nuevo"
        ],
        [
            
            'nombre' => "Como nuevo"
        ],
        [
        
            'nombre' => "Buen estado"
        ],
        [
        
            'nombre' => "Regular"
        ],
        [
        
            'nombre' => "Necesita reparación"
        ]
       
    
    ];
    DB::table('estados')->insert($data);
    }
}
```

Este seeder se encarga de insertar los estados de los anuncios en la tabla `estados` de la base de datos `Anuncios`. En la función `run()` se define un arreglo `$data` que contiene la información de los estados a insertar en la base de datos. Luego, se utiliza el método `insert()` de la clase `DB` para insertar los datos en la tabla `estados`. 

En este caso, cada estado se define como un arreglo asociativo con una única clave `'nombre'` y un valor que describe el estado. Los estados que se insertan son "Nuevo", "Como nuevo", "Buen estado", "Regular" y "Necesita reparación".

### PoblacionSeeder

```php
<?php

namespace Database\Seeders;

```php
use App\Models\Poblacion;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use \Illuminate\Support\Facades\File;

class PoblacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('poblaciones')->delete();
        $json = File::get("database/data/poblaciones/poblaciones.json");
        $data = json_decode($json);
        foreach ($data as $obj) {
            Poblacion::create(array(
                
                'codigo' => $obj->codigo,
                'provincia_cod'=>substr($obj->codigo,0,2),
                'nombre' => $obj->nombre,
            ));
            print "Insertando población -> ".$obj->codigo." ".$obj->nombre."\n";
        }

    }
}
```
Este seeder es responsable de insertar datos de poblaciones en la tabla "poblaciones" de la base de datos. En resumen, este seeder realiza lo siguiente:

1. Borra todos los registros anteriores de la tabla "poblaciones" mediante la función `delete()` de Laravel.
2. Lee el archivo "poblaciones.json" ubicado en la carpeta "database/data/poblaciones/" utilizando la función `File::get()` de Laravel.
3. Decodifica el archivo JSON utilizando la función `json_decode()` de PHP.
4. Itera sobre cada objeto del array decodificado.
5. Crea un nuevo registro en la tabla "poblaciones" utilizando la función `create()` de Laravel y los valores del objeto decodificado.
6. Imprime en la consola el código y nombre de la población insertada.

En resumen, este seeder carga datos de poblaciones en la base de datos a partir de un archivo JSON, utilizando Laravel para el manejo de la base de datos y el archivo.

### ProvinciaSeeder

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvinciaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return vocodigo
     */
    public function run()
    {
        //
        $provincias = array (
            array ('codigo' => "01", "nombre" => "ALAVA"),
            array ('codigo' => "02", "nombre" => "ALBACETE"),
            array ('codigo' => "03", "nombre" => "ALICANTE"),
            array ('codigo' => "04", "nombre" => "ALMERIA"),
            array ('codigo' => "33", "nombre" => "ASTURIAS"),
            array ('codigo' => "05", "nombre" => "AVILA"),
            array ('codigo' => "06", "nombre" => "BADAJOZ"),
            array ('codigo' => "08", "nombre" => "BARCELONA"),
            array ('codigo' => "09", "nombre" => "BURGOS"),
            array ('codigo' => "10", "nombre" => "CACERES"),
            array ('codigo' => "11", "nombre" => "CADIZ"),
            array ('codigo' => "39", "nombre" => "CANTABRIA"),
            array ('codigo' => "12", "nombre" => "CASTELLON"),
            array ('codigo' => "51", "nombre" => "CEUTA"),
            array ('codigo' => "13", "nombre" => "CIUDAD REAL"),
            array ('codigo' => "14", "nombre" => "CORDOBA"),
            array ('codigo' => "15", "nombre" => "CORUÑA"),
            array ('codigo' => "16", "nombre" => "CUENCA"),
            array ('codigo' => "17", "nombre" => "GIRONA"),
            array ('codigo' => "18", "nombre" => "GRANADA"),
            array ('codigo' => "19", "nombre" => "GUADALAJARA"),
            array ('codigo' => "20", "nombre" => "GUIPUZCOA"),
            array ('codigo' => "21", "nombre" => "HUELVA"),
            array ('codigo' => "22", "nombre" => "HUESCA"),
            array ('codigo' => "07", "nombre" => "ILLES BALEARS"),
            array ('codigo' => "23", "nombre" => "JAEN"),
            array ('codigo' => "24", "nombre" => "LEON"),
            array ('codigo' => "25", "nombre" => "LLEcodigoA"),
            array ('codigo' => "27", "nombre" => "LUGO"),
            array ('codigo' => "28", "nombre" => "MADRID"),
            array ('codigo' => "29", "nombre" => "MALAGA"),
            array ('codigo' => "52", "nombre" => "MELILLA"),
            array ('codigo' => "30", "nombre" => "MURCIA"),
            array ('codigo' => "31", "nombre" => "NAVARRA"),
            array ('codigo' => "32", "nombre" => "OURENSE"),
            array ('codigo' => "34", "nombre" => "PALENCIA"),
            array ('codigo' => "35", "nombre" => "PALMAS, LAS"),
            array ('codigo' => "36", "nombre" => "PONTEVEDRA"),
            array ('codigo' => "26", "nombre" => "RIOJA, LA"),
            array ('codigo' => "37", "nombre" => "SALAMANCA"),
            array ('codigo' => "38", "nombre" => "SANTA CRUZ DE TENERIFE"),
            array ('codigo' => "40", "nombre" => "SEGOVIA"),
            array ('codigo' => "41", "nombre" => "SEVILLA"),
            array ('codigo' => "42", "nombre" => "SORIA"),
            array ('codigo' => "43", "nombre" => "TARRAGONA"),
            array ('codigo' => "44", "nombre" => "TERUEL"),
            array ('codigo' => "45", "nombre" => "TOLEDO"),
            array ('codigo' => "46", "nombre" => "VALENCIA"),
            array ('codigo' => "47", "nombre" => "VALLADOLID"),
            array ('codigo' => "48", "nombre" => "VIZCAYA"),
            array ('codigo' => "49", "nombre" => "ZAMORA"),
            array ('codigo' => "50", "nombre" => "ZARAGOZA")
       );
       print "Insertando provincias\n";
       DB::table('provincias')->insert($provincias);
    }
}
```
En este caso, el seeder llama a la tabla "provincias" y la rellena con datos predefinidos. 

La clase "ProvinciaSeeder" extiende la clase "Seeder" proporcionada por Laravel y sobrescribe el método "run()" para definir la lógica de la semilla. El método "run()" contiene un array de datos que representa las provincias españolas y, a continuación, llama a la función "insert" proporcionada por la clase "Illuminate\Support\Facades\DB" para insertar los datos en la tabla "provincias". Además, se utiliza una función "print" para informar al usuario que se están insertando las provincias. 

### UsersTableSeeder

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\Hash;
use App\Models\User;



class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Creamos tres usuarios de ejemplo
              
        User::create([
            'name' => 'Admin',
            'email' => 'admin@pruebas.com',
            'password' => Hash::make('password123'),
        ]);
        
       User::factory(100)->create();
          
    }
}
```

Este seeder es una clase en PHP que se utiliza para poblar la tabla "users" con datos de prueba. La clase "UsersTableSeeder" extiende la clase "Seeder" proporcionada por Laravel y sobrescribe el método "run()" para definir la lógica de la semilla. El método "run()" crea tres usuarios de ejemplo: un administrador y dos usuarios normales. Para el administrador, se proporciona un nombre, correo electrónico y contraseña. La función "Hash::make()" se utiliza para encriptar la contraseña. 

A continuación, se utiliza la función "User::factory(100)->create();" para generar y crear 100 usuarios aleatorios utilizando el Factory de Laravel. Los Factory permiten definir los valores aleatorios para los diferentes atributos del modelo y se utilizan para crear datos de prueba. 

A continuación veremos lo que son los Factories.

## Factories

### ¿Qué es un Factory?

En Laravel, un factory es una clase que se utiliza para generar datos de prueba de manera aleatoria y estructurada. Los factories se utilizan en conjunto con los seeders para poblar la base de datos con datos de prueba.

Los factories se definen en archivos PHP y normalmente se encuentran en el directorio "database/factories" de una aplicación Laravel. En estos archivos, se define la estructura de los datos que se van a generar, utilizando la sintaxis de Blueprint que ofrece Laravel.

Por ejemplo, si tenemos un modelo de "User" con los atributos "name", "email" y "password", podríamos definir un factory para generar usuarios aleatorios de la siguiente manera:

```php
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => bcrypt('password123'),
        ];
    }
}
```

En este ejemplo, estamos utilizando la clase "Factory" proporcionada por Laravel para definir el factory. La propiedad "$model" indica el modelo al que se asocia el factory.

El método "definition()" es donde se define la estructura de los datos que se van a generar. En este caso, estamos generando nombres aleatorios utilizando el método "name()" de la clase "Faker" (también proporcionada por Laravel), correos electrónicos únicos con el método "unique()->safeEmail()" y una contraseña encriptada con "bcrypt()".

Una vez definido el factory, podemos utilizarlo en nuestros seeders para generar datos de prueba de manera rápida y sencilla. Por ejemplo, en el seeder que mencionaste anteriormente, se utiliza el factory de "User" para crear 100 usuarios aleatorios.

```php
User::factory(100)->create();
```

En resumen, los factories en Laravel son una herramienta muy útil para generar datos de prueba de manera aleatoria y estructurada, lo que permite a los desarrolladores probar sus aplicaciones en un entorno controlado sin tener que preocuparse por la integridad de los datos.

### ¿Cómo se crea un Factory?

Para crear un Factory en Laravel, puedes seguir estos pasos:

1. Ejecuta el siguiente comando en tu terminal para generar un nuevo Factory:

   ```
   php artisan make:factory NombreDelFactory
   ```

2. Abre el archivo generado en la carpeta `database/factories`. Este archivo contendrá una clase Factory que extenderá la clase `Illuminate\Database\Eloquent\Factories\Factory`. 

3. Dentro de la clase Factory, define los atributos que quieres asignar a tu modelo. Puedes hacer esto utilizando el método `define`, el cual toma como primer parámetro el nombre del modelo y como segundo parámetro una función anónima donde puedes definir los atributos.

   ```
   use App\Models\User;
   use Illuminate\Database\Eloquent\Factories\Factory;

   class UserFactory extends Factory
   {
       protected $model = User::class;

       public function definition()
       {
           return [
               'name' => $this->faker->name,
               'email' => $this->faker->unique()->safeEmail,
               'password' => bcrypt('secret'),
           ];
       }
   }
   ```

   En este ejemplo, el Factory asigna un nombre generado aleatoriamente, un email único generado por Faker y una contraseña encriptada para el modelo User.

4. Para utilizar el Factory, puedes llamar al método `factory` en el modelo y pasarle como parámetro el nombre de la clase Factory que acabas de crear. Luego, llama al método `create` o `make` para crear una nueva instancia del modelo con los atributos definidos en el Factory.

   ```
   use App\Models\User;

   $user = User::factory()->create();
   ```

   Este código creará una nueva instancia del modelo User con los atributos definidos en el Factory.

5. Puedes utilizar el método `state` en el Factory para definir estados adicionales para tu modelo. Estos estados te permiten definir atributos adicionales para el modelo en función de ciertas condiciones. Por ejemplo:

   ```
   use App\Models\User;

   $user = User::factory()->state([
       'role' => 'admin',
   ])->create();
   ```

   Este código creará una nueva instancia del modelo User con el atributo "role" establecido en "admin".

Este es un Factory a modo de ejemplo y no tiene especial relevancia en nuestro proyecto.

### ¿Cómo se ejecuta un Factory?

Para ejecutar un factory en Laravel, puedes usar el método `create` en la clase factory correspondiente. Por ejemplo, si tienes un factory para la creación de usuarios, puedes ejecutarlo de la siguiente manera:

```php
$user = User::factory()->create();
```

Este código llamará al factory de usuarios (`UserFactory`) y generará un modelo de usuario con valores aleatorios, y lo insertará en la base de datos. También puedes pasar parámetros adicionales al método `create` para especificar valores personalizados para los atributos del modelo:

```php
$user = User::factory()->create([
    'name' => 'John Doe',
    'email' => 'john@example.com',
]);
```

En este caso, el factory generará un modelo de usuario con los valores personalizados especificados para el nombre y el correo electrónico, y los insertará en la base de datos.


## Ejecución ordenada de Seeder (DatabaseSeeder)

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
        $this->call(UsersTableSeeder::class);
        $this->call(AnuncioSeeder::class);
    }
}
```

Este seeder se están llamando a varios otros seeders para poblar la base de datos con datos de prueba. 

La clase `DatabaseSeeder` extiende la clase `Seeder` proporcionada por Laravel y define el método `run()`. Dentro de este método, se llaman a varios otros seeders mediante el método `call()`, que toma como argumento el nombre de la clase seeder correspondiente. 

En este caso, se están llamando a los siguientes seeders en este orden:

1. `CategoriaSeeder`: inserta datos predefinidos en la tabla `categorias`.
2. `SubcategoriaSeeder`: inserta datos predefinidos en la tabla `subcategorias`.
3. `ProvinciaSeeder`: inserta datos predefinidos en la tabla `provincias`.
4. `PoblacionSeeder`: inserta datos predefinidos en la tabla `poblaciones`.
5. `EstadoSeeder`: inserta datos predefinidos en la tabla `estados`.
6. `UsersTableSeeder`: inserta datos predefinidos en la tabla `users`.
7. `AnuncioSeeder`: inserta datos predefinidos en la tabla `anuncios`.

De esta manera, al ejecutar este seeder, se poblará la base de datos con datos de prueba en varias tablas para poder realizar pruebas en el entorno de desarrollo sin preocuparse por la integridad de los datos.

Aquí te dejo una posible corrección:

:::warning Importante
Para poder ejecutar correctamente este programa es necesario contar con dos archivos JSON (Poblaciones y Anuncios) que deben encontrarse dentro de la carpeta **Database\data** creada específicamente para la tarea de llenar las tablas Anuncios y Poblaciones con datos de ejemplo. Es importante tener en cuenta que estos datos contienen claves que apuntan a otras tablas, por lo que si se modifican, podría afectar la integridad referencial de la base de datos.

Estos archivos se encuentran en GitHub junto al proyecto. El enlace al repositorio se puede encontrar en el siguiente enlace:

    https://github.com/jesquiliche/anuncios

:::

Ahora ya puede ejecutar el comando:

```bash
    php artisan migrate:fresh --seed
```

En detalle, la opción migrate:fresh elimina todas las tablas de la base de datos y las vuelve a crear según las definiciones de migración presentes en la aplicación. Es decir, si ya existen tablas en la base de datos, este comando las borrará y creará nuevas tablas vacías. Por lo tanto, este comando es útil para realizar una nueva instalación o para comenzar desde cero en el desarrollo de una aplicación.

La opción --seed indica que después de crear las tablas de la base de datos, se ejecutarán los seeders para sembrar la base de datos con datos de prueba. En otras palabras, se insertarán datos ficticios en las tablas, según las lógicas definidas en los seeders.

En definitiva, el comando php artisan migrate:fresh --seed borra todas las tablas existentes en la base de datos y luego crea nuevas tablas vacías según las definiciones de migración presentes en la aplicación. Luego, inserta datos ficticios en las tablas según las lógicas definidas en los seeders.
