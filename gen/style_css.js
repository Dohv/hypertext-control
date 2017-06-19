function toRGBA(rgba) {
  return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
}

const Conversions = {
  backgroundColor: toRGBA,
  color: toRGBA,
};

const CSSPropertyNames = {
  backgroundColor: 'background-color',
  color: 'color',
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
