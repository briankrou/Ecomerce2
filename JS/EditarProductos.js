const idProducto=document.querySelector('[data-agregar-producto-id]');
const urlImagen=document.querySelector('[data-agregar-producto-url-Img]');
const categori=document.querySelector('[data-agregar-producto-categoria]');
const nombres=document.querySelector('[data-agregar-producto-nombre]');
const preci=document.querySelector('[data-agregar-producto-precio]');
const describir=document.querySelector("#descripcionProducto");




const agregar=document.querySelector("#btn_guardarCambo");




let ideditar= JSON.parse(localStorage.getItem("dato"))

console.log("recibe el "+ ideditar)

ideditar =ideditar.slice()


console.log("recibe el "+ ideditar)

const arreglo= JSON.parse(localStorage.getItem("productos"))



arreglo.forEach(element => {
    element.contenedorCategorias.forEach(element=>{
        element.contedorProductos.forEach(element=>{
            console.log(element)
            if(element.id==ideditar){
                idProducto.textContent="ID: "+element.id;
                urlImagen.setAttribute( "value",element.url)
                categori.setAttribute( "value",element.categoria)
                nombres.setAttribute("value",element.nombre)
                preci.setAttribute("value",element.precio)
                describir.innerHTML=element.descripcion;
    
            }
        })
    })
});



function editarProducto(){
             
            Eid=idProducto.textContent.slice(4);
            Eurl=urlImagen.value;
            Ecategoria=categori.value;
            Enombre=nombres.value;
            Eprecio=preci.value;
            Edescripcion=describir.value;

        arreglo.forEach(element => {
            element.contenedorCategorias.forEach(element=>{
                element.contedorProductos.forEach(element=>{
                    if(element.id=="ID: "+Eid){
                        element.id=Eid;
                        element.url=Eurl;
                        element.categoria=Ecategoria;
                        element.nombre= Enombre;
                        element.precio=Eprecio;
                        element.descripcion=Edescripcion;
                        localStorage.setItem("productos",JSON.stringify(arreglo))      
                    }
                })
            })
        })
}





agregar.addEventListener("click",()=>{

    let mensaje="Faltan algunos campos\n"+"URL: "+urlImagen.value+"\nCategoria: "+categori.value;


    if(urlImagen.value!=""){
        if(preci.value!=""){
            if(describir.value!=""){
                if(nombres.value!=""){
                    if(categori.value!=""){
                        editarProducto()
                        window.location.href = "./productos.html";
                    }else{
                        alert(mensaje)
                    }
                }
            }else{
                alert(mensaje)
            }
        }else{
            alert(mensaje)
        }
    }else{
        alert(mensaje)
    }
})