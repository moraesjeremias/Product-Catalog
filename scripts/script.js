let products = [];

function registry() {
    let product = {
        name: document.getElementById('product').value,
        brand:document.getElementById('brand').value,
        price: document.getElementById('price').value,
        carbs: document.getElementById('carbs').value,
        cat: document.getElementById('category').value
    };
    if(product.name && product.brand && product.price && product.carbs && product.cat) {
        products.push(product);
        renderProducts();
        console.log(products);
        // removeDuplicates();
        // cleanForm();
    } else {
        return false;
    }
}

function renderProducts () {
        document.querySelector('.card-columns').innerHTML = '';
    for(product of products) {
        document.querySelector('.card-columns').innerHTML += `
        <div class="card mb-3" >
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="/assets/remix-sementes.png" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 id="product-name" class="card-title">${product.name}</h5>
                <p id="product-brand" class="card-text">${product.brand}</p>
                <p id="product-price" class="card-text">R$${parseFloat(product.price).toFixed(2).toString().replace('.', ',')}</p>
                <p id="product-carbs" class="card-text">${product.carbs}</p>
                <p id="product-cat" class="card-text">${product.cat}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>`;
    }
}

// const duplicateVerifier = [new Set(products.map(x => x.name))]; 
// console.log(duplicateVerifier); 


// function cleanForm() {
//     document.querySelectorAll('.myform').forEach(i => {
//         i.value = '';
//     })
// }

// function removeDuplicates(){
//     for (product in products) {
//       if (products.name !== products.name){
//         return true
//       } else{
//         return false
//       }
//     }
      
// }

// function resgistry (){
//     var product = {Model : '#product', Brand : '#brand', Price : '#price', Carbs : "#carbs", Category : '#category', Image: '#img'};

//     document.getElementById('#product-name').value(product.Model);
//     document.getElementById('#product-brand').value(product.Model);
//     document.getElementById('#product-price').value(product.Model);
//     document.getElementById('#product-carbs').value(product.Model);
//     document.getElementById('#product-cat').value(product.Model);
// }


