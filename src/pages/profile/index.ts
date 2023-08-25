import { app } from '../../main';
import { ProfileViewProps } from '../../types/ProfileViewProps';
import { getProfileEditPassword } from './profileEditPassword/index';
import { getProfileEditUser } from './profileEditUser/index';
import { getProfileMain } from './profileMain/index';

export const renderProfile = ({ profileView }: ProfileViewProps) => {
    app.innerHTML = '';

    if (profileView === 'main') {
        getProfileMain({ element: app, changeTabHandler: renderProfile });
    } else if (profileView === 'editUser') {
        getProfileEditUser({ element: app, changeTabHandler: renderProfile });
    } else if (profileView === 'editPassword') {
        getProfileEditPassword({ element: app, changeTabHandler: renderProfile });
    }
};
