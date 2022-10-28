let giveCatButton = document.getElementById('give-cat')

giveCatButton.addEventListener("click", _ => {
    let url = "https://api.thecatapi.com/v1/images/search?"
    if (document.getElementById("custom-api").value) {
        url = document.getElementById("custom-api").value
    }
    fetch(url)
    .then((res) => res.json())
    .then((cat) => {
        let c = document.getElementById("cat")
        c.src = cat[0].url
        c.hidden = false
    })
})