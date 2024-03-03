async function fetchUsers(): Promise<void> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log('Users: ', data);
}

async function fetchPokemon(): Promise<void> {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log('Pokemon: ', data);
}

async function fetchAll(): Promise<void> {
  try {
    await fetchUsers();
    await fetchPokemon();
  } catch (error) {
    throw new Error('fetch data error.');
  }
}

fetchAll();
