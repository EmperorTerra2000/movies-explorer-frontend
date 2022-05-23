class MainApi {
  constructor(options) {
    this.url = options.url;
    this.headers = options.headers;
  }

  _handleResponse(res) {
    if (!res.ok) Promise.reject(`Ошибка: ${res.status}`);
    return res.json();
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
    }).then(this._handleResponse);
  }

  deleteMovie(id) {
    return fetch(`${this.url}/movies/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this._handleResponse);
  }

  addMovie(card) {
    return fetch(`${this.url}/movies`, {
      method: 'POST',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: card.country || 'Пусто',
        director: card.director || 'Пусто',
        duration: String(card.duration) || 'Пусто',
        year: card.year || 'Пусто',
        description: card.description || 'Пусто',
        image:
          `https://api.nomoreparties.co/${card.image.url}` ||
          'https://sun9-53.userapi.com/impg/6XKSadOO3Ar3dTxRYKRU2xHsqPIqcmDqaNvy_g/IO1i27c6HOg.jpg?size=1280x720&quality=96&sign=ffd766ccada4f21e26cd83f3f53bc5ea&c_uniq_tag=qlI11KjfCJEZ039eLMaOh1S36J5zcpAm6S7vg94RWxk&type=album',
        trailerLink:
          card.trailerLink ||
          'https://sun9-53.userapi.com/impg/6XKSadOO3Ar3dTxRYKRU2xHsqPIqcmDqaNvy_g/IO1i27c6HOg.jpg?size=1280x720&quality=96&sign=ffd766ccada4f21e26cd83f3f53bc5ea&c_uniq_tag=qlI11KjfCJEZ039eLMaOh1S36J5zcpAm6S7vg94RWxk&type=album',
        nameRU: card.nameRU || 'Пусто',
        nameEN: card.nameEN || 'Пусто',
        thumbnail:
          `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}` ||
          'https://sun9-53.userapi.com/impg/6XKSadOO3Ar3dTxRYKRU2xHsqPIqcmDqaNvy_g/IO1i27c6HOg.jpg?size=1280x720&quality=96&sign=ffd766ccada4f21e26cd83f3f53bc5ea&c_uniq_tag=qlI11KjfCJEZ039eLMaOh1S36J5zcpAm6S7vg94RWxk&type=album',
        movieId: card.id,
      }),
    }).then(this._handleResponse);
  }

  getSavedMovies() {
    return fetch(`${this.url}/movies`, {
      headers: this.headers,
    }).then(this._handleResponse);
  }

  changeInfoMe(data) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this.headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(this._handleResponse);
  }
}

export default MainApi;
