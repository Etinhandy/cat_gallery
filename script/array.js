let cat_images = [
    {
        name: 'Siamese cat',
        pic: 'Siamese_cat.png',
        description: 'Hybrid Siamese cat',
        price: '$69'
    },
    {
        name: 'Munchkin cat',
        pic: 'Munchkin_cat.jpg',
        description: 'Crossbreed Siamese cat',
        price: '$169'
    },
    {
        name: 'Scottish fold cat',
        pic: 'scottish-fold-cat.jpg',
        description: 'A homely cat ',
        price: '$99'
    },
    {
        name: 'Garfield',
        pic: 'brown_cat.jpg',
        description: 'Family cat',
        price: '$559'
    },
    {
        name: 'Travel cat',
        pic: 'kitty_basket.jpg',
        description: 'The best of Norway cat cat',
        price: '$269'
    },
    {
        name: 'Ragdoll',
        pic: 'Ragdoll_kitten.jpg',
        description: 'A white british cat',
        price: '$469'
    },
    {
        name: 'Norwegian forest cat',
        pic: 'norwegian_forest_cat.jpg',
        description: 'Hybrid  cat',
        price: '$669'
    },
    {
        name: 'Puff white cat',
        pic: 'puff_cat.jpg',
        description: 'The puff white cat is a unique cat',
        price: '$639'
    },
    {
        name: 'Hi playful cat',
        pic: 'hi.jpg',
        description: 'Hybrid Siamese cat',
        price: '$669'
    },
    {
        name: 'Cool cat',
        pic: 'cool_cat.jpg',
        description: 'As cool as ice',
        price: '$679'
    },
    {
        name: 'Norway guard cat',
        pic: 'Norwegian_guard_cat-2.jpg',
        description: 'Hybrid Siamese cat',
        price: '$669'
    },
    {
        name: 'Green cat',
        pic: 'green.jpg',
        description: 'A field cat',
        price: '$669'
    }
]
console.log(cat_images);


let catSection = document.getElementById('cat_matter');
let html = '';
cat_images.forEach(e => {
    html += `
    <div class="col-sm-12 col-md-4 col-lg-4">
    <div class="card" style="width: 18rem;">
        <img src="./images/${e.pic}" class="card-img-top pic img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title name">${e.name}</h5>
          <p class="card-text description">${e.description}</p>
          <p class="price">${e.price}</p>
          <a href="#" class="btn btn-primary">More pics</a>
        </div>
    </div>
</div>
    
    `
    console.log(e)
    catSection.innerHTML = html
})