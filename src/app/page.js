import Image from "next/image";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Discover from "../components/discover";
import AdvantagesOfThePlatform from "../components/advantagesOfThePlatform";
import StepsOfSuccess from "../components/stepsofsuccess";
import TopTalentsReadyToHelp from "../components/topTalentsReadyToHelp";
import GetAnswers from "../components/getAnswers";
import Footer from "../components/footer";
import Jobwheeinaction from "../components/jobwheeinaction";
import SuccessfulContracts from "@/components/SuccessfulContracts";
import MatchSection from "@/components/MatchSection";

export default function Home() {
  return (
    <div className="space-y-4">
      <Navbar />
      <Banner />
      <Discover />    
      <SuccessfulContracts />
      <MatchSection />
      <StepsOfSuccess />
      <AdvantagesOfThePlatform />
      <Jobwheeinaction />
      <TopTalentsReadyToHelp />
      <GetAnswers />
      <Footer />
    </div>
  );
}
