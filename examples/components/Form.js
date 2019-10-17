import React, {Component} from 'react';

import JoditEditor from "../../src/JoditEditor";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.editor = React.createRef();
  }

  toggleReadOnly = () => {
    if(this.editor) {
      this.editor.current.setReadOnly(!this.editor.current.getReadOnly());
    }
  };

  onChange = value => {
    const {onChange} = this.props;
    if (onChange) {
      onChange(value);
    }
  };

  render() {
    const {value, config} = this.props;
    return <JoditEditor
      ref={this.editor}
      value={value}
      config={{...config}}
      onChange={this.onChange}
    />
  };
}
