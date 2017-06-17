function toRGBA(rgba) {
  return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
}

const Conversions = {

  backgroundColor: toRGBA,
  color: toRGBA,
/*
  toRGBA: function (rgba) {
    return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
  },
*/

};

export default Conversions;
