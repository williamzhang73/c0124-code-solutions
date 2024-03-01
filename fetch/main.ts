const request = new Request('https://jsonplaceholder.typicode.com/users');

fetch(request)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`code status: ${response.status}`);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    throw new Error(error);
  });

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`code status: ${response.status}`);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    throw new Error(error);
  });
