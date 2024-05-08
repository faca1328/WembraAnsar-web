

export const ModalShopForm = ({ productos }: { productos: number }) => {

    function openShopModal() {
        const Modal = document.getElementById("shop-modal-form")
        Modal?.classList.replace("translate-x-full", "translate-x-0")
    }

    function closeShopModal() {
        const Modal = document.getElementById("shop-modal-form")
        Modal?.classList.replace("translate-x-0", "translate-x-full")
    }



    return (
        <>
            <button
                disabled={productos === 0}
                onClick={openShopModal}
                class=" text-white bg-daintree-900/95 hover:brightness-110 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-fit">
                Consultar Stock
            </button>

            <div className="h-full bg-gradient-to-l to-transparent from-black/50 from-90% fixed w-full z-[999] inset-0 mt-auto translate-x-full transition-all duration-500 justify-center" id="shop-modal-form">
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

                        <h3 className="text-xl font-semibold text-gray-900">Consultanos!</h3>
                    </div>

                    <form class="w-[90%] m-5 flex flex-col">
                        <div class="md:items-center mb-6">
                            <label class="block text-daintree-950/75 font-bold mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Nombre.
                            </label>
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600/80" id="inline-full-name" type="text" placeholder="Nombre (Obligatorio)" />
                        </div>

                        <div class="md:items-center mb-6">
                            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-email">
                                Mail.
                            </label>
                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600/80" id="inline-email" type="text" placeholder="Email (Obligatorio)" />
                        </div>

                        <div class="md:items-center mb-6">
                            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-area">
                                Escribinos.
                            </label>
                            <textarea rows={6} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600/80 resize-none" id="inline-area" type="text" placeholder="Dejanos algun comentario o duda (Opcional)" />
                        </div>

                        <div class="md:flex md:items-center">
                            <button class="shadow bg-daintree-900/95 hover:brightness-110 focus:shadow-outline  text-white font-medium py-2 px-4 rounded" type="button">
                                Enviar
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
