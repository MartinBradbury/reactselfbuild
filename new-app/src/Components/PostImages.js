import React from 'react'

function PostImages(props) {

  return (
    props.info.map(d => {
        return(
    <div>
        <p>{d.type}</p>
        <p>{d.user}</p>
        <img src={d.webformatURL} alt='images'/>
        <p>{d.tags}</p>
    </div>
    )})
  )
}

export default PostImages