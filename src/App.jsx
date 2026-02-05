import React from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/Hero-section'
import Clients from './components/Clients'
import Community from './components/Community'
import Unlock from './components/Unlock'
import Achievements from './components/Achievements'
import Calendar from './components/Calendar'
import Customers from './components/Customers'
import CommunityUpdates from './components/Community-Updates'
import FooterSection from './components/Footer'
function App() {
    return (
        <div>
            <Header />
            <HeroSection />
            <Clients />
            <Community />
            <Unlock />
            <Achievements />
            <Calendar />
            <Customers />
            <CommunityUpdates />
            <FooterSection />
        </div>
    );
}
export default App;