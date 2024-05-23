import React, { useState, useEffect} from 'react'
import axios from 'axios'
import PostImages from './PostImages';

function ContentAPI() {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [savedPosts, setSavedPosts] = useState([]);
  


  useEffect(() => {
    getImages()
  }, [])
    
  //Get the images from the API
  const getImages = async() => {
    const results = await axios.get('https://pixabay.com/api/?key=43977534-d92769c279df181823fe3c6cf&q=yellow+flowers&image_type=photo');
    const returnImages = results.data.hits;
    setPosts(returnImages);
    setSavedPosts(returnImages)
    setIsLoaded(true);
    
  }

  const handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    const filterPost = savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(search);
    })
    setPosts(filterPost)
  }




  return (
    
    <div>
      <form>
        <p>Search</p>
        <input
          type="search"
          id="searchInput"
          placeholder="search"
          onChange={(e) => handleChange(e)}
        />



      </form>
      <p>Search Items: {posts.length}</p>
      {
        isLoaded ? (
          <div>
          <p>Here are the Images</p>
          <PostImages info={posts}/>
          </div>
        ) : (
          <p>Post Loading. . . . </p>
        )
      }    
    </div>

  )
  
}

export default ContentAPI