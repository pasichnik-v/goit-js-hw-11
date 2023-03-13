//  робимо імпорт
// import './css/styles.css';
// import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
import axios from 'axios';

console.log(axios.isCancel('something'));


// <div class="photo-card">
//   <img src="" alt="" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//     </p>
//   </div>
// </div>


// //  створюємо змінні
// const DEBOUNCE_DELAY = 300;
// const seachCountries = document.querySelector('input#search-box');
// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');

    
// // виклик слухача: дії при введенні тексту в інпут
// seachCountries.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

// // функція пошуку
// function onSearch(e) {
//   // e.preventDefault();
//   const name = e.target.value.trim();
//   countryInfo.innerHTML = '';
//   countryList.innerHTML = '';
//   if (!name) {
//     return;
//   }

//   fetchCountries(name)

//     .then(countries => {
//       if (countries.length > 10) {
//         return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
//       }
//       showCountryInfo(countries);
//     })
//   .catch (error => Notiflix.Notify.failure('Oops, there is no country with that name'));
// }

// // 
// function showCountryInfo(countries) {
  
//   countries.sort(sortCountriesByName);

//   if (countries.length === 1) {
//     renderCountryInfo(countries);
//   } else {
//   renderCountryList(countries);  
//   }
  
// }
// // Сортування країн 
// function sortCountriesByName(a, b) {
//   if (a.name.official < b.name.official) {
//     return -1;
//   } else {
//     return 1;
//   }
// }
// // Створення списку країн
// function renderCountryList(countries) {

// const markup = countries.map(({ name, flags }) => {
//   return `<li class="country-list__item">
//   <img class="country-list__flag" src="${flags.svg}" alt="${flags.alt}" width= 30px height = auto>
  
//   <p class="country-list__name">${name.official}</p>
  
// </li>`;
// }).join('');
//   countryList.innerHTML = markup;
// }
// // Повна інформація по вибраній країні
// function renderCountryInfo(countries) {
//   // const lan = ${fifa}.toLowerCase()
//   const markup = countries.map(({ name, flags, capital, population, languages }) => {
//     return `<li class="country-info__item">
//       <img class="country-list__flag" src="${flags.svg}" alt="${flags.alt}" width= auto height ="30">
// <h1 class="country-list__name">${name.official}</h1>
//     </li>
//     <li class="country-info__item"><b>Capital:&nbsp;</b> ${capital}</li>
//     <li class="country-info__item"><b>Population:&nbsp;</b> ${population}</li>
//     <li class="country-info__item"><b>Languages:&nbsp;</b> ${Object.values(languages)}</li>`;
//   }).join('');
//   countryInfo.innerHTML = markup;
// }

