import React from 'react';
import './App.scss';
import SplitPane from 'react-split-pane';
import createReactClass from 'create-react-class';
import Preview from './components/Preview/Preview.component';
import Editor from './components/Editor/Editor.component';
import placeholder from './components/placeholder'

const App = createReactClass({

  getInitialState() {
    return {
      markdown: placeholder,
      lastClicked: '',
    }
  },

  onChange(e) {
    this.setState({
      markdown: typeof e === 'string' ? e: e.target.value,
      lastClicked: '',
    });
  },
    
  render() {
    return (
        <SplitPane split="vertical" size="50%">
          <div className="editor-pane">
          <Editor markdown={this.state.markdown} onChange={this.onChange} />
          </div>
          <div className="view-pane">
          <Preview markdown={this.state.markdown}/>
          </div>
        </SplitPane>
    )
  }
});

export default App;