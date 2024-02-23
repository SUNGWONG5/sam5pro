import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Insights />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
