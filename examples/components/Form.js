import React, {Component} from 'react';

import JoditEditor from "../../src/JoditEditor";

export default class Form extends Component {
  onChange = value => {
    const {onChange} = this.props;
    if (onChange) {
      onChange(value);
    }
  };

  render() {
    const {value, config} = this.props;
    return <JoditEditor
      value={value}
      config={{...config}}
      onChange={this.onChange}
    />
  };
}
