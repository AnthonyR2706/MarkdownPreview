import React from 'react'
import { FullScreen } from '../assets/full-screen-selector-svgrepo-com'
import { Minimize } from '../assets/minimize-svgrepo-com'

let symbol = <FullScreen/>

const ComponentHeader = ({text, maximized, setMaximized, parent}) => {
  const handleClick = () => {
    switch(maximized){
      case 0:
        if(parent == 1){
          setMaximized(1);
          document.getElementById('editorContainer').classList.toggle('maximized');
          document.getElementById('previewerContainer').classList.toggle('minimized');
        } else {
          setMaximized(2);
          document.getElementById('editorContainer').classList.toggle('minimized');
          document.getElementById('previewerContainer').classList.toggle('maximized');
        }
        console.log("switch to" + parent)
        symbol = <Minimize/>
        console.log("hit 0")
        break;
      case 1:
        setMaximized(0);
        document.getElementById('editorContainer').classList.toggle('maximized');
        document.getElementById('previewerContainer').classList.toggle('minimized');
        symbol = <FullScreen/>
        console.log("hit 1")
        break;
      case 2:
        setMaximized(0);
        document.getElementById('editorContainer').classList.toggle('minimized');
        document.getElementById('previewerContainer').classList.toggle('maximized');
        symbol = <FullScreen/>
        console.log("hit 2")
        break;
    }
  }
  return (
    <div className='Header'>
        {text}
        <span className='iconContainer' onClick = {handleClick} >
          {symbol}
        </span>

    </div>
  )
}

export default ComponentHeader