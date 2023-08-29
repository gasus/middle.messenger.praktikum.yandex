import { crtElement } from "utils/crtElement";
import "./style.less";

type Props = {
  element: HTMLElement;
  label: string;
  classType: "blue-white" | "white-blue" | "white-red" | "white-gray";
  withoutMargin?: boolean;
  onClick?: () => void;
};

export const customButton = ({
  element,
  label,
  classType,
  withoutMargin,
  onClick,
}: Props) => {
  const withoutMarginClass = withoutMargin
    ? "button-without-margin"
    : undefined;
  const className = `button button-${classType} ${withoutMarginClass}`;
  const button = crtElement({ tag: "button", cls: className, text: label });

  button.addEventListener("click", () => {
    onClick?.();
  });

  element.appendChild(button);
};
