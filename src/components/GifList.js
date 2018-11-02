import React from 'react'
import Gif from './Gif'

const GifList = ({gifs}) => {
  return(
    <div>
    {gifs.map(gif => <Gif url={gif.images.original.url} alt={gif.slug} key={gif.id}/>)}
    </div>
  )
}

export default GifList
