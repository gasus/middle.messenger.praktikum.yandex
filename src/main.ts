import './style.less';
import getLoginPage from './pages/login/index';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="loginPage" />
`;

getLoginPage(document.querySelector<HTMLButtonElement>('#loginPage')!);
