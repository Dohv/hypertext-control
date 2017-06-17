import MasterState from './MasterState';
import DefaultContent from './DefaultContent';
import defaultStyles from './defaultStyles';
import Helpers from './Helpers';

const DatabaseFunctions = {

  saveProject: function () {
    console.log(MasterState.nodes);

    if (!MasterState.modalWindowIsOpen) {
      MasterState.saveProjectModalWindow.style.display = 'block';
      MasterState.projectNameInput.focus();
      MasterState.modalWindowIsOpen = true;
    } else {
      MasterState.projectNameInput.blur();
      MasterState.nodes[MasterState.nodeIdx].content =
        MasterState.DOMCurrentNode.innerHTML;
      MasterState.saveProjectModalWindow.style.display = 'none';
      MasterState.modalWindowIsOpen = false;
      console.log('user id: ' + MasterState.userID);
      console.log('project title: ' + MasterState.projectTitle);
      //MasterState.modalWindowIsOpen = false;
      fetch('/api/projects', {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: MasterState.userID,
          title: MasterState.projectTitle,
          data: JSON.stringify(MasterState.nodes)
        })
      })
      .then(res => {
        return res.json();
      })
      .then(jsonRes => {
        console.log(jsonRes);
        if (jsonRes.message !== 'ok') {
          alert('Unable to save project');
          console.log('error');
        }
      });
    }

/*
    const project = MasterState.nodes.map(node => {
      const newNode = {};
      newNode.type = node.type;
      newNode.content = node.content;
      newNode.style = {};
      for (let CSSProperty in node.style) {
        newNode.style[CSSProperty] = node.style[CSSProperty];
      }
    });
*/
  },

};

export default DatabaseFunctions;

