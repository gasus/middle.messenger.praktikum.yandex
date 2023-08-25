import { renderEntry } from './pages/entry/index';
import { renderProfile } from './pages/profile/index';
import { renderError404 } from './pages/error404/index';
import { renderError500 } from './pages/error500/index';
import { renderChat } from './pages/chat/index';
import './style.less';

export const app = document.querySelector<HTMLElement>('#app')!;

const renderPage = () => {
    const path = window.location.search;

    switch (path) {
        case '':
        case '?page=login':
            renderEntry({ entryView: 'login' });
            break;
        case '?page=chat':
            renderChat();
            break;
        case '?page=profile':
            renderProfile({ profileView: 'main' });
            break;
        case '?page=500':
            renderError500();
            break;
        default:
            renderError404();
            break;
    };
};

renderPage();
