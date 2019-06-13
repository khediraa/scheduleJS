import React, { Component } from 'react';
import Calendar from './components/Calendar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5c9cdca03300004d003f2151')
      .then(res => res.json())
      .then(data => {
        this.setState({
          events: data,
          isLoaded: true
        })
      })
  }
  
  render() {
    const { events, isLoaded} = this.state;
    if(!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <Calendar events={events} />
        </div>  
      );
    }
  }
}

export default App;
