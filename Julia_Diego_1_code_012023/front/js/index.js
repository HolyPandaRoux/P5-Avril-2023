

/* Fetching the data from the API and then it is displaying it in the console. */
fetch  ("http://localhost:3000/api/products")
.then(response => response.json())
.then((ProductsTable) => {
    allItems(ProductsTable);
})

/* function that will display an error message if the fetch fails. */
.catch((error) => {
document.querySelector(".titles").innerHTML = "<h3> erreur 404 failed to get data from API check console log</h3>";
});


/* Creating a function that will display all the items in the index. */
function allItems(index) {// https://chartio.com/learn/databases/how-does-indexing-work/
    for (let article of index) {
        const elem = document.querySelector("#items");
        let htmlIndex = 
                `
            <a href="./product.html?_id=${article._id}">
                <article>
                    <img src="${article.imageUrl}" alt="${article.altTxt}">
                    <h3  class="productName">${article.name}</h3>
                    <p   class="productDescription">${article.description}                                       
                    </p>
                </article>
            </a>
        `
        elem.insertAdjacentHTML("beforeend", htmlIndex);     
    }
}