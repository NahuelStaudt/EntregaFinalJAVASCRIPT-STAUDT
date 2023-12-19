// PRODUCTOS
const productos = [
    // NIKE
    {
        id: "zapatilla-01",
        titulo: "Air Jordan 1 Retro High OG",
        imagen: "./img/nike/img/nike/Air Jordan 1 Retro High OG.webp",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 10000
    },
    {
        id: "zapatilla-02",
        titulo: "Air Jordan 1 Zoom Comfort 2",
        imagen: "./img/nike/Air Jordan 1 Zoom Comfort 2.webp",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 10000
    },
    {
        id: "zapatilla-03",
        titulo: "Air Jordan XXXVII Tatum",
        imagen: "./img/nike/Air Jordan XXXVII Tatum.webp",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 10000
    },
    {
        id: "zapatilla-04",
        titulo: "Jumpman MVP",
        imagen: "./img/nike/Jumpman MVP.webp",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 10000
    },
    {
        id: "zapatilla-05",
        titulo: "Nike Air Force 1 Low Retro",
        imagen: "./img/nike/Nike Air Force 1 Low Retro.webp",
        categoria: {
            nombre: "",
            id: ""
        },
        precio: 10000
    },
    {
        id: "zapatilla-06",
        titulo: "Nike Air Force 1 Mid 07 LV8",
        imagen: "./img/nike/Nike Air Force 1 Mid 07 LV8.webp",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 10000
    },
    {
        id: "zapatilla-07",
        titulo: "Nike Air Max 97 OG",
        imagen: "./img/nike/Nike Dunk Mid.webp",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 10000
    },
    {
        id: "Nike Dunk Mid",
        titulo: "zapatilla 01",
        imagen: "./img/nike/Nike Dunk Mid.webp",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 10000
    },
    {
        id: "zapatilla-09",
        titulo: "Nike Kiger 9",
        imagen: "./img/nike/Nike Kiger 9.webp",
        categoria: {
            nombre: "Nike",
            id: "Nike"
        },
        precio: 10000
    },
    //ADIDAS
    {
        id: "zapatilla-10",
        titulo: "ZAPATILLAS ADIDAS 4D KRAZED",
        imagen: "./img/adidas/ZAPATILLAS ADIDAS 4D KRAZED.avif",
        categoria: {
            nombre: "Adidas",
            id: "Adidas"
        },
        precio: 10000
    },
    {
        id: "zapatilla-11",
        titulo: "ADIDAS DURAMO SL 2.0",
        imagen: "./img/adidas/ZAPATILLAS DURAMO SL 2.0.avif",
        categoria: {
            nombre: "Adidas",
            id: "Adidas"
        },
        precio: 10000
    },
    {
        id: "zapatilla-12",
        titulo: "ADIDAS FORUM BOLD",
        imagen: "./img/adidas/ZAPATILLAS FORUM BOLD.avif",
        categoria: {
            nombre: "Adidas",
            id: "Adidas"
        },
        precio: 10000
    },
    {
        id: "zapatilla-13",
        titulo: "ADIDAS FORUM MID",
        imagen: "./img/adidas/ZAPATILLAS FORUM MID.avif",
        categoria: {
            nombre: "Adidas",
            id: "Adidas"
        },
        precio: 10000
    },
    {
        id: "zapatilla-14",
        titulo: "ADIDAS NMD_R1",
        imagen: "./img/adidas/ZAPATILLAS NMD_R1.avif",
        categoria: {
            nombre: "AdidasAdidas",
            id: "AdidasAdidas"
        },
        precio: 10000
    },
    {
        id: "zapatilla-15",
        titulo: "ADIDAS STAN SMITH X ANDRÉ SARAIVA",
        imagen: "./img/adidas/ZAPATILLAS STAN SMITH X ANDRÉ SARAIVA.avif",
        categoria: {
            nombre: "AdidasAdidas",
            id: "AdidasAdidas"
        },
        precio: 10000
    },
    {
        id: "zapatilla-16",
        titulo: "ADIDAS SUPERSTAR",
        imagen: "./img/adidas/ZAPATILLAS SUPERSTAR.avif",
        categoria: {
            nombre: "Adidas",
            id: "Adidas"
        },
        precio: 10000
    },
    {
        id: "zapatilla-17",
        titulo: "ADIDAS TOP TEN RB",
        imagen: "./img/adidas/ZAPATILLAS TOP TEN RB.avif",
        categoria: {
            nombre: "Adidas",
            id: "Adidas"
        },
        precio: 10000
    },
    {
        id: "zapatilla-18",
        titulo: "Nike Kiger 9",
        imagen: "./img/adidas/Zapatillas_Adifom_Q_Azul_HQ4324_01_standard.avif",
        categoria: {
            nombre: "Adidas",
            id: "Adidas"
        },
        precio: 10000
    },
];

const contenedorProductos = document.querySelector("#acontenedor-productos")

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML = `
            <img class="pruductoImagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="productoDetalles">
                <h3 class="productoTitulo">${producto.titulo}</h3>
                <p class="productoTexto">$${producto.precios}</p>
                <button class="productoAgregar" id="${producto.id}">Agregar</button>
            </div>`
        contenedorProductos.append(div);
    })
}

cargarProductos();