import React from 'react'
import './App.css'
import Header from './compuntes/Header'
import HeroSection from './compuntes/Hero-section'
import Clintes from './compuntes/Clintes'
import Community from './compuntes/Community'
import Unlock from './compuntes/Unlock'
function App() {
    return (
        <div>
            <Header />
            <HeroSection />
            <Clintes />
            <Community />
            <Unlock />
        </div>
    );
}
export default App;