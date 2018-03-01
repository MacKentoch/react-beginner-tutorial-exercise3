import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wrote: '',
      list: []
    };

    this.onNewItemChange = /* onNewItemChange is used as a callback: ensure this binding to App component */;
    this.addItem = /* onNewItemChange is used as a callback: ensure this binding to App component */;
  }

  render() {
    return (
      <div>
        <h2>Ma TODO list:</h2>
        <div>
          <span>ajouter: </span>
          <input type="text" onChange={this.onNewItemChange} />
          <button onClick={this.addItem}>ajouter</button>
        </div>
        <br />

        <ul>
        /* here: map over this.state.list (element: <li key={TO FILL}>{TO FILL}</li>) */
        </ul>
      </div>
    );
  }

  onNewItemChange(event) {
    /* here: set value to this.state.wrote */
  }

  addItem() {
    /* here: add this.state.wrote to this.state.list array */
  }
}

render(<App />, document.getElementById('root'));
