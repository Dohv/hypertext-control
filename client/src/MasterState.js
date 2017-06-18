const MasterState = {

  /* user information */
  userID: document.getElementById('user').innerHTML,

  /* MIDI control states */
  lastSelectKnobValue: 0,

  CSSPropertyIdx: 0,
  CSSPropertyParamsIdx: 0,
  lastNavigateNodesValue: 0,

  /* content editing */
  isBeingEdited: false,

  /* styles */

  /* DOM elements and access */
  DOMroot: document.getElementById('root'),
  DOMCurrentNode: null,

  /* virtual DOM */
  nodes: [],
  nodeIdx: -1,

  /* navigation knob states (either 'edit' or 'projects') */
  navigateMode: 'edit',

  /* saving and recalling */
  projectsData: [],
  saveProjectModalWindow: document.getElementById('save_project_modal'),
  projectNameInput: document.getElementById('project_name_input'),
  openProjectModalWindow: document.getElementById('open_project_modal'),
  projectPreview: null,
  //modalWindowXBox: document.getElementsByClassName('close')[0],
  saveProjectWindowIsOpen: false,
  openProjectWindowIsOpen: false,
  projectTitle: '',

  previewableProjectsDOM: [],
  previewableProjectDOMIdx: -1,

  initialize: function () {
    this.projectNameInput.addEventListener('change', event => {
      this.projectTitle = event.target.value;
    });
  },

};

export default MasterState;

