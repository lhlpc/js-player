var App = App || {};

App.Paginator = (function(){

  function previous() {
    console.log('previous')
  }

  function next() {
    console.log('next')
  }

  return {
    previous,
    next,
  }
}());
