import '../component/movie-list.js'
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = async () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');

  const renderResult = results => {
    movieListElement.movies = results;
  };

  const fallbackResult = message => {
    movieListElement.renderError(message);
  };

  try {
    const defaultMovieList = await DataSource.movieList();
    renderResult(defaultMovieList);
  } catch (message) {
    fallbackResult(message);
  }

  const onButtonSearchClicked = async ()=> {
    try{
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result)
    }catch(message){
      fallbackResult(message);
    }
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
