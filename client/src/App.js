import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import CreateSubreddit from './pages/CreateSubreddit';

function App() {

  return (
    <div className="App"> 
      <Router>
        <div className="navbar">
	        <Link to="/">Subreddits</Link>
          <Link to="/createsubreddit">Create Subreddit</Link>
	      </div>
		    <Routes>
		      <Route path="/" element={<Home/>} />
          <Route path="/createsubreddit" element={<CreateSubreddit/>} />
		    </Routes>
		  </Router>
    </div>
  );
}

export default App;
