//submitData takes 2 strings arguments
//A user's name & a user's email
function submitData(name, email){

 let configObj = {
   // HTTP verb: POST
 method: "POST",
   //Headers stating the type of data we will send & accept
   // Set to 'application/json'
 headers: {
  "Content-Type": "application/json",
  "Accept": "application/json"
 },
    //A body with the name and email passed in as arguments to submitData
    //Assigned to name and email keys in a stringified object

    //Data submitted by the user that the fetch() is sending 
    //in string form to persist to the database
 body: JSON.stringify({
    "name": name,
    "email": email
 })
 }

// POST request to http://localhost:3000/users via fetch()
return fetch("http://localhost:3000/users", configObj)

// Use a .then() call to access the Response object 
// Parse the contents via .json()
.then(function(resp){return resp.json() })

//Use a 2nd .then() to access this newly converted JS response object
//From this object, find the new id and append this value to the DOM

//Calling submitData() in the dev tools console 
//should causes an id number to appear on the page
.then(function(jsObject) {
document.body.innerHTML = jsObject["id"]
})

//Receive an object on error with a property
//Append a message to the DOM when catch() is called
.catch(function(errorObject){
    document.body.innerHTML = errorObject.message
})
}
