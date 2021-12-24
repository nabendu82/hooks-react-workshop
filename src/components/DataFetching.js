import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataFetching = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
        <h2>
            <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
        </h2>
    )
}

export default DataFetching
