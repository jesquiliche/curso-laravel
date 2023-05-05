---
sidebar_position: 50
---

# Puesta en practica

## Modelos del proyecto

### Anuncios

```php
<?php

namespace App\Http\Controllers;

use App\Models\Anuncio;
use Illuminate\Http\Request;

class AnuncioController extends Controller
{
    public function index()
    {
        $anuncios = Anuncio::all();
        return view('anuncios.index', compact('anuncios'));
    }

    public function show($id)
    {
        $anuncio = Anuncio::findOrFail($id);
        return view('anuncios.show', compact('anuncio'));
    }

    public function create()
    {
        return view('anuncios.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'descripcion' => 'required|string',
            'imagen' => 'nullable|image|max:2048',
            'precio' => 'nullable|numeric',
            'subcategoria_id' => 'required|exists:subcategorias,id',
            'provincia' => 'required|string|max:255',
            'codprovincia' => 'required|string|max:255',
        ]);

        $anuncio = new Anuncio($request->all());

        if ($request->hasFile('imagen')) {
            $path = $request->file('imagen')->store('public/images');
            $anuncio->imagen = $path;
        }

        $anuncio->save();

        return redirect()->route('anuncios.show', $anuncio->id);
    }

    public function edit($id)
    {
        $anuncio = Anuncio::findOrFail($id);
        return view('anuncios.edit', compact('anuncio'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'titulo' => 'required|string|max:255',
            'descripcion' => 'required|string',
            'imagen' => 'nullable|image|max:2048',
            'precio' => 'nullable|numeric',
            'subcategoria_id' => 'required|exists:subcategorias,id',
            'provincia' => 'required|string|max:255',
            'codprovincia' => 'required|string|max:255',
        ]);

        $anuncio = Anuncio::findOrFail($id);

        $anuncio->fill($request->all());

        if ($request->hasFile('imagen')) {
            $path = $request->file('imagen')->store('public/images');
            $anuncio->imagen = $path;
        }

        $anuncio->save();

        return redirect()->route('anuncios.show', $anuncio->id);
    }

    public function destroy($id)
    {
        $anuncio = Anuncio::findOrFail($id);
        $anuncio->delete();
        return redirect()->route('anuncios.index');
    }
}
```

### Categoria 

```php
<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    public function index()
    {
        $categorias = Categoria::all();
        return view('categorias.index', compact('categorias'));
    }

    public function show($id)
    {
        $categoria = Categoria::findOrFail($id);
        return view('categorias.show', compact('categoria'));
    }

    public function create()
    {
        return view('categorias.create');
    }

    public function store(Request $request)
    {
        $categoria = Categoria::create($request->all());
        return redirect()->route('categorias.show', $categoria->id);
    }

    public function edit($id)
    {
        $categoria = Categoria::findOrFail($id);
        return view('categorias.edit', compact('categoria'));
    }

    public function update(Request $request, $id)
    {
        $categoria = Categoria::findOrFail($id);
        $categoria->update($request->all());
        return redirect()->route('categorias.show', $categoria->id);
    }

    public function destroy($id)
    {
        $categoria = Categoria::findOrFail($id);
        $categoria->delete();
        return redirect()->route('categorias.index');
    }
}
``` 

Este controlador cuenta con los métodos CRUD básicos para la gestión de las categorías. Recuerda que debes definir las rutas correspondientes para poder acceder a los métodos del controlador.

