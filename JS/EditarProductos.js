const id= JSON.parse(localStorage.getItem("id"))



const idinput=document.querySelector('[data-agregar-producto-id]');
const urlinput=document.querySelector('[data-agregar-producto-url-Img]');
const categoriainput=document.querySelector('[data-agregar-producto-categoria]');
const nombreinput=document.querySelector('[ data-agregar-producto-nombre]');
const precioinput=document.querySelector('[data-agregar-producto-precio]');
const descripcioninput=document.querySelector('#descripcionProducto')
const btnGuardar=document.querySelector("#btn_guardarCambo")
const btnBuscarID=document.querySelector('[data-buscar-id]')

btnBuscarID.addEventListener("click",()=>{

    buscarid(idinput.value)
})


console.log(id)
function buscarid(id){
    const contenedorCategorias= JSON.parse(localStorage.getItem("contenedorCategorias"))
    contenedorCategorias.forEach(element => {
        element.categoria.forEach(element =>{
            element.productos.forEach(element =>{
                if(element.id==id){
                    console.log(element)
                    categoriainput.textContent="Categoria: "+element.categoria;
                    urlinput.value=element.imgurl;
                    nombreinput.value=element.nombre;
                    precioinput.value=element.precio;
                    descripcioninput.value=element.descripcion;
                }
            })
        })
    });
}



btnGuardar.addEventListener('click',(evento)=>{
    contenedorCategorias.forEach(element => {
        element.categoria.forEach(element =>{
            element.productos.forEach(element =>{
                if(element.id==id){
                    element.umgurl=urlinput.value;
                    element.nombre=nombreinput.value;
                    element.precio=precioinput.value;
                    element.descripcion=descripcioninput.value;
                    localStorage.setItem('contenedorCategorias',JSON.stringify(contenedorCategorias))
                }
            })
        })
    });
    
})