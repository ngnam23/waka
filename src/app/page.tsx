import Banner from "@/components/Home/Banner";
import ForYou from "@/components/Home/ForYou";
import Newest from "@/components/Home/Newest";
import Podcast from "@/components/Home/Podcast";
import Ranking from "@/components/Home/Ranking";
import Reading from "@/components/Home/Reading";

const Home = () => {
  return (
    <div className="relative bg-background">
      <Banner />
      <Reading />
      <Newest />
      <ForYou />
      <Ranking />
      <Podcast />
    </div>
  );
};

export default Home;
