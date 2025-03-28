function Sidebar({ theme, setTheme, data }) {
  return (
    <aside className="w-full md:w-80 p-6 bg-white shadow-lg dark:bg-gray-800 md:h-screen md:sticky md:top-0">
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-24 h-24 mb-4 rounded-full border-4 border-gray-200 dark:border-gray-700"
        />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Your Name</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Academic Researcher</p>
      </div>
      <div className="mt-6">
        <p className="text-sm text-gray-700 dark:text-gray-200">
          <span className="font-medium">Email:</span> you@example.com
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-200">
          <span className="font-medium">Address:</span> Your City, Country
        </p>
        <a
          href="#"
          className="block w-full px-4 py-2 mt-4 text-center text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Download CV
        </a>
      </div>
      <div className="mt-6 space-y-2">
        {[
          { name: 'Google Scholar', url: 'https://scholar.google.com' },
          { name: 'GitHub', url: 'https://github.com' },
          { name: 'LinkedIn', url: 'https://linkedin.com' },
        ].map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            className="block text-sm text-blue-600 transition dark:text-blue-400 hover:underline"
          >
            {link.name}
          </a>
        ))}
      </div>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="w-full px-4 py-2 mt-6 text-white transition bg-gray-600 rounded-md hover:bg-gray-700"
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </aside>
  );
}

export default Sidebar;
