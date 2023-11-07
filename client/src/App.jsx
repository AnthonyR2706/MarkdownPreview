import { React, useState } from 'react'
import { Editor, Previewer } from './components'
import { defaultText } from './assets/defaultText';
import { marked } from 'marked';

const App = () => {
  const [editorText, setEditorText] = useState(marked.parse(defaultText));
  const [maximized, setMaximized] = useState(0)
  // 0 = None maximized
  // 1 = Editor Maximized
  // 2 = Previwer Maximized
  return (
    <div className='app__wrapper' >
      <Editor
        editorText = {editorText}
        setEditorText = {setEditorText}
        maximized = {maximized}
        setMaximized = {setMaximized}
      />
      <Previewer 
        editorText = {editorText}
        maximized = {maximized}
        setMaximized = {setMaximized}
      />
    </div>
  )
}

export default App