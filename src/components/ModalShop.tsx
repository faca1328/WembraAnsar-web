import { products, removeProducts } from "@/context/shopProducts"
import { useStore } from "@nanostores/preact"
import { ModalShopForm } from "./ModalShopForm";


export interface Productos {
    nombre: string,
    descripcion: string,
    cuidado: string,
    imagen: string,
    precio: number,
    id: number
}


export default function ModalShop() {

    const $products: Productos[] = useStore(products)
    

    const precioTotal = $products.reduce((total, producto) => {
        return total + producto.precio;
    }, 0);


    function openShopModal() {
        const Modal = document.getElementById("shop-modal")
        Modal?.classList.replace("translate-x-full", "translate-x-0")
    }

    function closeShopModal() {
        const Modal = document.getElementById("shop-modal")
        Modal?.classList.replace("translate-x-0", "translate-x-full")
    }

    return (
        <>
            <button className="cursor-pointer text-cream-200/90 relative" onClick={openShopModal}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgba(191,226,225,0.1)"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    ></path>
                </svg>
                {
                    $products.length >= 1 &&
                    <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-dianne-500/90 border-2 border-white rounded-full -top-1 -end-3">{$products.length}</div>
                }
            </button>


            <div className="h-full bg-gradient-to-l to-transparent from-black/50 from-90% fixed w-full z-[999] inset-0 mt-auto translate-x-full transition-all duration-500 justify-center" id="shop-modal">
                <div className="bg-white lg:w-1/3 sm:w-1/2 w-[99%] h-[99%] ml-auto rounded-l my-1 relative">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t w-full">
                        <button
                            onClick={closeShopModal}
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                        >
                            <svg
                                className="w-3 h-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                ></path>
                            </svg>
                        </button>

                        <h3 className="text-xl font-semibold text-gray-900">Seleccionados</h3>
                    </div>

                    {$products.length === 0 ?
                        (
                            <div class="m-auto w-full h-full text-center pt-5">
                                <h4 class="text-gray-500/80 m-auto w-full h-full " >
                                    Agregue un producto para consultar stock !
                                </h4>
                            </div>
                        )
                        :
                        (
                            <div
                                class={`p-4 md:p-5 flex flex-col gap-y-2 overflow-x-hidden max-h-[76%] 
                    ${$products.length >= 1 ? "overflow-y-scroll" : "overflow-y-hidden"}`}>

                                {$products.map((producto) => (
                                    <div class="border-2 border-blue-dianne-400 flex flex-row w-full rounded-full bg-blue-dianne-50 text-black h-20 items-center justify-around">
                                        <img class={`${$products.length >= 6 ? "size-10" : "size-16"} object-cover rounded-full -ml-1 xl:-ml-3`} src={producto.imagen} alt="img" />
                                        <div class="w-16">
                                            <h1>{producto.nombre}</h1>
                                        </div>

                                        <h4>Precio: ${producto.precio}</h4>

                                        <button
                                            onClick={() => removeProducts(producto.id)}
                                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2 justify-center items-center mr-2">
                                            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}


                            </div>
                        )
                    }

                    <div class="items-center p-4 md:mt-5 pb-3 border-t border-gray-200 rounded-b fixed max-h-11 bottom-20 sm:bottom-14 gap-y-1 lg:bottom-4 flex flex-col lg:flex-row lg:justify-between w-[30%] xl:w-[25%]">
                        <ModalShopForm />

                        <h1 class="text-black">Total: ${precioTotal}</h1>

                    </div>

                </div>
            </div>

        </>
    );
}
