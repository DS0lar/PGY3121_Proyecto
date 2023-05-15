const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("carrito")
const modalContainer = document.getElementById("modal-container") 
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

product.forEach((product)=> {
    let content = document.createElement("div")
    content.className = "card shadow-sm"
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">$${product.precio}</p>
    `;
    shopContent.append(content);


    let comprar = document.createElement("button")
    comprar.innerText = "Agregar";
    comprar.className = "btn btn-primary";
    

    let detalle = document.createElement("button")
    detalle.innerText = "Detalle";
    detalle.className = "btn btn-success";

    content.append(comprar);
    content.append(detalle);

    comprar.addEventListener("click", () =>{

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        console.log(repeat);

        if(repeat){
            carrito.map((prod) =>{
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else{
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad
            }); 
        }
        
        console.log(carrito);
        carritoCounter();
        saveLocal();
    });
});

//local storage
//SET
const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};

//GET
JSON.parse(localStorage.getItem("carrito"));