import React from 'react'

const Gif = ({url, alt}) => {
  return(
    <div>
      <img src={url} alt={alt}/>
      <br/>
    </div>
  )
}

export default Gif
