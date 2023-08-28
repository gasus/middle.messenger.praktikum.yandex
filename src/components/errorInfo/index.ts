import { crtElement } from "utils/crtElement";
import { changeUrl } from "utils/changeUrl";
import { customButton } from "components/customButton";
import "./style.less";

type Props = {
  number: string;
  description: string;
};

export const errorInfo = ({ number, description }: Props) => {
  const wrapper = crtElement({ tag: "div", cls: "error-info-wrapper" });

  const errorNum = crtElement({
    tag: "div",
    cls: "error-info-number",
    text: number,
  });

  const errorDescription = crtElement({
    tag: "div",
    cls: "error-info-description",
    text: description,
  });

  wrapper.appendChild(errorNum);
  wrapper.appendChild(errorDescription);
  customButton({
    element: wrapper,
    label: "Назад к чатам",
    classType: "white-blue",
    onClick: () => changeUrl("?page=login"),
  });

  return wrapper;
};
