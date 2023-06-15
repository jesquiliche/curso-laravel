---
sidebar_position: 3
---

# Personalización de Admin LTE 3

## Configuración básica

Para personalizar nuestra plantilla debemos dirigirnos al archivo **config\adminlte.php**. Vamos a ver distintas opciones de configuración, para que sirven y en el caso oportuno cambiarlas.

### Configuración del título:

```php
    'title' => 'AdminLTE 3',
    'title_prefix' => '',
    'title_postfix' => '',
```

- 'title' => 'AdminLTE 3': Aquí puedes especificar el título principal del panel de administración. En este caso, se establece como "AdminLTE 3".

- 'title_prefix' => '': Esta opción te permite agregar un prefijo al título principal. Puedes utilizarlo para agregar texto adicional antes del título principal si lo deseas. Por ejemplo, si estableces 'title_prefix' => 'Bienvenido - ', el título de la página se mostrará como "Bienvenido - AdminLTE 3".

- 'title_postfix' => '': Similar a 'title_prefix', esta opción te permite agregar un sufijo al título principal. Puedes utilizarlo para agregar texto adicional después del título principal si lo deseas. Por ejemplo, si estableces 'title_postfix' => ' - Panel de administración', el título de la página se mostrará como "AdminLTE 3 - Panel de administración".

En este proyecto lo vamos a configurar de la siguiente manera :

```php
'title' => '',
'title_prefix' => 'Anuncios - ',
'title_postfix' => '',
```

### Configuración del favicon

```php
'use_ico_only' => false,
'use_full_favicon' => false,
```

Esta sección del archivo de configuración `config/adminlte.php` se utiliza para configurar el uso de favicon en el panel de administración.

- `'use_ico_only' => false`: Esta opción determina si se utiliza únicamente el archivo de icono favicon.ico para el favicon del panel de administración. Si se establece como `true`, se utilizará solo el archivo favicon.ico. Si se establece como `false`, se utilizarán los archivos favicon.png y favicon.svg en lugar del favicon.ico. Por defecto, se establece como `false`.

- `'use_full_favicon' => false`: Esta opción determina si se utiliza el favicon completo o solo el ícono en miniatura para el panel de administración. Si se establece como `true`, se utilizará el favicon completo. Si se establece como `false`, se utilizará solo el ícono en miniatura. Por defecto, se establece como `false`.

Estas opciones te permiten personalizar la configuración del favicon en el panel de administración. Puedes ajustar los valores de `'use_ico_only'` y `'use_full_favicon'` según tus necesidades y preferencias. Si tienes un archivo de favicon.ico personalizado, puedes configurar `'use_ico_only' => true` para utilizar solo ese archivo. Si prefieres utilizar archivos de favicon en formatos diferentes al favicon.ico, puedes establecer `'use_ico_only' => false` y asegurarte de tener los archivos favicon.png y favicon.svg en la ubicación correcta. La opción `'use_full_favicon'` te permite elegir si deseas utilizar el favicon completo o solo el ícono en miniatura.

### Personalizar el logo de la plantilla

```php
    'logo' => '<b>Anuncios</b>',
    'logo_img' => '/images/logo.png',
    'logo_img_class' => 'brand-image img-circle elevation-3',
    'logo_img_xl' => null,
    'logo_img_xl_class' => 'brand-image-xs',
    'logo_img_alt' => 'Admin Logo',
```

En esta sección explicaremos cómo personalizar el logotipo en la plantilla AdminLTE. Aquí se definen diferentes aspectos del logotipo, como su texto y su imagen.

- `'logo' => '<b>Anuncios</b>'`: Aquí establecemos que el texto del logotipo será "Anuncios", y lo mostraremos en negrita para que resalte.

- `'logo_img' => '/images/logo.jpeg'`: Aquí especificamos la ruta de la imagen que queremos usar como logotipo. En nuestro caso la imagen se encuentra en la carpeta "images" del proyecto y se llama "logo.jpeg".

- `'logo_img_class' => 'brand-image img-circle elevation-3'`: Aquí le añadimos algunas clases de estilo a la imagen del logotipo, como "brand-image", "img-circle" y "elevation-3". Estas clases sirven para darle un aspecto visual específico al logotipo.

