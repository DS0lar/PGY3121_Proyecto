const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("carrito")
const modalContainer = document.getElementById("modal-container") 
const cantidadCarrito = document.getElementById("cantidadCarrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

juguetes.forEach((juguetes)=> {
    let content = document.createElement("div")
    content.className = "card shadow-sm"
    content.innerHTML = `
        <img src="${juguetes.img}">
        <h3>${juguetes.nombre}</h3>
        <p class="price">$${juguetes.precio}</p>
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

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === juguetes.id);
        console.log(repeat);

        if(repeat){
            carrito.map((prod) =>{
                if(prod.id === juguetes.id){
                    prod.cantidad++;
                }
            });
        }else{
            carrito.push({
                id: juguetes.id,
                img: juguetes.img,
                nombre: juguetes.nombre,
                precio: juguetes.precio,
                cantidad: juguetes.cantidad
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