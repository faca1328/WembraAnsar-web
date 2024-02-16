import productosInfo from "@/data/productos-info.json";

import type { APIRoute } from "astro";

export const GET: APIRoute = ({ request }) => {
    const { url } = request;
    const searchParams = new URL(url).searchParams;

    const categoria = searchParams.get('category') ?? 0;
    const precio = searchParams.get('precio') ?? 'Todos';
    const cuidado = searchParams.get('cuidado') ?? 'Todos';

    let productosFiltrados = productosInfo[categoria as number].productos;

    if (precio && precio !== 'Todos') { // Filtrar por precio
        const [min, max] = precio.split('-').map(Number);
        productosFiltrados = productosFiltrados.filter(producto =>
            producto.precio >= min && producto.precio <= max
        );
    }

    // Si la categoría es "Plantas"
    if (categoria === '0' && cuidado !== 'Todos') { // Filtrar por nivel de cuidado
        productosFiltrados = productosFiltrados.filter(producto =>
            producto.cuidado === cuidado
        );
    }

    return new Response(JSON.stringify(productosFiltrados));
}
