import marked from 'marked';

const renderer = new marked.Renderer();

renderer.link = (href, title, text) =>  `<a target="_blank" href="${href}">${text}</a>`;
renderer.code = (code, language) => `<pre><code class=language-${language}>${code}</code></pre>`;

export default renderer;