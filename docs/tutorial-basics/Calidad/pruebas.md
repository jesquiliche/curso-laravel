---
sidebar_position: 52
---

# Pruebas unitarias

## ¿Qué son y para que sirven?

Los test unitarios son una técnica de pruebas automatizadas que se utilizan en Laravel para verificar el correcto funcionamiento de las diferentes partes de la aplicación de forma aislada. Es decir, los test unitarios se encargan de verificar el funcionamiento de una sola unidad de código, como una función, un método, una clase, entre otros. 

Los test unitarios son muy importantes porque permiten asegurar que una unidad de código específica funciona correctamente, evitando así errores en el futuro y ahorrando tiempo en el proceso de depuración. Además, con los test unitarios se puede garantizar que los cambios que se hacen en el código no afecten negativamente el funcionamiento de la aplicación.

En Laravel, los test unitarios se escriben utilizando la clase `PHPUnit`, que es una herramienta de pruebas automatizadas para PHP. Laravel proporciona varias utilidades y métodos para facilitar la escritura de pruebas unitarias, como el uso de una base de datos de prueba separada, la creación de instancias de objetos de la aplicación en los tests y la ejecución de pruebas de forma sencilla desde la consola.

## ¿Cómo se crean?

Para crear un test unitario en Laravel, se pueden seguir los siguientes pasos:

1. Crear un archivo de test: lo primero que se debe hacer es crear un archivo de test. Laravel incluye una herramienta llamada Artisan, que permite crear archivos de test de manera automática. El comando para crear un archivo de test es el siguiente:

   ```
   php artisan make:test NombreDelTest
   ```

   Donde "NombreDelTest" es el nombre que se le quiere dar al archivo de test.

2. Escribir el código de prueba: una vez que se ha creado el archivo de test, se debe escribir el código que se quiere probar. Esto se hace mediante el uso de la clase TestCase, que proporciona varios métodos para realizar pruebas. Por ejemplo, para verificar que el resultado de una función sea el esperado, se puede usar el método assertEquals():

   ```php
   public function testMiFuncion()
   {
       $resultado = miFuncion();
       $this->assertEquals(2, $resultado);
   }
   ```

3. Ejecutar el test: una vez que se ha escrito el código de prueba, se debe ejecutar el test para verificar si se cumple con las condiciones que se han definido. Esto se hace mediante el siguiente comando:

   ```
   vendor/bin/phpunit
   ```

   Este comando ejecutará todos los tests que se hayan definido en la aplicación.

4. Analizar los resultados: después de ejecutar el test, se debe analizar el resultado para verificar si se han encontrado errores. Si no hay errores, significa que el test ha pasado con éxito.

Los test unitarios son muy útiles en el desarrollo de aplicaciones web, ya que permiten verificar que el código funciona correctamente en pequeñas partes, lo que reduce el riesgo de errores en la aplicación final. Además, los test unitarios permiten detectar errores temprano en el ciclo de desarrollo, lo que hace que sea más fácil y más barato corregirlos.

## Tipos de prueba

En Laravel 10, los diferentes tipos de pruebas se dividen en tres categorías principales: pruebas unitarias, pruebas de integración y pruebas de aceptación. A continuación, se describe cada una de ellas:

1. Pruebas unitarias: Las pruebas unitarias son pruebas automatizadas que se realizan en el código individual de una aplicación para comprobar que cada unidad de código (como una clase o método) funciona correctamente y produce los resultados esperados. En Laravel, se utilizan diferentes herramientas para llevar a cabo pruebas unitarias, como PHPUnit, Mockery, entre otras.

2. Pruebas de integración: Las pruebas de integración son pruebas que se realizan en el conjunto de la aplicación para comprobar que los diferentes módulos o componentes de la aplicación interactúan correctamente entre sí. En Laravel, se pueden realizar pruebas de integración en diferentes niveles, desde pruebas de integración de base de datos hasta pruebas de integración de API.

3. Pruebas de aceptación: Las pruebas de aceptación son pruebas que se realizan en la interfaz de usuario para comprobar que la aplicación se comporta correctamente y cumple con los requisitos del usuario. En Laravel, estas pruebas se pueden realizar utilizando la herramienta Dusk, que permite realizar pruebas automatizadas en navegadores web reales.

