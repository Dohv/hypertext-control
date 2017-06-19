const index_html = (zip, data) => {

  let tags = data.data.reduce((acc, val, i) => {
    return acc + `  <${val.type} class="a${i}">${val.content}</${val.type}>\n`;
  }, `\n`);

  /* create file contents */
  const file =

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${data.title}</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>${tags}</body>
</html>`;
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  zip.addFile('index.html', new Buffer(file), 'index.html');

};

module.exports = index_html;
