class MoviesApi {
  constructor(options) {
    this.url = options.url;
  }

  getMovies() {
    return fetch(this.url, {
      method: 'GET',
    }).then((res) => res.json());
  }
}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;
