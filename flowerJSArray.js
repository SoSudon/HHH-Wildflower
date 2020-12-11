const main = document.querySelector('main');
let html = ''
html +=`
<div class="list clearfix">
`;

for ( let i = 0; i < flowers.length; i++ ) {
    let flower = flowers[i];
    html += `
        <div class="item">   
            <img class="flower-img" src="${flower.photo}" alt="${flower.commonName}">      
            <h3>Name: ${flower.name}</h3>
            <h3>Common Name: ${flower.commonName}</h3>
            <p>Bloom Time: ${flower.bloomTime}</p>
            </div>
    `;
}

html +=`
</div>
`;

main.insertAdjacentHTML('beforeend', html);