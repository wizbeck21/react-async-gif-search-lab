import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(e);
  }

  fetchGifs = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=HCg9Af5MANOCru9LZ3XhCXVFWtWmdMju&rating=g`)
    .then(r => r.json())
    .then(({data}) => {
      this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url}) ) })
    })
  }

  render(){
    return(
      <div>
        < GifSearch fetchGifs={this.fetchGifs}/>
        < GifList gifs={this.state.gifs}/>
      </div>
    )
  }

  componentDidMount() {
    this.fetchGifs();
  }
}

export default GifListContainer