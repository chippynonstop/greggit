import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import CreateSubreddit from './pages/CreateSubreddit';
import CreatePost from './pages/CreatePost';
import PostsList from './pages/PostsList';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {

  return (
    <div className="App"> 
      <Router>
        <div className="navbar">
	        <Link to="/">Subreddits</Link>
          <Link to="/createsubreddit">Create Subreddit</Link>
          <Link to="/login">Login</Link>
          <Link to="/registration">Register</Link>
	      </div>
		    <Routes>
		      <Route path="/" element={<Home/>} />
          <Route path="/createsubreddit" element={<CreateSubreddit/>} />
          <Route path="/subreddit/:id" element={<PostsList/>} />
          <Route path="/createpost" element={<CreatePost/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
		    </Routes>
		  </Router>
    </div>
  );
}

export default App;
