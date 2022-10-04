let giveCatButton = document.getElementById('give-cat')

giveCatButton.addEventListener("click", evt => {
    let catDiv = document.getElementById('cat-pic')

    fetch("https://api.thecatapi.com/v1/images/search?")
    .then(res => res.json())
    .then(cats => {
        cats.forEach(cat => {
            catDiv.innerHTML = `<h3>Here is this cat! </h3>
            <img src="${cat.url}" alt="kitty" />`
        })
    })
})