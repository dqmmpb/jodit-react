import React, {Component} from 'react';

import Form from './Form';

export default class FormWrapper extends Component {
  state = {
    config: {
      readonly: false,
      iframe: true,
      height: 500,
      language: 'zh_cn',
      iframeStyle: 'html{overflow-y: auto !important}.jodit table.jodit_table{width:100%;border:0;border-collapse:collapse;empty-cells:show;max-width:100%}.jodit table.jodit_table th,.jodit table.jodit_table td{padding:2px 5px;border:1px solid #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.jodit table.jodit_table td[data-jodit-selected-cell],.jodit table.jodit_table th[data-jodit-selected-cell]{border:1px double #1e88e5}',
      disablePlugins: ['table', 'video'],
      buttons: [
        'source',
        '|',
        'bold',
        'strikethrough',
        'underline',
        'italic',
        '|',
        'superscript',
        'subscript',
        '|',
        'ul',
        'ol',
        '|',
        'outdent',
        'indent',
        '|',
        'font',
        'fontsize',
        'brush',
        'paragraph',
        '|',
        'image',
        'file',
        'link',
        '|',
        'align',
        'undo',
        'redo',
        '|',
        'cut',
        'hr',
        'eraser',
        '|',
        'fullsize',
        'selectall',
      ],
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
