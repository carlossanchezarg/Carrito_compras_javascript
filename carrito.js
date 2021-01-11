let productos =[{nombre:"harina",precio:35},{nombre:"pan",precio:25   },   {nombre:"papa",precio:52   },   {nombre:"palta",precio:55   }, 
                {nombre:"fideos",precio:85   },   {nombre:"aceite",precio:350   },{nombre:"sopa",precio:86   }, 
                {nombre:"mermelada",precio:108   },   {nombre:"porotos",precio:69   },   {nombre:"lentejas",precio:85   }, 
                {nombre:"mandarina",precio:43   },   {nombre:"banana",precio:79   },
                {nombre:"leche de almendras",precio:145   },   {nombre:"papel higiénico",precio:147   }, 
                {nombre:"lavandina",precio:55   },   {nombre:"alcohol en gel",precio:123   },   {nombre:"shampoo",precio:400   }, 
                {nombre:"arroz",precio:66   },   {nombre:"harina",precio:35   },   {nombre:"salsa de tomate",precio:35   }];



let carritoPrecios=[];
function precios(carritoPrecios,valor){
    carritoPrecios.push(valor);
}

let carritoNombres=[];
function nombres(carritoNombres,nom){
    carritoNombres.push(nom);
}

function hacerTabla(productos){
    let tabla = "<table>";
    tabla+="<tr id=\"ecabezado_tabla\"><th>Producto</th><th colspan=\"2\">Precio</th></tr>";
    for (let i = 0; i < productos.length; i++) {
         tabla += "<tr><td>"+productos[i].nombre+"</td>";
        tabla += "<td>$ "+productos[i].precio;
        tabla +="</td><td><input type=\"button\" onclick=\"precios(carritoPrecios,"+productos[i].precio+");nombres(carritoNombres,'"+productos[i].nombre+"');carritoLista();quitar(productos,"+i+")\" value=\"Agregar\" >"+"</td></tr>";
    }
    tabla+="</table>"
    document.getElementById("tabla").innerHTML = tabla;
}

function quitar(productos,i){
    productos.splice(i, 1);
    hacerTabla(productos);
    document.getElementById("total").innerHTML ="Haga click  <br>en comprar para <br> conocer importe.";

}

function quitarDelCarrito(carritoNombres,carritoPrecios,k){
    carritoNombres.splice(k,1);
    carritoPrecios.splice(k,1);
    carritoLista();
}

function sumarTotal(precios){
        let total=0;
        for(let j=0;j<precios.length;j++){
            total+=precios[j];
        }
        return total;
}



function carritoLista(){
    let lista="<ol>";
    for(let k=0;k<carritoNombres.length;k++){
            lista+="<li onclick=\"quitarDelCarrito(carritoNombres,carritoPrecios,"+k+");devolver(productos,'"+carritoNombres[k]+"',"+carritoPrecios[k]+");hacerTabla(productos)\"><div class=\"quitar\">";
            lista+=carritoNombres[k]+"    $"+carritoPrecios[k];
            lista+="<span class=\"quitarTexto\">Hacer click sobre el producto para devolver.</span></div>";
            lista+="</li>";
    }
    lista+="</ol><br>"
    document.getElementById("carrito").innerHTML ="<h2>Carrito:</h2><br> "+lista;
}

function devolver(productos,nom,prec){
    productos.push({nombre:nom,precio:prec});
}

function total(){
    document.getElementById("total").innerHTML ="Total: $ " + sumarTotal(carritoPrecios);
}

function inicio(){
    hacerTabla(productos);
    //total();
}

