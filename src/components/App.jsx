import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        'hi there! Great Day Today!',
        'Hi how are you:)'
      ]
    };
  }

  render() {
    var meesageNodes = this.state.messages.map((message) => {
      return (
        <div style={{color: 'red'}}>
          <h2>Message: {message}</h2>
        </div>
      );
    });

    return (
      <diV>
        {meesageNodes}
      </diV>
    );
  }
}

export default App;
