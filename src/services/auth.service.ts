export interface User {
  name: string;
  lastname: string;
  birthDate: string;
  email: string;
  password: string;
}

const USER_KEY = 'user';
const CURRENT_USER_KEY = 'currentUser';
const AUTH_KEY = 'isAuthenticated';

export const registerUser = (user: User) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const loginUser = (email: string, password: string) => {
  const savedUser = localStorage.getItem(USER_KEY);
  if (!savedUser) return false;
  const user = JSON.parse(savedUser);
  const isValid = email === user.email && password === user.password;
  if (!isValid) return false;
  localStorage.setItem(AUTH_KEY, 'true');
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  return true;
};

export const logoutUser = () => {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return localStorage.getItem(AUTH_KEY) === 'true';
};
