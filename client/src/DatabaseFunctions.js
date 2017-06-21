import MasterState from './MasterState';
import DefaultContent from './DefaultContent';
import defaultStyles from './defaultStyles';
import Helpers from './Helpers';
import loadProjects from './loadProjects';
//import download from './download';

const DatabaseFunctions = {

  saveProject: function () {

    if (!MasterState.saveProjectWindowIsOpen) {
      MasterState.saveProjectModalWindow.style.display = 'block';
      MasterState.projectNameInput.focus();
      MasterState.saveProjectWindowIsOpen = true;
    } else {
      MasterState.projectNameInput.blur();
      MasterState.nodes[MasterState.nodeIdx].content =
        MasterState.DOMCurrentNode.innerHTML;
      MasterState.saveProjectModalWindow.style.display = 'none';
      MasterState.saveProjectWindowIsOpen = false;

      console.log('user id: ' + MasterState.userID);
      console.log('project title: ' + MasterState.projectTitle);

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

  },

  openProject: function () {

    if (!MasterState.openProjectWindowIsOpen) {

      MasterState.openProjectModalWindow.style.display = 'block';
      MasterState.openProjectWindowIsOpen = true;
      MasterState.navigateMode = 'projects';

      fetch('/api/projects', {
        credentials: 'same-origin',
/*
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: MasterState.userID,
        })
*/
      })
      .then(res => {
        return res.json();
      })
      .then(jsonRes => {
        console.log(jsonRes);
        if (jsonRes.message === 'ok') {
          console.log('got projects successfully');
          console.log(jsonRes.projectsData);
          MasterState.projectsData = jsonRes.projectsData;
          loadProjects(jsonRes.projectsData);
        } else {
          alert('Unable to get projects');
          console.log('error');
        }
      });
    } else {
      /* make sure the last edit was put into the nodes */
      //MasterState.nodes[MasterState.nodeIdx].content =
        //MasterState.DOMCurrentNode.innerHTML;

      MasterState.navigateMode = 'edit';
      MasterState.openProjectModalWindow.style.display = 'none';
      const selectedDocument = MasterState.projectPreview.parentNode.removeChild(
        MasterState.projectPreview
      );
      selectedDocument.removeAttribute('class');
      selectedDocument.setAttribute('id', 'root');
      selectedDocument.childNodes.forEach(node => {
        node.setAttribute('spellcheck', 'false');
        node.setAttribute('contenteditable', 'true');
        node.onfocus = event => {
          Helpers.selectElementContents(event.target);
        };
      });
      MasterState.DOMroot.parentNode.replaceChild(
        selectedDocument, MasterState.DOMroot
      );
      MasterState.DOMroot = selectedDocument;
      MasterState.nodes = MasterState.projectsData[MasterState.previewableProjectDOMIdx].data;
      MasterState.DOMCurrentNode = MasterState.DOMroot.firstChild;
      MasterState.nodeIdx = 0;
      console.log(MasterState.nodes);

      MasterState.openProjectWindowIsOpen = false;
/*
*/
    }

  },

  downloadProject: function () {

    if (MasterState.openProjectWindowIsOpen) {

      const id = MasterState.projectsData[MasterState.previewableProjectDOMIdx].id;
      console.log('Selected Document id:' + id);
      console.log('tried to fetch the download');
      //window.location.href = 'localhost:3001/zip/4';
      //window.open('localhost:3001/zip/4', 'HTML CSS Download');
/*
      fetch(`/zip/${4}`, {
        credentials: 'same-origin',*/
/*
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: MasterState.userID,
        })
*/
/*
      })
      .then(res => {
        return res.blob
      })
      .then(blob => {
        download(blob, 'html_css', 'application/zip');
      });

*/
    }
  },

};

export default DatabaseFunctions;

