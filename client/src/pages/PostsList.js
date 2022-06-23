import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Post from './Post';


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
        let path = `/post`;
        navigate(path);
    }

    return(
        <div className='postPage'>
            <div className='leftSide'>
                <div className='listOfPosts'>
                    {postList.map((value, key) => {
                        return(
                            <div key={key} className='post' onClick={() => {navigate(`/post/${value.id}`)}}>
                                {value.title}                    {/*get author ID somehow*/}
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