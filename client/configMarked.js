import marked from 'marked';

const myRenderer = new marked.Renderer();
myRenderer.link = function (href, title, text) {
  var isExternal = /^https?:\/\/.+$/.test(href);
  return `<a href="${href}" ${isExternal ? 'target="_blank"' : ''}> ${text} </a>`;
};

marked.setOptions({
  renderer: myRenderer,
  sanitise: true,
  breaks: true
});

export default marked;
