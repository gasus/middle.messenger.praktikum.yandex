import { InputData } from "types/InputData";
import "./style.less";
import { crtElement } from "utils/crtElement";

type Props = InputData & {
  element: HTMLElement;
  disabled?: boolean;
};

export const profileInput = ({
  element,
  label,
  type,
  name,
  value,
  disabled,
}: Props) => {
  const inputWrapper = crtElement({ tag: "div", cls: "profile-input-wrapper" });

  const inputLabel = crtElement({
    tag: "label",
    cls: "profile-input-label",
    text: label,
  });
  inputLabel.setAttribute("for", name);

  const input = crtElement({ tag: "input", cls: "profile-input" });
  input.name = name;
  input.type = type;
  if (value) input.value = value;
  if (disabled) input.disabled = true;

  inputWrapper.appendChild(inputLabel);
  inputWrapper.appendChild(input);

  element.appendChild(inputWrapper);
};
