import { errorInfo } from "oldComponents/errorInfo";
import { app } from "../../main";

export const renderError500 = () => {
  const error = errorInfo({
    number: "500",
    description: "Ошибка, всякое могло произойти",
  });

  app.innerHTML = "";
  app.appendChild(error);
};
