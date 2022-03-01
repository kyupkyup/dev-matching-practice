console.log('adsfasdf')

import App from './App.mjs';
import {DOMHandler} from './handler/DOMHandler.mjs'

const $root = document.getElementById('App');
DOMHandler.render($root, App());
