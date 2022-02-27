const { REACT_APP_PREFIX_STORAGE } = process.env;
const createName = (name: string) => `${REACT_APP_PREFIX_STORAGE}@${name}`;

export const getLocalStorage = (key: string) => {
  const stored = localStorage.getItem(createName(key)) as string;

  try {
    return JSON.parse(stored);
  } catch (e) {
    return stored;
  }
};

export const setLocalStorage = (key: string, value: string | object) => {
  const parsed = typeof value === 'object' ? JSON.stringify(value) : value;
  localStorage.setItem(createName(key), parsed);
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(createName(key));
};
