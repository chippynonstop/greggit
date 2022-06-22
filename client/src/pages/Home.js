import React from 'react';
import axios from "axios";
import{useEffect, useState} from 'react';

function Home () {
    const [listOfSubreddits, setListOfSubreddits] = useState([]);

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
                    <div className='post'>
                    <div className="title">{value.name}</div>
                    <div className="body">{value.description}</div>
                    </div>
                );
            })}
        </div>
    )
}
export default Home;