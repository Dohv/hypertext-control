import MasterState from './MasterState';
import DefaultContent from './DefaultContent';
import defaultStyles from './defaultStyles';
import Helpers from './Helpers';
import Conversions from './Conversions';
import CSSPropertyMap from './CSSPropertyMap';

const ControlFunctions = {

  append: function (nodeType) {

    const node = {
      type: nodeType,
      content: DefaultContent[nodeType],
      style: defaultStyles(nodeType),
    };

    const nodeView = document.createElement(nodeType);
    nodeView.setAttribute('spellcheck', 'false');
    nodeView.setAttribute('contenteditable', 'true');
    nodeView.innerHTML = DefaultContent[nodeType];
/*
    nodeView.onfocus = event => {
      Helpers.selectElementContents(event.target);
    };
*/

    for (let CSSProperty in node.style) {
      console.log(node.style[CSSProperty]);
      nodeView.style[CSSProperty] =
        Conversions[CSSProperty](node.style[CSSProperty].data);
    }

    MasterState.nodes = MasterState.nodes.concat(node);
    if (MasterState.nodeIdx > -1) {
      MasterState.nodes[MasterState.nodeIdx].content =
        MasterState.DOMCurrentNode.innerHTML;
    }
    MasterState.nodeIdx++;
    MasterState.DOMroot.appendChild(nodeView);
    MasterState.DOMCurrentNode = nodeView;

    nodeView.focus();
    Helpers.clearSelection();
    Helpers.selectElementContents(nodeView);

  },

  navigate: function (direction) {

    switch (MasterState.navigateMode) {
      case 'edit':
        if (MasterState.DOMCurrentNode !== null) {
          const sibling = (direction === -1) ?
            MasterState.DOMCurrentNode.previousSibling :
            MasterState.DOMCurrentNode.nextSibling;
          if (sibling !== null) {
            Helpers.clearSelection();
            sibling.focus();
            Helpers.selectElementContents(sibling);
            MasterState.nodes[MasterState.nodeIdx].content =
              MasterState.DOMCurrentNode.innerHTML;
            MasterState.nodeIdx += direction;
            MasterState.DOMCurrentNode = sibling;
            MasterState.DOMCurrentNode.scrollIntoView();
          }
        }
        break;
      case 'projects':
        console.log('navigating in projects mode');
        const idx = MasterState.previewableProjectDOMIdx + direction;
        if (idx >= 0 && idx < MasterState.previewableProjectsDOM.length) {
          MasterState.projectPreview.parentNode.replaceChild(
            MasterState.previewableProjectsDOM[idx], MasterState.projectPreview
          );
          MasterState.projectPreview = MasterState.previewableProjectsDOM[idx];
          MasterState.previewableProjectDOMIdx = idx;
        }
    }

  },

  changeStyle: function (propertyIdx, dataIdx, direction) {

    if (dataIdx < CSSPropertyMap[propertyIdx].values.length) {
      console.log(dataIdx);
      Helpers.clearSelection();
      MasterState.DOMCurrentNode.blur();
      const CSSProperty = CSSPropertyMap[propertyIdx].name;
      console.log(CSSProperty);
      const currentDataValue =
        MasterState.nodes[MasterState.nodeIdx].style[CSSProperty].data[dataIdx];
      const nextDataValue = currentDataValue + direction *
        CSSPropertyMap[propertyIdx].values[dataIdx].step;
      if (nextDataValue >= 
          CSSPropertyMap[propertyIdx].values[dataIdx].min &&
          nextDataValue <=
          CSSPropertyMap[propertyIdx].values[dataIdx].max) {
        MasterState.nodes[MasterState.nodeIdx]
          .style[CSSProperty]
            .data[dataIdx] = nextDataValue;
          console.log('nextDataValue: ' + nextDataValue);
        /* change inline DOM styles */
        MasterState.DOMCurrentNode.style[CSSProperty] =
          Conversions[CSSProperty](
            MasterState.nodes[MasterState.nodeIdx].style[CSSProperty].data
          );
      }
/*
      MasterState.nodes[MasterState.nodeIdx].style[CSSPropertyMap[propertyIdx].name] =
        CSSPropertyMap[propertyIdx].get(direction);
*/
    }
  },

};

export default ControlFunctions;
