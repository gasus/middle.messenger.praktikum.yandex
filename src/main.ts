import { renderEntry } from "./pages/entry";
import { renderProfile } from "./pages/profile";
import { renderError404 } from "./pages/error404";
import { renderError500 } from "./pages/error500";
import { renderChat } from "./pages/chat";
import "./style.less";

export const app = document.querySelector<HTMLElement>("#app")!;

const renderPage = () => {
  const path = window.location.search;

  switch (path) {
    case "":
    case "?page=login":
      renderEntry({ entryView: "login" });
      break;
    case "?page=chat":
      renderChat();
      break;
    case "?page=profile":
      renderProfile({ profileView: "main" });
      break;
    case "?page=500":
      renderError500();
      break;
    default:
      renderError404();
      break;
  }
};

renderPage();
