'use strict';
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log('Users: ', data);
}
async function fetchPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log('Pokemon: ', data);
}
try {
  fetchUsers();
  fetchPokemon();
} catch (error) {
  throw new Error('fetch data error.');
}
