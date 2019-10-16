import React, {useEffect, useRef, forwardRef, useLayoutEffect} from 'react'
import PropTypes from 'prop-types'
import Jodit from 'jodit/build/jodit'
import 'jodit/build/jodit.min.css'

const JoditEditor = forwardRef(({value, config, onChange, onBlur, tabIndex}, ref) => {
  const textArea = useRef(null);

  const blurHandler = value => {
    onBlur && onBlur(value);
  };

  const changeHandler = value => {
    onChange && onChange(value);
  };

  useEffect(() => {
    textArea.current = new Jodit(textArea.current, config);
    textArea.current.value = value
    textArea.current.events.on('blur', () => blurHandler(textArea.current.value));
    textArea.current.events.on('change', () => {
      changeHandler(textArea.current.value)
    });
    textArea.current.workplace.tabIndex = tabIndex || -1;

    return () => {
      textArea.current.destruct();
    }
  }, []);

  useEffect(() => {
    if(typeof config.readonly !== 'undefined') {
      textArea.current.setReadOnly(config.readonly);
    }
  }, [config]);

  return <textarea ref={textArea}></textarea>
});

JoditEditor.propTypes = {
  value: PropTypes.string,
  config: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default JoditEditor
