export { ENDPOINT, getFilms };

const ENDPOINT = 'https://swapi.co/api/films';

function checkStatus(response) {
  response.status === 200
    ? console.log('Successful request!')
    : console.error(`Oops, we get a ${response.status} error`);
  return response.json();
}

function getFilms(url) {
  return fetch(url)
    .then(checkStatus)
    .then(json => console.log(json));
}
