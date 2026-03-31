# Gifs App

Aplicacion web construida con React, TypeScript y Vite para buscar gifs en tiempo real consumiendo la API de Giphy. El proyecto permite escribir una busqueda, obtener resultados rapidamente y volver a consultar terminos anteriores con una experiencia simple y directa.

## Descripcion

La aplicacion incluye:

- Busqueda de gifs por texto.
- Consulta automatica con debounce mientras el usuario escribe.
- Historial de busquedas recientes.
- Reutilizacion de resultados en memoria para evitar consultas repetidas.
- Pruebas unitarias para componentes, acciones y configuracion de la API.

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- Axios
- Vitest
- Testing Library
- ESLint

## Como funciona

La app sigue este flujo:

1. El usuario escribe un termino en la barra de busqueda.
2. `SearchBar` dispara la consulta al presionar Enter, al hacer clic en el boton o despues de un debounce de 700 ms.
3. `useGifs` administra el estado de resultados, historial y cache en memoria.
4. `getGifsByQuery` consulta la API de Giphy y transforma la respuesta.
5. `GifsList` renderiza los gifs en una grilla responsive.

## Estructura del proyecto

```text
src/
|-- gifs/
|   |-- actions/       # Acciones que consumen y transforman datos
|   |-- api/           # Configuracion de Axios para Giphy
|   |-- components/    # Componentes de la funcionalidad de gifs
|   |-- hooks/         # Hook principal del flujo de busqueda
|   |-- interfaces/    # Tipos e interfaces
|-- shared/
|   |-- components/    # Componentes reutilizables
|-- mock-data/         # Datos de apoyo para desarrollo/pruebas
|-- GifsApp.tsx        # Componente principal
|-- main.tsx           # Punto de entrada
tests/
|-- mocks/             # Respuestas simuladas para pruebas
```

## Requisitos previos

- Node.js 18 o superior
- npm
- Una API key de Giphy

## Variables de entorno

Este proyecto necesita una clave de Giphy para funcionar.

1. Crea un archivo `.env` en la raiz del proyecto.
2. Usa como base el archivo `.env.template`.
3. Define la siguiente variable:

```env
VITE_GIPKY_API_KEY=tu_api_key_aqui
```

Importante: el nombre de la variable actualmente usado por el codigo es `VITE_GIPKY_API_KEY`.

## Instalacion

```bash
npm install
```

## Ejecucion en desarrollo

```bash
npm run dev
```

Por defecto, Vite levantara la aplicacion en una URL local similar a:

```text
http://localhost:5173
```

## Scripts disponibles

```bash
npm run dev
```

Inicia el servidor de desarrollo.

```bash
npm run build
```

Genera la version de produccion en la carpeta `dist/`.

```bash
npm run preview
```

Sirve localmente la build de produccion.

```bash
npm run lint
```

Ejecuta las reglas de ESLint.

```bash
npm run test
```

Inicia Vitest en modo interactivo.

```bash
npm run test -- --run
```

Ejecuta la suite una sola vez.

```bash
npm run test:ui
```

Abre la interfaz visual de Vitest.

```bash
npm run coverage
```

Genera el reporte de cobertura.

## Pruebas incluidas

Actualmente el proyecto prueba:

- El render del componente principal.
- El comportamiento del componente `CustomHeader`.
- La configuracion base de la instancia Axios para Giphy.
- La transformacion de datos realizada por `getGifsByQuery`.

Estado verificado del proyecto:

- `npm run test -- --run`: correcto
- `npm run build`: correcto

## Interfaz principal

La pantalla principal muestra:

- Un encabezado con titulo y descripcion.
- Una barra de busqueda con boton de accion.
- Una lista de busquedas previas reutilizables.
- Una grilla responsive con los gifs encontrados.

## Posibles mejoras

- Mostrar estados de carga y error.
- Agregar paginacion o infinite scroll.
- Persistir el historial en `localStorage`.
- Mejorar accesibilidad y feedback visual.
- Agregar pruebas para `SearchBar`, `PreviousSearches` y `useGifs`.

## Autor

Proyecto desarrollado como practica de React + TypeScript consumiendo la API de Giphy.
