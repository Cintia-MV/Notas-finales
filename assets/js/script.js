
var nombre = prompt("Ingresa tu nombre");
var apellido = prompt("Ingresa tu apellido");
var carrera = prompt("Ingresa tu carrera");
//VARIABLES RAMO 1
var ramo1 = prompt("Ingresa el nombre de tu primer ramo");
var nota1_ramo1 =prompt('Ingresa nota 1 del ramo ' + ramo1 + '');
var nota2_ramo1 =prompt('Ingresa nota 2 del ramo ' + ramo1 + '');
var nota3_ramo1 =prompt('Ingresa nota 3 del ramo ' + ramo1 + '');
//VARIABLES RAMO 2
var ramo2 = prompt("Ingresa el nombre de tu segundo ramo");
var nota1_ramo2 =prompt('Ingresa nota 1 del ramo ' + ramo2 + '');
var nota2_ramo2 =prompt('Ingresa nota 2 del ramo ' + ramo2 + '');
var nota3_ramo2 =prompt('Ingresa nota 3 del ramo ' + ramo2 + '');
//VARIABLES RAMO 3
var ramo3 = prompt("Ingresa el nombre de tu tercer ramo");
var nota1_ramo3 =prompt('Ingresa nota 1 del ramo ' + ramo3 + '');
var nota2_ramo3 =prompt('Ingresa nota 2 del ramo ' + ramo3 + '');

//PROMEDIOS
var promedio1 = ( parseFloat (nota1_ramo1)+parseFloat(nota2_ramo1)+parseFloat(nota3_ramo1))/3;
var promedio2 = ( parseFloat (nota1_ramo2)+parseFloat(nota2_ramo2)+parseFloat(nota3_ramo2))/3;

var prome1 = promedio1.toFixed(2);
var prome2 = promedio2.toFixed(2);


//NOTA 3 RAMO 3
var sumaNotas3 = (nota1_ramo3*0.333)+(nota2_ramo3*0.33);
var restaNotas3 = (4 - sumaNotas3.toFixed(2));
var notaFalta3 = (restaNotas3.toFixed(2)/0.33)

document.write("<div class='container'>");
document.write("<h1 'font-weight-bold'> Notas finales</h1>")
document.write("<div>")
document.write("<h6 class='font-weight-bold ml-auto'>Nombre: </h6>") 
document.write("<p class='font-weight-normal'>  "  + nombre +"</p>" )
document.write(" <p class='font-weight-normal'>  "  + apellido +"</p>" )
document.write("</div>")
document.write("<div>")
document.write("<h6 class='font-weight-bold ml-auto'>Carrera: </h6> ") 
document.write(" <h6 class='font-weight-normal'> " + carrera + "</h6>")
document.write("</div>")

//TABLAS
document.write("<table class= 'table'>");
document.write("<caption><p class='font-weight-normal'> Para aprobar el ramo " + ramo3 + "</p>");
document.write(" <p class='font-weight-normal '> con nota 4, necesitas obtener un " + notaFalta3.toFixed(2) + " en la nota 3. </p></caption>")
document.write("<thead class='bg-dark text-white'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
document.write("</thead-dark>");

//PRIMER RAMO
document.write("<tbody  class='font-weight-bold'>");
document.write("<tr>");
document.write("<th>" + ramo1 +"</th>");
document.write("<td>" + nota1_ramo1 + "</td>");
document.write("<td>" + nota2_ramo1 + "</td>");
document.write("<td>" + nota3_ramo1 + "</td>");
document.write("<td>" + prome1 + "</td>"); 
document.write("</tr>");

//SEGUNDO RAMO
document.write("<tr>");
document.write("<th>" + ramo2 +"</th>");
document.write("<td>" + nota1_ramo2 + "</td>");
document.write("<td>" + nota2_ramo2 + "</td>");
document.write("<td>" + nota3_ramo2 + "</td>");
document.write("<td>" + prome2 + "</td>"); 
document.write("</tr>");

//TERCER RAMO
document.write("<tr>");
document.write("<th>" + ramo3 +"</th>");
document.write("<td>" + nota1_ramo3 + "</td>");
document.write("<td>" + nota2_ramo3 + "</td>");
document.write("<td> - </td>");
document.write("<td> - </td>"); 
document.write("</tr>");
document.write("</tbody>");
document.write("</table");
document.write("</div>");