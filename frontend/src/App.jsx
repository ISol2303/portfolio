import { useEffect, useMemo, useState } from 'react';
import { getProjects, getSkills } from './api/portfolioApi';
import { fallbackProjects, fallbackSkills } from './data/fallbackData';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [skills, setSkills] = useState(fallbackSkills);
  const [projects, setProjects] = useState(fallbackProjects);
  const [apiStatus, setApiStatus] = useState('loading');

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        const [skillsData, projectsData] = await Promise.all([getSkills(), getProjects()]);
        setSkills(skillsData);
        setProjects(projectsData);
        setApiStatus('connected');
      } catch (error) {
        setApiStatus('fallback');
      }
    };

    loadPortfolioData();
  }, []);

  const skillGroups = useMemo(() => {
    return skills.reduce((groups, skill) => {
      const category = skill.category || 'Other';
      groups[category] = groups[category] ? [...groups[category], skill] : [skill];
      return groups;
    }, {});
  }, [skills]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Header />
      <main>
        <Hero apiStatus={apiStatus} />
        <SkillsSection skillGroups={skillGroups} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
