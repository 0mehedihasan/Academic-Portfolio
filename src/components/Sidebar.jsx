function Sidebar({ theme, setTheme, data }) {
  return (
    <aside className="w-full p-6 bg-white shadow-lg dark:bg-gray-800 md:w-80 md:h-screen md:sticky md:top-16">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-28 h-28 mb-4 rounded-full border-4 border-indigo-100 dark:border-gray-700"
        />
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Your Name</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Academic Researcher</p>
      </div>
      <div className="mt-6 space-y-4">
        <p className="text-sm text-gray-700 dark:text-gray-200">
          <span className="font-medium">Email:</span> you@example.com
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          <span className="font-medium">Address:</span> Your City, Country
        </p>
        <a
          href="#"
          className="block px-4 py-2 text-center text-white transition bg-indigo-600 rounded-full hover:bg-indigo-700"
        >
          Download CV
        </a>
      </div>
      <div className="mt-6 space-y-3">
        {[
          { name: 'Google Scholar', url: 'https://scholar.google.com', icon: '📚' },
          { name: 'GitHub', url: 'https://github.com', icon: '💻' },
          { name: 'LinkedIn', url: 'https://linkedin.com', icon: '👔' },
        ].map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            className="flex items-center space-x-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <span>{link.icon}</span>
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="w-full px-4 py-2 mt-6 text-white transition bg-indigo-600 rounded-full hover:bg-indigo-700"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </aside>
  );
}

export default Sidebar;
