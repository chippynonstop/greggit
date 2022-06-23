import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";


function PostsList() {
    let {id} = useParams();
    let navigate = useNavigate();
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/subreddit/${id}`).then((response) => {   //reddits i/o posts
            setPostList(response.data);
        });
    }, []);

    const addPost = () => {
        /* axios.post("http://localhost:3001/post").then((response) => {       //add a post
            navigate("/");
        }); */
        let path = `http://localhost:3001/post`;
        navigate(path);
    }

    return(
        <div className='postPage'>
            <div className='leftSide'>
                <div className='listOfPosts'>
                    {postList.map((post, key) => {
                        return(
                            <div key={key} className='post'>
                                {post.title}                    {/*get author ID somehow*/}
                            </div>
                        );
                    })}
                </div>    
            </div>
            <div className='rightSide'>
                <div className='addPostContainer'>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
        </div>
    );
}
export default PostsList;