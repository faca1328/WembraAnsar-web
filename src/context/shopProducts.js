import { atom } from "nanostores";


export const products = atom([]);

export function addProducts(product) {
    if (products.get().find(p => p.id === product.id)) {
        Toastify({
            text: "Este producto ya se encuenta seleccionado",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #e61e1e, #ff6e6e)",
            },
        }).showToast();

        return
    } else {
        const updatedProducts = [...products.get(), product];
        products.set(updatedProducts);
        Toastify({
            text: "Producto agregado exitosamente!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    }
}

export function removeProducts(id) {
    const updatedProducts = products.get().filter(product => product.id != id);
    products.set(updatedProducts);
}