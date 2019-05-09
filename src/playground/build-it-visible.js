const appRoot = document.getElementById('app');

let visibility = false;

const toggle = () => {
  visibility = !visibility;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggle}>{visibility ? 'Hide details' : 'Show details'}</button>
      {visibility && <p>Some details</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();