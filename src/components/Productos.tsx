import { useEffect, useState } from "preact/hooks"


interface Productos {
    nombre: string,
    descripcion: string,
    cuidado: string,
    imagen: string,
    precio: number,
    id: number
}

export default function Productos() {

    const [category, setCategory] = useState(0); // Inicializamos con '0' para "Plantas"
    const [precio, setPrecio] = useState('Todos');
    const [nivelCuidado, setNivelCuidado] = useState('Todos');

    const [productosInfo, setProductosInfo] = useState<Productos[]>();



    useEffect(() => {
        async function fetchProductos() {
            const res = await fetch(`api/productos.json?category=${category}&precio=${precio}&cuidado=${nivelCuidado}`);
            const data = await res.json();            
            setProductosInfo(data)
        }
        fetchProductos()
    }, [category, precio, nivelCuidado])


    const cuidadoInsumos = category === 1 ? "hidden" : '';


    return (
        <>
            <select class="block p-3 mt-5 w-full text-[1.68rem] leading-10 text-pretty text-cream-100/80 bg-transparent border-0 border-b-2 border-cream-100/80 appearance-none focus:outline-none focus:ring-0 focus:border-cream-100/80 cursor-pointer"
                value={category ?? 0}
                onChange={(e) => {
                    const target = e.target as HTMLSelectElement;
                    setCategory(parseInt(target.value));
                }}
            >
                <option value={0} class="text-cream-100/80 bg-blue-dianne-950">Plantas</option>
                <option value={1} class="text-cream-100/80 bg-blue-dianne-950">Insumos Varios</option>
            </select>

            <div class="flex sm:items-center gap-x-20 sm:flex-row flex-col">
                <div class={`flex items-center ${cuidadoInsumos}`}>
                    <span class="text-lg text-gray-50/80 mr-2 p-3"> Nivel de Cuidado : </span>
                    <select class="block p-1 my-5 text-lg text-pretty text-gray-50/80 bg-transparent border-0 border-b-2 appearance-none border-gray-50/80 focus:outline-none focus:ring-0 focus:border-gray-50/80 cursor-pointer rounded-lg"
                        value={nivelCuidado ?? "Todos"}
                        onChange={(e) => {
                            const target = e.target as HTMLSelectElement;
                            setNivelCuidado(target.value);
                        }}
                    >
                        <option value="Todos" class="text-cream-100/80 bg-blue-dianne-950">Todos</option>
                        <option value="Dificil" class="text-cream-100/80 bg-blue-dianne-950">Dificil</option>
                        <option value="Medio" class="text-cream-100/80 bg-blue-dianne-950">Medio</option>
                        <option value="Facil" class="text-cream-100/80 bg-blue-dianne-950">Facil</option>
                    </select>
                </div>
                <div class="flex items-center">
                    <span class="text-lg text-gray-50/80 mr-2 p-3"> Precio : </span>
                    <select class="block p-1 my-5 text-lg text-pretty text-gray-50/80 bg-transparent border-0 border-b-2 appearance-none border-gray-50/80 focus:outline-none focus:ring-0 focus:border-gray-50/80 cursor-pointer rounded-lg"
                        value={precio ?? "Todos"}
                        onChange={(e) => {
                            const target = e.target as HTMLSelectElement;
                            setPrecio(target.value);
                        }}
                    >
                        <option value="Todos" class="text-cream-100/80 bg-blue-dianne-950">Todos</option>
                        <option value="0-3000" class="text-cream-100/80 bg-blue-dianne-950">0 - $3000</option>
                        <option value="3000-5000" class="text-cream-100/80 bg-blue-dianne-950">$3001 - $5000</option>
                        <option value="5000-100000" class="text-cream-100/80 bg-blue-dianne-950">+ $5000</option>
                    </select>
                </div>
            </div>

            <hr class="mb-10" />
            <ul class="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 phone:grid-cols-2 grid-cols-1 gap-10 justify-center items-center m-5 mb-36 ">
                {

                    productosInfo ?

                        (
                            productosInfo.length > 0 ? 
                                (productosInfo.map((producto) => {
                            return (
                                <li key={producto.id}
                                    class="max-w-sm bg-white border border-gray-200 rounded-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fade-left animate-ease-out"
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
                                            Nivel de cuidado: {producto?.cuidado}
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
                        })):
                        (
                            <h1 class="transition-all duration-150 justify-center w-[80%] m-auto col-span-5 flex py-16 animate-fade-up">Lo sentimos, no hay productos con estos requisitos</h1>
                        )) :
                        (
                            <div role="status" class="transition-all duration-150 justify-center w-[80%] m-auto col-span-5 flex py-16">
                                <svg aria-hidden="true" class="w-14 h-14 text-gray-50/80 animate-spin  fill-cream-300/80" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        )

                }

            </ul>
        </>
    )
}
