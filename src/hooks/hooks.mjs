import { DOM, DOMHandler } from '../handler/DOMHandler.mjs';
import App from '../App.mjs';

const hooks = (() => {
  const _useStateStatus = []; // useState를 여러개 쓰기 위한 배열
  let currentHook = 0; // useState 포인터

  const render = () => {
    currentHook = 0;
    const $root = document.getElementById('App');
    DOMHandler.render($root, App(), DOM.getTree()); // 리렌더링의 경우 이전 VDOM 트리와 새로운 VDOM 트리를 비교해야 함
  };

  const useState = initialState => {
    _useStateStatus[currentHook] = _useStateStatus[currentHook] || initialState;
    const currentIdx = currentHook;

    const setState = newState => {
      _useStateStatus[currentIdx] = newState;
      render();
    };
    currentHook += 1;
    return [_useStateStatus[currentIdx], setState];
  };
  return {
    useState,
  };
})();

export default hooks;
