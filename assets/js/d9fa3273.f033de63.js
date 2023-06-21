"use strict";(self.webpackChunkeloquent=self.webpackChunkeloquent||[]).push([[5993],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>b});var r=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,o=function(e,a){if(null==e)return{};var n,r,o={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,o=e.mdxType,t=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||t;return n?r.createElement(b,s(s({ref:a},u),{},{components:n})):r.createElement(b,s({ref:a},u))}));function b(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=n.length,s=new Array(t);s[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<t;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2702:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const t={sidebar_position:1},s="Introducci\xf3n",i={unversionedId:"tutorial-basics/sql/introduccion",id:"tutorial-basics/sql/introduccion",title:"Introducci\xf3n",description:"Eloquent y SQL",source:"@site/docs/tutorial-basics/07-sql/01-introduccion.md",sourceDirName:"tutorial-basics/07-sql",slug:"/tutorial-basics/sql/introduccion",permalink:"/curso-laravel/docs/tutorial-basics/sql/introduccion",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/07-sql/01-introduccion.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Eloquent y SQL",permalink:"/curso-laravel/docs/category/eloquent-y-sql"},next:{title:"Definici\xf3n de modelos y tablas",permalink:"/curso-laravel/docs/tutorial-basics/sql/tablas"}},l={},c=[{value:"Eloquent y SQL",id:"eloquent-y-sql",level:2},{value:"Diferencias entre SQL y Elocuent",id:"diferencias-entre-sql-y-elocuent",level:2}],u={toc:c},d="wrapper";function p(e){let{components:a,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,o.kt)("h2",{id:"eloquent-y-sql"},"Eloquent y SQL"),(0,o.kt)("p",null,"En cuanto a las similitudes entre SQL y Eloquent, ambas tecnolog\xedas comparten la funci\xf3n principal de interactuar con bases de datos relacionales, lo que les permite realizar operaciones CRUD y consultas avanzadas en datos almacenados en tablas. Adem\xe1s, tanto SQL como Eloquent son ampliamente utilizados en el desarrollo de aplicaciones web y tienen una comunidad activa que proporciona soporte y recursos de aprendizaje."),(0,o.kt)("p",null,"Sin embargo, la principal diferencia entre SQL y Eloquent radica en la forma en que interact\xfaan con la base de datos. Mientras que SQL es un lenguaje de consulta de bajo nivel que se utiliza para interactuar directamente con la base de datos, Eloquent es un ORM que proporciona una capa de abstracci\xf3n sobre SQL y permite interactuar con la base de datos utilizando objetos y m\xe9todos m\xe1s intuitivos."),(0,o.kt)("p",null,"Esta abstracci\xf3n proporcionada por Eloquent permite a los desarrolladores escribir c\xf3digo m\xe1s limpio y f\xe1cil de mantener, ya que no necesitan preocuparse tanto por la sintaxis de SQL y la estructura de las tablas. Adem\xe1s, Eloquent proporciona caracter\xedsticas adicionales como relaciones entre tablas, validaci\xf3n de datos, eventos y migraciones que hacen que el trabajo con bases de datos sea m\xe1s f\xe1cil y conveniente."),(0,o.kt)("p",null,'Por supuesto. Una de las principales ventajas de Eloquent es su capacidad para establecer relaciones entre tablas de una manera muy f\xe1cil y natural, lo que permite a los desarrolladores trabajar con datos relacionales de una manera m\xe1s intuitiva y coherente. Por ejemplo, si tenemos una tabla de usuarios y una tabla de publicaciones, podemos definir una relaci\xf3n "uno a muchos" entre ellas de la siguiente manera:'),(0,o.kt)("p",null,"En el modelo User:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"public function posts()\n{\n    return $this->hasMany('App\\Post');\n}\n")),(0,o.kt)("p",null,"Y en el modelo Post:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"public function user()\n{\n    return $this->belongsTo('App\\User');\n}\n")),(0,o.kt)("p",null,'De esta manera, podemos acceder a todas las publicaciones de un usuario determinado a trav\xe9s de la relaci\xf3n "posts" y acceder al usuario que cre\xf3 una publicaci\xf3n determinada a trav\xe9s de la relaci\xf3n "user". Esta forma de trabajar con relaciones hace que el c\xf3digo sea mucho m\xe1s f\xe1cil de leer y entender, y nos permite hacer consultas m\xe1s complejas con facilidad.'),(0,o.kt)("p",null,"Adem\xe1s, Eloquent tambi\xe9n proporciona funciones de validaci\xf3n de datos para garantizar que los datos que se insertan en la base de datos sean v\xe1lidos y cumplan con las restricciones de la tabla. Por ejemplo, podemos definir una regla de validaci\xf3n para asegurarnos de que un campo determinado sea \xfanico:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use Illuminate\\Validation\\Rule;\n\nValidator::make($data, [\n    'email' => [\n        'required',\n        'email',\n        Rule::unique('users')->ignore($user->id),\n    ],\n]);\n")),(0,o.kt)("p",null,'En este caso, la regla de validaci\xf3n "unique" nos garantiza que el campo "email" sea \xfanico en la tabla "users", y podemos ignorar el registro actual que se est\xe1 actualizando utilizando la funci\xf3n "ignore".'),(0,o.kt)("p",null,'Por \xfaltimo, Eloquent tambi\xe9n proporciona funciones de migraci\xf3n que nos permiten crear y modificar tablas de base de datos de una manera controlada y segura. En lugar de tener que escribir sentencias SQL para crear o modificar tablas, podemos definir nuestras migraciones utilizando la sintaxis de Laravel y ejecutarlas a trav\xe9s del comando "php artisan migrate". Esto nos permite mantener un control de versiones de la base de datos y realizar cambios sin comprometer la integridad de los datos.'),(0,o.kt)("p",null,"En conclusi\xf3n, Eloquent proporciona una forma m\xe1s intuitiva y conveniente de trabajar con bases de datos relacionales en comparaci\xf3n con SQL puro. Ofrece caracter\xedsticas como relaciones de tabla, validaci\xf3n de datos y migraciones, lo que hace que sea m\xe1s f\xe1cil y seguro trabajar con datos en aplicaciones web."),(0,o.kt)("h2",{id:"diferencias-entre-sql-y-elocuent"},"Diferencias entre SQL y Elocuent"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SQL, o Structured Query Language"),", es el lenguaje utilizado para interactuar con bases de datos relacionales. Con SQL, podemos crear y modificar tablas de bases de datos, insertar y actualizar datos, y hacer consultas para recuperar informaci\xf3n de las tablas. SQL es un lenguaje muy poderoso y flexible, pero tambi\xe9n puede ser complejo y dif\xedcil de aprender y mantener."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Eloquent"),", por otro lado, es un ORM, o Mapeo de Objetos Relacionales, que proporciona una capa de abstracci\xf3n sobre SQL para interactuar con bases de datos en aplicaciones web. En lugar de tener que escribir consultas SQL directamente, los desarrolladores pueden trabajar con modelos y relaciones de objetos en su c\xf3digo PHP. Eloquent traduce estas operaciones de objetos en consultas SQL y las ejecuta en la base de datos subyacente."),(0,o.kt)("p",null,"Eloquent tiene varias ventajas sobre SQL puro. En primer lugar, permite a los desarrolladores trabajar con datos relacionales de una manera m\xe1s intuitiva y natural, utilizando modelos y relaciones de objetos en lugar de consultas SQL complejas. En segundo lugar, Eloquent proporciona una capa de abstracci\xf3n que hace que el c\xf3digo sea m\xe1s f\xe1cil de leer, entender y mantener. En tercer lugar, Eloquent ofrece caracter\xedsticas adicionales como validaci\xf3n de datos y migraciones de base de datos, que hacen que sea m\xe1s f\xe1cil y seguro trabajar con datos en aplicaciones web."),(0,o.kt)("p",null,"SQL es el lenguaje de consultas utilizado para interactuar con bases de datos relacionales, mientras que Eloquent es un ORM que proporciona una capa de abstracci\xf3n sobre SQL para interactuar con bases de datos en aplicaciones web. Eloquent simplifica la interacci\xf3n con bases de datos, permitiendo a los desarrolladores trabajar con modelos y relaciones de objetos en lugar de tener que escribir consultas SQL complejas."))}p.isMDXComponent=!0}}]);