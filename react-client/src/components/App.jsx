import React from 'react';
import $ from 'jquery';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: 'api/bars',
      success: (data) => {
        this.setState({
          bars: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleSubmit(e) {
    console.log('submit clicked skrrt');
    e.preventDefault();
  }

  render () {
    return (
    <div>
      <h1>Hanjoon's MVP Guest List</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name of the Night:
          <input type="text" value={this.state.value} />
        </label>
        <input type="submit" value="Party time!" />
      </form>

      <List bars={this.state.bars}/>

    </div>
    )
  }
}

export default App;