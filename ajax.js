/*Libreria para realizar llamadas AJAX XMLHttpRequest en vanilla JavaScript*/

console.log('libreria cargada');

function ajax(method,url,data=null){

    return new Promise(function(resolve,reject){

    let request;
        //Soporte para navegadores

        if(window.XMLHttpRequest){

            request=new XMLHttpRequest();
        }else if(window.ActiveXObject){

            request=new ActiveXObject("Msxml2.XMLHTTP");


        }else{

            reject("tu navegador no soporta llamadas Ajax");
        }
        //Comprobar cambios de estado
        request.onreadystatechange=function(){

        if(request.readyState==4){

            if(request.status>=200 && request.status<=208){  //resolve(datos)
                resolve(JSON.parse(request.responseText));

            }
            else{//reject (error)

                reject(request.statusText);
                }
        }
    }



    request.open(method,url,true);
    request.setRequestHeader("Content-type","aplication/json");
    request.send(JSON.stringify(data)); //stringify convertir en un string


    });
}
