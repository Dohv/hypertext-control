import MasterState from './MasterState';

const KnobsButtons = {

  /* takes the knob value and executes func(1) or func(-1) */
  infiniteKnob: function (val, lastKnobValueIdx, func) {

    if (val > MasterState.lastKnobValues[lastKnobValueIdx]) {
      func(1);
    } else if (val < MasterState.lastKnobValues[lastKnobValueIdx]) {
      func(-1);
    } else if (val === MasterState.lastKnobValues[lastKnobValueIdx] && val === 0) {
      func(-1);
    } else {
      func(1);
    }
    MasterState.lastKnobValues[lastKnobValueIdx] = val;

  },

};

export default KnobsButtons
