import './style.less';
import { getLoginPage } from './pages/login/index';
import { getRegistrationPage } from './pages/registration/index';

type Props = {
    isRegistration?: boolean;
};

const renderPage = ({ isRegistration }: Props) => {
    const app = document.querySelector<HTMLElement>('#app')!;
    app.innerHTML = '';

    if (isRegistration) {
        getRegistrationPage({ element: app, changeTabHandler: renderPage });
    } else {
        getLoginPage({ element: app, changeTabHandler: renderPage });
    }
}

renderPage({}); 
