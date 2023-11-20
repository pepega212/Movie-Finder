class MovieItem extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: "open" });
    }
  
    set movie(movie) {
      this._movie = movie;
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
  
          :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 4px 4px 0px 0.2px #b671fc;
            border: 2px solid #b671fc;
            border-radius: 10px;
            overflow: hidden;
            background-color: #fff;
          }
  
          .backdrop-movie {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
          }
  
          .movie-info {
            padding: 24px;
          }
  
          .movie-info > h2 {
            font-weight: 500;
          }
  
          .movie-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
          }
        </style>
  
        <img class="backdrop-movie" src="${process.env.ORIGINALIMGURL}/${this._movie.backdrop_path}" alt="Movie Poster" loading="lazy">
        <div class="movie-info">
          <h2>${this._movie.title}</h2>
          <p>${this._movie.overview}</p>
          <p>release: ${this._movie.release_date}</p>
        </div>
      `;
    }
  }
  
  customElements.define("movie-item", MovieItem);