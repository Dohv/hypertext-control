import MasterState from './MasterState';
import MIDI from './MIDI';
import ControlFunctions from './ControlFunctions';
import DatabaseFunctions from './DatabaseFunctions';
import CSSPropertyMap from './CSSPropertyMap';
import KnobsButtons from './KnobsButtons';

const MIDIProgramFlow = {

  append: ControlFunctions.append,
  changeStyle: ControlFunctions.changeStyle,
  saveProject: DatabaseFunctions.saveProject,
  openProject: DatabaseFunctions.openProject,
  downloadProject: DatabaseFunctions.downloadProject,
  navigate: ControlFunctions.navigate,
  editContent: ControlFunctions.editContent,

  onMIDIMessage: function (message) {

    const data = message.data;
    const type = data[0] & 0xf0;
    const num = data[1];
    const val = data[2];

    if (type === 128 && val === 0) {
      switch (num) {
        case 8:
          this.append('h1');
          break;
        case 9:
          this.append('p');
          break;
        case 10:
          this.append('div');
          break;
        case 15:
          this.openProject();
          break;
        case 22:
          this.downloadProject();
          break;
        case 23:
          this.saveProject();
          break;
      }
    }

    if (type === 176) {
      if (num >= 1 && num <= 4) {
        MasterState.CSSPropertyDataIdx =
          (num - 1) + MasterState.CSSPropertyParamsIdx * 4;
        KnobsButtons.infiniteKnob(val, num - 1, direction => {
          MIDIProgramFlow.changeStyle(
            MasterState.CSSPropertyIdx, 
            MasterState.CSSPropertyDataIdx, 
            direction
          );
        });
      }
      switch (num) {
        case 5:
          KnobsButtons.infiniteKnob(val, 4, direction => {
            const idx = MasterState.CSSPropertyParamsIdx + direction;
            if (
              idx >= 0 &&
              idx <= Math.floor(
                (CSSPropertyMap[MasterState.CSSPropertyIdx].values.length - 1) / 4
              )
            ) {
              MasterState.CSSPropertyParamsIdx = idx;
            }
          });
          break;
        case 6:
          KnobsButtons.infiniteKnob(val, 5, direction => {
            const idx = MasterState.CSSPropertyIdx + direction;
            if (idx >= 0 && idx < CSSPropertyMap.length) {
              MasterState.CSSPropertyIdx = idx;
            }
          });
          break;
        case 8:
          KnobsButtons.infiniteKnob(val, 7, this.navigate);
/*
        case 1:
          this.append('h1');
          break;
        case 2:
          this.append('p');
          break;
        case 3:
          this.append('div');
          break;
        case 4:
          this.append('div');
          break;
*/
      }
    }

    // console.log(message);
    console.log('type: ' + type);
    console.log('num: ' + num);
    console.log('val: ' + val);
  },

  start: function () {
    const onMIDIMessage = this.onMIDIMessage.bind(this);
    MIDI.initialize(onMIDIMessage);
  },

};

export default MIDIProgramFlow;
