let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({nombre, precio});
    total += precio;
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    //////////////////////////////  actualización del carrito//////////////////////////////////////////
    console.log("Producto agregado al carrito");
    console.log("Carrito actual:", carrito);
    console.log("Total:", total);
}

function actualizarCarrito() {
    let carritoHTML = '';
    for (let i = 0; i < carrito.length; i++) {
        carritoHTML += `
            <div class="item-carrito">
                <span>${carrito[i].nombre} - $${carrito[i].precio}</span>
                <button class="btn" onclick="eliminarDelCarrito(${i})">Eliminar</button>
            </div>
        `;
    }
    document.getElementById('items-carrito').innerHTML = carritoHTML;
    document.getElementById('total').innerHTML = `Total: $${total}`;
}

 ///////////////////////////////// galeria/////////////////////////////////////////////////
let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

function cargar(item){
    quitarBordes();
    mostrador.style.width = "90%";
    seleccion.style.width = "30%";
    seleccion.style.opacity = "1";
    item.style.border = "1px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML =  item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo ";

    precioSeleccionado.innerHTML =  item.getElementsByTagName("span")[0].innerHTML;


}
function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "none";
    }
}

//anuncio//
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

 
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }


    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}


showSlide(currentSlide);


setInterval(() => {
    changeSlide(1);
}, 5000);
    ///////////////////////////////////////////////////////////BUSCAR///////////////////////////////////////////////////

    function filterProducts() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        const productList = document.getElementById('productList');
        const products = productList.getElementsByClassName('producto');
    
        for (let i = 0; i < products.length; i++) {
            const productName = products[i].getElementsByClassName('producto-nombre')[0].innerText.toLowerCase();
            if (productName.includes(input)) {
                products[i].style.display = ''; // Mostrar producto
            } else {
                products[i].style.display = 'none'; // Ocultar producto
            }
        }
    }