

var apidata;
fetch('https://reqres.in/api/products')
    .then(response => response.json())
    .then(json => {
        apidata = json.data;
        console.log(apidata)
        var elements = apidata.map((value) => {
            return (
                `
            
                      
              
        
                <h2>Card Image</h2>
                <div class="card" style="width:400px">
                  <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%">
                  <div class="card-body">
                    <h4 class="card-title">John Doe</h4>
                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                    <a href="#" class="btn btn-primary">See Profile</a>
                  </div>
                  </div>
              
              </div>
           
           `
            )



        });


        document.getElementById('gun').innerHTML = elements;
    })












