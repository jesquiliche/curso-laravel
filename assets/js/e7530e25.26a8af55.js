"use strict";(self.webpackChunkeloquent=self.webpackChunkeloquent||[]).push([[5417],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>g});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),d=l,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?t.createElement(g,o(o({ref:a},p),{},{components:n})):t.createElement(g,o({ref:a},p))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[u]="string"==typeof e?e:l,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2078:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=n(7462),l=(n(7294),n(3905));const i={sidebar_position:3},o="Personalizaci\xf3n de Admin LTE 3",r={unversionedId:"tutorial-basics/dashbord/personalizacion",id:"tutorial-basics/dashbord/personalizacion",title:"Personalizaci\xf3n de Admin LTE 3",description:"Configuraci\xf3n b\xe1sica",source:"@site/docs/tutorial-basics/dashbord/personalizacion.md",sourceDirName:"tutorial-basics/dashbord",slug:"/tutorial-basics/dashbord/personalizacion",permalink:"/curso-laravel/docs/tutorial-basics/dashbord/personalizacion",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/dashbord/personalizacion.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuraci\xf3n e instalaci\xf3n",permalink:"/curso-laravel/docs/tutorial-basics/dashbord/configuracion"},next:{title:"Implementaci\xf3n",permalink:"/curso-laravel/docs/tutorial-basics/dashbord/implementacion"}},s={},c=[{value:"Configuraci\xf3n b\xe1sica",id:"configuraci\xf3n-b\xe1sica",level:2},{value:"Configuraci\xf3n del t\xedtulo:",id:"configuraci\xf3n-del-t\xedtulo",level:3},{value:"Configuraci\xf3n del favicon",id:"configuraci\xf3n-del-favicon",level:3},{value:"Personalizar el logo de la plantilla",id:"personalizar-el-logo-de-la-plantilla",level:3},{value:"Men\xfa de usuario",id:"men\xfa-de-usuario",level:3},{value:"Configuraci\xf3n men\xfa de la navegaci\xf3n",id:"configuraci\xf3n-men\xfa-de-la-navegaci\xf3n",level:3}],p={toc:c},u="wrapper";function m(e){let{components:a,...n}=e;return(0,l.kt)(u,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"personalizaci\xf3n-de-admin-lte-3"},"Personalizaci\xf3n de Admin LTE 3"),(0,l.kt)("h2",{id:"configuraci\xf3n-b\xe1sica"},"Configuraci\xf3n b\xe1sica"),(0,l.kt)("p",null,"Para personalizar nuestra plantilla debemos dirigirnos al archivo ",(0,l.kt)("strong",{parentName:"p"},"config\\adminlte.php"),". Vamos a ver distintas opciones de configuraci\xf3n, para que sirven y en el caso oportuno cambiarlas."),(0,l.kt)("h3",{id:"configuraci\xf3n-del-t\xedtulo"},"Configuraci\xf3n del t\xedtulo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"    'title' => 'AdminLTE 3',\n    'title_prefix' => '',\n    'title_postfix' => '',\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"'title' => 'AdminLTE 3': Aqu\xed puedes especificar el t\xedtulo principal del panel de administraci\xf3n. En este caso, se establece como \"AdminLTE 3\".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"'title_prefix' => '': Esta opci\xf3n te permite agregar un prefijo al t\xedtulo principal. Puedes utilizarlo para agregar texto adicional antes del t\xedtulo principal si lo deseas. Por ejemplo, si estableces 'title_prefix' => 'Bienvenido - ', el t\xedtulo de la p\xe1gina se mostrar\xe1 como \"Bienvenido - AdminLTE 3\".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"'title_postfix' => '': Similar a 'title_prefix', esta opci\xf3n te permite agregar un sufijo al t\xedtulo principal. Puedes utilizarlo para agregar texto adicional despu\xe9s del t\xedtulo principal si lo deseas. Por ejemplo, si estableces 'title_postfix' => ' - Panel de administraci\xf3n', el t\xedtulo de la p\xe1gina se mostrar\xe1 como \"AdminLTE 3 - Panel de administraci\xf3n\"."))),(0,l.kt)("p",null,"En este proyecto lo vamos a configurar de la siguiente manera :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"'title' => '',\n'title_prefix' => 'Anuncios - ',\n'title_postfix' => '',\n")),(0,l.kt)("h3",{id:"configuraci\xf3n-del-favicon"},"Configuraci\xf3n del favicon"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"'use_ico_only' => false,\n'use_full_favicon' => false,\n")),(0,l.kt)("p",null,"Esta secci\xf3n del archivo de configuraci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"config/adminlte.php")," se utiliza para configurar el uso de favicon en el panel de administraci\xf3n."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'use_ico_only' => false"),": Esta opci\xf3n determina si se utiliza \xfanicamente el archivo de icono favicon.ico para el favicon del panel de administraci\xf3n. Si se establece como ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", se utilizar\xe1 solo el archivo favicon.ico. Si se establece como ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", se utilizar\xe1n los archivos favicon.png y favicon.svg en lugar del favicon.ico. Por defecto, se establece como ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'use_full_favicon' => false"),": Esta opci\xf3n determina si se utiliza el favicon completo o solo el \xedcono en miniatura para el panel de administraci\xf3n. Si se establece como ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", se utilizar\xe1 el favicon completo. Si se establece como ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", se utilizar\xe1 solo el \xedcono en miniatura. Por defecto, se establece como ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."))),(0,l.kt)("p",null,"Estas opciones te permiten personalizar la configuraci\xf3n del favicon en el panel de administraci\xf3n. Puedes ajustar los valores de ",(0,l.kt)("inlineCode",{parentName:"p"},"'use_ico_only'")," y ",(0,l.kt)("inlineCode",{parentName:"p"},"'use_full_favicon'")," seg\xfan tus necesidades y preferencias. Si tienes un archivo de favicon.ico personalizado, puedes configurar ",(0,l.kt)("inlineCode",{parentName:"p"},"'use_ico_only' => true")," para utilizar solo ese archivo. Si prefieres utilizar archivos de favicon en formatos diferentes al favicon.ico, puedes establecer ",(0,l.kt)("inlineCode",{parentName:"p"},"'use_ico_only' => false")," y asegurarte de tener los archivos favicon.png y favicon.svg en la ubicaci\xf3n correcta. La opci\xf3n ",(0,l.kt)("inlineCode",{parentName:"p"},"'use_full_favicon'")," te permite elegir si deseas utilizar el favicon completo o solo el \xedcono en miniatura."),(0,l.kt)("h3",{id:"personalizar-el-logo-de-la-plantilla"},"Personalizar el logo de la plantilla"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"    'logo' => '<b>Anuncios</b>',\n    'logo_img' => '/images/logo.png',\n    'logo_img_class' => 'brand-image img-circle elevation-3',\n    'logo_img_xl' => null,\n    'logo_img_xl_class' => 'brand-image-xs',\n    'logo_img_alt' => 'Admin Logo',\n")),(0,l.kt)("p",null,"En esta secci\xf3n explicaremos c\xf3mo personalizar el logotipo en la plantilla AdminLTE. Aqu\xed se definen diferentes aspectos del logotipo, como su texto y su imagen."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'logo' => '<b>Anuncios</b>'"),': Aqu\xed establecemos que el texto del logotipo ser\xe1 "Anuncios", y lo mostraremos en negrita para que resalte.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'logo_img' => '/images/logo.jpeg'"),': Aqu\xed especificamos la ruta de la imagen que queremos usar como logotipo. En nuestro caso la imagen se encuentra en la carpeta "images" del proyecto y se llama "logo.jpeg".')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'logo_img_class' => 'brand-image img-circle elevation-3'"),': Aqu\xed le a\xf1adimos algunas clases de estilo a la imagen del logotipo, como "brand-image", "img-circle" y "elevation-3". Estas clases sirven para darle un aspecto visual espec\xedfico al logotipo.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'logo_img_xl' => null"),": Aqu\xed no estamos proporcionando una imagen adicional para tama\xf1os de pantalla extra grandes.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'logo_img_xl_class' => 'brand-image-xs'"),': Sin embargo, si tenemos una pantalla extra grande, se le a\xf1adir\xe1 la clase "brand-image-xs" a la imagen del logotipo para ajustar su estilo.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'logo_img_alt' => 'Admin Logo'"),': Por \xfaltimo, aqu\xed establecemos un texto alternativo para la imagen del logotipo, en caso de que la imagen no se pueda cargar correctamente. En este caso, el texto alternativo ser\xe1 "Admin Logo".'))),(0,l.kt)("p",null,"Con estas configuraciones, podr\xe1s personalizar el logotipo de tu proyecto en la plantilla AdminLTE. Simplemente cambia el texto y la ruta de la imagen para adaptarlos a tus necesidades."),(0,l.kt)("h3",{id:"men\xfa-de-usuario"},"Men\xfa de usuario"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"    'usermenu_enabled' => true,\n    'usermenu_header' => false,\n    'usermenu_header_class' => 'bg-primary',\n    'usermenu_image' => false,\n    'usermenu_desc' => false,\n    'usermenu_profile_url' => false,\n")),(0,l.kt)("p",null,"En esta secci\xf3n estamos configurando el men\xfa de usuario en la plantilla AdminLTE. Aqu\xed se definen diversas opciones relacionadas con c\xf3mo se mostrar\xe1 el men\xfa de usuario en la interfaz."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'usermenu_enabled' => true"),": Con esta configuraci\xf3n, estamos habilitando el men\xfa de usuario. Si estableces el valor en ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", el men\xfa de usuario no se mostrar\xe1 en la interfaz.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'usermenu_header' => false"),": Aqu\xed estamos deshabilitando el encabezado del men\xfa de usuario. Si estableces el valor en ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", se mostrar\xe1 un encabezado en el men\xfa de usuario.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'usermenu_header_class' => 'bg-primary'"),": Si habilitas el encabezado del men\xfa de usuario, puedes especificar una clase de estilo para el encabezado. En este caso, la clase es ",(0,l.kt)("inlineCode",{parentName:"p"},"'bg-primary'"),", lo que significa que el encabezado tendr\xe1 un fondo de color azul primario. Puedes cambiar esta clase para adaptar el estilo a tus necesidades.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'usermenu_image' => false"),": Aqu\xed estamos deshabilitando la imagen de usuario en el men\xfa. Si estableces el valor en ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", se mostrar\xe1 una imagen de usuario en el men\xfa.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'usermenu_desc' => false"),": Al igual que la imagen de usuario, aqu\xed estamos deshabilitando la descripci\xf3n del usuario en el men\xfa. Si estableces el valor en ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", se mostrar\xe1 una descripci\xf3n del usuario en el men\xfa.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"'usermenu_profile_url' => false"),": Aqu\xed estamos deshabilitando el enlace al perfil del usuario en el men\xfa. Si estableces el valor en ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", se proporcionar\xe1 un enlace al perfil del usuario en el men\xfa."))),(0,l.kt)("p",null,"Estas configuraciones te permiten personalizar c\xf3mo se mostrar\xe1 el men\xfa de usuario en la plantilla AdminLTE. Puedes habilitar o deshabilitar diferentes elementos, como el encabezado, la imagen de usuario, la descripci\xf3n y el enlace al perfil, seg\xfan tus necesidades y preferencias de dise\xf1o."),(0,l.kt)("p",null,"Para m\xe1s detalles consulte la documentaci\xf3n oficial.\n",(0,l.kt)("a",{parentName:"p",href:"https://adminlte.io/docs/3.0/"},"https://adminlte.io/docs/3.0/")),(0,l.kt)("h3",{id:"configuraci\xf3n-men\xfa-de-la-navegaci\xf3n"},"Configuraci\xf3n men\xfa de la navegaci\xf3n"),(0,l.kt)("p",null,"\xa1Claro! Perm\xedteme comentar cada secci\xf3n de manera simple y amena:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"'menu' => [\n    // Elementos de la barra de navegaci\xf3n:\n    [\n        'type'         => 'navbar-search',\n        'text'         => 'search',\n        'topnav_right' => true,\n    ],\n    [\n        'type'         => 'fullscreen-widget',\n        'topnav_right' => true,\n    ],\n\n    // Elementos de la barra lateral:\n    [\n        'type' => 'sidebar-menu-search',\n        'text' => 'search',\n    ],\n    [\n        'text' => 'blog',\n        'url'  => 'admin/blog',\n        'can'  => 'manage-blog',\n    ],\n    [\n        'text'        => 'pages',\n        'url'         => 'admin/pages',\n        'icon'        => 'far fa-fw fa-file',\n        'label'       => 4,\n        'label_color' => 'success',\n    ],\n    ['header' => 'account_settings'],\n    [\n        'text' => 'profile',\n        'url'  => 'admin/settings',\n        'icon' => 'fas fa-fw fa-user',\n    ],\n    [\n        'text' => 'change_password',\n        'url'  => 'admin/settings',\n        'icon' => 'fas fa-fw fa-lock',\n    ],\n    [\n        'text'    => 'multilevel',\n        'icon'    => 'fas fa-fw fa-share',\n        'submenu' => [\n            [\n                'text' => 'level_one',\n                'url'  => '#',\n            ],\n            [\n                'text'    => 'level_one',\n                'url'     => '#',\n                'submenu' => [\n                    [\n                        'text' => 'level_two',\n                        'url'  => '#',\n                    ],\n                    [\n                        'text'    => 'level_two',\n                        'url'     => '#',\n                        'submenu' => [\n                            [\n                                'text' => 'level_three',\n                                'url'  => '#',\n                            ],\n                            [\n                                'text' => 'level_three',\n                                'url'  => '#',\n                            ],\n                        ],\n                    ],\n                ],\n            ],\n            [\n                'text' => 'level_one',\n                'url'  => '#',\n            ],\n        ],\n    ],\n    ['header' => 'labels'],\n    [\n        'text'       => 'important',\n        'icon_color' => 'red',\n        'url'        => '#',\n    ],\n    [\n        'text'       => 'warning',\n        'icon_color' => 'yellow',\n        'url'        => '#',\n    ],\n    [\n        'text'       => 'information',\n        'icon_color' => 'cyan',\n        'url'        => '#',\n    ],\n],\n")),(0,l.kt)("p",null,"Esta secci\xf3n configura los elementos del men\xfa de navegaci\xf3n de la plantilla. Aqu\xed tienes una breve descripci\xf3n de cada elemento:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Elementos de la barra de navegaci\xf3n"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'type' => 'navbar-search'"),": Agrega un campo de b\xfasqueda en la barra de navegaci\xf3n."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'type' => 'fullscreen-widget'"),": Agrega un bot\xf3n para activar el modo de pantalla completa en la barra de navegaci\xf3n."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Elementos de la barra lateral"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'type' => 'sidebar-menu-search'"),": Agrega un campo de b\xfasqueda en la barra lateral."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'text' => 'blog'"),": Crea un elemento de men\xfa con el texto \"blog\" que apunta a la URL 'admin/blog'."),(0,l.kt)("li",{parentName:"ul"},"`'text' => '")))),(0,l.kt)("p",null,"pages'",(0,l.kt)("inlineCode",{parentName:"p"},": Crea un elemento de men\xfa con el texto \"pages\" que apunta a la URL 'admin/pages'. Tambi\xe9n tiene un \xedcono y una etiqueta con valor '4' en color verde ("),"'success'`)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"['header' => 'account_settings']"),': Crea un encabezado en el men\xfa lateral con el texto "account_settings".'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'text' => 'profile'"),": Crea un elemento de men\xfa con el texto \"profile\" que apunta a la URL 'admin/settings'. Tambi\xe9n tiene un \xedcono de usuario."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'text' => 'change_password'"),": Crea un elemento de men\xfa con el texto \"change_password\" que apunta a la URL 'admin/settings'. Tambi\xe9n tiene un \xedcono de candado."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'text' => 'multilevel'"),': Crea un elemento de men\xfa con el texto "multilevel" y un \xedcono de compartir. Adem\xe1s, contiene un submen\xfa con varios niveles anidados.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"['header' => 'labels']"),': Crea un encabezado en el men\xfa lateral con el texto "labels".'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'text' => 'important'"),': Crea un elemento de men\xfa con el texto "important" y un \xedcono en color rojo.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'text' => 'warning'"),': Crea un elemento de men\xfa con el texto "warning" y un \xedcono en color amarillo.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'text' => 'information'"),': Crea un elemento de men\xfa con el texto "information" y un \xedcono en color cian.')),(0,l.kt)("p",null,"Estas opciones te permiten personalizar el men\xfa de navegaci\xf3n de la plantilla de acuerdo a las necesidades de tu proyecto. Puedes agregar, eliminar o modificar elementos seg\xfan lo que desees mostrar en tu aplicaci\xf3n."),(0,l.kt)("p",null,"Para nuestro prop\xf3sito, que es mostrar solo tres opciones como ",(0,l.kt)("strong",{parentName:"p"},"Categor\xedas"),", ",(0,l.kt)("strong",{parentName:"p"},"Subcategor\xedas")," y ",(0,l.kt)("strong",{parentName:"p"},"Usuarios"),", dejaremos estas opciones de la siguiente manera:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"'menu' => [\n        // Elementos de la barra de navegaci\xf3n:\n        [\n            'type'         => 'navbar-search',\n            'text'         => 'Buscar',\n            'topnav_right' => true,\n        ],\n        [\n            'type'         => 'fullscreen-widget',\n            'topnav_right' => true,\n        ],\n\n        // Elementos de la barra lateral:\n        [\n            'type' => 'sidebar-menu-search',\n            'text' => 'Buscar',\n        ],\n        ['header' => 'ADMINISTRACI\xd3N'],\n        [\n            'text' => 'Categor\xedas',\n            'url'  => 'admin/settings',\n            'icon' => 'fas fa-fw fa-layer-group',\n        ],\n        [\n            'text' => 'Subcategor\xedas',\n            'url'  => 'admin/settings',\n            'icon' => 'fas fa-fw fa-folder',\n        ],\n        ['header' => 'USUARIOS'],\n        [\n            'text'       => 'Usuarios',\n            'icon_color' => '',\n            'icon'      =>'fas fa-fw fa-user',\n            'url'        => '#',\n        ],\n    ],\n")),(0,l.kt)("p",null,"Los nombres de los iconos hacen referencia a la biblioteca Font Awesome. Puedes consultar el siguiente enlace para obtener m\xe1s informaci\xf3n: ",(0,l.kt)("a",{parentName:"p",href:"https://fontawesome.com/icons"},"https://fontawesome.com/icons"),"."))}m.isMDXComponent=!0}}]);