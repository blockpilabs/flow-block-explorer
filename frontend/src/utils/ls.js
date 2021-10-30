import { isEmpty } from './isEmpty';

export const ls = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  fetch(key) {
    return !isEmpty(localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : undefined;
  },
  clear(key) {
    if (key) {
      localStorage.removeItem(key);
    } else {
      localStorage.clear();
    }
  },
  saveSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  fetchSession(key) {
    return !isEmpty(sessionStorage.getItem(key)) ? JSON.parse(sessionStorage.getItem(key)) : undefined;
  },
  clearSession(key) {
    if (key) {
      sessionStorage.removeItem(key);
    } else {
      sessionStorage.clear();
    }
  }
};
