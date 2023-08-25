import { app } from '../../main';
import { EntryPageProps } from '../../types/EntryPageProps';
import { getLoginPage } from './login/index';
import { getRegistrationPage } from './registration/index';

export const renderEntry = ({ entryView }: EntryPageProps) => {
    app.innerHTML = '';

    if (entryView === 'registration') {
        getRegistrationPage({ element: app, changeTabHandler: renderEntry });
    } else if (entryView === 'login') {
        getLoginPage({ element: app, changeTabHandler: renderEntry });
    }
};