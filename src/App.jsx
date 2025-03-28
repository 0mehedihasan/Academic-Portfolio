import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Section from './components/Section';

function App() {
  const [data, setData] = useState({
    about: '',
    publications: [],
    projects: [],
    awards: [],
  });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    const savedTheme = localStorage.getItem('theme');
    if (savedData) setData(JSON.parse(savedData));
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [data, theme]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 md:flex-row">
      <Sidebar theme={theme} setTheme={setTheme} data={data} />
      <main className="flex-1 p-6 md:p-10">
        <h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">Academic Portfolio</h1>
        <Section title="About Me" type="text" content={data.about} setData={setData} />
        <Section title="Publications" type="list" items={data.publications} setData={setData} />
        <Section title="Projects" type="list" items={data.projects} setData={setData} />
        <Section title="Awards" type="list" items={data.awards} setData={setData} />
      </main>
    </div>
  );
}

export default App;
