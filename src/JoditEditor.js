import React, {useEffect, useRef, forwardRef, useLayoutEffect} from 'react'
import PropTypes from 'prop-types'
import Jodit from 'jodit'

const JoditEditor = forwardRef(({value, config, onChange, onBlur}, ref) => {
  const textArea = useRef(null);

  const blurHandler = value => {
    onBlur && onBlur(value);
  };

  const changeHandler = value => {
    onChange && onChange(value);
  };

  useLayoutEffect(() => {
    textArea.current = new Jodit(textArea.current, config);
    textArea.current.value = value;
    textArea.current.events.on('blur', () => blurHandler(textArea.current.value));
    textArea.current.events.on('change', (a) => {
      changeHandler(textArea.current.value)
    });

    return () => {
      textArea.current.destruct();
    }
  }, []);

  useLayoutEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(textArea);
      } else {
        ref.current = textArea.current;
      }
    }
  }, [textArea]);

  useLayoutEffect(() => {
    if (textArea && textArea.current && textArea.current.value !== value) {
      textArea.current.value = value;
    }
  }, [value]);

  return <textarea ref={textArea}></textarea>
});

JoditEditor.propTypes = {
  value: PropTypes.string,
  config: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

export default JoditEditor
