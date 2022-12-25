//API 
// GET POST  
 var myHttp = new XMLHttpRequest()
 var allItems = [];
 myHttp.open('GET' , `
 https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=84c8c86570e24764bde95b1a88242570`)
 myHttp.send()
//  console.log(myHttp.response);

myHttp.addEventListener('readystatechange' , function(){
    if(myHttp.readyState == 4){
        allItems = JSON.parse(myHttp.response).articles
        display()
        // console.log(allItems);
        // console.log(myHttp.readyState);
        // console.log(myHttp.status);
    }
})



function display(){
    var boxApi = ``;
    for(var i=0 ;i<allItems.length ; i++){
        boxApi += `<div class="col-md-4">
        <div class="items bg-light">
        <img class='w-100' src='${allItems[i].urlToImage}' />
            <h2>${allItems[i].title}</h2>
            <p>${allItems[i].description}</p>
            <a href='${allItems[i].url}' class='btn btn-outline-info'>Show More</a>
        </div>
    </div>`
    }
    document.getElementById('rowData').innerHTML = boxApi
}
//  myHttp.open('Method' , 'URL')

//  if (myHttp.readyState == 4) {
//     console.log(myHttp.response);
//     console.log(myHttp.status);
//     console.log(myHttp.readyState);

//  }
 
//  console.log(myHttp.response);
