import { errorInfo } from "oldComponents/errorInfo";
// import { app } from "../../main";

export const renderError404 = () => {
  const error = errorInfo({
    number: "404",
    description: "Запрашиваемой страницы не существует, как и смысла в жизни",
  });
  const app = document.createElement("div");

  app.innerHTML = "";
  app.appendChild(error);
};
