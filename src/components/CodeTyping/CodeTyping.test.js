import React from 'react';
import ReactDOM from 'react-dom';
import CodeTyping from './CodeTyping';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CodeTyping />, div);
  ReactDOM.unmountComponentAtNode(div);
});