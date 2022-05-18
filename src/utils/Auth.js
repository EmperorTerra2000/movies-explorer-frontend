export const BASE_URL = 'https://api.movies.students.nomoredomains.xyz';

const _handleResponse = (endPiont, dataUser) => {
  return fetch(`${BASE_URL}/${endPiont}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataUser),
  }).then((res) => {
    if (!res.ok) return Promise.reject(`Ошибка: ${res.status}`);
    return res.json();
  });
};

export const register = (name, email, password) => {
  return _handleResponse('signup', { name, email, password });
};

export const authorization = (email, password) => {
  return _handleResponse('signin', { email, password }).then((data) => {
    if (data.token) {
      return data;
    } else return;
  });
};

//передача токена из локалсторадж на сервер с тем, чтобы проверить на их соответствие
export function getContent(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (!res.ok) return Promise.reject(`Ошибка: ${res.status}`);
    return res.json();
  });
}
