import Conversions from './Conversions';

const CSSPropertyMap = [

  {
    name: 'color',
    values: [
      { min: 0, max: 255, step: 8 },
      { min: 0, max: 255, step: 8 },
      { min: 0, max: 255, step: 8 },
      { min: 0, max: 1, step: .1 },
    ],
  },

  {
    name: 'backgroundColor',
    values: [
      { min: 0, max: 255, step: 8 },
      { min: 0, max: 255, step: 8 },
      { min: 0, max: 255, step: 8 },
      { min: 0, max: 1, step: .1 },
    ],
  },

  {
    name: 'padding',
    values: [
      { min: 0, max: 255, step: 1 },
      { min: 0, max: 255, step: 1 },
      { min: 0, max: 255, step: 1 },
      { min: 0, max: 255, step: 1 },
    ],
  },

  {
    name: 'fontSize',
    values: [
      { min: 0, max: 2000, step: 1 },
    ],
  },

  {
    name: 'margin',
    values: [
      { min: 0, max: 255, step: 1 },
      { min: 0, max: 255, step: 1 },
      { min: 0, max: 255, step: 1 },
      { min: 0, max: 255, step: 1 },
    ],
  },

];

export default CSSPropertyMap;
