import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

function Post() {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/${id}`).then((response) => {	//need to fix the URL at a later time to redirect to the proper page
            setPostObject(response.data);
        });
   }, []);

    return(
        <div className='postPage'>
            <div className='leftSide'>
		        <div className='post' id="individual">
                    <div className='title'>{postObject.title}</div>
                    <div className='body'>{postObject.postText}</div>
                    <div className='footer'>{postObject.author_Id}</div> {/*need to get users.username*/}
		        </div>
            </div>
            <div className='rightSide'>Comment Section</div>
        </div>
    );
}
export default Post;