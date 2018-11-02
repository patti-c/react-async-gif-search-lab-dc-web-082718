import React from 'react'

const GifSearch = ({value, onChange, onClick}) => {
  return(
    <form>
      <input value={value} type="text" onChange={onChange}/>
      <button type="submit" onClick={onClick}>Submit</button>
    </form>
  )
}

export default GifSearch
