import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
const BASEURL = 'http://api.giphy.com/v1/gifs/search?q='
const APIKEY = '&api_key=dc6zaTOxFJmzC&rating=g'

export default class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      search: '',
      gifs: []
    }
  }

  fetchGifs(query) {
    const url = BASEURL + query + APIKEY;
    fetch(url).then(res => res.json()).then(json => this.addGifsToState(json.data))
  }

  addGifsToState(gifDataArray) {
    const newGifArray = []
    gifDataArray.map(gif => newGifArray.push(gif))
    newGifArray.length = 3
    this.setState({
      gifs: newGifArray
    })
  }

  handleSearchClick = (e) => {
    e.preventDefault()
    this.fetchGifs(this.state.search)
  }

  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return(
      <div>
        <GifSearch
          value={this.state.value}
          onClick={this.handleSearchClick}
          onChange={this.handleSearchChange}
        />
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
