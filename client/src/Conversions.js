function toRGBA(rgba) {
  return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
}

function toPx4(px) {
  return `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px`;
}

function toPx(px) {
  return `${px[0]}px`;
}

const Conversions = {

  backgroundColor: toRGBA,
  color: toRGBA,
  padding: toPx4,
  fontSize: toPx,
  margin: toPx4,

};

export default Conversions;
