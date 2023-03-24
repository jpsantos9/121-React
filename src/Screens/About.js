import React from 'react';
import axios from 'axios';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: null
    }

    this.loadCatFacts = this.loadCatFacts.bind(this);
  }

  // we can use sample APIs from https://apipheny.io/free-api/
  loadCatFacts() {
    // Axios get request to https://catfact.ninja/fact
    axios.get("https://catfact.ninja/fact")
      .then((resp) => {   // process the data recieved from the API
        this.setState({facts: resp.data})
      });
    console.log(this.state.facts);
  }

  render() {
    return (
      <div>
        <h1>About Screen</h1>
        <button onClick={this.loadCatFacts}>Load Cat Facts</button>
        <div>
          {
            !this.state.facts 
              ? ""
              : <p>{this.state.facts.fact}</p>
          }
        </div>
      </div>
    )
  }
}

export default About;