/* Markdown Preview App
    Blog Generator() (Return a prompt that might spawn creativity)
    
*/
import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import Editor from './editor';
import ReactMarkdown from 'react-markdown';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      markdownSrc: '# Hello World',
      splitPaneSize: "50%"
    }
    this.onMarkdownChange = this.onMarkdownChange.bind(this);
  }

  onMarkdownChange(md) {
    this.setState({
      markDownSrc: md
    });
  }
  render() {
  return (
    <div className="App">
      <SplitPane split="vertical" defaultSize="50%">
        <div className="editor-pane">
        <Editor className="editor" value={this.state.markdownSrc} onChange={this.onMarkdownChange} elementId="editor"/>
        </div>
        <div className="view-pane">
          <ReactMarkdown className="result" source={this.state.markDownSrc} elementId="preview"/>
        </div>
      </SplitPane>
    </div>
  );
  }
}


export default App;
