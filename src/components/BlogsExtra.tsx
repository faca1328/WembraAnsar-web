import blogInfo from "@/data/blog-info.json"

const blogMod = [...blogInfo]
const lastBlogs = blogMod.splice(0,1)

console.log(blogInfo);
console.log(lastBlogs);


interface Blogs {
    nombre: string;
    titulo: string;
    subtitulo: string;
    contenido: string;
    imagen: string;
    id: string;
}



export default function BlogsExtra() {
    return (
        <div>
            {
                lastBlogs.map((blog: Blogs) => {
                    return (
                        <article id={blog.id} class="rounded lg:p-5 py-2">
                            <a
                                href="#"
                                class="flex flex-col items-cente rounded-lg bg-white border max-w-md hover:bg-blue-dianne-50 mx-10 transition-colors duration-200"
                            >
                                <img
                                    class="object-cover md:object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                                    src={blog.imagen}
                                    alt={blog.nombre}
                                />
                                <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    {blog.titulo}
                                </h2>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700/60">
                                    {blog.subtitulo}
                                </h5>
                                <p class="mb-3 font-normal text-gray-900">
                                    {blog.contenido}
                                </p>
                            </a>
                        </article>
                    );
                })
            }

        </div>
    )
}
