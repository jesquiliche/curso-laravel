"use strict";(self.webpackChunkeloquent=self.webpackChunkeloquent||[]).push([[6542],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>f});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),c=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=c(e.components);return r.createElement(o.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,s(s({ref:a},u),{},{components:t})):r.createElement(f,s({ref:a},u))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=m;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4266:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const i={sidebar_position:1},s="Introducci\xf3n",l={unversionedId:"tutorial-basics/Vistas/intro",id:"tutorial-basics/Vistas/intro",title:"Introducci\xf3n",description:"\xbfQu\xe9 son las vistas Blade?",source:"@site/docs/tutorial-basics/Vistas/intro.md",sourceDirName:"tutorial-basics/Vistas",slug:"/tutorial-basics/Vistas/intro",permalink:"/curso-laravel/docs/tutorial-basics/Vistas/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/Vistas/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Vistas Blade",permalink:"/curso-laravel/docs/category/vistas-blade"},next:{title:"Creando nuestro primer Layout",permalink:"/curso-laravel/docs/tutorial-basics/Vistas/vistas"}},o={},c=[{value:"\xbfQu\xe9 son las vistas Blade?",id:"qu\xe9-son-las-vistas-blade",level:2}],u={toc:c},d="wrapper";function p(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,n.kt)("h2",{id:"qu\xe9-son-las-vistas-blade"},"\xbfQu\xe9 son las vistas Blade?"),(0,n.kt)("p",null,"Las vistas Blade son un sistema de plantillas en Laravel. Blade proporciona una sintaxis elegante y eficiente para crear y renderizar las vistas en Laravel."),(0,n.kt)("p",null,"Las vistas Blade permiten combinar c\xf3digo PHP con marcado HTML de una manera m\xe1s legible y estructurada. Proporcionan una forma de separar la l\xf3gica de presentaci\xf3n de la l\xf3gica de negocio en una aplicaci\xf3n web."),(0,n.kt)("p",null,"Algunas caracter\xedsticas importantes de las vistas Blade son:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sintaxis clara: Blade utiliza una sintaxis concisa y expresiva que facilita la escritura y lectura de las plantillas.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Uso de directivas: Blade incluye directivas que permiten controlar la l\xf3gica de la vista, como ",(0,n.kt)("inlineCode",{parentName:"p"},"@if"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"@foreach"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"@while"),", entre otras. Estas directivas facilitan la iteraci\xf3n, condicionales y bucles en la vista.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Herencia de plantillas: Blade ofrece la posibilidad de crear plantillas base y extenderlas en vistas hijas. Esto permite reutilizar c\xf3digo y mantener una estructura coherente en las vistas.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Inclusi\xf3n de subvistas: Blade permite incluir subvistas dentro de otras vistas utilizando la directiva ",(0,n.kt)("inlineCode",{parentName:"p"},"@include"),". Esto facilita la reutilizaci\xf3n de componentes y la separaci\xf3n de responsabilidades en la interfaz de usuario.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generaci\xf3n de enlaces y rutas: Blade ofrece funciones y directivas para generar enlaces a rutas de manera sencilla y din\xe1mica. Esto simplifica la generaci\xf3n de URL y la navegaci\xf3n en la aplicaci\xf3n."))),(0,n.kt)("p",null,"En definitiva, las vistas Blade en Laravel son una herramienta poderosa para crear interfaces de usuario din\xe1micas y reutilizables. Permiten separar la l\xf3gica de presentaci\xf3n del resto de la aplicaci\xf3n, lo que mejora la mantenibilidad y legibilidad del c\xf3digo."))}p.isMDXComponent=!0}}]);