- `'logo_img_xl' => null`: Aquí no estamos proporcionando una imagen adicional para tamaños de pantalla extra grandes.

- `'logo_img_xl_class' => 'brand-image-xs'`: Sin embargo, si tenemos una pantalla extra grande, se le añadirá la clase "brand-image-xs" a la imagen del logotipo para ajustar su estilo.

- `'logo_img_alt' => 'Admin Logo'`: Por último, aquí establecemos un texto alternativo para la imagen del logotipo, en caso de que la imagen no se pueda cargar correctamente. En este caso, el texto alternativo será "Admin Logo".

Con estas configuraciones, podrás personalizar el logotipo de tu proyecto en la plantilla AdminLTE. Simplemente cambia el texto y la ruta de la imagen para adaptarlos a tus necesidades.

### Menú de usuario

```php
    'usermenu_enabled' => true,
    'usermenu_header' => false,
    'usermenu_header_class' => 'bg-primary',
    'usermenu_image' => false,
    'usermenu_desc' => false,
    'usermenu_profile_url' => false,
```

En esta sección estamos configurando el menú de usuario en la plantilla AdminLTE. Aquí se definen diversas opciones relacionadas con cómo se mostrará el menú de usuario en la interfaz.

- `'usermenu_enabled' => true`: Con esta configuración, estamos habilitando el menú de usuario. Si estableces el valor en `false`, el menú de usuario no se mostrará en la interfaz.

- `'usermenu_header' => false`: Aquí estamos deshabilitando el encabezado del menú de usuario. Si estableces el valor en `true`, se mostrará un encabezado en el menú de usuario.

- `'usermenu_header_class' => 'bg-primary'`: Si habilitas el encabezado del menú de usuario, puedes especificar una clase de estilo para el encabezado. En este caso, la clase es `'bg-primary'`, lo que significa que el encabezado tendrá un fondo de color azul primario. Puedes cambiar esta clase para adaptar el estilo a tus necesidades.

- `'usermenu_image' => false`: Aquí estamos deshabilitando la imagen de usuario en el menú. Si estableces el valor en `true`, se mostrará una imagen de usuario en el menú.

- `'usermenu_desc' => false`: Al igual que la imagen de usuario, aquí estamos deshabilitando la descripción del usuario en el menú. Si estableces el valor en `true`, se mostrará una descripción del usuario en el menú.

- `'usermenu_profile_url' => false`: Aquí estamos deshabilitando el enlace al perfil del usuario en el menú. Si estableces el valor en `true`, se proporcionará un enlace al perfil del usuario en el menú.

Estas configuraciones te permiten personalizar cómo se mostrará el menú de usuario en la plantilla AdminLTE. Puedes habilitar o deshabilitar diferentes elementos, como el encabezado, la imagen de usuario, la descripción y el enlace al perfil, según tus necesidades y preferencias de diseño.

