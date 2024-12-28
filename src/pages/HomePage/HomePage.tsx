import Page from "../../components/ui/Page/Page";
import CallToAction from "./CallToAction/CallToAction";
import Hero from "./Hero";
import './HomePage.css';
import globeImg from '../../assets/globe.png';
import { motion } from "motion/react";

const HomePage: React.FC = () => {

    return <Page id='homepage'>
        <Page.PageSection id='hero-section'>
            <motion.div id="hero-left">
                <Hero id='hero'/>
                <CallToAction id='cta'/>
            </motion.div>
            <motion.div id='hero-right'>
                <img src={globeImg}/>
            </motion.div>
        </Page.PageSection>

        <Page.PageSection id='features' sectionTitle='Features' >
            
        </Page.PageSection>

        <Page.PageSection id='how-it-works' sectionTitle='How It Works' >
        </Page.PageSection>

    </Page>
}

export default HomePage;