import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import FeaturesBar from './components/FeaturesBar';
import About from './components/About';
import VisionMission from './components/VisionMission';
import TeamStories from './components/TeamStories';
import MeetFarmers from './components/MeetFarmers';
import CoffeePlant from './components/CoffeePlant';
import Products from './components/Products';
import ConsumerInsights from './components/ConsumerInsights';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <div className="hero-wrapper">
        <Nav />
        <Hero />
      </div>
      <FeaturesBar />
      <About />
      <VisionMission />
      <TeamStories />
      <MeetFarmers />
      <CoffeePlant />
      <Products />
      <ConsumerInsights />
      <Footer />
    </div>
  );
}
