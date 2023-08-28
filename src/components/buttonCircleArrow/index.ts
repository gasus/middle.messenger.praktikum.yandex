import { crtElement } from "utils/crtElement";
import "./style.less";

type Props = {
  element: HTMLElement;
  destination: "right" | "left";
  onClick: () => void;
};

const addButtonCircleArrow = ({ element, destination, onClick }: Props) => {
  const button = crtElement({
    tag: "button",
    cls: `button-circle-arrow button-circle-arrow-${destination}`,
    text: "➔",
  });

  button.addEventListener("click", () => {
    onClick();
  });

  element.appendChild(button);
};

export default addButtonCircleArrow;
