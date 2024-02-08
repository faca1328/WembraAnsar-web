import productosInfo from "@/data/productos-info.json";

//sirve como filtro a la info que estoy trayendo arriba. Esa se podria enviar directamente perod e esta amnera evito cargar toda la info junta si no es necesario.
import type { APIRoute } from "astro";


export const GET: APIRoute = ({request}) => {
    const {url} = request;

    //el search params es lo que hay despues del '?' que pongo en la URL
    const searchParams = new URL(url).searchParams
    const categoria = searchParams.get('category') ?? 0

    //filtro por categoria para pasarlo en el Response
    const infoCategoria = productosInfo[categoria as number]

    return new Response(JSON.stringify(infoCategoria))
}