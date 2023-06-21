import React,{useState} from 'react';
import PropTypes from 'prop-types';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';


import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt,faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { Controlled as ControlledEditor } from 'react-codemirror2';

function Editor(props) {
  const { language, displayname, value, onChange } = props;
const[open,setOpen]=useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={`editor-container ${open?'':'collapsed'}` }>
      <div className='editor-title'>
        {displayname}
        <button  type= "button" className='expand-collapse-btn' onClick={() => setOpen(prevOpen => !prevOpen)}>
  <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
</button>

      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value} key={props.key}
        className='code-mirror-wrapper'
        options={{ lineWrapping: true, lint: true, mode: language, lineNumbers: true ,theme:'material'}}
      />
    </div>
  );
};

Editor.propTypes = {
  language: PropTypes.string.isRequired,
  displayname: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;
