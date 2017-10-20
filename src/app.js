import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './Root';

//enables react-hot-reload 3 for any children of Root:

const render = Counter => {

  ReactDOM.render(
    <AppContainer>
      <Counter />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root);

if (module.hot) {
  //notice that there is the path of the Root component
  module.hot.accept('./Root', () => {
    render(Root);
  })
}
