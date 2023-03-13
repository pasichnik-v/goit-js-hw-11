export { fetchCountries };


  function fetchCountries(name) {
return fetch(`https://pixabay.com/api/`, options)
  .then(response => response.json())