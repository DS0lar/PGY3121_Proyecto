const pintarCarrito = () => {
    //console.log("prueba");
    modalContainer.innerHTML = "";
    modalContainer.style.display ="block";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class= "modal-header-tittle">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X"
    modalButton.className = "modal-header-button"
    modalButton.addEventListener("click", ()=>{
        modalContainer.style.display = "none";
    }) 

    modalHeader.append(modalButton);

    carrito.forEach((juguetes) =>{

        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${juguetes.img}">
            <h3>${juguetes.nombre}</h3>
            <p>$${juguetes.precio}</p>
            <span class="restar"> - </span>
            <p>Cantidad: ${juguetes.cantidad}</p>
            <span class="sumar"> + </span>
            <p>Total: $${juguetes.cantidad * juguetes.precio}</p>
        `;

        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar");
        restar.addEventListener("click", () => {
            //console.log(restar);
            if(juguetes.cantidad !== 1){
                juguetes.cantidad--;
                pintarCarrito();
            }
            
        })

        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            //console.log(restar);
           
                juguetes.cantidad++;
                pintarCarrito();
            
            
        })
        
        let eliminar = document.createElement("span");

        eliminar.innerText = "❌"
        eliminar.className = "btn-eliminar"
        carritoContent.append(eliminar);
        eliminar.addEventListener("click", eliminarProducto);
        
    });


    const total = carrito.reduce((acc, el) => acc+el.precio * el.cantidad, 0);

    const totalBuy = document.createElement("div")
    totalBuy.className = "total-content"
    totalBuy.innerHTML = `total a pagar: $${total}`;
    modalContainer.append(totalBuy);

};

verCarrito.addEventListener("click", pintarCarrito);
    
const eliminarProducto = ()=>{ 
    const foundID = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoid) => {
        return carritoid !== foundID;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () =>{
    cantidadCarrito.style.display="block"

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
    

}
carritoCounter();