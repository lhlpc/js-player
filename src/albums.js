var App = App || {};

App.Albums = (function(){

  function init(item) {
    const { results } = item;
    const content = document.querySelector('.content');
    results.forEach(item => {
      content.innerHTML += render(item);
    });
  }

  function render(item) {
    return `<div class="cover">
      <div class="cover__img">
        <img src='${item.artworkUrl100}' />
      </div>
      <div class="cover__description">
        <p class="cover__description--year">${item.releaseDate}</p>
        <p class="cover__description--title">${item.collectionName}</p>
      </div>
    </div>`;
  }

  return {
    init,
  }
}());
