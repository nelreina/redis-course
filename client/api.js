const API = 'http://localhost:9000/api';
const name = 'API Fetch Error';
export const get = async path => {
  const resp = await fetch(`${API}${path}`);
  console.info(resp);
  if (resp.ok) {
    return resp.json();
  } else {
    throw {
      name,
      message: `${resp.status} - ${resp.statusText}`
    };
  }
};
