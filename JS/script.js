
const contenedorCategorias= JSON.parse(localStorage.getItem("contenedorCategorias"))

//inicialisa el espacio para guardar 
if(contenedorCategorias==null){

    abc=  [];
    class principal{
        letra;
        categoria=[];
        constructor(l){
            this.letra=l;
        }
    }
    const A=new principal("A");const B=new principal("B");const C=new principal("C");const D=new principal("D");
    const E=new principal("E");const F=new principal("F");const G=new principal("G");const H=new principal("H");
    const I=new principal("I");const J=new principal("J");const K=new principal("K");const L=new principal("L");
    const M=new principal("M");const N=new principal("N");const Ñ=new principal("Ñ");const O=new principal("O");
    const P=new principal("P");const Q=new principal("Q");const R=new principal("R");const S=new principal("S");
    const T=new principal("T");const U=new principal("U");const V=new principal("V");const W=new principal("W");
    const X=new principal("X");const Y=new principal("Y");const Z=new principal("Z");
    abc.push(A,B,C,D,E,F,G,H,I,J,K,L,M,N,Ñ,O,P,Q,R,S,T,U,V,W,X,Y,Z)
    localStorage.setItem('contenedorCategorias',JSON.stringify(abc))

    console.log("creando ABC")
}
