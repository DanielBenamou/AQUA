
import { Box } from '@mui/material';
import Post from "./Post";
import { useState, useEffect } from 'react';



const Feed = (props) => {
    const [posts, setPosts] = useState([]);
    const { item } = props;
    const { item2 } = props;

    if (item != null) {
        posts.push(item);
        return (
            <Box flex={4} p={2}>
                {posts.map((post) =>
                    <Post item={post.text} item2={post.date}/>

                )}
            </Box>
        );
    }
}

export default Feed;