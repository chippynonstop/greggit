import React from 'react';
import axios from "axios";
import{useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

function Home () {
    const [listOfSubreddits, setListOfSubreddits] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/subreddits").then((response) => {
            //console.log(response.data);
            setListOfSubreddits(response.data);
        });
    }, []);

    return(
        <div>
            {listOfSubreddits.map((value, key) => {
                return(
                    <div className='post' onClick={() => {navigate(`/subreddit/${value.id}`)}}>
                        <div className="title">{value.name}</div>
                        <div className="body">{value.description}</div>
                    </div>
                );
            })}
        </div>
    )
}
export default Home;