import Conversions from './Conversions';

function defaultStyles(nodeType) {

  let style;

  switch (nodeType) {
    case 'h1':
      style = {
        color: {
          data: [0, 0, 0, 1],
        },
        backgroundColor: {
          data: [255, 255, 255, 1],
        },
      };
      return style;
    case 'p':
      return {
        color: {
          data: [0, 100, 0, 1],
        },
        backgroundColor: {
          data: [255, 255, 255, 1],
        },
      };
    case 'div':
      return {
        color: {
          data: [0, 0, 0, 1],
        },
        backgroundColor: {
          data: [255, 0, 255, 1],
        },
      };
  }

}

export default defaultStyles;
