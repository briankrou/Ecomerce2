const id= JSON.parse(localStorage.getItem("id"))
const contenedorCategorias= JSON.parse(localStorage.getItem("contenedorCategorias"))


const idinput=document.querySelector('[data-agregar-producto-id]');
const urlinput=document.querySelector('[data-agregar-producto-url-Img]');
const categoriainput=document.querySelector('[data-agregar-producto-categoria]');
const nombreinput=document.querySelector('[ data-agregar-producto-nombre]');
const precioinput=document.querySelector('[data-agregar-producto-precio]');
const descripcioninput=document.querySelector('#descripcionProducto')
const btnGuardar=document.querySelector("#btn_guardarCambo")


buscarid(id)
console.log(id)
function buscarid(id){
    contenedorCategorias.forEach(element => {
        element.categoria.forEach(element =>{
            element.productos.forEach(element =>{
                if(element.id==id){
                    console.log(element)
                    idinput.textContent="ID: "+element.id;
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