import React,{useState,useEffect} from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt,faExpandAlt } from '@fortawesome/free-solid-svg-icons';
//import useLocalStorage from '../hooks/useLocalStorage';

import Editor from './Editor';
//import Navbar from './Navbar';

function App() {
  const[html,setHtml]=useState('')
  const[css,setCss]=useState('')
  const[js,setJs]=useState('')
  const[srcDoc,setSrcDoc]=useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html><body>${html}</body><style>${css}</style><script>${js}</script></html>`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);
  return (
  <div className="body">
  <div className="navbar">
<h1>Code Editor</h1>

  </div>
  <div className='pane top-pane'>
    <Editor displayname="HTML" language='xml'
     value={html} 
    onChange={setHtml} key='html' />
    <Editor displayname="CSS" language='css' value={css}
    onChange={setCss} key='css'/>
    <Editor displayname="JavaScript" language='javascript' value={js} 
    onChange={setJs} key='js' />

  </div>

  <div className='pane'> <iframe srcDoc={srcDoc} title='output' sandbox='' width='100%' height='50%'/></div>

  </div>);
  
}

export default App;

  
