import React, { useState, useEffect } from 'react'
import axios from 'axios'
const https = require('https');

function DataFetching () {
  const [post, setPost] = useState([])
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)
  const [test, setTest] = useState()

  useEffect(() => {
    
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

  function getCountryName(code) {
      var i = 1
      var flag = true
      while (flag){ 
          let myRequest = https.get(`https://jsonmock.hackerrank.com/api/countries?page=${i}`, resp => {

            let data = ''

            resp.on('data', (chunk) => {
              console.log("--chunk--", data.length)
              data += chunk;
            });
          
            resp.on('end', () => {
              if (i <= data.total_pages){
                i++
                data.data.map((state) => {
                    console.log(state)
                    if (state.alpha2Code === code){

                        flag = false
                        setTest(state.name)
                    
                    }
                })
              }else{
                  flag = false
                  return null
                  
              }
            });

          }).on("error", (err) => {
            console.log("Error: " + err.message);
          })
      }
  }


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

      <button type='button' onClick={() => getCountryName("AF")}>test</button>
      <p>{test}</p>



    </div>
  )
}

export default DataFetching
