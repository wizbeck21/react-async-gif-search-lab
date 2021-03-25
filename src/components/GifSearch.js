import React, { Component } from 'react';

class GifSearch extends Component {
  
  state = {
    query: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})}/>
      </form>
    )
  }
}

export default GifSearch