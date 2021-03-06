import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import CreateSubreddit from './pages/CreateSubreddit';
import CreatePost from './pages/CreatePost';
import PostsList from './pages/PostsList';
import Registration from './pages/Registration';
import Login from './pages/Login';
import {AuthContext} from './helpers/AuthContext';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ErrorPage from './pages/ErrorPage';
import Post from './pages/Post';

function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/auth/auth', {
      headers: {
        accessToken: localStorage.getItem('accessToken'),
      }}).then((response) => {
        if(response.data.error){
          setAuthState(false);
        }
        else{
          setAuthState(true);
        }
      });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{authState, setAuthState}}>
        <Router>
          <div className="navbar">
            <div className='heading'>greggit</div>
            <Link to="/">Subreddits</Link>
            <Link to="/createsubreddit">Create Subreddit</Link>
            {!authState && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/registration">Register</Link>
              </>
            )}
            
          </div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/createsubreddit" element={<CreateSubreddit/>} />
            <Route path="/subreddit/:id" element={<PostsList/>} />
            <Route path="/createpost" element={<CreatePost/>} />
            <Route path="/post/:id" element={<Post/>} />   {/*add */}
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </Router>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
