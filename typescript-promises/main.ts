import { takeAChance } from './take-a-chance.js';
takeAChance('William')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
