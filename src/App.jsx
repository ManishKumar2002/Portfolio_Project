import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layouts/MainLayout";
import LoadingScreen from "./components/LoadingScreen";
import SEO from "./components/SEO";

// Import all sections
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadComplete={handleLoadingComplete} />;
  }

  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEO
          title="Manish Kumar | Full Stack Developer"
          description="Full Stack Developer with expertise in .NET, Angular, React, and SQL Server. Check out my project portfolio and experience."
        />
        <MainLayout>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </MainLayout>
      </ThemeProvider>
    </HelmetProvider>
  );
}
