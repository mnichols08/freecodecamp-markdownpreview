import React from 'react';
import CodeMirror from '@skidding/react-codemirror';

import './Editor.styles.scss';

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/theme/shadowfox.css');



class Editor extends React.Component {
    render () {
      return (
          <>
          <textarea className="hide"
          id="editor"
          value={this.props.markdown}
          onChange={this.props.onChange}/>
          <CodeMirror
        value={this.props.markdown} onChange={this.props.onChange}
        options={{ mode: 'markdown', theme: 'shadowfox', lineWrapping: true}} />
        </>
      )
    }
  }

  export default Editor;