Para más detalles consulte la documentación oficial.
[https://adminlte.io/docs/3.0/](https://adminlte.io/docs/3.0/)


### Configuración menú de la navegación

```php
'menu' => [
    // Elementos de la barra de navegación:
    [
        'type'         => 'navbar-search',
        'text'         => 'search',
        'topnav_right' => true,
    ],
    [
        'type'         => 'fullscreen-widget',
        'topnav_right' => true,
    ],

    // Elementos de la barra lateral:
    [
        'type' => 'sidebar-menu-search',
        'text' => 'search',
    ],
    [
        'text' => 'blog',
        'url'  => 'admin/blog',
        'can'  => 'manage-blog',
    ],
    [
        'text'        => 'pages',
        'url'         => 'admin/pages',
        'icon'        => 'far fa-fw fa-file',
        'label'       => 4,
        'label_color' => 'success',
    ],
    ['header' => 'account_settings'],
    [
        'text' => 'profile',
        'url'  => 'admin/settings',
        'icon' => 'fas fa-fw fa-user',
    ],
    [
        'text' => 'change_password',
        'url'  => 'admin/settings',
        'icon' => 'fas fa-fw fa-lock',
    ],
    [
        'text'    => 'multilevel',
        'icon'    => 'fas fa-fw fa-share',
        'submenu' => [
            [
                'text' => 'level_one',
                'url'  => '#',
            ],
            [
                'text'    => 'level_one',
                'url'     => '#',
                'submenu' => [
                    [
                        'text' => 'level_two',
                        'url'  => '#',
                    ],
                    [
                        'text'    => 'level_two',
                        'url'     => '#',
                        'submenu' => [
                            [
                                'text' => 'level_three',
                                'url'  => '#',
                            ],
                            [
                                'text' => 'level_three',
                                'url'  => '#',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'text' => 'level_one',
                'url'  => '#',
            ],
        ],
    ],
    ['header' => 'labels'],
    [
        'text'       => 'important',
        'icon_color' => 'red',
        'url'        => '#',
    ],
    [
        'text'       => 'warning',
        'icon_color' => 'yellow',
        'url'        => '#',
    ],
    [
        'text'       => 'information',
        'icon_color' => 'cyan',
        'url'        => '#',
    ],
],
```

Esta sección configura los elementos del menú de navegación de la plantilla. Aquí tienes una breve descripción de cada elemento:

- **Elementos de la barra de navegación**:
  - `'type' => 'navbar-search'`: Agrega un campo de búsqueda en la barra de navegación.
  - `'type' => 'fullscreen-widget'`: Agrega un botón para activar el modo de pantalla completa en la barra de navegación.

- **Elementos de la barra lateral**:
  - `'type' => 'sidebar-menu-search'`: Agrega un campo de búsqueda en la barra lateral.
  - `'text' => 'blog'`: Crea un elemento de menú con el texto "blog" que apunta a la URL 'admin/blog'.
  - `'text' => 'pages'`: Crea un elemento de menú con el texto "pages" que apunta a la URL 'admin/pages'. También tiene un ícono y una etiqueta con valor '4' en color verde (`'success'`).
  - `['header' => 'account_settings']`: Crea un encabezado en el menú lateral con el texto "account_settings".
  - `'text' => 'profile'`: Crea un elemento de menú con el texto "profile" que apunta a la URL 'admin/settings'. También tiene un ícono de usuario.
  - `'text' => 'change_password'`: Crea un elemento de menú con el texto "change_password" que apunta a la URL 'admin/settings'. También tiene un ícono de candado.
  - `'text' => 'multilevel'`: Crea un elemento de menú con el texto "multilevel" y un ícono de compartir. Además, contiene un submenú con varios niveles anidados.
  - `['header' => 'labels']`: Crea un encabezado en el menú lateral con el texto "labels".
  - `'text' => 'important'`: Crea un elemento de menú con el texto "important" y un ícono en color rojo.
  - `'text' => 'warning'`: Crea un elemento de menú con el texto "warning" y un ícono en color amarillo.
  - `'text' => 'information'`: Crea un elemento de menú con el texto "information" y un ícono en color cian.

Estas opciones te permiten personalizar el menú de navegación de la plantilla de acuerdo a las necesidades de tu proyecto. Puedes agregar, eliminar o modificar elementos según lo que desees mostrar en tu aplicación.

Para nuestro propósito, que es mostrar solo tres opciones como **Categorías**, **Subcategorías** y **Usuarios**, dejaremos estas opciones de la siguiente manera:

```php
'menu' => [
        // Elementos de la barra de navegación:
        [
            'type'         => 'navbar-search',
            'text'         => 'Buscar',
            'topnav_right' => true,
        ],
        [
            'type'         => 'fullscreen-widget',
            'topnav_right' => true,
        ],

        // Elementos de la barra lateral:
        [
            'type' => 'sidebar-menu-search',
            'text' => 'Buscar',
        ],
        ['header' => 'ADMINISTRACIÓN'],
        [
            'text' => 'Categorías',
            'url'  => 'admin/settings',
            'icon' => 'fas fa-fw fa-layer-group',
        ],
        [
            'text' => 'Subcategorías',
            'url'  => 'admin/settings',
            'icon' => 'fas fa-fw fa-folder',
        ],
        ['header' => 'USUARIOS'],
        [
            'text'       => 'Usuarios',
            'icon_color' => '',
            'icon'      =>'fas fa-fw fa-user',
            'url'        => '#',
        ],
    ],
```

Los nombres de los iconos hacen referencia a la biblioteca Font Awesome. Puedes consultar el siguiente enlace para obtener más información: [https://fontawesome.com/icons](https://fontawesome.com/icons).

