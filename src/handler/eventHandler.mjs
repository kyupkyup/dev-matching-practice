const eventHandler = (() => {
  const $root = document.getElementById('App');
  const addEvent = (eventType, cb) => {
    $root.addEventListener(eventType, cb);
    // 버블링을 이용한 이벤트 핸들링
  };
  return {
    addEvent,
  };
})();
export default eventHandler;
