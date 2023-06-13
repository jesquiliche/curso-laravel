"use strict";(self.webpackChunkeloquent=self.webpackChunkeloquent||[]).push([[5380],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>b});var o=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,o,l=function(e,a){if(null==e)return{};var n,o,l={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=o.createContext({}),s=function(e){var a=o.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=s(e.components);return o.createElement(d.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var n=e.components,l=e.mdxType,t=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=s(n),u=l,b=m["".concat(d,".").concat(u)]||m[u]||c[u]||t;return n?o.createElement(b,i(i({ref:a},p),{},{components:n})):o.createElement(b,i({ref:a},p))}));function b(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var t=n.length,i=new Array(t);i[0]=u;var r={};for(var d in a)hasOwnProperty.call(a,d)&&(r[d]=a[d]);r.originalType=e,r[m]="string"==typeof e?e:l,i[1]=r;for(var s=2;s<t;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3226:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>s});var o=n(7462),l=(n(7294),n(3905));const t={sidebar_position:5},i="Definici\xf3n, conceptos y propiedades",r={unversionedId:"tutorial-basics/Modelos/modelos",id:"tutorial-basics/Modelos/modelos",title:"Definici\xf3n, conceptos y propiedades",description:"\xbfQu\xe9 es un modelo?",source:"@site/docs/tutorial-basics/04-Modelos/01-modelos.md",sourceDirName:"tutorial-basics/04-Modelos",slug:"/tutorial-basics/Modelos/modelos",permalink:"/curso-laravel/docs/tutorial-basics/Modelos/modelos",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/04-Modelos/01-modelos.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Modelos",permalink:"/curso-laravel/docs/category/modelos"},next:{title:"Creaci\xf3n y definici\xf3n de relaciones",permalink:"/curso-laravel/docs/tutorial-basics/Modelos/relaciones"}},d={},s=[{value:"\xbfQu\xe9 es un modelo?",id:"qu\xe9-es-un-modelo",level:2},{value:"\xbfC\xf3mo se relacionan los modelos con las tablas de la base de datos?",id:"c\xf3mo-se-relacionan-los-modelos-con-las-tablas-de-la-base-de-datos",level:2},{value:"C\xf3mo se definen los modelos en Laravel",id:"c\xf3mo-se-definen-los-modelos-en-laravel",level:2},{value:"Propiedades especiales de los modelos",id:"propiedades-especiales-de-los-modelos",level:2},{value:"protected $table",id:"protected-table",level:3},{value:"Propiedad fillable",id:"propiedad-fillable",level:3},{value:"Propiedad guarded",id:"propiedad-guarded",level:3},{value:"Propiedad primarykey",id:"propiedad-primarykey",level:3},{value:"Propiedad keyType",id:"propiedad-keytype",level:3},{value:"Propiedad incrementing",id:"propiedad-incrementing",level:3},{value:"Propiedad timestamps",id:"propiedad-timestamps",level:3},{value:"Propiedad dateFormat",id:"propiedad-dateformat",level:3},{value:"Propiedad connection",id:"propiedad-connection",level:3},{value:"Propiedad casts",id:"propiedad-casts",level:3}],p={toc:s},m="wrapper";function c(e){let{components:a,...n}=e;return(0,l.kt)(m,(0,o.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"definici\xf3n-conceptos-y-propiedades"},"Definici\xf3n, conceptos y propiedades"),(0,l.kt)("h2",{id:"qu\xe9-es-un-modelo"},"\xbfQu\xe9 es un modelo?"),(0,l.kt)("p",null,"Los modelos en Laravel y otros frameworks ORM proporcionan una capa de abstracci\xf3n que permite a los desarrolladores interactuar con la base de datos utilizando un lenguaje de programaci\xf3n orientado a objetos en lugar de SQL. "),(0,l.kt)("p",null,"Al utilizar un modelo, el desarrollador puede trabajar con los datos de la base de datos como si fueran objetos en lugar de filas en una tabla. Esto hace que el c\xf3digo sea m\xe1s legible y f\xe1cil de mantener, ya que se pueden utilizar nombres de m\xe9todo y propiedades significativos en lugar de nombres de columna en la base de datos."),(0,l.kt)("p",null,"Adem\xe1s, los modelos permiten definir relaciones entre tablas, como una relaci\xf3n uno a muchos o muchos a muchos. Por ejemplo, si tienes una tabla de usuarios y una tabla de publicaciones, puedes definir una relaci\xf3n en el modelo de usuarios que indica que un usuario tiene muchas publicaciones. Esto facilita el acceso a los datos relacionados y permite realizar consultas complejas con facilidad."),(0,l.kt)("p",null,"Otra ventaja de utilizar modelos es que Laravel proporciona muchas herramientas integradas para trabajar con ellos. Por ejemplo, puedes utilizar m\xe9todos como ",(0,l.kt)("inlineCode",{parentName:"p"},"all()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"find()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"create()")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"delete()")," para realizar operaciones comunes en la base de datos con una sintaxis simple y legible. Tambi\xe9n puedes utilizar el motor de consultas de Laravel para crear consultas complejas utilizando una sintaxis similar a SQL pero m\xe1s amigable para el lenguaje de programaci\xf3n orientado a objetos."),(0,l.kt)("p",null,"Como conclusi\xf3n, los modelos son una parte esencial de la arquitectura de Laravel y otros frameworks ORM. Proporcionan una capa de abstracci\xf3n que simplifica la interacci\xf3n con la base de datos y hace que el c\xf3digo sea m\xe1s legible y f\xe1cil de mantener. Adem\xe1s, permiten definir relaciones entre tablas y proporcionan herramientas integradas para trabajar con ellos."),(0,l.kt)("p",null,'En Laravel, los modelos se utilizan para representar una tabla de la base de datos. El nombre del modelo debe ser el mismo que el nombre de la tabla, pero en singular y en CamelCase. Por ejemplo, si tienes una tabla llamada "users", el modelo correspondiente se llamar\xeda "User".'),(0,l.kt)("p",null,"Laravel utiliza convenciones para relacionar los modelos con las tablas de la base de datos. Por defecto, el modelo busca la tabla con el mismo nombre en plural, pero esta convenci\xf3n se puede cambiar si es necesario. Adem\xe1s, Laravel permite especificar manualmente el nombre de la tabla en caso de que necesites utilizar un nombre diferente."),(0,l.kt)("p",null,"Una vez que se ha definido el modelo, puedes utilizar los m\xe9todos del modelo para interactuar con la tabla correspondiente en la base de datos. Por ejemplo, el m\xe9todo ",(0,l.kt)("inlineCode",{parentName:"p"},"all()")," devuelve una colecci\xf3n de todos los registros de la tabla, el m\xe9todo ",(0,l.kt)("inlineCode",{parentName:"p"},"find()")," busca un registro por su clave primaria, el m\xe9todo ",(0,l.kt)("inlineCode",{parentName:"p"},"create()")," crea un nuevo registro y el m\xe9todo ",(0,l.kt)("inlineCode",{parentName:"p"},"update()")," actualiza un registro existente."),(0,l.kt)("p",null,"Adem\xe1s, puedes utilizar las relaciones en los modelos para definir relaciones entre las tablas. Por ejemplo, si tienes una tabla de usuarios y una tabla de publicaciones, puedes definir una relaci\xf3n en el modelo de usuarios que indica que un usuario tiene muchas publicaciones. Esto facilita el acceso a los datos relacionados y permite realizar consultas complejas con facilidad."),(0,l.kt)("p",null,"En conclusi\xf3n, los modelos en Laravel se relacionan con las tablas de la base de datos de forma autom\xe1tica utilizando convenciones basadas en el nombre del modelo y la tabla. Los modelos permiten interactuar con los datos de la tabla utilizando un lenguaje de programaci\xf3n orientado a objetos y proporcionan herramientas integradas para trabajar con ellos. Adem\xe1s, permiten definir relaciones entre tablas y realizar consultas complejas con facilidad."),(0,l.kt)("h2",{id:"c\xf3mo-se-relacionan-los-modelos-con-las-tablas-de-la-base-de-datos"},"\xbfC\xf3mo se relacionan los modelos con las tablas de la base de datos?"),(0,l.kt)("p",null,'En Laravel, los modelos se utilizan para representar una tabla de la base de datos. El nombre del modelo debe ser el mismo que el nombre de la tabla, pero en singular y en CamelCase. Por ejemplo, si tienes una tabla llamada "users", el modelo correspondiente se llamar\xeda "User".'),(0,l.kt)("p",null,"Laravel utiliza convenciones para relacionar los modelos con las tablas de la base de datos. Por defecto, el modelo busca la tabla con el mismo nombre en plural, pero esta convenci\xf3n se puede cambiar si es necesario. Adem\xe1s, Laravel permite especificar manualmente el nombre de la tabla en caso de que necesites utilizar un nombre diferente."),(0,l.kt)("p",null,"Una vez que se ha definido el modelo, puedes utilizar los m\xe9todos del modelo para interactuar con la tabla correspondiente en la base de datos. Por ejemplo, el m\xe9todo ",(0,l.kt)("inlineCode",{parentName:"p"},"all()")," devuelve una colecci\xf3n de todos los registros de la tabla, el m\xe9todo ",(0,l.kt)("inlineCode",{parentName:"p"},"find()")," busca un registro por su clave primaria, el m\xe9todo ",(0,l.kt)("inlineCode",{parentName:"p"},"create()")," crea un nuevo registro y el m\xe9todo ",(0,l.kt)("inlineCode",{parentName:"p"},"update()")," actualiza un registro existente."),(0,l.kt)("p",null,"Adem\xe1s, puedes utilizar las relaciones en los modelos para definir relaciones entre las tablas. Por ejemplo, si tienes una tabla de usuarios y una tabla de publicaciones, puedes definir una relaci\xf3n en el modelo de usuarios que indica que un usuario tiene muchas publicaciones. Esto facilita el acceso a los datos relacionados y permite realizar consultas complejas con facilidad.\nLos modelos en Laravel se relacionan con las tablas de la base de datos de forma autom\xe1tica utilizando convenciones basadas en el nombre del modelo y la tabla. Los modelos permiten interactuar con los datos de la tabla utilizando un lenguaje de programaci\xf3n orientado a objetos y proporcionan herramientas integradas para trabajar con ellos. Adem\xe1s, permiten definir relaciones entre tablas y realizar consultas complejas con facilidad."),(0,l.kt)("h2",{id:"c\xf3mo-se-definen-los-modelos-en-laravel"},"C\xf3mo se definen los modelos en Laravel"),(0,l.kt)("p",null,"En Laravel, los modelos son clases PHP que representan las tablas de la base de datos y se utilizan para interactuar con los datos en la base de datos. Aqu\xed te muestro c\xf3mo definir un modelo en Laravel:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Paso 1:")," Crear un nuevo archivo PHP para el modelo\nEn la carpeta ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Models")," de tu proyecto Laravel, puedes crear un nuevo archivo PHP para el modelo. Por convenci\xf3n, los modelos en Laravel suelen estar en el namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"App\\Models"),". Puedes nombrar el archivo con el nombre del modelo en singular y en notaci\xf3n camelCase. Por ejemplo, si tu modelo representa una tabla de usuarios, puedes crear un archivo llamado ",(0,l.kt)("inlineCode",{parentName:"p"},"User.php"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Paso 2:")," Definir la clase del modelo\nDentro del archivo del modelo, debes definir la clase del modelo extendiendo la clase base ",(0,l.kt)("inlineCode",{parentName:"p"},"Illuminate\\Database\\Eloquent\\Model"),". Por ejemplo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass User extends Model\n{\n    // Aqu\xed se define la clase del modelo\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Paso 3:")," Definir las propiedades y m\xe9todos del modelo\nDentro de la clase del modelo, puedes definir las propiedades y m\xe9todos necesarios para interactuar con la tabla de la base de datos. Algunas de las propiedades y m\xe9todos m\xe1s comunes son:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"$table"),": Propiedad que define el nombre de la tabla en la base de datos a la que el modelo est\xe1 asociado. Por defecto, Laravel asume que el nombre de la tabla es el nombre del modelo en plural en notaci\xf3n snake_case, pero puedes especificar un nombre de tabla diferente si es necesario.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"$fillable")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"$guarded"),": Propiedades que definen los campos que pueden ser llenados masivamente mediante el m\xe9todo ",(0,l.kt)("inlineCode",{parentName:"p"},"create()")," o ",(0,l.kt)("inlineCode",{parentName:"p"},"update()"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"$fillable")," especifica los campos que est\xe1n permitidos, mientras que ",(0,l.kt)("inlineCode",{parentName:"p"},"$guarded")," especifica los campos que est\xe1n protegidos y no pueden ser llenados masivamente.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Relaciones: Puedes definir las relaciones del modelo con otros modelos utilizando los m\xe9todos ",(0,l.kt)("inlineCode",{parentName:"p"},"hasMany()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"belongsTo()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"hasManyThrough()"),", entre otros. Esto permite establecer relaciones entre tablas de la base de datos y acceder a los registros relacionados de forma f\xe1cil y conveniente.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Otros m\xe9todos: Tambi\xe9n puedes definir otros m\xe9todos en el modelo seg\xfan tus necesidades, como por ejemplo, mutadores y accesores para manipular los datos antes de guardarlos en la base de datos o al acceder a ellos."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Paso 4:")," Utilizar el modelo en el c\xf3digo\nUna vez que has definido el modelo, puedes utilizarlo en tu c\xf3digo para interactuar con los datos en la base de datos. Puedes utilizar los m\xe9todos del modelo para realizar consultas, insertar, actualizar o eliminar registros en la base de datos de forma sencilla y elegante."),(0,l.kt)("admonition",{title:"Crear el modelo con artisan",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Claro, para crear un modelo en Laravel utilizando Artisan, debes ejecutar el siguiente comando en la terminal en la ra\xedz de tu proyecto:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"php artisan make:model NombreDelModelo\n")),(0,l.kt)("p",{parentName:"admonition"},'Reemplaza "NombreDelModelo" por el nombre que quieras darle a tu modelo. Una vez ejecutado el comando, se crear\xe1 un archivo en la carpeta "app/Models" con el nombre que hayas especificado, con el siguiente c\xf3digo b\xe1sico:'),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass NombreDelModelo extends Model\n{\n    use HasFactory;\n}\n")),(0,l.kt)("p",{parentName:"admonition"},"A partir de aqu\xed, podr\xe1s agregar las propiedades y m\xe9todos necesarios para definir la estructura y comportamiento de tu modelo en funci\xf3n de tus necesidades, como hemos veremos en proximos temas.")),(0,l.kt)("p",null,"En conclusi\xf3n, para definir un modelo en Laravel, necesitas crear un archivo PHP en la carpeta ",(0,l.kt)("inlineCode",{parentName:"p"},"app/Models"),", definir la clase del modelo que extienda de ",(0,l.kt)("inlineCode",{parentName:"p"},"Illuminate\\Database\\Eloquent\\Model"),", y luego definir las propiedades y m\xe9todos necesarios para interactuar con los datos en la base de datos. Una vez definido, puedes utilizar el modelo en tu c\xf3digo para interactuar con la base de datos de manera f\xe1cil y conveniente."),(0,l.kt)("h2",{id:"propiedades-especiales-de-los-modelos"},"Propiedades especiales de los modelos"),(0,l.kt)("h3",{id:"protected-table"},"protected $table"),(0,l.kt)("p",null,"En Laravel, cada modelo se corresponde con una tabla de la base de datos. Por defecto, Laravel asume que el nombre de la tabla ser\xe1 el nombre del modelo en min\xfasculas y en plural. Sin embargo, es posible especificar el nombre de la tabla correspondiente a un modelo en particular a trav\xe9s de la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$table")," del modelo."),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$table")," es una propiedad protegida que se utiliza para definir el nombre de la tabla correspondiente al modelo en particular. Por ejemplo, si tienes un modelo llamado ",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),", y la tabla correspondiente en la base de datos se llama ",(0,l.kt)("inlineCode",{parentName:"p"},"libros"),", puedes especificar el nombre de la tabla en el modelo de la siguiente manera:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class Book extends Model\n{\n    protected $table = 'libros';\n}\n")),(0,l.kt)("admonition",{title:"Importante",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Por defecto Laravel si no se especifica esta propiedad, asumira que la tabla\nde BB.DD correspondiente es igual al  nombre del modelo m\xe1s una s al final y en minusculas.")),(0,l.kt)("p",null,"De esta manera, Laravel utilizar\xe1 la tabla ",(0,l.kt)("inlineCode",{parentName:"p"},"libros")," en lugar de la tabla ",(0,l.kt)("inlineCode",{parentName:"p"},"books")," por defecto."),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$table")," tambi\xe9n es \xfatil si necesitas trabajar con una tabla que no sigue las convenciones de nombres de Laravel o si necesitas trabajar con m\xfaltiples conexiones de bases de datos."),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$table")," es una propiedad protegida de los modelos de Laravel que se utiliza para definir el nombre de la tabla correspondiente al modelo en particular."),(0,l.kt)("h3",{id:"propiedad-fillable"},"Propiedad fillable"),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$fillable")," es otra propiedad protegida de los modelos que se utiliza para especificar qu\xe9 atributos de un modelo pueden ser asignados de forma masiva. Cuando se crea un nuevo registro en la base de datos utilizando la funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"create()")," o la funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"fill()"),", se pueden asignar m\xfaltiples valores a la vez utilizando un arreglo asociativo. Sin embargo, por razones de seguridad, no todos los atributos de un modelo deben ser asignados masivamente."),(0,l.kt)("p",null,'Por defecto, todos los atributos de un modelo son "protegidos" y no pueden ser asignados masivamente. Para permitir la asignaci\xf3n masiva de un atributo en particular, debes incluirlo en la propiedad ',(0,l.kt)("inlineCode",{parentName:"p"},"$fillable"),". Por ejemplo, si tienes un modelo ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," con los atributos ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"email")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"password"),", pero solo quieres permitir la asignaci\xf3n masiva del ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," y del ",(0,l.kt)("inlineCode",{parentName:"p"},"email"),", puedes especificar esto en el modelo de la siguiente manera:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class User extends Model\n{\n    protected $fillable = ['name', 'email'];\n}\n")),(0,l.kt)("p",null,"De esta manera, solo los atributos ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"email")," pueden ser asignados masivamente utilizando la funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"create()")," o la funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"fill()"),", mientras que el atributo ",(0,l.kt)("inlineCode",{parentName:"p"},"password"),' se mantiene "protegido".'),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$fillable")," es una medida de seguridad importante para evitar la asignaci\xf3n masiva de datos no deseados a la base de datos. Por lo tanto, es importante ser cuidadoso al utilizar esta propiedad y solo permitir la asignaci\xf3n masiva de los atributos que sean realmente necesarios."),(0,l.kt)("h3",{id:"propiedad-guarded"},"Propiedad guarded"),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$guarded")," es otra propiedad protegida de los modelos de Eloquent en Laravel que se utiliza para especificar qu\xe9 atributos no pueden ser asignados masivamente. Es decir, los atributos que se especifiquen en la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$guarded")," no se podr\xe1n asignar utilizando la funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"create()")," o la funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"fill()"),", pero s\xed se pueden asignar de forma individual."),(0,l.kt)("p",null,"Por defecto, la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$guarded"),' est\xe1 vac\xeda, lo que significa que todos los atributos del modelo son "fillable" y se pueden asignar masivamente. Sin embargo, a veces es \xfatil especificar ciertos atributos que nunca deber\xedan ser asignados masivamente, incluso si no est\xe1n en la propiedad ',(0,l.kt)("inlineCode",{parentName:"p"},"$fillable"),"."),(0,l.kt)("p",null,"Por ejemplo, si tienes un modelo ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," con los atributos ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"email"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"password")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"admin"),", y deseas que el atributo ",(0,l.kt)("inlineCode",{parentName:"p"},"admin")," nunca sea asignado masivamente, puedes especificarlo en la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$guarded")," de la siguiente manera:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class User extends Model\n{\n    protected $fillable = ['name', 'email', 'password'];\n    protected $guarded = ['admin'];\n}\n")),(0,l.kt)("p",null,"En este caso, todos los atributos excepto ",(0,l.kt)("inlineCode",{parentName:"p"},"admin"),' son "fillable" y se pueden asignar masivamente. El atributo ',(0,l.kt)("inlineCode",{parentName:"p"},"admin"),' est\xe1 "guarded" y no se puede asignar masivamente. Sin embargo, el atributo ',(0,l.kt)("inlineCode",{parentName:"p"},"admin")," todav\xeda se puede asignar de forma individual utilizando la funci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"setAttribute()"),"."),(0,l.kt)("p",null,"En general, es importante tener en cuenta que la asignaci\xf3n masiva puede ser una vulnerabilidad de seguridad si no se maneja correctamente, y es recomendable utilizar la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$fillable")," o la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$guarded")," para proteger los atributos del modelo de la asignaci\xf3n masiva no deseada."),(0,l.kt)("h3",{id:"propiedad-primarykey"},"Propiedad primarykey"),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$primaryKey"),' se utiliza para indicar el nombre de la columna que se utilizar\xe1 como clave primaria en la tabla de la base de datos asociada al modelo de Eloquent. Por defecto, Laravel asume que la clave primaria es una columna llamada "id". Sin embargo, en algunos casos puede ser necesario utilizar una columna con un nombre diferente como clave primaria, y es ah\xed donde entra en juego ',(0,l.kt)("inlineCode",{parentName:"p"},"$primaryKey"),"."),(0,l.kt)("p",null,'Por ejemplo, si queremos que la clave primaria sea una columna llamada "codigo_producto" en lugar de "id", podemos establecer la propiedad ',(0,l.kt)("inlineCode",{parentName:"p"},"$primaryKey")," en el modelo de la siguiente manera:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class Producto extends Model\n{\n    protected $primaryKey = 'codigo_producto';\n}\n")),(0,l.kt)("p",null,'De esta forma, Eloquent utilizar\xe1 la columna "codigo_producto" como clave primaria en lugar de "id". Es importante destacar que, si se utiliza una columna diferente a "id" como clave primaria, es necesario indicarlo al momento de realizar relaciones entre tablas en la base de datos.'),(0,l.kt)("h3",{id:"propiedad-keytype"},"Propiedad keyType"),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$keyType")," se utiliza en los modelos de Eloquent de Laravel para especificar el tipo de datos de la clave primaria de la tabla asociada al modelo. Por defecto, Laravel asume que la clave primaria es un campo de tipo entero (",(0,l.kt)("inlineCode",{parentName:"p"},"integer"),"), pero en algunos casos puede ser necesario utilizar otro tipo de datos para la clave primaria."),(0,l.kt)("p",null,"Si se quiere definir un tipo de datos diferente para la clave primaria, se puede utilizar la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$keyType")," en el modelo de la siguiente forma:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class Usuario extends Model\n{\n    protected $keyType = 'string';\n}\n")),(0,l.kt)("p",null,"En este ejemplo, se est\xe1 indicando que el tipo de datos de la clave primaria de la tabla asociada al modelo ",(0,l.kt)("inlineCode",{parentName:"p"},"Usuario")," es una cadena de texto (",(0,l.kt)("inlineCode",{parentName:"p"},"string"),") en lugar de un n\xfamero entero por defecto."),(0,l.kt)("p",null,"Es importante mencionar que al utilizar un tipo de datos diferente para la clave primaria, se debe asegurar que las relaciones definidas en el modelo est\xe9n configuradas para utilizar el mismo tipo de datos en las claves for\xe1neas, de lo contrario pueden surgir errores de integridad referencial."),(0,l.kt)("h3",{id:"propiedad-incrementing"},"Propiedad incrementing"),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$incrementing")," es una propiedad de los modelos de Eloquent en Laravel que se utiliza para indicar si la clave primaria de la tabla asociada al modelo es un n\xfamero autoincremental (",(0,l.kt)("inlineCode",{parentName:"p"},"true"),") o no (",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,l.kt)("p",null,"Por defecto, Laravel asume que la clave primaria de la tabla es un n\xfamero autoincremental, por lo que la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$incrementing")," se establece en ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," autom\xe1ticamente. Si se desea utilizar una clave primaria que no sea autoincremental, se debe establecer la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$incrementing")," en ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class Usuario extends Model\n{\n    protected $primaryKey = 'codigo';\n    public $incrementing = false;\n}\n")),(0,l.kt)("p",null,"En este ejemplo, se est\xe1 indicando que la clave primaria de la tabla asociada al modelo ",(0,l.kt)("inlineCode",{parentName:"p"},"Usuario")," se llama ",(0,l.kt)("inlineCode",{parentName:"p"},"codigo")," y que no es un n\xfamero autoincremental."),(0,l.kt)("p",null,"Es importante mencionar que si se establece la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$incrementing")," en ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", tambi\xe9n se debe establecer la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$keyType")," con el tipo de dato correspondiente a la clave primaria, ya que Laravel no podr\xe1 inferir autom\xe1ticamente el tipo de datos de la clave primaria."),(0,l.kt)("h3",{id:"propiedad-timestamps"},"Propiedad timestamps"),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$timestamps")," es una propiedad de los modelos de Eloquent en Laravel que se utiliza para indicar si la tabla asociada al modelo tiene las columnas ",(0,l.kt)("inlineCode",{parentName:"p"},"created_at")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"updated_at")," para el registro de la fecha y hora de creaci\xf3n y actualizaci\xf3n de los registros."),(0,l.kt)("p",null,"Por defecto, Laravel asume que la tabla asociada al modelo tiene estas dos columnas, por lo que la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$timestamps")," se establece en ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," autom\xe1ticamente. Si se desea desactivar esta funcionalidad, se debe establecer la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$timestamps")," en ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class Usuario extends Model\n{\n    public $timestamps = false;\n}\n")),(0,l.kt)("p",null,"En este ejemplo, se est\xe1 indicando que la tabla asociada al modelo ",(0,l.kt)("inlineCode",{parentName:"p"},"Usuario")," no tiene las columnas ",(0,l.kt)("inlineCode",{parentName:"p"},"created_at")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"updated_at"),", por lo que no se utilizar\xe1 la funcionalidad de registro autom\xe1tico de fechas y horas de creaci\xf3n y actualizaci\xf3n."),(0,l.kt)("p",null,"Es importante mencionar que si se utiliza la funcionalidad de registro autom\xe1tico de fechas y horas de creaci\xf3n y actualizaci\xf3n, Laravel espera que las columnas ",(0,l.kt)("inlineCode",{parentName:"p"},"created_at")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"updated_at")," de la tabla asociada al modelo sean del tipo ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp"),", a menos que se especifique lo contrario mediante la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$dateFormat"),"."),(0,l.kt)("h3",{id:"propiedad-dateformat"},"Propiedad dateFormat"),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$dateFormat")," es una propiedad de los modelos de Eloquent en Laravel que se utiliza para indicar el formato de las fechas almacenadas en las columnas ",(0,l.kt)("inlineCode",{parentName:"p"},"created_at")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"updated_at")," de la tabla asociada al modelo, en caso de utilizar la funcionalidad de registro autom\xe1tico de fechas y horas."),(0,l.kt)("p",null,"Por defecto, Laravel asume que el formato de fecha utilizado es el formato ISO 8601, es decir, ",(0,l.kt)("inlineCode",{parentName:"p"},"Y-m-d\\TH:i:sP"),". Si se desea cambiar este formato, se debe establecer la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$dateFormat")," en el formato deseado."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class Usuario extends Model\n{\n    protected $dateFormat = 'd/m/Y H:i:s';\n}\n")),(0,l.kt)("p",null,"En este ejemplo, se est\xe1 indicando que las fechas almacenadas en las columnas ",(0,l.kt)("inlineCode",{parentName:"p"},"created_at")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"updated_at")," de la tabla asociada al modelo ",(0,l.kt)("inlineCode",{parentName:"p"},"Usuario")," se almacenan en el formato ",(0,l.kt)("inlineCode",{parentName:"p"},"d/m/Y H:i:s"),". Esto es \xfatil si se desea utilizar un formato de fecha diferente al predeterminado por Laravel."),(0,l.kt)("h3",{id:"propiedad-connection"},"Propiedad connection"),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$connection")," es una propiedad de los modelos de Eloquent en Laravel que se utiliza para indicar la conexi\xf3n de base de datos que se utilizar\xe1 para interactuar con la tabla asociada al modelo."),(0,l.kt)("p",null,"Por defecto, Laravel utiliza la conexi\xf3n de base de datos predeterminada para interactuar con las tablas de la base de datos. Sin embargo, en algunas ocasiones se puede necesitar interactuar con una conexi\xf3n diferente, por ejemplo, cuando se est\xe1 trabajando con m\xfaltiples bases de datos."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class Usuario extends Model\n{\n    protected $connection = 'conexion_alternativa';\n}\n")),(0,l.kt)("p",null,"En este ejemplo, se est\xe1 indicando que la tabla asociada al modelo ",(0,l.kt)("inlineCode",{parentName:"p"},"Usuario")," debe interactuar con la conexi\xf3n de base de datos llamada ",(0,l.kt)("inlineCode",{parentName:"p"},"conexion_alternativa")," en lugar de la conexi\xf3n de base de datos predeterminada. Es importante destacar que se debe asegurar que la conexi\xf3n definida en la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$connection")," est\xe9 configurada correctamente en el archivo ",(0,l.kt)("inlineCode",{parentName:"p"},"config/database.php"),"."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Como se configura el archivo ",(0,l.kt)("strong",{parentName:"mdxAdmonitionTitle"},"config/database")),(0,l.kt)("p",{parentName:"admonition"},"En el archivo ",(0,l.kt)("inlineCode",{parentName:"p"},"config/database.php")," se encuentran las configuraciones de las conexiones de base de datos que se pueden utilizar en la aplicaci\xf3n. Por defecto, Laravel define una conexi\xf3n de base de datos por defecto y puede definir conexiones adicionales."),(0,l.kt)("p",{parentName:"admonition"},"Para configurar una nueva conexi\xf3n de base de datos, se debe agregar una nueva entrada al arreglo de conexiones en el archivo ",(0,l.kt)("inlineCode",{parentName:"p"},"config/database.php"),". La entrada debe contener la informaci\xf3n necesaria para establecer la conexi\xf3n, como el controlador de la base de datos, el host, el nombre de la base de datos, el nombre de usuario y la contrase\xf1a. Por ejemplo:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-php"},"'connections' => [\n\n    'mysql' => [\n        'driver' => 'mysql',\n        'host' => env('DB_HOST', '127.0.0.1'),\n        'port' => env('DB_PORT', '3306'),\n        'database' => env('DB_DATABASE', 'forge'),\n        'username' => env('DB_USERNAME', 'forge'),\n        'password' => env('DB_PASSWORD', ''),\n        'charset' => 'utf8mb4',\n        'collation' => 'utf8mb4_unicode_ci',\n        'prefix' => '',\n        'strict' => true,\n        'engine' => null,\n    ],\n\n    'conexion_alternativa' => [\n        'driver' => 'mysql',\n        'host' => env('DB_HOST_ALT', '127.0.0.1'),\n        'port' => env('DB_PORT_ALT', '3306'),\n        'database' => env('DB_DATABASE_ALT', 'forge'),\n        'username' => env('DB_USERNAME_ALT', 'forge'),\n        'password' => env('DB_PASSWORD_ALT', ''),\n        'charset' => 'utf8mb4',\n        'collation' => 'utf8mb4_unicode_ci',\n        'prefix' => '',\n        'strict' => true,\n        'engine' => null,\n    ],\n\n],\n")),(0,l.kt)("p",{parentName:"admonition"},"En este ejemplo, se ha definido una nueva conexi\xf3n de base de datos llamada ",(0,l.kt)("inlineCode",{parentName:"p"},"conexion_alternativa")," que utiliza las variables de entorno ",(0,l.kt)("inlineCode",{parentName:"p"},"DB_HOST_ALT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DB_PORT_ALT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DB_DATABASE_ALT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DB_USERNAME_ALT")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"DB_PASSWORD_ALT")," para establecer la conexi\xf3n."),(0,l.kt)("p",{parentName:"admonition"},"Una vez que se ha definido la conexi\xf3n en el archivo ",(0,l.kt)("inlineCode",{parentName:"p"},"config/database.php"),", se puede utilizar la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"$connection")," en un modelo de Eloquent para indicar qu\xe9 conexi\xf3n se debe utilizar para interactuar con la tabla asociada al modelo.")),(0,l.kt)("h3",{id:"propiedad-casts"},"Propiedad casts"),(0,l.kt)("p",null,"La propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"casts")," es utilizada en los modelos de Eloquent para\nespecificar c\xf3mo se deben castear o convertir los valores de los\natributos de la base de datos a tipos de datos de PHP.\nEsto nos permite trabajar con los atributos de la base de datos\ncomo si fueran tipos de datos nativos de PHP en nuestro c\xf3digo,\ny Laravel se encarga de la conversi\xf3n autom\xe1ticamente.\nLas opciones de cast que se pueden usar son ",(0,l.kt)("inlineCode",{parentName:"p"},"integer"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"real"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"array"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"collection"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"datetime"),", y ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp"),".\nLa propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"casts")," debe ser un array asociativo en el que\nlas claves son los nombres de los atributos de la base de datos,\ny los valores son las opciones de cast correspondientes."),(0,l.kt)("admonition",{title:"Ejemplo",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Supongamos que tenemos una tabla ",(0,l.kt)("inlineCode",{parentName:"p"},"users")," en la que queremos almacenar un campo ",(0,l.kt)("inlineCode",{parentName:"p"},"settings")," que contenga datos en formato JSON. Podemos definir en nuestro modelo ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," la propiedad ",(0,l.kt)("inlineCode",{parentName:"p"},"casts")," de la siguiente manera:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"protected $casts = [\n    'settings' => 'array',\n];\n")),(0,l.kt)("p",{parentName:"admonition"},"De esta manera, cuando se recuperan los datos del campo\n",(0,l.kt)("inlineCode",{parentName:"p"},"settings"),", Laravel autom\xe1ticamente convertir\xe1 el valor de\nJSON a un array PHP. Lo mismo ocurre cuando se asigna un valor\na ese campo: si le pasamos un array PHP,\nLaravel autom\xe1ticamente lo convertir\xe1 a JSON antes de guardarlo\nen la base de datos. Esto nos permite trabajar con datos\nen formato array en nuestro c\xf3digo, y no tener que preocuparnos\npor la conversi\xf3n de JSON.")))}c.isMDXComponent=!0}}]);