import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

function Post() {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/${id}`).then((response) => {	//need to fix the URL at a later time to redirect to the proper page
            setPostObject(response.data);
        });

        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setComments(response.data);
        });
   }, []);

   const addComment = () => {
        axios.post("http://localhost:3001/comments", {
            body: newComment, post_id: id
        },
        {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }
        ).then((response) => {
            if(response.data.error){
                alert("Please log in...");
            }
            else{
                //console.log("Comment added");
                const commentToAdd = {body: newComment, author_Id: response.data.author_Id};    //-- grab the comment being added
                setComments([...comments, commentToAdd]);   //take whatever we previously had and add the new comment to it
                setNewComment("");  //once the comment is added/displayed, we set to empty so that the input is cleared
            }
        });
   };

    return(
        <div className='postPage'>
            <div className='leftSide'>
		        <div className='post' id="individual">
                    <div className='title'>{postObject.title}</div>
                    <div className='body'>{postObject.postText}</div>
                    <div className='footer'>{postObject.author_Id}</div> {/*need to get users.username*/}
		        </div>
            </div>
            <div className='rightSide'>
                <div className='addCommentContainer'>
                    <input type='text' placeholder='Comment...' value={newComment} onChange={(event) => {setNewComment(event.target.value)}} />
                    <button onClick={addComment}>Add Comment</button>
                </div>
                <div className='listOfComments'>
                    {comments.map((comment, key) => {
                        return (
                            <div key={key} className="comment">
                                {comment.body}
                                <label>UserId: {comment.author_Id}</label>  
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default Post;