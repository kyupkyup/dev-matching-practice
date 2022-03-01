// 변경 이전의 V돔 트리
const DOM = (() => {
    let _tree = null;
    return {
      setTree: newNode => {
        _tree = newNode;
      },
      getTree: () => _tree,
    };
  })();
  
  const DOMHandler = (() => {
    const render = ($parent, newNode, oldNode, index = 0) => {
      let isSavedTree = false;
  
      const createElement = node => {
        if (DOM.getTree() === null) DOM.setTree(node);
        if (typeof node === 'string') {
          return document.createTextNode(node);
        }
        const $el = document.createElement(node.type);
        node.props.forEach(item => $el.setAttribute(Object.keys(item)[0], Object.values(item)[0]));
        node.children.map(createElement).forEach($el.appendChild.bind($el));
        return $el;
      };
  
      // 노드의 변경 사항 체크
      const changed = (node1, node2) => typeof node1 !== typeof node2
          || typeof node1 === 'string'
          && node1 !== node2
          || node1.props !== node2.props
          || node1.type !== node2.type;
  
      const updateElement = ($parent, newNode, oldNode, index = 0) => {
        // old 돔트리를 바꿔줌
        if (!isSavedTree) {
          DOM.setTree(newNode);
          isSavedTree = true;
        }
        // 바뀌는 V돔 트리에만 노드가 존재하는 경우(추가)
        if (!oldNode) {
          $parent.appendChild(createElement(newNode));
        }
        // 바뀌는 V돔 트리에 노드가 없는 경우(삭제)
        else if (!newNode) {
          $parent.removeChild($parent.childNodes[index]);
        }
        // 변경이 있는 경우(변경)
        else if (changed(newNode, oldNode)) {
          $parent.replaceChild(createElement(newNode), $parent.childNodes[index]);
        }
        // 완전히 같은 상태일 경우, 텍스트 노드가 아니면
        else if (newNode.type) {
          for (let i = 0; i < newNode.children.length || i < oldNode.children.length; i++) {
            // 재귀적으로 하위 노드를 타고 들어감
            updateElement(
              $parent.childNodes[index],
              newNode.children[i],
              oldNode.children[i],
              i,
            );
          }
        }
      };
      updateElement($parent, newNode, oldNode, index);
      isSavedTree = false;
    };
  
    return {
      render,
    };
  })();
  export { DOM, DOMHandler };
  