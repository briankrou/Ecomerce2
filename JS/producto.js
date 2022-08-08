

export class producto{
    id=0;
    imgurl;
    categoria;
    nombre;
    precio=0;
    descripcion;
    constructor(id,imgurl,categoria,nombre,precio,descripcion){

        this.id=id;
        this.imgurl=imgurl;
        this.categoria=categoria;
        this.nombre=nombre;
        this.precio=precio;
        this.descripcion=descripcion;

    }
}