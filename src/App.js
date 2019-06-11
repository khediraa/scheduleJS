import React, { Component } from 'react';

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
          <ul>
            {events.map(item => (
              <li>
                Activity: {item.activity} | Startdate: {item.startDate} | Enddate: {item.endDate} | Location: {item.location}
              </li>
            ))}
          </ul>
        </div>  
      );
    }
  }
}

export default App;
