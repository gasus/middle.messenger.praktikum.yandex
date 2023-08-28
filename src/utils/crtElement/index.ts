type Props<T> = {
  tag: T;
  cls?: string;
  text?: string;
};

type Tags = "div" | "button" | "label" | "input" | "form";

export const crtElement: <T extends Tags>(
  props: Props<T>
) => HTMLElementTagNameMap[T] = ({ tag, cls, text }) => {
  const element = document.createElement(tag);
  if (cls) element.className = cls;
  if (text) element.textContent = text;

  return element;
};
