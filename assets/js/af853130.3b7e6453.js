"use strict";(self.webpackChunkeloquent=self.webpackChunkeloquent||[]).push([[983],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>b});var s=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,s,t=function(e,a){if(null==e)return{};var n,s,t={},l=Object.keys(e);for(s=0;s<l.length;s++)n=l[s],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)n=l[s],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=s.createContext({}),d=function(e){var a=s.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=d(e.components);return s.createElement(i.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},p=s.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=d(n),p=t,b=c["".concat(i,".").concat(p)]||c[p]||m[p]||l;return n?s.createElement(b,o(o({ref:a},u),{},{components:n})):s.createElement(b,o({ref:a},u))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,o=new Array(l);o[0]=p;var r={};for(var i in a)hasOwnProperty.call(a,i)&&(r[i]=a[i]);r.originalType=e,r[c]="string"==typeof e?e:t,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7678:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var s=n(7462),t=(n(7294),n(3905));const l={sidebar_position:7},o="Definici\xf3n de modelos y tablas",r={unversionedId:"tutorial-basics/sql/tablas",id:"tutorial-basics/sql/tablas",title:"Definici\xf3n de modelos y tablas",description:"\xbfQu\xe9 son los modelos y que son las tablas?",source:"@site/docs/tutorial-basics/sql/tablas.mdx",sourceDirName:"tutorial-basics/sql",slug:"/tutorial-basics/sql/tablas",permalink:"/curso-laravel/docs/tutorial-basics/sql/tablas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/sql/tablas.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/curso-laravel/docs/tutorial-basics/sql/introduccion"},next:{title:"Operaciones CRUD",permalink:"/curso-laravel/docs/tutorial-basics/sql/crud"}},i={},d=[{value:"\xbfQu\xe9 son los modelos y que son las tablas?",id:"qu\xe9-son-los-modelos-y-que-son-las-tablas",level:2},{value:"\xbfC\xf3mo se define una tabla en SQL?",id:"c\xf3mo-se-define-una-tabla-en-sql",level:2},{value:"Modelo User",id:"modelo-user",level:2},{value:"Diferencias y similitudes entre Eloquent y SQL",id:"diferencias-y-similitudes-entre-eloquent-y-sql",level:2}],u={toc:d},c="wrapper";function m(e){let{components:a,...n}=e;return(0,t.kt)(c,(0,s.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"definici\xf3n-de-modelos-y-tablas"},"Definici\xf3n de modelos y tablas"),(0,t.kt)("h2",{id:"qu\xe9-son-los-modelos-y-que-son-las-tablas"},"\xbfQu\xe9 son los modelos y que son las tablas?"),(0,t.kt)("p",null,'En Laravel, los modelos son clases PHP que representan una tabla en la base de datos. Cada modelo define una serie de propiedades y m\xe9todos que corresponden a las columnas y operaciones en la tabla. Por ejemplo, si tenemos una tabla "users" en nuestra base de datos, podemos definir un modelo llamado "User" que represente esa tabla.'),(0,t.kt)("p",null,'Para definir un modelo en Laravel, creamos una nueva clase en el directorio "app/Models" y la hacemos extender de la clase base "Illuminate\\Database\\Eloquent\\Model". Dentro de la clase, definimos una propiedad protegida llamada "$table" que indica el nombre de la tabla correspondiente en la base de datos. A partir de ah\xed, podemos definir propiedades para cada columna en la tabla, utilizando m\xe9todos de acceso como "get" y "set" para interactuar con ellas.'),(0,t.kt)("p",null,"Por otro lado, las tablas en Laravel son estructuras de datos en la base de datos que contienen informaci\xf3n organizada en filas y columnas. Cada columna representa una propiedad de la entidad que se est\xe1 almacenando, mientras que cada fila representa una instancia de esa entidad. Las tablas en Laravel suelen definirse mediante migraciones, que son clases PHP que contienen instrucciones para crear o modificar tablas en la base de datos."),(0,t.kt)("p",null,'Para crear una migraci\xf3n en Laravel, podemos utilizar el comando "php artisan make:migration" y proporcionar un nombre descriptivo para la migraci\xf3n. Dentro de la clase de migraci\xf3n generada, podemos utilizar m\xe9todos como "create" o "table" para definir la estructura de la tabla, incluyendo nombres de columnas, tipos de datos, restricciones y otros detalles. Luego, podemos ejecutar la migraci\xf3n utilizando el comando "php artisan migrate", que aplica todas las migraciones pendientes en la base de datos.'),(0,t.kt)("p",null,'Los modelos en Laravel son clases PHP que representan una tabla en la base de datos, mientras que las tablas son estructuras de datos en la base de datos que contienen informaci\xf3n organizada en filas y columnas. Los modelos se definen en el directorio "app/Models" y se extienden de la clase base "Illuminate\\Database\\Eloquent\\Model", mientras que las tablas se definen mediante migraciones, que son clases PHP que contienen instrucciones para crear o modificar tablas en la base de datos.'),(0,t.kt)("h2",{id:"c\xf3mo-se-define-una-tabla-en-sql"},"\xbfC\xf3mo se define una tabla en SQL?"),(0,t.kt)("p",null,"En SQL, una tabla es una estructura de datos que se utiliza para almacenar informaci\xf3n de manera organizada en filas y columnas. Cada columna representa una propiedad de la entidad que se est\xe1 almacenando, mientras que cada fila representa una instancia de esa entidad."),(0,t.kt)("p",null,'Para definir una tabla en SQL, utilizamos la sentencia "CREATE TABLE", seguida del nombre de la tabla y la lista de columnas con sus tipos de datos y restricciones correspondientes. Por ejemplo, podemos definir una tabla de usuarios con una columna para el nombre, una para el correo electr\xf3nico y una para la contrase\xf1a, de la siguiente manera:'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"CREATE TABLE users (\n    id INT PRIMARY KEY AUTO_INCREMENT,\n    name VARCHAR(255) NOT NULL,\n    email VARCHAR(255) UNIQUE NOT NULL,\n    password VARCHAR(255) NOT NULL\n);\n")),(0,t.kt)("p",null,'En este ejemplo, la tabla "users" se define con cuatro columnas: "id", "name", "email" y "password". La columna "id" se define como una clave primaria, con un valor que se incrementa autom\xe1ticamente con cada nueva fila. La columna "name" se define como un texto de hasta 255 caracteres que no puede ser nulo. La columna "email" se define como un texto de hasta 255 caracteres que debe ser \xfanico y no puede ser nulo. La columna "password" se define como un texto de hasta 255 caracteres que no puede ser nulo.'),(0,t.kt)("p",null,'Una vez que hemos definido la tabla en SQL, podemos crearla en una base de datos relacional utilizando un cliente de bases de datos como MySQL, PostgreSQL o Microsoft SQL Server. Para crear la tabla, simplemente ejecutamos la sentencia "CREATE TABLE" en el cliente de bases de datos y la tabla se agregar\xe1 a la base de datos correspondiente.'),(0,t.kt)("p",null,'Es importante tener en cuenta que la sintaxis y las opciones disponibles para definir tablas pueden variar ligeramente entre los distintos sistemas de bases de datos. Sin embargo, en general, la idea b\xe1sica es la misma: definimos una estructura de datos con columnas y restricciones, y luego la creamos en la base de datos utilizando una sentencia "CREATE TABLE".'),(0,t.kt)("h2",{id:"modelo-user"},"Modelo User"),(0,t.kt)("p",null,"En Laravel, podemos definir una tabla utilizando un modelo. Un modelo es una clase de PHP que representa una tabla en la base de datos. Para definir un modelo en Laravel, creamos una clase que herede de la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"Illuminate\\Database\\Eloquent\\Model")," y luego definimos sus propiedades y m\xe9todos."),(0,t.kt)("p",null,'Por ejemplo, para definir un modelo para la tabla "users", podemos crear una clase ',(0,t.kt)("inlineCode",{parentName:"p"},"User")," en el archivo ",(0,t.kt)("inlineCode",{parentName:"p"},"app/Models/User.php"),", de la siguiente manera:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    protected $table = 'users';\n    protected $fillable = ['name', 'email', 'password'];\n}\n")),(0,t.kt)("p",null,"En este ejemplo, la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"User")," hereda de la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"Model")," y define tres propiedades:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"$table"),': Esta propiedad especifica el nombre de la tabla en la base de datos que corresponde a este modelo. En este caso, la tabla se llama "users".'),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"$fillable"),': Esta propiedad especifica qu\xe9 columnas de la tabla pueden ser asignadas en masa. En este caso, las columnas "name", "email" y "password" pueden ser asignadas en masa.')),(0,t.kt)("p",null,"Con este modelo definido, podemos utilizar la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"User"),' para interactuar con la tabla "users" en la base de datos. Por ejemplo, podemos crear una nueva fila en la tabla de la siguiente manera:'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"$user = new User;\n$user->name = 'John';\n$user->email = 'john@example.com';\n$user->password = bcrypt('password');\n$user->save();\n")),(0,t.kt)("p",null,"En este ejemplo, creamos una nueva instancia de la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"User"),' y asignamos sus propiedades "name", "email" y "password". Luego llamamos al m\xe9todo ',(0,t.kt)("inlineCode",{parentName:"p"},"save()"),' para guardar la instancia en la base de datos. Laravel se encarga de generar la sentencia SQL necesaria para insertar la fila correspondiente en la tabla "users".'),(0,t.kt)("p",null,"Es importante destacar que Laravel utiliza una convenci\xf3n de\nnomenclatura para las tablas y modelos. Por defecto, si un modelo se\nllama ",(0,t.kt)("inlineCode",{parentName:"p"},"User"),', Laravel asumir\xe1 que la tabla correspondiente se\nllama "users". Sin embargo, podemos cambiar esta convenci\xf3n si\nes necesario, utilizando la propiedad ',(0,t.kt)("inlineCode",{parentName:"p"},"$table")," del modelo."),(0,t.kt)("h2",{id:"diferencias-y-similitudes-entre-eloquent-y-sql"},"Diferencias y similitudes entre Eloquent y SQL"),(0,t.kt)("p",null,"Tanto SQL como Eloquent permiten definir la estructura de una tabla, pero hay algunas diferencias en la forma en que se hacen."),(0,t.kt)("p",null,"En SQL, se define una tabla mediante una consulta CREATE TABLE, que incluye el nombre de la tabla, los nombres y tipos de datos de las columnas, as\xed como restricciones y claves externas. La sintaxis puede variar ligeramente entre los diferentes sistemas de bases de datos, pero en general se parece a esto:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE tabla_ejemplo (\n  id INT PRIMARY KEY,\n  nombre VARCHAR(255),\n  fecha_nacimiento DATE\n);\n")),(0,t.kt)("p",null,"Por otro lado, en Eloquent, la definici\xf3n de la tabla se realiza a trav\xe9s de la creaci\xf3n de una migraci\xf3n. Las migraciones de Laravel son clases de PHP que se encargan de modificar la estructura de la base de datos. A trav\xe9s de las migraciones, se pueden crear tablas, a\xf1adir o eliminar columnas, definir claves primarias y for\xe1neas, entre otras cosas."),(0,t.kt)("p",null,"La definici\xf3n de la tabla en Eloquent se realiza a trav\xe9s del m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"create")," de la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"Blueprint"),". A continuaci\xf3n, se muestra un ejemplo de una migraci\xf3n que crea la misma tabla del ejemplo anterior:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"use Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nclass CrearTablaEjemplo extends Migration\n{\n    public function up()\n    {\n        Schema::create('tabla_ejemplo', function (Blueprint $table) {\n            $table->id();\n            $table->string('nombre', 255);\n            $table->date('fecha_nacimiento');\n        });\n    }\n\n    public function down()\n    {\n        Schema::dropIfExists('tabla_ejemplo');\n    }\n}\n")),(0,t.kt)("p",null,"Como se puede ver, la sintaxis de Eloquent es un poco diferente a la de SQL. En lugar de especificar expl\xedcitamente el tipo de dato, se utilizan m\xe9todos como ",(0,t.kt)("inlineCode",{parentName:"p"},"string")," o ",(0,t.kt)("inlineCode",{parentName:"p"},"date")," para indicar el tipo de columna. Adem\xe1s, Eloquent utiliza convenciones de nomenclatura para los nombres de las columnas, por lo que la columna de clave primaria se llama ",(0,t.kt)("inlineCode",{parentName:"p"},"id")," en lugar de ",(0,t.kt)("inlineCode",{parentName:"p"},"id INT PRIMARY KEY"),"."),(0,t.kt)("p",null,"En conclusi\xf3n, tanto SQL como Eloquent permiten definir la estructura de\nuna tabla, pero la sintaxis y los m\xe9todos utilizados pueden variar\nligeramente entre los diferentes sistemas de bases de datos y\nlos ORMs. Es importante conocer las diferencias y similitudes para poder\ntrabajar eficazmente con ambas herramientas."))}m.isMDXComponent=!0}}]);