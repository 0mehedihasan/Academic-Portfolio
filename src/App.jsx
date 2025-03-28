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
  const [showLogin, setShowLogin] = useState(false);
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
    if (loginInput === 'admin123') {
      setIsAdmin(true);
      setShowLogin(false);
    } else {
      alert('Incorrect password');
    }
    setLoginInput('');
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setShowLogin(false);
  };

  const sections = ['About Me', 'Publications', 'Projects', 'Awards'];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-white shadow-lg dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Your Name</h1>
        <nav className="flex items-center space-x-6">
          {sections.map(section => (
            <a
              key={section}
              href={`#${section.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {section}
            </a>
          ))}
          {isAdmin ? (
            <button
              onClick={handleLogout}
              className="px-4 py-1 text-white bg-red-600 rounded-full hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className="px-4 py-1 text-white bg-indigo-600 rounded-full hover:bg-indigo-700"
            >
              Admin Login
            </button>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Profile"
            className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl font-bold">Welcome to My Academic Portfolio</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Researcher | Scholar | Innovator
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex pt-16">
        <Sidebar theme={theme} setTheme={setTheme} data={data} />
        <main className="flex-1 p-6 md:p-12">
          <Section
            id="about-me"
            title="About Me"
            type="text"
            content={data.about}
            setData={setData}
            isAdmin={isAdmin}
          />
          <Section
            id="publications"
            title="Publications"
            type="list"
            items={data.publications}
            setData={setData}
            isAdmin={isAdmin}
          />
          <Section
            id="projects"
            title="Projects"
            type="list"
            items={data.projects}
            setData={setData}
            isAdmin={isAdmin}
          />
          <Section
            id="awards"
            title="Awards"
            type="list"
            items={data.awards}
            setData={setData}
            isAdmin={isAdmin}
          />
        </main>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </footer>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">Admin Login</h3>
            <input
              type="password"
              value={loginInput}
              onChange={e => setLoginInput(e.target.value)}
              placeholder="Enter password"
              className="w-full p-3 mb-4 border rounded dark:bg-gray-700 dark:text-white"
            />
            <div className="flex space-x-3">
              <button
                onClick={handleLogin}
                className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
              >
                Login
              </button>
              <button
                onClick={() => setShowLogin(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-600 dark:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