En este tutorial esencialmente nos concentraremos en las primeras, ya que el tema de las pruebas unitarias necesitaría de un manual por si mismo.

En definitiva, las pruebas unitarias se centran en probar pequeñas unidades de código, las pruebas de integración se centran en probar la interacción entre diferentes módulos de la aplicación, y las pruebas de aceptación se centran en probar la funcionalidad y la experiencia del usuario en la interfaz de usuario.

## Creación del primer test de prueba

### Configuración de la BB.DD de pruebas

Para realizar las pruebas unitarias, lo ideal es separar el entorno de pruebas del de producción, esto implica crear una base de datos de prueba. Seguidamente revisaremos punto por punto.

#### Configuración de una nueva conexión.

Para efectuar las pruebas unitarias crearemos primero una nueva conexión en el archivo **\config\database.php**.

Introduzca el siguiente código al final del array de conexiones: 

```php
 'anuncios_prueba' => [
            'driver' => 'mysql',
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => 'anuncios_prueba',
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'strict' => true,
            'engine' => null,
        ]
```

#### Configuración de variables de entorno

Cree un archivo .env.testing con el siguiente 
código: 

```bash
APP_NAME=Laravel
APP_ENV=testing
APP_KEY=base64:ioUGyWTNxz7zIh2zx4jnaSizwByAgSrseenFgVamJg8=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=anuncios_prueba
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=anuncios_prueba
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120
```
Dependiendo de su conexión de base de datos deberá adaptar estos valores. También deberá copiar su **API_KEY** de su archivo **.env** y copiarla aquí.

Por último para crear su base de datos de prueba 
ejecuta el siguiente commando:

```bash
php artisan migrate --database=anuncios_prueba --seed
```

Si la base de datos no existe se le preguntara si desea crearla diga yes.

Después de esto y si no ha habido ningún error puede consultar la BB.DD para ver que se ha creado correctamente.

### Creando nuestro primer test

Para crear el test debe ejecutar ejecutar el siguiente commando:

```php
php artisan make:test --unit  AnuncioControllerTest
```
Seguidamente diríjase a la carpeta **tests/Unit/AnuncioControllerTest.php** deberá encontrar el siguiente archivo **AnuncioControllerTest.php**.

Edite el archivo e introduzca el siguiente código:

```php
<?php

namespace Tests\Unit\Controllers;

use App\Http\Controllers\AnuncioController;
use App\Models\Anuncio;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class AnuncioControllerTest extends TestCase
{
   // use RefreshDatabase;

    
    /** @test */
    public function it_can_create_an_anuncio()
    {
        $this->withoutExceptionHandling();

        Storage::fake('public');

        $anuncioData = [
            'user_id'=>'1',
            'titulo' => 'Nuevo anuncio',
            'description' => 'Descripción del nuevo anuncio',
            'imagen' => UploadedFile::fake()->image('anuncio.jpg'),
            'precio' => 50.5,
            'subcategoria_id' => 1,
            'provincia' => '08',
            'codprovincia' => '28',
            'telefono'=>'3912589',
            'estado_id'=>1,
            'cod_postal'=>'08924'
        ];

        $controller = new AnuncioController();

        $response = $controller->store($this->createRequest($anuncioData));

        $anuncio = Anuncio::latest()->first();

        $this->assertEquals($anuncioData['titulo'], $anuncio->titulo);
        $this->assertEquals($anuncioData['description'], $anuncio->description);
        $this->assertEquals($anuncioData['precio'], $anuncio->precio);
        $this->assertEquals($anuncioData['subcategoria_id'], $anuncio->subcategoria_id);
        $this->assertEquals($anuncioData['provincia'], $anuncio->provincia);
         $this->assertEquals($anuncioData['cod_postal'], $anuncio->cod_postal);

      //  $response->assertRedirect(route('anuncios.show', $anuncio->id));
    }

    private function createRequest(array $data): \Illuminate\Http\Request
    {
        $request = new \Illuminate\Http\Request();
        $request->replace($data);
        $request->setMethod('POST');
        return $request;
    }
}
```