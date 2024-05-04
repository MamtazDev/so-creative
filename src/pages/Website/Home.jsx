import CommonSection from "../../Shared/Website/CommonSection";
import Footer from "../../Shared/Website/Footer";
import Header from "../../Shared/Website/Header/Header";
import Banner from "../../components/Website/Banner";
import LevelUp from "../../components/Website/LevelUp";
import MadeBy from "../../components/Website/MadeBy";
import NextLevel from "../../components/Website/NextLevel";
import Teams from "../../components/Website/Teams";
import VideoContent from "../../components/Website/VideoContent";
import production from "../../assets/website/production.svg";
import onePlace from "../../assets/oneplace.png";
import powerfull from "../../assets/aifeature.png";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <Banner />
      <Teams />
      <CommonSection
        title="Video production without the hassle"
        subtitle="Film anytime, anywhere with our versatile <br>
filming kit, packed with the essential <br>
tools to capture high-quality videos"
        pic={production}
      />
      <CommonSection
        title="Everything in one place"
        subtitle="Upload assets, create briefs, collaborate <br>
        with your editing team, and conduct <br>
        efficient reviews - all within our platform."
        pic={onePlace}
      />
      <CommonSection
        title="Powerful AI features"
        subtitle="Leverage the power of AI including customized <br>
        avatars and text-to-speech for effortless <br>
        content creation."
        pic={powerfull}
      />
      <VideoContent />
      <LevelUp />
      <MadeBy />
      <NextLevel />
      <Footer />
    </div>
  );
};

export default Home;
