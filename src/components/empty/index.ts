import { crtElement } from "utils/crtElement";
import "./style.less";

export const empty = (text?: string) =>
  crtElement({
    tag: "div",
    cls: "empty-block",
    text: text || "Пусто",
  });
