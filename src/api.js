export { CHARACTERS, getCharacters };
const CHARACTERS = [
  'https://swapi.co/api/people/?page=1',
  'https://swapi.co/api/people/?page=2',
  'https://swapi.co/api/people/?page=3',
  'https://swapi.co/api/people/?page=4',
  'https://swapi.co/api/people/?page=5',
  'https://swapi.co/api/people/?page=6',
  'https://swapi.co/api/people/?page=7',
  'https://swapi.co/api/people/?page=8',
  'https://swapi.co/api/people/?page=9'
];

function checkStatus(response) {
  response.status === 200
    ? console.log('Successful request!')
    : console.error(`Oops, we get a ${response.status} error`);
  return response.json();
}

const getCharacters = url => {
  Promise.all(
    CHARACTERS.map(
      charactersUrl => fetch(charactersUrl).then(checkStatus)
      //
    )
  )
    .then(pages => {
      const allCharacters = [];
      pages.forEach(page => {
        allCharacters.push(...page.results);
      });
      return allCharacters;
    })
    .then(characters => process(characters));
};

function process(characters) {
  console.log(characters);
}
