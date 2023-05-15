const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("carrito")
const modalContainer = document.getElementById("modal-container") 
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

comida.forEach((comida)=> {
    let content = document.createElement("div")
    content.className = "card shadow-sm"
    content.innerHTML = `
        <img src="${comida.img}">
        <h3>${comida.nombre}</h3>
        <p class="price">$${comida.precio}</p>
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

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === comida.id);
        console.log(repeat);

        if(repeat){
            carrito.map((prod) =>{
                if(prod.id === comida.id){
                    prod.cantidad++;
                }
            });
        }else{
            carrito.push({
                id: comida.id,
                img: comida.img,
                nombre: comida.nombre,
                precio: comida.precio,
                cantidad: comida.cantidad
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