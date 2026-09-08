import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Feed = () => {

    const [posts, setPosts] = useState([])

    const fetchPost = async () => {
        await axios.get("http://localhost:3000/feed")
        .then((res) => {
            setPosts(res.data.posts)
        })
    }

    useEffect(() => {
        fetchPost()
    }, [])

  return (
    <div>
        <h1>Feed</h1>
        <div className="postContainer">
            { posts.length > 0 ? (
                posts.map((data) => {
                return <div className='postCard' key={data._id}>
                    <img className='postImage' src={data.image} alt=""/>
                    <p className='postCaption'>{data.caption}</p>
                </div>
                })
                ) : (
                    <h1>No post available yet</h1>
                )
            }
        </div>
    </div>
  )
}

export default Feed