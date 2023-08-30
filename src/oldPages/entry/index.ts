// import { app } from "../../main";
import { EntryPageProps } from "types/EntryPageProps";
import { getLoginPage } from "./login";
import { getRegistrationPage } from "./registration";

export const renderEntry = ({ entryView }: EntryPageProps) => {
  const app = document.createElement("div");
  // app.innerHTML = "";

  if (entryView === "registration") {
    getRegistrationPage({ element: app, changeTabHandler: renderEntry });
  } else if (entryView === "login") {
    getLoginPage({ element: app, changeTabHandler: renderEntry });
  }
};
