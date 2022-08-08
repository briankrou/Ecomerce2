import { producto } from "./producto.js";

const contenedorCategorias= JSON.parse(localStorage.getItem("contenedorCategorias"))

const idinput=document.querySelector('[data-agregar-producto-id]');
const urlinput=document.querySelector('[data-agregar-producto-url-Img]');
const categoriainput=document.querySelector('[data-agregar-producto-categoria]');
const nombreinput=document.querySelector('[ data-agregar-producto-nombre]');
const precioinput=document.querySelector('[data-agregar-producto-precio]');
const descripcioninput=document.querySelector('#descripcionProducto')
const btnAgregar=document.querySelector("#btn_agregarProducto")


nombreinput.addEventListener("blur",evento=>{
    nombreinput.value=(nombreinput.value[0].toUpperCase())+(nombreinput.value.slice(1));
 
})
categoriainput.addEventListener("blur",evento=>{
    categoriainput.value=(categoriainput.value[0].toUpperCase())+(categoriainput.value.slice(1));
})



console.log(contenedorCategorias)





//Funcion que regresa el objeto categoria si lo encuentra si no retorna falso

function buscarCategoria(categoria){
    let respuesta=false;
    contenedorCategorias.forEach(element=>{
        if(element.letra==categoria[0]){
            element.categoria.forEach(element=>{
                if(element.nombre==categoria){
                    respuesta = element;
                }
            })
        }
    })
    return respuesta;
}

//funcion que crear la categoria

function crearCategoria(categoria){
    if(buscarCategoria(categoria)==false){
        contenedorCategorias.forEach(element=>{
            if(element.letra==categoria[0]){
                class nuevacategoria{
                    nombre;
                    productos=[]
                    constructor(nombre){
                        this.nombre=nombre;
                    }
                }
                const nuevo =new nuevacategoria(categoria)
                element.categoria.push(nuevo)
                localStorage.setItem('contenedorCategorias',JSON.stringify(contenedorCategorias))
            }
        })
    }else{
        console.log("ya esta el La Categoria")
    }
}


//funcion que recibe un objeto categoria y busca dentro de el el producto retorna falso o verdadero si lo encuentra 




function buscarProducto(contenedorCategoria,nombre){
    let respuesta=false;
        contenedorCategoria.productos.forEach(element=>{
            if(element.nombre==nombre){
                respuesta = true
            }
})
    return respuesta;
}




//funcion que busca el id retorna si esta o no esta 
function buscarID(id){


let respuesta=false;
 contenedorCategorias.forEach(element=>{
    element.categoria.forEach(element=>{

        if(element.productos==null){

        }else{
            element.productos.forEach(element=>{
                console.log("id es: "+element)
                if(element.id==id){
                    console.log("id igual")
                    respuesta = true;
                }
            });
        }

    });

 });
    
 return respuesta;

}






//funcion que crea el producto

function crearProducto(id,url,categoria,nombre,precio,descripcion){

    let respuesta=false;
    console.log("creando producto")
    const nuevo = new producto(id,url,categoria,nombre,precio,descripcion)
    const buscaCategoria=buscarCategoria(categoria);


 
        if(buscaCategoria!=false){
            if(buscaCategoria.productos.length==0){
                buscaCategoria.productos.push(nuevo);
                respuesta =true;
            }else{
                if(buscarProducto(buscaCategoria,nombre)==false){
                    buscaCategoria.productos.push(nuevo)
                    respuesta =true;
                }
            }
        }else{
            crearCategoria(categoria);
            buscarCategoria(categoria).productos.push(nuevo);
            respuesta =true;
        }
    

    localStorage.setItem('contenedorCategorias',JSON.stringify(contenedorCategorias))

    return respuesta;
}





btnAgregar.addEventListener('click',(evento) =>{

    evento.preventDefault();

    if(idinput.value!=""&urlinput.value!=""&categoriainput.value!=""&nombreinput.value!=""&precioinput.value!=""&descripcioninput.value!=""){
        
        if(buscarID(idinput.value)==false){

            if(crearProducto(idinput.value,urlinput.value,categoriainput.value,nombreinput.value,precioinput.value,descripcioninput.value)==true){
                idinput.value="";
                urlinput.value ="",
                categoriainput.value="",
                nombreinput.value="",
                precioinput.value="",
                descripcioninput.value="";
    
            }else{
                console.log("Ya esta el producto")
    
            }


        }else{
            alert("ya esta el id")
        }

    }else{
        alert("faltan campos")
    }
   
});
