// Add your code here
const body = document.querySelector('body')

function submitData () {
   return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        })
        })
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
        const p = document.createElement('p');
        p.innerHTML = object.id;
        body.appendChild(p);
    })
    .catch(function (error) {
        alert("Unauthorized Access");
        console.log(error.message);
        const p = document.createElement('p');
        p.innerHTML = error.message;
        body.appendChild(p);
    });

}