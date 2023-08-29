import Handlebars from "handlebars";
import * as Components from "components/index";
import * as Pages from "pages/index";
import { PageTypes } from "types/PageTypes";
import "./style.less";

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

const pages: { [key in PageTypes]: any } = {
  login: [Pages.LoginPage],
  registration: [Pages.RegistrationPage],
  error404: [Pages.Error404Page],
  error500: [Pages.Error500Page],
  chat: [],
  profile: [],
  profileInfoEdit: [],
  profilePasswordEdit: [],
};

const navigate = (page: PageTypes) => {
  const [source, args] = pages[page];
  document.body.innerHTML = Handlebars.compile(source)(args);
};

document.addEventListener("DOMContentLoaded", () => navigate("registration"));
