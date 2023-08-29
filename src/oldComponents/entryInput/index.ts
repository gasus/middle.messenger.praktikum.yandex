import { InputData } from "types/InputData";
import "./style.less";
import { crtElement } from "utils/crtElement";

type Props = InputData & {
  element: HTMLElement;
};

export const entryInput = ({ element, label, type, name }: Props) => {
  const inputWrapper = crtElement({ tag: "div", cls: "entry-input-wrapper" });

  const inputLabel = crtElement({
    tag: "label",
    cls: "entry-input-label",
    text: label,
  });
  inputLabel.setAttribute("for", name);
  inputLabel.style.visibility = "hidden";

  const input = crtElement({ tag: "input", cls: "entry-input" });
  input.name = name;
  input.type = type;
  input.placeholder = label;

  const changeLabelVisibility = () => {
    if (input.value) {
      inputLabel.style.visibility = "visible";
      inputLabel.style.opacity = "1";
    } else {
      inputLabel.style.visibility = "hidden";
      inputLabel.style.opacity = "0";
    }
  };

  input.addEventListener("input", changeLabelVisibility);

  changeLabelVisibility();

  inputWrapper.appendChild(inputLabel);
  inputWrapper.appendChild(input);

  element.appendChild(inputWrapper);
};
