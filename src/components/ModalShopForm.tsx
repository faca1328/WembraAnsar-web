import { useState } from "preact/hooks";
import { products } from "@/context/shopProducts";
import { useStore } from "@nanostores/preact";
import type { Productos } from "./ModalShop";

export const ModalShopForm = () => {
    const $products: Productos[] = useStore(products);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    function openShopModal() {
        const Modal = document.getElementById("shop-modal-form");
        Modal?.classList.replace("translate-x-full", "translate-x-0");
    }

    function closeShopModal() {
        const Modal = document.getElementById("shop-modal-form");
        Modal?.classList.replace("translate-x-0", "translate-x-full");
    }

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;

        const formDataToSend = new FormData(form);

        // Append product names, prices, and ids to formData
        $products.forEach((product) => {
            formDataToSend.append("product_names[]", product.nombre);
            formDataToSend.append("product_prices[]", product.precio.toString());
            formDataToSend.append("product_ids[]", product.id.toString());
        });

        const response = await fetch(form.action, {
            method: form.method,
            body: formDataToSend,
            headers: { accept: "application/json" },
        });

        if (response.ok) {
            form.reset();
            alert("Tu consulta fue enviada con éxito!");
        }
    };

    const handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    return (
        <>
            <button
                class="text-white bg-daintree-900/95 hover:brightness-110 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-fit"
                onClick={openShopModal}
            >
                Consultar Stock
            </button>

            <div
                className="h-full bg-gradient-to-l to-transparent from-black/50 from-90% fixed w-full z-[999] inset-0 mt-auto translate-x-full transition-all duration-500 justify-center"
                id="shop-modal-form"
            >
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

                    <form
                        id="form"
                        class="w-[90%] m-5 flex flex-col"
                        action={`${process.env.FORM_ACTION}`}
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <div class="md:items-center mb-6">
                            <label class="block text-daintree-950/75 font-bold mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Nombre.
                            </label>
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600/80"
                                id="inline-full-name"
                                type="text"
                                placeholder="Nombre (Obligatorio)"
                                required
                                minLength={3}
                                name="name"
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </div>

                        <div class="md:items-center mb-6">
                            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-email">
                                E-Mail.
                            </label>
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600/80"
                                id="inline-email"
                                type="email"
                                placeholder="Email (Obligatorio)"
                                required
                                minLength={3}
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>

                        <div class="md:items-center mb-6">
                            <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" for="inline-area">
                                Escribinos.
                            </label>
                            <textarea
                                rows={6}
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-600/80 resize-none"
                                id="inline-area"
                                type="text"
                                placeholder="Dejanos algun comentario o duda (Opcional)"
                                name="message"
                                onChange={handleChange}
                                value={formData.message}
                            />
                        </div>

                        <div class="md:flex md:items-center">
                            <button class="shadow bg-daintree-900/95 hover:brightness-110 focus:shadow-outline  text-white font-medium py-2 px-4 rounded" type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
