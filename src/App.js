import React, { Component } from 'react';
import { render } from 'react-dom';
import confirmService from './confirmService'
import FormData from './FormData'

export default class App extends Component {
  constructor() {
    super();
    
    this.removeItem = this.removeItem.bind(this);
  }

  async removeItem({ target: { value } }) {
    const result = await confirmService.show({
      message: <FormData ref={React.createRef()}/>
    });

    if (result) {
      console.log(result);
    }
    console.log(value);
  }

  render() {
    return (
      <div className="container-fluid">
            <button 
                className="button is-danger"
                value={2}
                onClick={this.removeItem}
              >
                Delete
            </button>
      </div>
    );
  }
}
