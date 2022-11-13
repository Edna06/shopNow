
function createCard(imageName, description, value) {
return `<div class='card'>
    <img src="./assets/products/product-${imageName}.png" alt="imagem de óleo corporal">

    <p>${description}</p>
    <h4>R$<span>${value}</span></h4>
</div>
`
}

const products = document.querySelector('.productsOnSale').innerHTML = createCard('01', 'Óleo corporal vegano', "50,00") + 
createCard('02', 'Sabonete esfoliante', "50,00") +
createCard('03', 'Produtos para o cabelo', "50,00") +
createCard('04', 'Sabonete <br> anti envelhecimento', "50,00") +
createCard('05', 'Perfumes', "50,00") +
createCard('06', 'Sabonetes artesanais <br> hidratantes', "50,00") +
createCard('07', 'Óleo natural', "50,00") +
createCard('08', 'Sabonetes veganos', "50,00") +
createCard('09', 'Spray clareador', "50,00")
