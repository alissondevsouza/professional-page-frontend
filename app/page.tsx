import { HeroSection } from "./compnents/pages/home/hero-section";
import { HighlightedProjects } from "./compnents/pages/home/highlighted-projects/idex";
import { WorkExperience } from "./compnents/pages/home/work-experience";
import { KnownTechs } from "./compnents/pages/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
