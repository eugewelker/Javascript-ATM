//Definimos la clase "Dinero", la cual nos permite variables de cierto valor y ciertas cantidades
class Billete
{
constructor (nombre, valor, cantidad)
{
  this.imagen = new Image();
  this.nombre = nombre;
  this.valor = valor;
  this.cantidad = cantidad;
}
}
var imagenes = [];
imagenes["100"] = "100.jpg";
imagenes["20"] = "20.jpg";
imagenes["10"]= "10.png";
//Llenamos el Array (vector) con los billetes que deseamos haya en el cajero
var caja = [];
caja.push( new Billete ("100",100,50));
caja.push( new Billete ("20",20,20));
caja.push( new Billete ("10",10,20));
var entregar = []; //En esta nueva var se guardarán los billetes y las cantidades de los mismos a entregar
var fondos = 0;

for (var f of caja) //Cilo para recopilar el valor de los fondos inciales
{
fondos = fondos + (f.valor * f.cantidad);
}

//Obtención de objetos del HTML
var estado = document.getElementById ("estado"); //Parrafo donde irá el estado de los fondos
var b = document.getElementById ("extraer"); //Botón para el eventlistener
var resultado = document.getElementById("resultado");
b.addEventListener ("click", entregarDinero);

estado.innerHTML = "Dinero disponible " + fondos;

function entregarDinero() //Funciónaejecutarfrenteaevento "click"
{
var t = document.getElementById ("dinero"); //Debe estar dentro de la función para saber el valor, cuando
dinero = parseInt(t.value);                 //se da click

for (var b of caja)
{
if (dinero > 0)
{
  div = Math.floor(dinero/b.valor)
  if (div>b.cantidad)
  {
    papeles = b.cantidad;
  }
  else
  {
    papeles = div;
  }
  entregar.push(new Billete(b.nombre, b.valor, papeles));
  dinero = dinero - (b.valor * papeles);
}
}
var sum_dinero = 0;
for (var e of entregar) //Me permite saber el valor bruto solicitado
{
  sum_dinero = sum_dinero + (e.valor * e.cantidad);
}
if (dinero > 0) //Si no se queda en 0 la cantidad solicitada es porque no hay los billetes necesarios
{
  resultado.innerHTML = "¡No tengo el dinero exacto, para entregartelo! :("
}
else if (dinero == 0 && sum_dinero<= fondos)
{
  for (var e of entregar)
  {
    if (e.cantidad > 0)
    {
    resultado.innerHTML += e.cantidad + " billetes de " + "<img src='"+ imagenes[e.nombre]+"'/>" + "<br />";
      }
  }
  resultado.innerHTML += "<hr/>";
  fondos = fondos - sum_dinero;
}
    else
{
  resultado.innerHTML = "No hay fondos";
}
estado.innerHTML = "Dinero disponible " + fondos; //Me actualizará el valor del estado de los fondos
for (var e of entregar)
{
  e.valor = 0; e.cantidad = 0;
}
}
