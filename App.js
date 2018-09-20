import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: "",
      backgroundColor: null,
      tweetQuote: ""
    }
    this.newQuoteHandler = this.newQuoteHandler.bind(this);
  }
  componentWillMount(){
    axios.get('https://talaikis.com/api/quotes/random/').then((response)=>{
      this.setState({
        quote: response.data.quote,
        author: response.data.author,
        tweetQuote: "'" + response.data.quote + "'"
      })
    })
    axios.get('http://www.colr.org/json/color/random').then((response)=>{
      this.setState({
        backgroundColor: "#" + response.data.new_color
      })
    })
  }


    newQuoteHandler = () => {
      axios.get('https://talaikis.com/api/quotes/random/').then((response)=>{
        this.setState({
          quote: response.data.quote,
          author: response.data.author,
        })
      })
      axios.get('http://www.colr.org/json/color/random').then((response)=>{
        this.setState({
          backgroundColor: "#" + response.data.new_color
        })
      })

    }

  render() {
    return (
      <div className="quote-box" id="quote-box" style={{ backgroundColor: this.state.backgroundColor }}>
        <div className="text" id="text">{this.state.quote}</div>
      <div className="author" id="author">- {this.state.author}</div>
    <div className="button-div">
      <div className="twitter-button">
        <a className="twitter-share-button"
          href="https://twitter.com/intent/tweet"
          data-text="Share a quote of yours with the twitter-sphere"
          data-url="/"
          data-hashtags="quotes"
          data-size="large"
          >
Tweet</a></div>
      <button onClick={this.newQuoteHandler} id="new-quote">Click Me</button>
    </div>
      </div>
    );
  }
}

export default App;
