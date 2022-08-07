const contenedorProductos=document.querySelector(".productos__contenedor-interno");

const arregloCategorias= JSON.parse(localStorage.getItem("productos"))





arregloCategorias.forEach(element => {

    element.contenedorCategorias.forEach(element=>{
        element.contedorProductos.forEach(element=>{            
            console.log(element)
            contenedorProductos.appendChild(insertarProductos(element.nombre,element.precio,element.descripcion,element.url,element.id))
        })
    })

});







function insertarProductos(nombreinput,precioinput,descripcioninput,urlinput,idinput){

    
    const diveditar=document.createElement("div");diveditar.classList.add("contenedor__editar");
    const botonEditar=document.createElement("img");botonEditar.textContent="E";botonEditar.setAttribute("id","editar");botonEditar.setAttribute("src","./img/editar.png");
    const id=document.createElement("p");id.textContent=idinput;id.classList.add("item__img__id")
    const nombre1=nombreinput;
    const precio1="$ "+precioinput;

    console.log(precio1)
    const descripcion1=descripcioninput;
    const url1=urlinput;
    const div=document.createElement("div");div.classList.add("contenedor__descripcion");

    const botonEliminar=document.createElement("img");botonEliminar.textContent="D";botonEliminar.setAttribute("id","eliminar");botonEliminar.setAttribute("src","./img/eliminar.png")
    const lista=document.createElement("li");lista.classList.add("productos__contenedor-interno_producto")
    const fig=document.createElement("figure");fig.classList.add("item");
    const img=document.createElement("img");img.classList.add("item__img");img.setAttribute("src",url1)
    const contenedorDescripcion=document.createElement("div");contenedorDescripcion.classList.add("item__contenedor-Descripcion");
    const nombre=document.createElement("figcaption");nombre.classList.add("item__img__nombre");nombre.textContent=nombre1;
    const parrafo1=document.createElement("p");parrafo1.classList.add("item__img__descripcion");parrafo1.textContent=descripcion1;
    const parrafo2=document.createElement("p");parrafo2.classList.add("item__img__precio");parrafo2.textContent=precio1;


    fig.appendChild(img);

    contenedorDescripcion.appendChild(nombre);
    contenedorDescripcion.appendChild(parrafo1);
    div.appendChild(parrafo2);


    diveditar.appendChild(botonEditar);
    diveditar.appendChild(botonEliminar);
    lista.appendChild(diveditar);

    lista.appendChild(fig);

    lista.appendChild(contenedorDescripcion);
    lista.appendChild(div);
    lista.appendChild(id);




    function eliminarProducto(idinput){
   
        arregloCategorias.forEach(element=>{
                
            element.contenedorCategorias.forEach(element=>{   

                for(var i=0;i<element.contedorProductos.length;i++){
                
                        if(element.contedorProductos[i].id==idinput){
                            element.contedorProductos.splice(i)
                            
                                 localStorage.setItem("productos",JSON.stringify(arregloCategorias))
                        }
                    
                }

            })
    
        })
    
    }


    
    botonEliminar.addEventListener("click",(evento)=>{
       
        evento.target.parentElement.parentElement.remove()
        console.log("------------------------------------")
        console.log(evento.target.parentElement.parentElement.lastChild)
  
       eliminarProducto(evento.target.parentElement.parentElement.lastChild.firstChild.textContent)

    })




    
    botonEditar.addEventListener("click",(evento)=>{

        console.log("------ñññññññ")
        console.log(evento.target.parentElement.parentElement.lastChild.firstChild.textContent)

        localStorage.setItem("dato",JSON.stringify(evento.target.parentElement.parentElement.lastChild.firstChild.textContent))

        window.location.href = "./EditarProducto.html";

    })


    return  lista;
}













