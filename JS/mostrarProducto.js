const contenedorDeProductos=document.querySelector('.productos__contenedor-interno')

const contenedorCategorias= JSON.parse(localStorage.getItem("contenedorCategorias"))



function campturainformacion(evento){

    var eventos=evento|| window.event
         const id = (eventos.target.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.outerText.slice(4))
         localStorage.setItem('id',JSON.stringify(id))
}



function crealElemto(id,url,categoria,nombre,descripcion,precio){
    let li=document.createElement('li')
    const lo=`

        <div>
            <a href="./editarProducto.html" onclick="campturainformacion()" ><img src="./img/editar.png"></img></a>
            <a onclick="elminarProducto()" ><img src="./img/eliminar.png"></img></a>          
        </div>
        <img class="item__img" src="${url}">
        <div>
            <p>ID: ${id}</p>
            <p>Categoria: ${categoria}</p>
            <figcaption class="item__img__nombre">${nombre}</figcaption>
            <p class="item__img__descripcion">${descripcion}</p>
            <p class="item__img__precio">$ ${precio}</p>
        </div>
        `

 
    li.innerHTML = lo;
    return li;
}

contenedorCategorias.forEach(element => {
    element.categoria.forEach(element=>{
        element.productos.forEach(element=>{
            console.log(element)
            contenedorDeProductos.appendChild(crealElemto(element.id,element.imgurl,element.categoria,element.nombre,element.descripcion,element.precio))
        })
    })
});

