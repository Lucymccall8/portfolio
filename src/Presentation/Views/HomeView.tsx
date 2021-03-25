import React from 'react';
import HomeNavBar from '../Navigation/HomeNavBar';
import '../styles/HomeView.css';

const HomeView: React.FC = () => {
    return (
        <>
            
            <div className="hero-image">
                <HomeNavBar/>
                <div className="hero-text">
                    <h1>My name is Lucy McCall</h1>
                    <p>I'm a Full Stack Developer</p>
                </div>
            </div>
        </>
    );
}
export default HomeView;