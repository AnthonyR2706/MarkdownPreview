import { React } from 'react'
import ComponentHeader from './ComponentHeader'
import { marked } from 'marked';
import { defaultText } from '../assets/defaultText';
//import { markedHighlight } from 'marked-highlight';
//import hljs from 'highlight.js';

let text = defaultText;
let markedText = "";

const Editor = ({setEditorText, maximized, setMaximized}) => {
  const toMarkdown = () => {
    text = document.getElementById('editorTextArea').value;
    marked.use({
      breaks:true,
      gfm:true,
    });
    markedText = marked.parse(text);
    setEditorText(markedText);
  }
  return (
    <div className='editorContainer' id='editorContainer'>
        <ComponentHeader id='editor-header' 
          text={"Editor"}
          maximized = {maximized}
          setMaximized = {setMaximized}
          parent = {1}
        />
        <textarea className='editorText textContainer' id = "editorTextArea" onChange={toMarkdown}>
          {defaultText}
        </textarea>
      </div>
  )
}

export default Editor