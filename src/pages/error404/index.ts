import { errorInfo } from '../../components/errorInfo/index';
import { app } from '../../main';

export const renderError404 = () => {
    const error = errorInfo({ number: '404', description: 'Запрашиваемой страницы не существует, как и смысла в жизни' });

    app.innerHTML = '';
    app.appendChild(error);
};
