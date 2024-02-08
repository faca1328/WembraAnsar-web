import { useEffect, useState } from "preact/hooks"


interface ProductosInfo {
    categoria: string,
    productos: Productos[]
}

interface Productos {
    nombre: string,
    descripcion: string,
    cuidado: string,
    imagen: string,
    precio: number,
    id: number
}

export default function Productos() {

    const [category, setCategory] = useState(0)
    console.log(category)
    const [productosInfo, setProductosInfo] = useState<ProductosInfo>()
    console.log(productosInfo)

    useEffect(() => {
        async function fetchProductos() {
            const res = await fetch(`api/productos.json?category=${category}`);
            console.log(res);
            const data = await res.json();
            setProductosInfo(data)
        }
        fetchProductos()
    }, [category])

    const { productos } = productosInfo ?? {}



    return (
        <>
            <select id="underline_select" class="block p-3 my-5 w-full text-2xl text-pretty text-cream-100/80 bg-transparent border-0 border-b-2 border-cream-100/80 appearance-none focus:outline-none focus:ring-0 focus:border-cream-100/80 cursor-pointer"
                value={category ?? 0}
                onChange={(e) => {
                    const target = e.target as HTMLSelectElement;
                    setCategory(parseInt(target.value));
                }}
            >
                <option value={0} class="text-cream-100/80 bg-blue-dianne-950">Plantas</option>
                <option value={1} class="text-cream-100/80 bg-blue-dianne-950">Insumos Varios</option>
            </select>

            <hr class="mb-10" />
            <ul class="grid grid-cols-5 gap-10 justify-center items-center m-5 mb-20">
                {
                    productos?.map((producto) => {
                        return (
                            <li key={producto.id}
                                class="max-w-sm bg-white border border-gray-200 rounded-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                            >
                                <img src={producto.imagen} alt={producto.nombre} class="object-cover h-[10rem] w-full" />
                                <div class="p-5">
                                    <h5
                                        class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                                    >
                                        {producto.nombre}
                                    </h5>

                                    <p class="mb-3 font-normal text-gray-700 ">
                                        {producto.descripcion}
                                    </p>
                                    <p class="mb-5 font-normal text-gray-700 ">
                                        Nivel de cuidado: {producto.cuidado}
                                    </p>
                                    <div class="flex justify-between items-center">
                                        <a
                                            href="#"
                                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                                        >
                                            Read more
                                        </a>
                                        <p class="font-bold text-gray-700 ">
                                            ${producto.precio}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
