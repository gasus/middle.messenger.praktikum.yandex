import { crtElement } from "utils/crtElement";
import addButtonCircleArrow from "oldComponents/buttonCircleArrow";
import "./style.less";

type Props = {
  onClick: () => void;
};

export const goBackBlock = ({ onClick }: Props) => {
  const block = crtElement({ tag: "div", cls: "go-back-block" });

  addButtonCircleArrow({
    element: block,
    destination: "left",
    onClick: onClick,
  });

  return block;
};
