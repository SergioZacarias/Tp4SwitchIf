/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es 
de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 %
 y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas”
 se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar
 del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {


    let lamparitas = 35;
    let cantidadLamparas;
    let marcaDeLampara;
    let descuentoUno;
    let precioConDescuento;
    let totalPagado;
    let iibb;


    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marcaDeLampara = document.getElementById("Marca").value;


    if (cantidadLamparas == 1 || cantidadLamparas == 2) {
        descuentoUno = 0;
    }
    else if (cantidadLamparas == 3 && marcaDeLampara == "ArgentinaLuz") {

        descuentoUno = 15;
    }

    else if (cantidadLamparas == 3 && marcaDeLampara == "FelipeLamparas") {
        descuentoUno = 10;
    }
    else if (cantidadLamparas == 3 && marcaDeLampara != "FelipeLamparas") {
        descuentoUno = 5;
    }
    else if (cantidadLamparas == 3 && marcaDeLampara != "ArgentinaLuz") {
        descuentoUno = 5;
    }
    else if (cantidadLamparas == 4 && marcaDeLampara == "ArgentinaLuz") {
        descuentoUno = 25;
    }
    else if (cantidadLamparas == 4 && marcaDeLampara == "FelipeLamparas") {
        descuentoUno = 25;
    }
    else if (cantidadLamparas == 4 && marcaDeLampara != "FelipeLamparas") {
        descuentoUno = 20;
    }
    else if (cantidadLamparas == 4 && marcaDeLampara != "ArgentinaLuz") {
        descuentoUno = 20;
    }
    else if (cantidadLamparas == 5 && marcaDeLampara == "ArgentinaLuz") {
        descuentoUno = 40;
    }
    else if (cantidadLamparas == 5 && marcaDeLampara != "ArgentinaLuz") {
        descuentoUno = 30;
    }
    else if (cantidadLamparas >= 6) {
        descuentoUno = 50;
    }


    precioConDescuento = lamparitas - lamparitas * descuentoUno / 100;
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

    totalPagado = precioConDescuento * cantidadLamparas;

    if (totalPagado > 120) {
        iibb = totalPagado * 10 / 100;
        totalPagado = totalPagado + iibb;

        alert(`Usted pago $ ${totalPagado} siendo $ ${iibb} el impuesto que pago.`);
    }
    else {
        alert(`Usted pago $ ${totalPagado}.`);
    }

}





