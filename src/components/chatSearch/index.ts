import { crtElement } from "utils/crtElement";
import "./style.less";

type Props = {
  searchChats: (value?: string) => void;
};

export const chatSearch = ({ searchChats }: Props) => {
  const wrapper = crtElement({ tag: "div", cls: "chat-search-wrapper" });

  const search = crtElement({ tag: "input", cls: "chat-search" });
  search.placeholder = "Поиск";

  search.addEventListener("input", () => {
    searchChats(search.value);
  });

  wrapper.appendChild(search);

  return wrapper;
};
