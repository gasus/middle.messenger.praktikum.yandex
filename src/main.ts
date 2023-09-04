import Handlebars from "handlebars";
import * as Components from "components/index";
import * as Pages from "pages/index";
import { PageTypes } from "types/PageTypes";
import "./style.less";

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

const pageArgs: { [key in PageTypes]: any } = {
  login: {
    title: "Вход",
    inputs: [
      { label: "Логин", name: "login", type: "text" },
      { label: "Пароль", name: "password", type: "password" },
    ],
    buttons: [
      { label: "Авторизоваться", className: "button-blue-white" },
      { label: "Нет аккаунта?", className: "button-white-blue" },
    ],
  },
  registration: {
    title: "Регистрация",
    inputs: [
      { label: "Почта", name: "email", type: "text" },
      { label: "Логин", name: "login", type: "text" },
      { label: "Имя", name: "first_name", type: "text" },
      { label: "Фамилия", name: "second_name", type: "text" },
      { label: "Телефон", name: "phone", type: "text" },
      { label: "Пароль", name: "password", type: "password" },
      { label: "Пароль (еще раз)", name: "password", type: "password" },
    ],
    buttons: [
      { label: "Зарегистрироваться", className: "button-blue-white" },
      { label: "Войти", className: "button-white-blue" },
    ],
  },
  error404: {
    errorInfo: {
      errorNumber: "404",
      errorText: "Запрашиваемой страницы не существует, как и смысла в жизни",
    },
  },
  error500: {
    errorInfo: {
      errorNumber: "500",
      errorText: "Ошибка, всякое могло произойти",
    },
  },
  chat: {},
  profile: {},
  profileInfoEdit: {},
  profilePasswordEdit: {},
};

const pages: { [key in PageTypes]: any } = {
  login: [Pages.EntryPage],
  registration: [Pages.EntryPage],
  error404: [Pages.ErrorPage],
  error500: [Pages.ErrorPage],
  chat: [],
  profile: [],
  profileInfoEdit: [],
  profilePasswordEdit: [],
};

const navigate = (page: PageTypes) => {
  const [source, _] = pages[page];
  const args = pageArgs[page];
  document.body.innerHTML = Handlebars.compile(source)(args);
};

document.addEventListener("DOMContentLoaded", () => navigate("error500"));
