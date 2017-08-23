console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
  console.log('hello world 2')
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
