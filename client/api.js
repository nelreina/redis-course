const API = 'http://localhost:9000/api';
const name = 'API Fetch Error';

const respError = resp => ({
  name,
  message: `${resp.status} - ${resp.statusText}`
});

export const get = async path => {
  const resp = await fetch(`${API}${path}`);
  console.info(resp);
  if (resp.ok) {
    return resp.json();
  } else {
    throw respError(resp);
  }
};

export const post = async (path, data) => {
  const postOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  };
  console.info(postOptions);
  const resp = await fetch(`${API}${path}`, postOptions);
  console.info(resp);
  if (resp.ok) {
    return resp.json();
  } else {
    throw respError(resp);
  }
};
