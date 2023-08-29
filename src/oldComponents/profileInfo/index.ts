import { InputData } from "types/InputData";
import { ProfileViewProps } from "types/ProfileViewProps";
import { changeUrl } from "utils/changeUrl";
import { customButton } from "oldComponents/customButton";
import { profileAvatar } from "oldComponents/profileAvatar";
import { profileForm } from "oldComponents/profileForm";
import "./style.less";
import { crtElement } from "utils/crtElement";

type Props = {
  isEdit: boolean;
  isEditPassword: boolean;
  changeTabHandler: (entryView: ProfileViewProps) => void;
};

const configUserData: InputData[] = [
  { label: "Почта", name: "email", type: "text", value: "" },
  { label: "Логин", name: "login", type: "text", value: "" },
  { label: "Имя", name: "first_name", type: "text", value: "" },
  { label: "Фамилия", name: "second_name", type: "text", value: "" },
  { label: "Имя в чате", name: "display_name", type: "text", value: "" },
  { label: "Телефон", name: "phone", type: "text", value: "" },
];

const configPasswordData: InputData[] = [
  { label: "Старый пароль", name: "oldPassword", type: "password" },
  { label: "Новый пароль", name: "newPassword", type: "password" },
  { label: "Повторите новый пароль", name: "newPassword", type: "password" },
];

export const profileInfo = ({
  isEdit,
  isEditPassword,
  changeTabHandler,
}: Props) => {
  const wrapper = crtElement({ tag: "div", cls: "profile-info-wrapper" });

  const content = crtElement({ tag: "div", cls: "profile-info-content" });

  const avatar = profileAvatar({ userName: "Пользователь" });
  content.appendChild(avatar);

  const form = profileForm({
    data: isEditPassword ? configPasswordData : configUserData,
    isEdit: isEdit,
  });
  content.appendChild(form);

  const footerAdditionalClassname = isEdit
    ? "profile-info-footer-center"
    : undefined;
  const footerClassName = `profile-info-footer ${footerAdditionalClassname}`;
  const footer = crtElement({ tag: "div", cls: footerClassName });

  if (!isEdit) {
    const footerSeparatorOne = crtElement({
      tag: "div",
      cls: "profile-info-footer-separator",
    });
    const footerSeparatorTwo = crtElement({
      tag: "div",
      cls: "profile-info-footer-separator",
    });

    customButton({
      element: footer,
      label: "Изменить данные",
      classType: "white-blue",
      withoutMargin: true,
      onClick: () => changeTabHandler({ profileView: "editUser" }),
    });
    footer.appendChild(footerSeparatorOne);
    customButton({
      element: footer,
      label: "Изменить пароль",
      classType: "white-blue",
      withoutMargin: true,
      onClick: () => changeTabHandler({ profileView: "editPassword" }),
    });
    footer.appendChild(footerSeparatorTwo);
    customButton({
      element: footer,
      label: "Выйти",
      classType: "white-red",
      withoutMargin: true,
      onClick: () => changeUrl("?page=login"),
    });
  } else {
    customButton({
      element: footer,
      label: "Сохранить",
      classType: "blue-white",
      onClick: () => changeTabHandler({ profileView: "main" }),
    });
  }

  content.appendChild(footer);

  wrapper.appendChild(content);

  return wrapper;
};
