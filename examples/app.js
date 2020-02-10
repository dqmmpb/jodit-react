import './app.css';

import React from 'react';
import ReactDOM from 'react-dom';

import FormWrapper from "./components/FormWrapper";
import 'jodit/build/jodit.min.css'


ReactDOM.render(<FormWrapper/>, document.getElementById('editor'));
