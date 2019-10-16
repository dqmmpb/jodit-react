import './app.css';

import React from 'react';
import ReactDOM from 'react-dom';

import 'jodit/build/jodit.min.css';
import FormWrapper from "./components/FormWrapper";


ReactDOM.render(<FormWrapper/>, document.getElementById('editor'));
