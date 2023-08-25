import './style.less';
import { renderEntry } from './pages/entry/index';
import { renderProfile } from './pages/profile/index';
import { renderError404 } from './pages/error404/index';
import { renderError500 } from './pages/error500/index';
import { renderChat } from './pages/chat/index';

export const app = document.querySelector<HTMLElement>('#app')!;

const renderPage = () => {
    const path = window.location.pathname;

    switch (path) {
        case '/':
            renderEntry({ entryView: 'login' });
            break;
        case '/chat':
            renderChat();
            break;
        case '/profile':
            renderProfile({ profileView: 'main' });
            break;
        case '/500':
            renderError500();
            break;
        default:
            renderError404();
            break;
    };
};

renderPage();