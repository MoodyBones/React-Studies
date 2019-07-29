import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// JSX
// JS rendition of HTML
// you can't render 2 jsx next to one another
// you could wrap them in a div!!
// always start your functions with a Capital

function App() {
  return (
    <div>
      <ul>
        <li>Hi</li>
        <li>I'm</li>
        <li>Mel</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
