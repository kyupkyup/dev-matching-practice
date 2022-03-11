import App from './App.mjs';
import { DOMHandler } from './handler/DOMHandler.mjs';

const $root = document.querySelector('.App');
DOMHandler.render($root, App());
