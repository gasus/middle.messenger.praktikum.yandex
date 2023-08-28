import { InputData } from "types/InputData";
import { profileInput } from "components/profileInput";
import { crtElement } from "utils/crtElement";
import "./style.less";

type Props = {
  data: InputData[];
  isEdit?: boolean;
};

export const profileForm = ({ data, isEdit }: Props) => {
  const form = crtElement({ tag: "form", cls: "profile-form" });

  data.forEach((i) => {
    profileInput({ element: form, disabled: !isEdit, ...i });
  });

  return form;
};
