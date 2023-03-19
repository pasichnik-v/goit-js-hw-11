//  робимо імпорт
import './css/styles.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import NewsApiService from './api-service';
import Notiflix from 'notiflix';



// //  створюємо змінні
const searchForm = document.querySelector('.search-form');
const galleryForm = document.querySelector('div.gallery');

const loadMoreBtn = document.querySelector('.load-more');
loadMoreBtn.style.display = 'none';

const newsApiService = new NewsApiService();
let lightbox;

// Слухачі
searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

// Функція пошук
function onSearch(e) {
  e.preventDefault();
  clearGallery();
  newsApiService.query = e.currentTarget.elements.searchQuery.value;
    newsApiService.resetPage();
    
  newsApiService.fetchArticles()
    .then(({ hits, totalHits }) => {
      if (hits.length === 0) {
     loadMoreBtn.style.display = 'none';

    Notiflix.Notify.warning("Sorry, there are no images matching your search query. Please try again.");
    } if (hits.length > 0) {
     loadMoreBtn.style.display = 'flex';
     Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
      renderGallery({ hits });
      lightbox.refresh();
    }
  })
   .catch(onFetchError);
}


// Функція показати ще
function onLoadMore(e) {
  e.preventDefault();
  newsApiService.fetchArticles()
    .then(({ hits, totalHits }) => {
    let showHitsLenght = Number(document.querySelector('.gallery').childElementCount) + hits.length;
    if (showHitsLenght < totalHits) {
      // console.log(totalHits);
      // console.log(showHitsLenght);
      renderGallery({ hits });
      lightbox.refresh();
      
    } else {
      Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
      loadMoreBtn.style.display = 'none';
    }
    
    })
  .catch(onFetchError);
}
//  Рендер
function renderGallery({ hits }) {
  const galleryMarkup = createGalleryMarkup({ hits });
  galleryForm.insertAdjacentHTML('beforeend', galleryMarkup);
  if (!lightbox) {
lightbox = new SimpleLightbox('.gallery .gallery__item', {
captionsData: 'alt',
captionPosition: 'bottom',
captionDelay: 250,
});
}
  
}

// Створення карток
function createGalleryMarkup({ hits }) {
   return hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return `     
      <div class="photo-card">
          <a class="gallery__item" href="${largeImageURL}">
              <img src="${webformatURL}" alt="${tags}" loading="lazy" width="320px" height="210px"/>
          </a>
          <div class="info">
              <p class="info-item">
                  <b>Likes</b><br/>${likes}
              </p>
              <p class="info-item">
                  <b>Views</b><br/>${views}
              </p>
              <p class="info-item">
                  <b>Comments</b><br/>${comments}
              </p>
              <p class="info-item">
                  <b>Downloads</b><br/>${downloads}
              </p>
          </div>
      </div>`;
   }).join('');
}
// Очищення галереї
function clearGallery() {
    galleryForm.innerHTML = '';
};
// Повідомлення для catch  
function onFetchError(error) {
  Notiflix.Notify.warning(error.message);
};