console.log(contenedorCategorias)

function elminarProducto(evento){
    console.log("eliminando...")
    var eventos=evento|| window.event
    const id = (eventos.target.parentElement.parentElement.nextElementSibling.nextElementSibling.firstElementChild.outerText.slice(4))

    contenedorCategorias.forEach(element => {

        element.categoria.forEach(element=>{
            for(var i=0;i<element.productos.length;i++){
                console.log(element)
                if(element.productos[i].id==id){
                    element.productos.splice(i)
                    eventos.target.parentElement.parentElement.parentElement.remove()
                    localStorage.setItem('contenedorCategorias',JSON.stringify(contenedorCategorias))
                }

            }
        })
    });

}