import './style.less';
import { getLoginPage } from './pages/login/index';
import { getRegistrationPage } from './pages/registration/index';

type Props = {
    isRegistration?: boolean;
};

const renderPage = ({ isRegistration }: Props) => {
    if (isRegistration) {
        getRegistrationPage({ element: document.querySelector<HTMLElement>('#app')!, changeTabHandler: renderPage });
    } else {
        getLoginPage({ element: document.querySelector<HTMLElement>('#app')!, changeTabHandler: renderPage });
    }
}

renderPage({}); 
