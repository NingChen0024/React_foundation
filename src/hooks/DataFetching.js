import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching () {
  const [post, setPost] = useState([])
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  useEffect(() => {
    console.log('Fetch')

    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [idFromButtonClick])

  const handleClick = () => {
    setIdFromButtonClick(id)
  }// put id from input to idButtonClick

  return (
    <div>

      {/* <ul>
                {posts.map(post => (
                    <li key = {post.id}>{post.title}</li>
                ))}
            </ul> */}

      <h5 key={post.id}>{post.title}</h5>

      <input type='text' value={id} onChange={e => setId(e.target.value)} />
      <button type='button' onClick={handleClick}>Fetch Post</button>

    </div>
  )
}

export default DataFetching
