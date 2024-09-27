const baseURL = "http://localhost:6001/v1/api";

export const get = (url) => {
  return fetch(`${baseURL}/${url}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
};

export const post = (url, body) => {
  return fetch(`${baseURL}/${url}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const put = (url, body) => {
  return fetch(`${baseURL}/${url}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const remove = (url) => {
  return fetch(`${baseURL}/${url}`, {
    method: "DELETE",
  });
};
