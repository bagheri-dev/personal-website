import { AboutMe } from "@/Components/index/AboutMe";
import { CodingActivity } from "@/Components/index/CodingActivity";
import { Faqs } from "@/Components/index/Faqs";
import { Hero } from "@/Components/index/Hero";
import { Portfolio } from "@/Components/index/Portfolio";
import { Socials } from "@/Components/index/Socials";
import { Work } from "@/Components/index/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe/>
      <Work/>
      <Portfolio/>
      <CodingActivity/>
      <Faqs />
      <Socials/>
    </>
  );
}
