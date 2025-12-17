import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import WorkAchievements from './pages/WorkAchievements';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="profile/achievements" element={<WorkAchievements />} />
                <Route path="projects" element={<Projects />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:slug" element={<BlogPost />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default App;
