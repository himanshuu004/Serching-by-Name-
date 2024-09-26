var input = document.querySelector("#search-bar");
var data = [
    {
    narm:"Himanshu" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"},
    
    {narm:"Sahil Dhapola" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"},
   
    {narm:"Sahil" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"},
    
    {narm:"Priyanshu" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"

  },

  {narm:"Sahil Dhapola" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"},
   
  {narm:"Sahil" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"},
  
  {narm:"Priyanshu" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"

},

{narm:"Sahil Dhapola" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"},
   
{narm:"Sahil" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"},

{narm:"Priyanshu" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"

},

    
    {narm:"Lavanya" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"},
    
    {narm:"Sahil Dhapola" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"},
   
    {narm:"Sahil" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"},
    
    {narm:"Priyanshu" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"

  },
  {narm:"lava" , src:"https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"

  }

]

var card = "";


data.forEach(function(elem){

  card +=` <div class="card">
        <img src="${elem.src}" alt="">
        <h4>${elem.narm}</h4>
      </div>`

});

document.querySelector(".content").innerHTML = card;

input.addEventListener("input",function(){
  var matching = data.filter(function(e){
    return e.narm.startsWith(input.value);
  })

  var newUser = "";
  matching.forEach(function(elem){

    newUser +=` <div class="card">
          <img src="${elem.src}" alt="">
          <h4>${elem.narm}</h4>
        </div>`
  
  });
  document.querySelector(".content").innerHTML = newUser;

});