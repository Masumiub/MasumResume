import React from 'react';
import Header from '../Components/Header';
import AboutMe from '../Components/AboutMe';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import ContactMe from '../Components/ContactMe';
import Projects from '../Components/Projects';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>

            <AboutMe></AboutMe>

            <div>
                <Skills></Skills>
            </div>

            <div>
                <Education></Education>
            </div>

            <div>
                <Projects></Projects>
            </div>

            <div>
                <ContactMe></ContactMe>
            </div>

        </div>
    );
};

export default Home;