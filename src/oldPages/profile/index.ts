// import { app } from "../../main";
import { ProfileViewProps } from "types/ProfileViewProps";
import { getProfileEditPassword } from "./profileEditPassword";
import { getProfileEditUser } from "./profileEditUser";
import { getProfileMain } from "./profileMain";

export const renderProfile = ({ profileView }: ProfileViewProps) => {
  const app = document.createElement("div");
  // app.innerHTML = "";

  if (profileView === "main") {
    getProfileMain({ element: app, changeTabHandler: renderProfile });
  } else if (profileView === "editUser") {
    getProfileEditUser({ element: app, changeTabHandler: renderProfile });
  } else if (profileView === "editPassword") {
    getProfileEditPassword({ element: app, changeTabHandler: renderProfile });
  }
};
