/* MIDI access object */
const MIDI = {

  /* available MIDI devices */
  devices: [],

  /* callbacks for failure or success in browser MIDI access */
  onMIDISuccess: function (midiAccess) {
    console.log('midi success');
    const inputs = midiAccess.inputs.values();
    const outputs = midiAccess.outputs.values();
    for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
      input.value.onmidimessage = MIDI.onMIDIMessage;
      console.log(input);
    }
    for (let output = outputs.next(); output && !output.done; output = outputs.next()) {
      MIDI.devices.push(output.value);
      console.log(output);
    }
    console.log(MIDI.devices);
    //MIDI.devices.forEach(device => {
      for (let i = 1; i <= 8; i++) {
        MIDI.devices[0].send([176, i, 0]);
      }
    //});
  },

  /* check if browser supports MIDI */
  initialize: function (onMIDIMessage) {
    MIDI.onMIDIMessage = onMIDIMessage;
    if (navigator.requestMIDIAccess) {
      navigator.requestMIDIAccess({
        sysex: false
      }).then(MIDI.onMIDISuccess, MIDI.onMIDIFailure);
    } else {
      alert("No MIDI support in your browser.");
    }
  },

  /* on failed response */
  onMIDIFailure: function (error) {
    alert('No access to MIDI devices or your browser doesn\'t support WebMIDI API.');
  },

  /* main callback for when a midi message occurs */
  onMIDIMessage: null

};

export default MIDI;

