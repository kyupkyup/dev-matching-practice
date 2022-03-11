import { DOM, DOMHandler } from '../handler/DOMHandler.mjs';
import App from '../App.mjs';

const hooks = (() => {
  const _useStateStatus = []; // useState를 여러개 쓰기 위한 배열
  let currentHook = 0; // useState 포인터

  const debounce = (callback, timer = 0) => {
    let timerId;
    return () => {
      if(timerId) clearTimeout(timerId);
      timerId = setTimeout(callback, timer)
    }
  }

  const render = debounce(() => {
    currentHook = 0;
    const $root = document.querySelector('.App');
    DOMHandler.render($root, App(), DOM.getTree()); // 리렌더링의 경우 이전 VDOM 트리와 새로운 VDOM 트리를 비교해야 함
  }, 100);

  const useState = initialState => {
    if(typeof initialState === 'boolean' || initialState === 0) _useStateStatus[currentHook] = _useStateStatus[currentHook] || initialState + '';
    else _useStateStatus[currentHook] = _useStateStatus[currentHook] || initialState;
    const currentIdx = currentHook;

    const setState = newState => {
      if(_useStateStatus[currentIdx] === newState) {
        return;
      };
      if(JSON.stringify(_useStateStatus[currentIdx]) === JSON.stringify(newState)) {
        return;
      };

      if(typeof newState === 'boolean'|| newState === 0) {
        console.log(_useStateStatus[currentIdx])
        _useStateStatus[currentIdx] = newState + '';
      }
      else {
        console.log(_useStateStatus[currentIdx])
        _useStateStatus[currentIdx] = newState;
      }
      render(); 
    };
    
    currentHook += 1;
    return [
      (
        typeof _useStateStatus[currentIdx] === 'true' || _useStateStatus[currentIdx] === 'false' || _useStateStatus[currentIdx] === '0'?
        JSON.parse(_useStateStatus[currentIdx]) : 
        _useStateStatus[currentIdx]
      ), 
        
        setState];
  };
  return {
    useState,
  };
})();

export default hooks;
