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

const CSSPropertyNames = {
  backgroundColor: 'background-color',
  color: 'color',
  padding: 'padding',
  fontSize: 'font-size',
  margin: 'margin',
};

const style_css = (zip, data) => {

  let selectors = data.data.reduce((acc, val, i) => {
    let rules = ``;
    for (let CSSProperty in val.style) {
      rules += `  ${CSSPropertyNames[CSSProperty]}: ${Conversions[CSSProperty](val.style[CSSProperty].data)};\n`
    }
    return acc + `${val.type}.a${i} {\n${rules}}\n\n`;
  }, ``);

  /* create file contents */
  const file =

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
`${selectors}`
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  zip.addFile('style.css', new Buffer(file), 'style.css');

};

module.exports = style_css;
