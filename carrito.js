
 let ​​comida =  [{​nombre:​​"harina"​,​precio:​​35}, 
                {​nombre:​​"pan"​,​precio:​​25},   
                {​nombre:​​"papa"​,​precio:​​52},  
                {​nombre:​​"palta"​,​precio:​​55},  
                {​nombre:​​"fideos"​,​precio:​​85},
                {​nombre:​​"aceite"​,​precio:​​350},
                {​nombre:​​"sopa"​,​precio:​​86},
                {​nombre:​​"mermelada"​,​precio:​​108},
                {​nombre:​​"porotos"​,​precio:​​69},
                {​nombre:​​"lentejas"​,​precio:​​85},
                {​nombre:​​"mandarina"​,​precio:​​43},
                {​nombre:​​"banana"​,​precio:​​79},
                {​nombre:​​"leche de almendras"​,​precio:​​145},
                {​nombre:​​"papel higiénico"​,​precio:​​147},
                {​nombre:​​"lavandina"​,​precio:​​55},
                {​nombre:​​"alcohol en gel"​,​precio:​​123},
                {​nombre:​​"shampoo"​,​precio:​​400},
                {​nombre:​​"arroz"​,​precio:​​66},
                {​nombre:​​"harina"​,​precio:​​35},
                {​nombre:​​"salsa de tomate"​,​precio:​​35},]
             
                

                let tabla = "<table border='1|1'>";
                for (let i = 0; i < comida.length; i++) {
                    tabla+="<tr>";
                    tabla+="<td>"+comida[i].nombre+"</td>";
                    tabla+="<td>"+comida[i].precio+"</td>";
                    tabla+="</tr>";
                }
                tabla+="</table>";
                document.getElementById("tabla").innerHTML = tabla;
            