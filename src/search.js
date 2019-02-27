var App = App || {};

App.Search = (function(){
  function go(query) {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    const client = `https://itunes.apple.com/search?term=${query}&entity=album`;
    return fetch(`${cors}${client}`);
  }

  return {
    go,
  }
}());
