import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/layout/Header';
import PrivateRoute from './components/layout/PrivateRoute';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetails from './components/jobs/JobDetails';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './pages/NotFound';
import PostJob from './components/jobs/PostJob';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (credentials) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        resolve();
      }, 1000);
    });
  };

  const handleRegister = async (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        resolve();
      }, 1000);
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };




  // Add handler function
  const handlePostJob = async (jobData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Job posted:', jobData);
        resolve();
      }, 1000);
    });
  };

  return (
    <Router>
      <div className="app">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            <Route path="/jobs" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Jobs />
              </PrivateRoute>
            } />
            <Route path="/jobs/:id" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <JobDetails />
              </PrivateRoute>
            } />

            <Route path="/post-job" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <PostJob onPostJob={handlePostJob} />
              </PrivateRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;