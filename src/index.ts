import './style.scss';
import { App } from './app';

window.onload = () => {
  const appElement = document.getElementById('app');

  if (!appElement) throw new Error('App root element is not found');

  new App(appElement);
};
