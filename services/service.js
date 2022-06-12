import { BehaviorSubject } from "rxjs";
import Router from "next/router";
import { BASE_URL, TOKEN_PATH } from "../api/login";

import { contentCover } from "../helpers/contentCover";

const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem("user"))
);

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  getAll,
};

function login(username, password) {
  return contentCover
    .post(`${BASE_URL}/${TOKEN_PATH}`, { username, password })
    .then((user) => {
      userSubject.next(user);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("TOKEN", user);
      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/login");
}

function getAll() {
  return contentCover.get(baseUrl);
}
