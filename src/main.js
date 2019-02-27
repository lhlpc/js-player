'use strict';
(function(){
  const action = document.getElementById('action');
  const search = document.getElementById('search');

  const previous = document.getElementById('p-previous');
  const next = document.getElementById('p-next');

  previous.addEventListener('click', () => App.Paginator.previous())
  next.addEventListener('click', () => App.Paginator.next())

  action.addEventListener('click', () => {
    App.Search.go(search.value)
    .then( response => response.json())
    .then(App.Albums.init);
  })

}());
