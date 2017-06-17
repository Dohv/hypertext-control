import MasterState from './MasterState';
import MIDIProgramFlow from './MIDIProgramFlow';
import keyInputs from './keyInputs';

window.onload = function () {
  MasterState.initialize();
  MIDIProgramFlow.start();
  keyInputs();
};

