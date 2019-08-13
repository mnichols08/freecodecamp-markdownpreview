import React from 'react';
import marked from 'marked';
import  renderer from '../renderer'

import './Preview.styles.scss';

marked.setOptions({
  breaks: true,
});

class Preview extends React.Component {
    render () {
      return (
        <div className='previewWrap'>
          <div className='preview'>
            <div dangerouslySetInnerHTML={{__html: marked(this.props.markdown, { renderer: renderer }) }} id="preview"/>
          </div>
        </div>
      )
    }
  }

  export default Preview;