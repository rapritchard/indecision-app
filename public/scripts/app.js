'use strict';

var appRoot = document.getElementById('app');

var visibility = false;

var toggle = function toggle() {
  visibility = !visibility;
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggle },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'p',
      null,
      'Some details'
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
