import { React, useEffect } from 'react'
import ComponentHeader from './ComponentHeader'

const Previewer = ({editorText, maximized, setMaximized}) => {
  useEffect(() => {
    document.getElementById('previewerText').innerHTML = editorText
  });
  
  return (
    <div className='previewerContainer' id='previewerContainer'>
        <ComponentHeader id='previewer-header' 
          text={"Previewer"}
          maximized = {maximized}
          setMaximized = {setMaximized}
          parent = {2}
        />
        <div className='previewerText textContainer' id = "previewerText"/>
      </div>
  )
}

export default Previewer