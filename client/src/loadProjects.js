import MasterState from './MasterState';
import Conversions from './Conversions';

function loadProjects(projectsData) {

  MasterState.previewableProjectsDOM = projectsData.map(project => {

    const projectNode = document.createElement('div');
    projectNode.setAttribute('id', 'project_preview');
    projectNode.setAttribute('class', 'modal-content');

    console.log(project.data);

    project.data.forEach(node => {
      const element = document.createElement(node.type);
      for (let CSSProperty in node.style) {
        element.style[CSSProperty] =
          Conversions[CSSProperty](node.style[CSSProperty].data);
      }
      element.innerHTML = node.content;
      projectNode.appendChild(element);
    });

    return projectNode;

  });

  if (MasterState.previewableProjectsDOM.length > 0) {
    MasterState.previewableProjectDOMIdx = 0;
    const firstProject =
      MasterState.previewableProjectsDOM[MasterState.previewableProjectDOMIdx];
    MasterState.openProjectModalWindow.appendChild(firstProject);
    MasterState.projectPreview = firstProject;
  }
  console.log('previewableProjectsDOM: ' + MasterState.previewableProjectsDOM);

}

export default loadProjects;
