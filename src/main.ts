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
      { label: "Авторизоваться", className: "blue-white" },
      { label: "Нет аккаунта?", className: "white-blue" },
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
      { label: "Зарегистрироваться", className: "blue-white" },
      { label: "Войти", className: "white-blue" },
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
  profile: {
    userName: "Пользователь",
    inputs: [
      {
        label: "Почта",
        name: "email",
        type: "text",
        value: "",
        disabled: true,
      },
      {
        label: "Логин",
        name: "login",
        type: "text",
        value: "",
        disabled: true,
      },
      {
        label: "Имя",
        name: "first_name",
        type: "text",
        value: "",
        disabled: true,
      },
      {
        label: "Фамилия",
        name: "second_name",
        type: "text",
        value: "",
        disabled: true,
      },
      {
        label: "Имя в чате",
        name: "display_name",
        type: "text",
        value: "",
        disabled: true,
      },
      {
        label: "Телефон",
        name: "phone",
        type: "text",
        value: "",
        disabled: true,
      },
    ],
    buttons: [
      { label: "Изменить данные", className: "white-blue" },
      { label: "Изменить пароль", className: "white-blue" },
      { label: "Выйти", className: "white-red" },
    ],
  },
  profileInfoEdit: {
    userName: "Пользователь",
    inputs: [
      {
        label: "Почта",
        name: "email",
        type: "text",
        value: "",
      },
      {
        label: "Логин",
        name: "login",
        type: "text",
        value: "",
      },
      {
        label: "Имя",
        name: "first_name",
        type: "text",
        value: "",
      },
      {
        label: "Фамилия",
        name: "second_name",
        type: "text",
        value: "",
      },
      {
        label: "Имя в чате",
        name: "display_name",
        type: "text",
        value: "",
      },
      {
        label: "Телефон",
        name: "phone",
        type: "text",
        value: "",
      },
    ],
    buttons: [{ label: "Сохранить", className: "blue-white" }],
  },
  profilePasswordEdit: {
    userName: "Пользователь",
    inputs: [
      {
        label: "Старый пароль",
        name: "oldPassword",
        type: "password",
      },
      {
        label: "Новый пароль",
        name: "newPassword",
        type: "password",
      },
      {
        label: "Повторите новый пароль",
        name: "newPassword",
        type: "password",
      },
    ],
    buttons: [{ label: "Сохранить", className: "blue-white" }],
  },
};

const pages: { [key in PageTypes]: any } = {
  login: [Pages.EntryPage],
  registration: [Pages.EntryPage],
  error404: [Pages.ErrorPage],
  error500: [Pages.ErrorPage],
  chat: [],
  profile: [Pages.ProfilePage],
  profileInfoEdit: [Pages.ProfilePage],
  profilePasswordEdit: [Pages.ProfilePage],
};

const navigate = (page: PageTypes) => {
  const [source, _] = pages[page];
  const args = pageArgs[page];
  document.body.innerHTML = Handlebars.compile(source)(args);
};

document.addEventListener("DOMContentLoaded", () =>
  navigate("profilePasswordEdit")
);
