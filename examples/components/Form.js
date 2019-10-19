import React, {Component} from 'react';

import JoditEditor from "../../src/JoditEditor";

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  onChange = value => {
    const {onChange} = this.props;
    if (onChange) {
      onChange(value);
    }
  };

  render() {
    const {value, config, refEl} = this.props;
    return <JoditEditor
      ref={refEl}
      value={value}
      config={config}
      onChange={this.onChange}
    />
  };
}
