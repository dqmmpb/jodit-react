import React, {Component} from 'react';

import Form from './Form';

export default class FormWrapper extends Component {
  state = {
    config: {
      readonly: false,
      iframe: true,
      iframeStyle: '',
    },
    value: '',
    content: '',
  };
  toggleReadOnly = () => {
    this.setState(prevState => {
      let config = {
        ...prevState.config,
        readonly: !prevState.config.readonly
      };

      return {
        config: config,
        value: prevState.value
      }
    });
  };
  onChange = (value) => {
    this.setState(prevState => ({
      config: prevState.config,
      value: value,
    }));
  };

  render() {
    return <div>
      <Form
        value={this.state.value}
        config={this.state.config}
        onChange={this.onChange}
      />
      <button type="button" onClick={this.toggleReadOnly}>Toggle Read-Only</button>
    </div>
  };
}
