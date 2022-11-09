
//---------------------Esecuzione esercizio------------------------


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => data.map((newObj) => console.log("Name: " + newObj.name, "\n", "Address: " + Object.values(newObj.address), "\n", "City: " + newObj.address.city )))
.catch((err) => console.log("error:" + err))

<<<<<<< HEAD

=======
>>>>>>> d0f5269fa185bf02d203ec74862d2259936bd79f
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data2) => data2.map((todos) => console.log("ID:" + todos.id, "\n", "Title" + todos.title)))
  .catch((err) => console.log("error:" + err))

