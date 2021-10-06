

//btonejecucion 

var btnbuscar=document.getElementById('buscar');
btnbuscar.addEventListener('click',()=>{

    let valX=document.getElementById('valorX').value;
    let valY=document.getElementById('valorY').value;
    let res=document.getElementById('resultado').value;
  
   territorio(valX,valY);
  
})
function territorio(valX,valY){

    fetch('http://api.weatherstack.com/current?access_key=31eb99629ea80bc5e2aa523883843f1c&query='+valX+''+valY+'')
    .then(response=> response.json())
    .then(json=>{
        let data=json;
        console.log(data.display_name);
                let res=document.getElementById('resultado');
               
                res.innerHTML=`<a class="Texto">La información de las coordenadas es:</a>
                <h2>${data.display_name}</h2>
                `;
console.log(data.display_name);
    });

}

