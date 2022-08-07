const idProducto=document.querySelector('[data-agregar-producto-id]');
const describir=document.querySelector("#descripcionProducto");
const preci=document.querySelector('[data-agregar-producto-precio]');
const urlImagen=document.querySelector('[data-agregar-producto-url-Img]');
const nombres=document.querySelector('[data-agregar-producto-nombre]');
const categori=document.querySelector('[data-agregar-producto-categoria]');
const agregar=document.querySelector("#btn_agregarProducto");



class letra{
    letra;
    contenedorCategorias=[];
    constructor(letra){
        this.letra=letra;
    }
}

const a=new letra("A");const b=new letra("B");const c=new letra("C");const d=new letra("D");const e=new letra("E");
const f=new letra("F");const g=new letra("G");const h=new letra("H");const i=new letra("I");const j=new letra("J");
const k=new letra("K");const l=new letra("L");const m=new letra("M");const n=new letra("N");const ñ=new letra("Ñ");
const o=new letra("O");const p=new letra("P");const q=new letra("Q");const r=new letra("R");const s=new letra("S");
const t=new letra("T");const u=new letra("U");const v=new letra("V");const w=new letra("W");const x=new letra("X");
const y=new letra("Y");const z=new letra("Z");


if( JSON.parse(localStorage.getItem("productos"))==null){
    localStorage.setItem("productos",JSON.stringify([a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z]))
}

const arregloCategorias= JSON.parse(localStorage.getItem("productos"))

console.log(arregloCategorias)

const abc = arregloCategorias;


class categoria{
    nombreCategoria;
    contedorProductos=[];
    constructor(nombre){
        this.nombreCategoria=nombre;
    }
}

class producto{
    id;
    url;
    nombre;
    precio;
    descripcion;
    categoria;
    
    constructor(url,categoria,nombre,precio,descripcion,id){
        this.url=url;
        this.nombre=nombre;
        this.precio=precio;
        this.descripcion=descripcion;
        this.categoria=categoria;
        this.id=id;
    }
}



function crearCategoria(nombre){
    if(nombre!=""){
        if(buscarPorCategoria(nombre)==false){
            abc.forEach(Element=>{
                if(Element.letra==nombre[0]){
                    const nueva=new categoria(nombre)
                    Element.contenedorCategorias.push(nueva);
                    localStorage.setItem("productos",JSON.stringify(abc))
                }
            })
        }else{
            console.log("ya esta la categoria "+ nombre);
        }
    }
}




function buscarPorProducto(producto){//retorna el objeto producto

    let respuesta=false;

        abc.forEach(Element=>{
            Element.contenedorCategorias.forEach(Element=>{
                Element.contedorProductos.forEach(Element=>{

                    if(respuesta==false){
                        if(Element.nombre==producto){
                            respuesta=Element;
                        }
                    }

                })
            })        
        })

    return respuesta;
}




function buscarPorCategoria(nombre){///retorna el objeto categoria
    let respuesta=false;

    if(nombre!=""){
     
        abc.forEach(Element=>{

            if(Element.letra==nombre[0]){
                Element.contenedorCategorias.forEach(Element=>{

                    if(respuesta==false){
                        if(Element.nombreCategoria==nombre){

                            return respuesta=Element; 
           
                       }
                    }

                })
            }
        })

    }

    return respuesta;

}

console.log(buscarPorCategoria("Aseo"))



function crearProducto(url,categoria,nombre,precio,descripcion,id){
    let respuesta=false;



    const nuevo=new producto(url,categoria,nombre,precio,descripcion,id)

    if(buscarPorProducto(nombre)==false){

        if(buscarPorCategoria(categoria)==false){

            crearCategoria(categoria)
            buscarPorCategoria(categoria).contedorProductos.push(nuevo)
            localStorage.setItem("productos",JSON.stringify(abc))
            respuesta=true;
           
        }else{

            buscarPorCategoria(categoria).contedorProductos.push(nuevo)
            localStorage.setItem("productos",JSON.stringify(abc))
            respuesta=true;
        }

    }else{

        ///ya esta el producto en laguna categoria  
    }

    return respuesta;
}



let mensaje="Faltan algunos campos\n"+"URL: "+urlImagen.value+"\nCategoria: "+categori.value;






agregar.addEventListener("click",()=>{
    

        

        if(urlImagen.value!=""){
            if(preci.value!=""){
                if(describir.value!=""){
                    if(nombres.value!=""){
                        if(categori.value!=""){
                            console.log("creado.................................");

                            crearProducto(urlImagen.value,categori.value,nombres.value,preci.value,describir.value,idProducto.value)


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

