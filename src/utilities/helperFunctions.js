export const getLocalToken = () => {
  return localStorage.getItem('token');
};

export const removeLocalToken = () => {
  localStorage.removeItem('token');
};

export const setLocalToken = (val) => {
  localStorage.setItem('token', val);
};

export const getLocalUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const removeLocalUser = () => {
  localStorage.removeItem('user');
};

export const setLocalUser = (val) => {
  localStorage.setItem('user', JSON.stringify(val));
};
