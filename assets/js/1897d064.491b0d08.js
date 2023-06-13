"use strict";(self.webpackChunkeloquent=self.webpackChunkeloquent||[]).push([[757],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>k});var l=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=l.createContext({}),u=function(e){var a=l.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=u(e.components);return l.createElement(s.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=t,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?l.createElement(k,r(r({ref:a},p),{},{components:n})):l.createElement(k,r({ref:a},p))}));function k(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:t,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2414:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=n(7462),t=(n(7294),n(3905));const o={sidebar_position:4},r="Consultas avanzadas",i={unversionedId:"tutorial-basics/sql/consultas",id:"tutorial-basics/sql/consultas",title:"Consultas avanzadas",description:"JOIN, GROUP BY Y HAVING",source:"@site/docs/tutorial-basics/07-sql/04-consultas.mdx",sourceDirName:"tutorial-basics/07-sql",slug:"/tutorial-basics/sql/consultas",permalink:"/curso-laravel/docs/tutorial-basics/sql/consultas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/07-sql/04-consultas.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Operaciones CRUD",permalink:"/curso-laravel/docs/tutorial-basics/sql/crud"},next:{title:"Transacciones",permalink:"/curso-laravel/docs/tutorial-basics/sql/transaciones"}},s={},u=[{value:"JOIN, GROUP BY Y HAVING",id:"join-group-by-y-having",level:2},{value:"Paginaci\xf3n",id:"paginaci\xf3n",level:2},{value:"Paginaci\xf3n en SQL",id:"paginaci\xf3n-en-sql",level:3},{value:"Paginaci\xf3n Eloquent",id:"paginaci\xf3n-eloquent",level:3},{value:"P\xe1ginacion en ORACLE",id:"p\xe1ginacion-en-oracle",level:3},{value:"P\xe1ginaci\xf3n en SQL Server",id:"p\xe1ginaci\xf3n-en-sql-server",level:3},{value:"Paginaci\xf3n en MySQL",id:"paginaci\xf3n-en-mysql",level:3},{value:"Paginaci\xf3n en PostgreSQL",id:"paginaci\xf3n-en-postgresql",level:3},{value:"Otros m\xe9todos de paginaci\xf3n en Eloquent",id:"otros-m\xe9todos-de-paginaci\xf3n-en-eloquent",level:3},{value:"SUM,MAX,MIN y AVG",id:"summaxmin-y-avg",level:2},{value:"Ejemplos",id:"ejemplos",level:3},{value:"SUM,MAX,MIN y AVG en Eloquent",id:"summaxmin-y-avg-en-eloquent",level:3},{value:"Ejemplos de instrucciones SQL y su correpondiente en Eloquent",id:"ejemplos-de-instrucciones-sql-y-su-correpondiente-en-eloquent",level:2}],p={toc:u},d="wrapper";function c(e){let{components:a,...n}=e;return(0,t.kt)(d,(0,l.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"consultas-avanzadas"},"Consultas avanzadas"),(0,t.kt)("h2",{id:"join-group-by-y-having"},"JOIN, GROUP BY Y HAVING"),(0,t.kt)("p",null,"Las consultas avanzadas en SQL permiten obtener informaci\xf3n m\xe1s espec\xedfica y detallada de una o varias tablas de una base de datos relacional. Algunas de las consultas m\xe1s comunes son:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"JOIN: Permite combinar filas de dos o m\xe1s tablas en base a una columna en com\xfan. Se pueden realizar diferentes tipos de JOIN, como INNER JOIN, LEFT JOIN, RIGHT JOIN, entre otros.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"SELECT *\nFROM tabla1\nINNER JOIN tabla2 ON tabla1.columna_comun = tabla2.columna_comun;\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"GROUP BY: Agrupa las filas que tienen el mismo valor en una o varias columnas espec\xedficas, permitiendo realizar operaciones de agregaci\xf3n como COUNT, SUM o AVG.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"SELECT columna, COUNT(*)\nFROM tabla\nGROUP BY columna;\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"HAVING: Es una cl\xe1usula que se utiliza en conjunto con GROUP BY, permitiendo filtrar el resultado de la consulta en base a una condici\xf3n en la columna agregada.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"SELECT columna, COUNT(*)\nFROM tabla\nGROUP BY columna\nHAVING COUNT(*) > 1;\n")),(0,t.kt)("p",null,"En Eloquent, se pueden realizar estas consultas avanzadas utilizando los m\xe9todos de Query Builder, que permiten construir consultas SQL utilizando una sintaxis similar a la de Eloquent."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"JOIN: Se utiliza el m\xe9todo join() para combinar tablas y especificar las columnas en com\xfan.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"DB::table('tabla1')\n   ->join('tabla2', 'tabla1.columna_comun', '=', 'tabla2.columna_comun')\n   ->select('*')\n   ->get();\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"GROUP BY: Se utiliza el m\xe9todo groupBy() para agrupar por una o varias columnas espec\xedficas.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"DB::table('tabla')\n   ->select('columna', DB::raw('COUNT(*) as count'))\n   ->groupBy('columna')\n   ->get();\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"HAVING: Se utiliza el m\xe9todo having() para filtrar el resultado de la consulta en base a una columna agregada.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"DB::table('tabla')\n   ->select('columna', DB::raw('COUNT(*) as count'))\n   ->groupBy('columna')\n   ->having('count', '>', 1)\n   ->get();\n")),(0,t.kt)("p",null,"En cuanto a similitudes y diferencias entre las consultas avanzadas en SQL y Eloquent,\nambas utilizan la misma l\xf3gica y sintaxis en cuanto a\nJOIN, GROUP BY y HAVING. Sin embargo, en Eloquent se utilizan\nm\xe9todos espec\xedficos para cada una de estas operaciones,\nlo que puede resultar m\xe1s f\xe1cil de comprender y escribir. Adem\xe1s,\nEloquent proporciona una capa de abstracci\xf3n sobre SQL, lo que\npermite que las consultas sean m\xe1s f\xe1ciles de leer y mantener.\nPor otro lado, SQL permite una mayor flexibilidad y complejidad en\ncuanto a la construcci\xf3n de consultas, permitiendo el uso de\nsubconsultas y otras funcionalidades avanzadas que pueden ser necesarias\nen casos espec\xedficos."),(0,t.kt)("h2",{id:"paginaci\xf3n"},"Paginaci\xf3n"),(0,t.kt)("h3",{id:"paginaci\xf3n-en-sql"},"Paginaci\xf3n en SQL"),(0,t.kt)("p",null,"En SQL, la paginaci\xf3n se puede lograr utilizando la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"LIMIT")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET"),". La cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"LIMIT")," se utiliza para limitar el n\xfamero de filas devueltas en una consulta, mientras que ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET")," se utiliza para especificar el n\xfamero de filas que se deben saltar antes de comenzar a devolver resultados. "),(0,t.kt)("p",null,"Por ejemplo, si quisieras devolver las filas 11 a 20 de una tabla ",(0,t.kt)("inlineCode",{parentName:"p"},"productos")," en orden ascendente por precio, podr\xedas hacerlo de la siguiente manera:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"SELECT * FROM productos ORDER BY precio ASC LIMIT 10 OFFSET 10;\n")),(0,t.kt)("p",null,"Esta consulta devuelve un m\xe1ximo de 10 filas (",(0,t.kt)("inlineCode",{parentName:"p"},"LIMIT 10"),") comenzando desde la fila 11 (",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET 10"),") en la tabla ",(0,t.kt)("inlineCode",{parentName:"p"},"productos"),", ordenadas por el precio ascendente."),(0,t.kt)("p",null,"En algunos sistemas de bases de datos, la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET")," puede ser reemplazada por la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"FETCH"),", que proporciona una forma m\xe1s intuitiva de paginar los resultados."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"SELECT * FROM productos ORDER BY precio ASC OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;\n")),(0,t.kt)("p",null,"Esta consulta es equivalente a la anterior, pero utiliza la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"FETCH")," en lugar de ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET"),"."),(0,t.kt)("p",null,"Es importante destacar que la sintaxis de paginaci\xf3n var\xeda seg\xfan el sistema de base de datos que se est\xe9 utilizando, y algunos sistemas de base de datos pueden tener formas m\xe1s complejas de realizar la paginaci\xf3n."),(0,t.kt)("p",null,"Sin embargo, en general, la paginaci\xf3n en SQL es una tarea relativamente sencilla y puede ser realizada por cualquier programador SQL experimentado."),(0,t.kt)("h3",{id:"paginaci\xf3n-eloquent"},"Paginaci\xf3n Eloquent"),(0,t.kt)("p",null,"En Eloquent, se puede realizar paginaci\xf3n utilizando el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"paginate()")," que devuelve una instancia de ",(0,t.kt)("inlineCode",{parentName:"p"},"Illuminate\\Pagination\\LengthAwarePaginator"),". Este m\xe9todo acepta un argumento que representa el n\xfamero de elementos que se deben mostrar por p\xe1gina."),(0,t.kt)("p",null,"Supongamos que tenemos un modelo ",(0,t.kt)("inlineCode",{parentName:"p"},"Product")," con los campos ",(0,t.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"description")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"price"),". Para paginar los resultados de una consulta que obtiene todos los productos, podemos hacer lo siguiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"$products = App\\Product::paginate(10);\n")),(0,t.kt)("p",null,"Este c\xf3digo paginar\xe1 los resultados en grupos de 10 elementos por p\xe1gina. Para mostrar los elementos de la p\xe1gina actual, podemos utilizar el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"links()")," del objeto ",(0,t.kt)("inlineCode",{parentName:"p"},"LengthAwarePaginator"),", como se muestra a continuaci\xf3n:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"{{ $products->links() }}\n")),(0,t.kt)("p",null,"Este c\xf3digo generar\xe1 un conjunto de enlaces de paginaci\xf3n que permiten al usuario navegar entre las diferentes p\xe1ginas de resultados."),(0,t.kt)("p",null,"Adem\xe1s, el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"paginate()")," tambi\xe9n acepta un segundo argumento opcional que representa el n\xfamero de p\xe1gina que se debe mostrar inicialmente. Por ejemplo, para mostrar la tercera p\xe1gina de resultados, podemos hacer lo siguiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"$products = App\\Product::paginate(10, 3);\n")),(0,t.kt)("p",null,"Tambi\xe9n podemos agregar condiciones a la consulta utilizando m\xe9todos como ",(0,t.kt)("inlineCode",{parentName:"p"},"where()"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"orWhere()"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"orderBy()"),", entre otros. Por ejemplo, para obtener los productos con un precio mayor a 100 ordenados por nombre, podemos hacer lo siguiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"$products = App\\Product::where('price', '>', 100)\n                ->orderBy('name')\n                ->paginate(10);\n")),(0,t.kt)("p",null,"Este c\xf3digo paginar\xe1 los resultados que cumplan con la condici\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"price > 100")," y los ordenar\xe1 alfab\xe9ticamente por ",(0,t.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,t.kt)("h3",{id:"p\xe1ginacion-en-oracle"},"P\xe1ginacion en ORACLE"),(0,t.kt)("p",null,"La paginaci\xf3n en Oracle se puede lograr utilizando la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"ROWNUM")," en la consulta SQL. Por ejemplo, para obtener los primeros 10 registros de una tabla llamada ",(0,t.kt)("inlineCode",{parentName:"p"},"users"),", se podr\xeda hacer lo siguiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * \nFROM (\n    SELECT u.*, ROWNUM r \n    FROM users u \n    WHERE ROWNUM <= 10\n)\nWHERE r >= 1\n")),(0,t.kt)("p",null,"En este ejemplo, se utiliza una subconsulta que incluye la tabla ",(0,t.kt)("inlineCode",{parentName:"p"},"users")," y la columna virtual ",(0,t.kt)("inlineCode",{parentName:"p"},"ROWNUM"),". La condici\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"WHERE ROWNUM <= 10")," limita la subconsulta a los primeros 10 registros. Luego, la consulta principal filtra los registros con ",(0,t.kt)("inlineCode",{parentName:"p"},"r >= 1"),", que es el primer registro de la subconsulta."),(0,t.kt)("p",null,"Cabe destacar que, en Oracle, la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"ROWNUM")," se aplica antes de la ordenaci\xf3n.\nSi se desea una paginaci\xf3n ordenada, es necesario utilizar otra\nsubconsulta para aplicar la ordenaci\xf3n antes de la paginaci\xf3n."),(0,t.kt)("h3",{id:"p\xe1ginaci\xf3n-en-sql-server"},"P\xe1ginaci\xf3n en SQL Server"),(0,t.kt)("p",null,"Para realizar paginaci\xf3n en SQL Server, se puede utilizar la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"FETCH NEXT"),", que permiten especificar el n\xfamero de registros a saltar y el n\xfamero de registros a devolver."),(0,t.kt)("p",null,"Por ejemplo, para devolver los 10 registros siguientes despu\xe9s de los primeros 20 registros de una tabla ",(0,t.kt)("inlineCode",{parentName:"p"},"usuarios"),", se puede usar la siguiente consulta:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM usuarios\nORDER BY id\nOFFSET 20 ROWS\nFETCH NEXT 10 ROWS ONLY\n")),(0,t.kt)("p",null,"Esta consulta ordena los registros por el campo ",(0,t.kt)("inlineCode",{parentName:"p"},"id"),", salta los primeros 20 registros y devuelve los siguientes 10 registros."),(0,t.kt)("p",null,"Es importante tener en cuenta que la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"FETCH NEXT")," requiere que la tabla tenga una columna que pueda usarse para ordenar los registros. Si la tabla no tiene una columna adecuada para el ordenamiento, se pueden usar subconsultas o expresiones comunes de tabla para realizar la paginaci\xf3n."),(0,t.kt)("p",null,"Tambi\xe9n es posible utilizar la funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"ROW_NUMBER()")," para enumerar los registros y luego aplicar la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"FETCH NEXT")," a los n\xfameros de fila. Por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM (\n  SELECT ROW_NUMBER() OVER (ORDER BY id) AS rownum, *\n  FROM usuarios\n) AS sub\nWHERE rownum > 20\n  AND rownum <= 30\n")),(0,t.kt)("p",null,"Esta consulta enumera los registros de la tabla ",(0,t.kt)("inlineCode",{parentName:"p"},"usuarios")," por el campo ",(0,t.kt)("inlineCode",{parentName:"p"},"id")," y luego selecciona los registros con n\xfameros de fila entre 20 y 30."),(0,t.kt)("p",null,"En conclusi\xf3n, la paginaci\xf3n en SQL Server se puede realizar\nmediante la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"FETCH NEXT"),", o mediante la funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"ROW_NUMBER()")," junto con la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"FETCH NEXT"),"."),(0,t.kt)("h3",{id:"paginaci\xf3n-en-mysql"},"Paginaci\xf3n en MySQL"),(0,t.kt)("p",null,"En MySQL, la paginaci\xf3n se puede lograr utilizando la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"LIMIT"),". Por ejemplo, para obtener los primeros 10 registros de una tabla llamada ",(0,t.kt)("inlineCode",{parentName:"p"},"users"),", se podr\xeda hacer lo siguiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM users LIMIT 10\n")),(0,t.kt)("p",null,"Esta consulta devolver\xe1 los primeros 10 registros de la tabla ",(0,t.kt)("inlineCode",{parentName:"p"},"users"),". Para obtener los siguientes 10 registros, se puede usar la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM users LIMIT 10 OFFSET 10\n")),(0,t.kt)("p",null,"Esta consulta devolver\xe1 los siguientes 10 registros despu\xe9s de los primeros 10. El n\xfamero pasado a la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET")," indica cu\xe1ntos registros se deben omitir antes de empezar a devolver registros."),(0,t.kt)("p",null,"Cabe destacar que, en MySQL, la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"LIMIT")," se puede utilizar en combinaci\xf3n con la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"ORDER BY")," para paginar registros ordenados. Por ejemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM users ORDER BY created_at DESC LIMIT 10 OFFSET 10\n")),(0,t.kt)("p",null,"Esta consulta devolver\xe1 los siguientes 10 registros ordenados por la columna ",(0,t.kt)("inlineCode",{parentName:"p"},"created_at")," de manera descendente."),(0,t.kt)("h3",{id:"paginaci\xf3n-en-postgresql"},"Paginaci\xf3n en PostgreSQL"),(0,t.kt)("p",null,"En PostgreSQL, la paginaci\xf3n se puede lograr utilizando la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"LIMIT")," y la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET"),". La cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"LIMIT")," se utiliza para limitar el n\xfamero de filas devueltas por la consulta, mientras que la cl\xe1usula ",(0,t.kt)("inlineCode",{parentName:"p"},"OFFSET")," se utiliza para especificar el n\xfamero de filas que se deben omitir antes de comenzar a devolver las filas."),(0,t.kt)("p",null,"Por ejemplo, si queremos mostrar los resultados de la p\xe1gina 2 de una consulta que muestra 10 resultados por p\xe1gina, podemos usar la siguiente consulta:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"SELECT * FROM mi_tabla\nORDER BY columna\nLIMIT 10 OFFSET 10;\n")),(0,t.kt)("p",null,"Esto devolver\xe1 las filas 11 a 20 de la tabla, ordenadas por la columna especificada."),(0,t.kt)("p",null,"En Eloquent, la paginaci\xf3n se logra mediante el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"paginate()"),". Este m\xe9todo toma un argumento opcional que especifica el n\xfamero de resultados que se deben mostrar por p\xe1gina y devuelve una instancia de la clase ",(0,t.kt)("inlineCode",{parentName:"p"},"Illuminate\\Pagination\\LengthAwarePaginator"),"."),(0,t.kt)("p",null,"Por ejemplo, para paginar una consulta en Eloquent y mostrar 10 resultados por p\xe1gina, podemos usar el siguiente c\xf3digo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"$resultados = DB::table('mi_tabla')\n                ->orderBy('columna')\n                ->paginate(10);\n")),(0,t.kt)("p",null,"Esto devolver\xe1 los primeros 10 resultados de la consulta y crear\xe1 una instancia de ",(0,t.kt)("inlineCode",{parentName:"p"},"LengthAwarePaginator")," que se puede utilizar para mostrar los resultados de la p\xe1gina actual, as\xed como los enlaces a\nlas p\xe1ginas anteriores y siguientes."),(0,t.kt)("h3",{id:"otros-m\xe9todos-de-paginaci\xf3n-en-eloquent"},"Otros m\xe9todos de paginaci\xf3n en Eloquent"),(0,t.kt)("p",null,"Adem\xe1s del m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"paginate()"),", Eloquent tambi\xe9n proporciona otros m\xe9todos para la paginaci\xf3n de resultados:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"simplePaginate()"),": Este m\xe9todo funciona de manera similar a ",(0,t.kt)("inlineCode",{parentName:"p"},"paginate()"),", pero en lugar de proporcionar la informaci\xf3n de paginaci\xf3n completa, solo devuelve los resultados de la p\xe1gina actual y los enlaces a la p\xe1gina anterior y siguiente.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"onEachSide($value)"),": Este m\xe9todo se utiliza para especificar el n\xfamero de enlaces de p\xe1gina que se mostrar\xe1n a cada lado de la p\xe1gina actual en la vista de paginaci\xf3n. Por defecto, el valor es 3.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"setPath($path)"),": Este m\xe9todo se utiliza para especificar la URL base de los enlaces de paginaci\xf3n. Por defecto, Eloquent utiliza la URL actual de la solicitud.")),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"p"},"appends($key, $value)"),": Este m\xe9todo se utiliza para agregar par\xe1metros de consulta adicionales a los enlaces de paginaci\xf3n. Esto puede ser \xfatil cuando se filtran los resultados de una consulta y se desea mantener esos filtros en la paginaci\xf3n."))),(0,t.kt)("p",null,"A continuaci\xf3n, se muestra un ejemplo de c\xf3mo utilizar ",(0,t.kt)("inlineCode",{parentName:"p"},"simplePaginate()")," en Eloquent:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"$users = User::where('status', 'active')->simplePaginate(10);\n")),(0,t.kt)("p",null,"Este ejemplo devolver\xe1 los usuarios\nactivos en paquetes de 10 resultados,\njunto con los enlaces a la p\xe1gina anterior y siguiente."),(0,t.kt)("h2",{id:"summaxmin-y-avg"},"SUM,MAX,MIN y AVG"),(0,t.kt)("p",null,"En SQL, SUM, MAX, MIN y AVG son funciones de agregado que se utilizan para realizar c\xe1lculos en las columnas de una tabla. "),(0,t.kt)("p",null,"La funci\xf3n SUM se utiliza para calcular la suma de los valores en una columna determinada, mientras que la funci\xf3n MAX devuelve el valor m\xe1ximo en una columna determinada. Por otro lado, la funci\xf3n MIN devuelve el valor m\xednimo en una columna, y la funci\xf3n AVG se utiliza para calcular el promedio de los valores en una columna."),(0,t.kt)("p",null,"Estas funciones pueden ser \xfatiles en una variedad de situaciones, como para calcular la cantidad total de ventas en una tabla de ventas, el precio m\xe1ximo de un producto en una tabla de productos, el precio m\xednimo de un producto en una tabla de productos, o el promedio de los sueldos de los empleados en una tabla de empleados."),(0,t.kt)("p",null,"Es importante tener en cuenta que estas funciones de agregado se utilizan junto con la cl\xe1usula GROUP BY para agrupar los datos seg\xfan una o m\xe1s columnas. Tambi\xe9n se pueden utilizar en combinaci\xf3n con otras funciones y cl\xe1usulas SQL para realizar c\xe1lculos m\xe1s complejos y\nobtener informaci\xf3n m\xe1s detallada de la base de datos."),(0,t.kt)("h3",{id:"ejemplos"},"Ejemplos"),(0,t.kt)("p",null,"Claro, aqu\xed te dejo algunos ejemplos de c\xf3mo utilizar las funciones de agregaci\xf3n en SQL:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"SUM: esta funci\xf3n se utiliza para sumar los valores de una columna en una tabla.")),(0,t.kt)("p",null,"Ejemplo:"),(0,t.kt)("p",null,"Supongamos que tenemos una tabla de ventas y queremos obtener el total de ventas realizadas:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"SELECT SUM(monto) AS total_ventas FROM ventas;\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"MAX: esta funci\xf3n se utiliza para obtener el valor m\xe1ximo de una columna en una tabla.")),(0,t.kt)("p",null,"Ejemplo:"),(0,t.kt)("p",null,"Supongamos que tenemos una tabla de productos y queremos obtener el precio m\xe1s alto de todos los productos:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"SELECT MAX(precio) AS precio_maximo FROM productos;\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"MIN: esta funci\xf3n se utiliza para obtener el valor m\xednimo de una columna en una tabla.")),(0,t.kt)("p",null,"Ejemplo:"),(0,t.kt)("p",null,"Supongamos que tenemos una tabla de empleados y queremos obtener el salario m\xednimo de todos los empleados:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"SELECT MIN(salario) AS salario_minimo FROM empleados;\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"AVG: esta funci\xf3n se utiliza para obtener el promedio de una columna en una tabla.")),(0,t.kt)("p",null,"Ejemplo:"),(0,t.kt)("p",null,"Supongamos que tenemos una tabla de calificaciones y queremos obtener el promedio de las calificaciones obtenidas:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"SELECT AVG(calificacion) AS promedio_calificaciones FROM calificaciones;\n")),(0,t.kt)("p",null,"Es importante tener en cuenta que estas funciones de agregaci\xf3n\npueden ser combinadas con otras cl\xe1usulas de SQL para realizar\nconsultas m\xe1s complejas y espec\xedficas."),(0,t.kt)("h3",{id:"summaxmin-y-avg-en-eloquent"},"SUM,MAX,MIN y AVG en Eloquent"),(0,t.kt)("p",null,"En Eloquent, puedes usar los m\xe9todos ",(0,t.kt)("inlineCode",{parentName:"p"},"sum()"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"max()"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"min()")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"avg()")," para calcular la suma, el m\xe1ximo, el m\xednimo y el promedio de una columna en una tabla, respectivamente."),(0,t.kt)("p",null,"Por ejemplo, para calcular la suma de una columna en una tabla, puedes hacer lo siguiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"$total = DB::table('tabla')->sum('columna');\n")),(0,t.kt)("p",null,"Donde ",(0,t.kt)("inlineCode",{parentName:"p"},"tabla")," es el nombre de la tabla y ",(0,t.kt)("inlineCode",{parentName:"p"},"columna")," es el nombre de la columna que quieres sumar. El m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"sum()")," devuelve el total de la suma como un valor num\xe9rico."),(0,t.kt)("p",null,"De manera similar, para obtener el valor m\xe1ximo de una columna, puedes usar el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"max()"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"$maximo = DB::table('tabla')->max('columna');\n")),(0,t.kt)("p",null,"Para obtener el valor m\xednimo de una columna, puedes usar el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"min()"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"$minimo = DB::table('tabla')->min('columna');\n")),(0,t.kt)("p",null,"Y para calcular el promedio de una columna, puedes usar el m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"avg()"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},"$promedio = DB::table('tabla')->avg('columna');\n")),(0,t.kt)("p",null,"En todos los casos, ",(0,t.kt)("inlineCode",{parentName:"p"},"tabla")," es el nombre de la tabla y ",(0,t.kt)("inlineCode",{parentName:"p"},"columna")," es el nombre de la columna que deseas consultar. Los m\xe9todos ",(0,t.kt)("inlineCode",{parentName:"p"},"max()"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"min()")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"avg()")," tambi\xe9n devuelven valores num\xe9ricos."),(0,t.kt)("h2",{id:"ejemplos-de-instrucciones-sql-y-su-correpondiente-en-eloquent"},"Ejemplos de instrucciones SQL y su correpondiente en Eloquent"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Instrucci\xf3n SQL: COUNT"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"La instrucci\xf3n COUNT se utiliza para contar el n\xfamero de filas en una tabla."),(0,t.kt)("li",{parentName:"ul"},"Ejemplo: ",(0,t.kt)("inlineCode",{parentName:"li"},"SELECT COUNT(*) FROM users WHERE age > 18;")),(0,t.kt)("li",{parentName:"ul"},"Equivalente en Eloquent: ",(0,t.kt)("inlineCode",{parentName:"li"},"$count = User::where('age', '>', 18)->count();")))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Instrucci\xf3n SQL: ORDER BY"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"La instrucci\xf3n ORDER BY se utiliza para ordenar los resultados de una consulta por una o varias columnas en orden ascendente o descendente."),(0,t.kt)("li",{parentName:"ul"},"Ejemplo: ",(0,t.kt)("inlineCode",{parentName:"li"},"SELECT * FROM users ORDER BY name ASC, age DESC;")),(0,t.kt)("li",{parentName:"ul"},"Equivalente en Eloquent: ",(0,t.kt)("inlineCode",{parentName:"li"},"$users = User::orderBy('name')->orderBy('age', 'desc')->get();")))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Instrucci\xf3n SQL: LIMIT y OFFSET"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"La instrucci\xf3n LIMIT se utiliza para limitar el n\xfamero de resultados de una consulta, mientras que la instrucci\xf3n OFFSET se utiliza para saltar un n\xfamero determinado de resultados antes de comenzar a mostrarlos."),(0,t.kt)("li",{parentName:"ul"},"Ejemplo: ",(0,t.kt)("inlineCode",{parentName:"li"},"SELECT * FROM users LIMIT 10 OFFSET 20;")),(0,t.kt)("li",{parentName:"ul"},"Equivalente en Eloquent: ",(0,t.kt)("inlineCode",{parentName:"li"},"$users = User::skip(20)->take(10)->get();")))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Instrucci\xf3n SQL: DISTINCT"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"La instrucci\xf3n DISTINCT se utiliza para seleccionar valores \xfanicos de una columna determinada."),(0,t.kt)("li",{parentName:"ul"},"Ejemplo: ",(0,t.kt)("inlineCode",{parentName:"li"},"SELECT DISTINCT country FROM users;")),(0,t.kt)("li",{parentName:"ul"},"Equivalente en Eloquent: ",(0,t.kt)("inlineCode",{parentName:"li"},"$countries = User::distinct()->pluck('country');")))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Instrucci\xf3n SQL: JOIN"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"La instrucci\xf3n JOIN se utiliza para combinar datos de dos o m\xe1s tablas relacionadas en una sola consulta."),(0,t.kt)("li",{parentName:"ul"},"Ejemplo: ",(0,t.kt)("inlineCode",{parentName:"li"},"SELECT users.name, orders.order_number FROM users INNER JOIN orders ON users.id = orders.user_id;")),(0,t.kt)("li",{parentName:"ul"},"Equivalente en Eloquent: ",(0,t.kt)("inlineCode",{parentName:"li"},"$users = User::join('orders', 'users.id', '=', 'orders.user_id')->select('users.name', 'orders.order_number')->get();"))))),(0,t.kt)("p",null,"Estos son solo algunos ejemplos, pero Eloquent proporciona una amplia gama de m\xe9todos para realizar consultas complejas a la base de datos."))}c.isMDXComponent=!0}}]);