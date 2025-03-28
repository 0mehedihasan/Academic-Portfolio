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
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginInput, setLoginInput] = useState('');

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

  const handleLogin = () => {
    if (loginInput === 'admin123') { // Simple hardcoded password
      setIsAdmin(true);
    } else {
      alert('Incorrect password');
    }
    setLoginInput('');
  };

  const handleLogout = () => setIsAdmin(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 md:flex-row">
      <Sidebar theme={theme} setTheme={setTheme} data={data} />
      <main className="flex-1 p-6 md:p-12">
        <header className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Academic Portfolio</h1>
          {!isAdmin ? (
            <div className="flex items-center space-x-2">
              <input
                type="password"
                value={loginInput}
                onChange={e => setLoginInput(e.target.value)}
                placeholder="Admin Password"
                className="px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleLogin}
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Login
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          )}
        </header>
        <Section title="About Me" type="text" content={data.about} setData={setData} isAdmin={isAdmin} />
        <Section title="Publications" type="list" items={data.publications} setData={setData} isAdmin={isAdmin} />
        <Section title="Projects" type="list" items={data.projects} setData={setData} isAdmin={isAdmin} />
        <Section title="Awards" type="list" items={data.awards} setData={setData} isAdmin={isAdmin} />
      </main>
    </div>
  );
}

export default App;
