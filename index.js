// fetch(destinationURL, configurationObject);

// "Content-Type" is used to indicate what format the data being sent is in.
// body: needs to be a string we need to use converter JSON.stringify()

// fetch('http://localhost:3000/dogs', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
//   body: JSON.stringify({
//     dogName: 'Byron',
//     dogBreed: 'Poodle',
//   }),
// });

// let formData = {
//   dogName: 'Byron',
//   dogBreed: 'Poodle',
// };

// let configObj = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
//   body: JSON.stringify(formData),
// };

// fetch('http://localhost:3000/dogs', configObj)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert('YIKES!');
//     console.log(error.message);
//   });

function submitData(name, email) {
  return (
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      // JavaScript comes with a built in method for converting objects to strings, JSON.stringify().
      // By passing an object in, JSON.stringify() will return a string, formatted and ready to send in our request:
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
      // Notice that the first then() is passed a callback function that takes in response as an argument.
      // This is a [Response][response] object, representing what the destination server sent back to us.
      // This object has a built in method, json(), that converts the body of the response from JSON to
      // a plain old JavaScript object. The result of json() is returned and made available in the second then().
      // In this example, whatever response.json() returns will be logged in console.log(object).
      // when the request is successfully resolved we get the response with the object and id
      //The JSON server is sending back the data we sent, along with a new piece of data, an id, created by the server.
      // {dogName: "Byron", dogBreed: "Poodle", id: 6} // Your ID will vary depending

      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        document.body.innerHTML = object.id;
      })
      .catch(function (error) {
        document.body.innerHTML = error.message;
      })
  );
}
