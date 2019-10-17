import React, {Component} from 'react';

import Form from './Form';

export default class FormWrapper extends Component {
  state = {
    config: {
      readonly: false,
      iframe: true,
      height: 500,
      iframeStyle: 'html{overflow-y: auto !important}p{margin: 0 0 1em 0}',
    },
    value: 'Hello world!',
  };
  toggleReadOnly = () => {
    if(this.editor) {
      this.editor.toggleReadOnly();
    }
  };
  onChange = (value) => {
    this.setState(prevState => ({
      config: prevState.config,
      value: value,
    }));
  };

  refEl = (el) => {
    this.editor = el;
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: 'Hello Sam!',
      })
    }, 1000);
  }
  render() {
    return <React.Fragment>
      <Form
        ref={this.refEl}
        value={this.state.value}
        config={this.state.config}
        onChange={this.onChange}
      />
      <button type="button" onClick={this.toggleReadOnly}>Toggle Read-Only</button>
    </React.Fragment>
  };
}
