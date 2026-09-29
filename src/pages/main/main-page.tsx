import Navigation from '@components/navigation/navigation';
import Footer from '@components/footer/footer';
import HeroSection from './sections/hero-section';
import AboutSection from './sections/about-section';
import SkillsSection from './sections/skills-section';
import ExperienceSection from './sections/experience-section';
import ProjectsSection from './sections/projects-section';

const MainPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
