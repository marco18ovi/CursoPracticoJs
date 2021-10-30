//cuadrado
console.group("cuadrado");
// const ladoCuadrado=5;
// console.log("los lados del cuadrado miden: "+ladoCuadrado+"cm");
function perimetroCuadrado(lado){
    return lado*4;
}
perimetroCuadrado();
// console.log("el perimetro del cuadrado es "+perimetroCuadrado+"cm")
function areaCuadrado(lado){
    return lado*lado;
}
// console.log("el area de mi cuadrado es "+areaCuadrado+"cm");
console.groupEnd();



//triangulo
console.group("triangulo")
// const ladotriangulo1=6;
// const ladotriangulo2=6;
// const ladotriangulo3=4;
// const basetriangulo=4;
// const alturaTriangulo=5.5;
// console.log("los lados del triangulo miden:"+
// ladotriangulo1+
// "cm, "+
// ladotriangulo2+
// "cm, "+
// ladotriangulo3+
// "cm")
// console.log("la altura del triangulo es de "+alturaTriangulo+"cm");
function perimetroTriangulo(lado1,lado2,lado3){
    return lado1+lado2+lado3;
}
// console.log("el perimetro del triangulo es "+perimetroCuadrado+"cm");
function areaTringulo(base,altura){
    return (base*altura)/2;
}
// console.log("el area del triangulo es "+areaTringulo+"cm")
console.groupEnd()



console.group("circulo");
//radio
// const radioCirculo=4;
// console.log("el radio del circulo es "+radioCirculo)
//diamtro
function diametroCirculo(radio){
    return 2*radio;
}
// console.log("el diametro del circulo es "+diametroCirculo)
//pi
//const pi=3.1415;
//circuenferencia o diametro
const pi=Math.PI;
console.log("el valor de pi es "+pi)
function circuenferenciaCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*pi;
}
// console.log("la circunferencia del circulo es "+circuenferenciaCirculo)
//area
function areaCirculo(radio){
    return (radio*radio)*pi;
}
// console.log("el area del circulo es "+areaCirculo)
console.groupEnd()






//aqui interactuamos con el html
function calcularPerimetroCudrado(){
const input=document.getElementById("inputcuadrado");
const value=input.value;
const perimetro=perimetroCuadrado(value);
alert(perimetro);
}
function calcularAreaCuadrado(){
    const input=document.getElementById("inputcuadrado");
    const value=input.value;
    const area=areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const input1=document.getElementById("lado1");
    const value1=Number(input1.value);
    const input2=document.getElementById("lado2");
    const value2=Number(input2.value);
    const input3=document.getElementById("lado3");
    const value3=Number(input3.value);
    const perimetro=perimetroTriangulo(value1,value2,value3);
    alert(perimetro)
}
function calcularAreaTriangulo(){
    const base=document.getElementById("base");
    const valueBase=base.value;
    const altura=document.getElementById("altura")
    const valueAltura=base.value;
    const area=areaTringulo(valueBase,valueAltura)
    alert(area)
}
function calcularDiametroCirculo(){
    const radio=document.getElementById("radio");
    const value=radio.value;
    const diametro=diametroCirculo(value)
    alert(diametro)
}
function calcularCircunferenciaCirculo(){
    const radio=document.getElementById("radio1");
    const value=radio.value;
    const circunferencia=circuenferenciaCirculo(value);
    alert(circunferencia);
}