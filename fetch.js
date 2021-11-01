var h1Date = document.getElementById("hi1");

// h1Date.innerHTML


fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then(json => {
    let stjson = (JSON.stringify(json));
    h1Date.innerHTML = (stjson);
})
    


