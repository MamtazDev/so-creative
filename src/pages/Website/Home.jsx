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
      <div id="features">
        <CommonSection
          title="Video production. Without the hassle"
          subtitle="Film anytime, anywhere with our versatile 
filming kit, packed with the essential 
tools to capture high-quality videos"
          pic={production}
          customWidth="max-w-[390px]"
        />
        <CommonSection
          title="Everything in one place"
          subtitle="Upload assets, create briefs, collaborate 
        with your editing team, and conduct 
        efficient reviews - all within our platform."
          pic={onePlace}
          customWidth="max-w-[400px]"
        />
        <CommonSection
          title="Powerful AI features"
          subtitle="Leverage the power of AI including customized 
        avatars and text-to-speech for effortless 
        content creation."
          pic={powerfull}
          customWidth="max-w-[450px]"
        />
      </div>
      <VideoContent />
      <LevelUp />
      <MadeBy />
      <NextLevel />
      <Footer />
    </div>
  );
};

export default Home;
