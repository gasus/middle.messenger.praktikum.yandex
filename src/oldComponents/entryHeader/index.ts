import { crtElement } from "utils/crtElement";
import "./style.less";

type Props = {
  label: string;
};

export const entryHeader = ({ label }: Props) =>
  crtElement({ tag: "div", cls: "entry-header", text: label });
