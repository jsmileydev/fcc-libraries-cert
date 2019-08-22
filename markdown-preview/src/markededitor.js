import React from 'react';
import placeholder from './placeholder';
import marked from 'marked';

class MarkedEditor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        editText: placeholder
      };
      this.markdown = this.markdown.bind(this);
    }
  
    markdown(e) {
      this.setState({
        editText: e.target.value
      });
    }
  
    render() {
      return (
        <main>
          <div id="textboxes">
            <section id="editorbox">
              <p class="toolbar">
                <img src="https://img.icons8.com/ios-glyphs/50/000000/console.png" className="toolbar-icon" height="20" width="20" alt="" />{/*<i class="fas fa-terminal" />*/}Text Editor
              </p>
              <textarea id="editor" type="text" onChange={this.markdown} value={this.state.editText}></textarea>
            </section>
            <section id="previewbox">
              <p class="toolbar">
                <img src="https://img.icons8.com/android/24/000000/document.png" className="toolbar-icon" height="20" width="20" alt="" />{/*<i class="far fa-file-alt" />*/}Preview
              </p>
              <div id="preview" 
  dangerouslySetInnerHTML={{__html: marked(this.state.editText, {breaks: true, sanitize: true})}}></div>
            </section>
          </div>
        </main>
      );
    }
  }

  export default MarkedEditor;