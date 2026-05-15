# Actividad 2.6 - Backend con Express y Cheerio

## Objetivo
Procesar HTML en backend usando Node.js, Express y Cheerio para extraer datos estructurados.

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start
```

Servidor:
http://localhost:3000

## Endpoint

### GET /scrape

Procesa el archivo local `data/productos.html` y extrae productos.

## Ejemplo de respuesta

```json
{
  "ok": true,
  "total": 2,
  "data": [
    {
      "nombre": "Notebook Lenovo",
      "precio": "$499990",
      "categoria": "Computación"
    }
  ]
}
```

## Selectores utilizados

- `.producto`: selecciona cada producto.
- `.nombre`: extrae el nombre del producto.
- `.precio`: extrae el precio.
- `.categoria`: extrae la categoría.

## Datos extraídos

1. Nombre
2. Precio
3. Categoría

## Manejo de errores

- 400: HTML vacío.
- 404: archivo no encontrado, ruta no encontrada o sin resultados.
- 500: error interno del servidor.
