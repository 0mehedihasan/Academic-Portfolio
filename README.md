# Academic Portfolio
Visit : https://0mehedihasan.github.io/Academic-Portfolio/
---
## Project Overview

**Academic Portfolio** is a web-based platform designed for academic scholars or researchers to showcase their academic achievements, research contributions, projects, and personal information in a structured and elegant manner. It allows for easy navigation through categorized sections and provides options for light/dark modes and multiple languages. This portfolio is responsive, making it accessible from any device, and can be customized to fit the unique needs of the individual academic or researcher.

---

## Features

### 1. Home Page
- Displays all categorized information (About Me, Honors and Awards, Publications, Projects, etc.) sequentially.
- Offers easy navigation for visitors to quickly view all the details.
- Highlights key academic achievements and personal information.

### 2. Sidebar
- Persistent sidebar available on all pages.
- **Profile Picture**, **Name**, and **Brief Description** are shown.
- **Contact Information**:
  - Email
  - Address
- **Download CV** button.
- Links to professional profiles:
  - Google Scholar
  - ORCID
  - ResearchGate
  - GitHub
  - LinkedIn
  - Medium
  - Instagram (optional)
- **Theme Toggle**: Option to switch between light and dark modes.
- **Language Dropdown**: Allows switching between available languages.

### 3. Menu Buttons
Each menu button provides categorized information with easy navigation:
- **About Me**: A detailed introduction of the individual, academic focus, and areas of interest.
- **Honors and Awards**: List and description of awards, recognitions, and accomplishments.
- **Publications**: Categorized list of published papers, journals, and conference proceedings. Each item links to the full publication or DOI.
- **Projects**: Describes academic or research projects undertaken, with links to code repositories or detailed project reports.
- **Extracurricular Activities**: Includes participation in conferences, volunteering, or other non-academic activities.
- **Education**: Displays academic qualifications, including degree titles, institutions, and timelines.
- **Experiences**: Describes academic, teaching, and professional experiences, including positions held.
- **Contact**: A contact form or details to directly reach out.

### 4. Light/Dark Mode
- Users can switch between light and dark themes using the toggle button located in the sidebar.
- Theme preference is stored locally using **LocalStorage**, so the system remembers the user's preferred mode.

### 5. Language Support
- Multi-language support with an option to switch between:
  - **English (UK)**
  - **English (US)**
  - **German**
  - **French**
- Content dynamically updates based on the selected language, managed through a localization framework like **i18next**.

### 6. Search Functionality
- A search bar is provided to quickly find specific publications, awards, or projects.

### 7. Responsive Design
- The platform is fully responsive, ensuring a smooth experience on both desktop and mobile devices.

---

## Technology Stack

### Frontend
- **HTML5**: For page structure.
- **CSS3**: Styling and layout.
  - **Bootstrap** or **Tailwind CSS**: For responsive and modern UI.
- **JavaScript**: Handles interactivity, light/dark mode, and language switching.
  - **i18next**: For language localization.
  - **LocalStorage**: To save theme and language preferences.

### Backend (Optional)
- **Java/JSP** or **Python (Flask/Django)**: For dynamic data handling and user management.
- **Database** (Optional for storing dynamic content):
  - **MySQL** or **PostgreSQL**.

### Deployment Platforms
- **GitHub**: For version control.
- **Deployment**: Can be deployed on **Heroku**, **Netlify**, or a custom server.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/academic-portfolio.git
   cd academic-portfolio

2. Install dependencies (if using npm or yarn):

npm install


3. Run the application (for local development):

npm start


4. Open the app in your browser at:

http://localhost:3000




---

Usage

Light/Dark Mode

Users can toggle between light and dark modes from the sidebar. The system will remember the last selected mode.


Language Support

Use the language dropdown in the sidebar to switch between English (UK), English (US), German, and French. The content will update automatically to reflect the selected language.


Customization

Edit content directly in the respective sections of the code, or use an admin panel (if implemented) for easier updates.



---

Project Structure

├── public <br>
│   ├── index.html          # Main HTML page<br>
│   ├── css<br>
│   │   └── styles.css      # Custom CSS styles<br>
│   └── js<br>
│       └── app.js          # JavaScript for interactivity<br>
├── src<br>
│   ├── components          # React components or other UI components <br>
│   ├── pages               # Pages like About, Projects, Publications, etc.<br>
│   └── i18n                # Language files (JSON) for localization <br>
├── README.md               # Project documentation <br>
└── package.json            # Project dependencies and scripts<br>


---

Future Enhancements

Admin Panel: A dashboard for managing portfolio content dynamically.

Advanced Search: Improve search functionality to allow filtering publications and projects.

API Integrations: Automatically fetch data from external sources like Google Scholar or ORCID.

Contributors Section: Display GitHub profiles of contributors to the project.



---

Contributing

We welcome contributions from the community! To get started:

1. Fork this repository.


2. Create a new branch for your feature or bugfix:

git checkout -b feature/your-feature-name


3. Commit your changes:

git commit -m 'Add your feature description'


4. Push your branch to GitHub:

git push origin feature/your-feature-name


5. Open a pull request with a description of your changes.




---
## Our Top Contributors 

<p align="center"><a href="https://github.com/0mehedihasan/Academic-Portfolio/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=0mehedihasan/Academic-Portfolio" max={1000} columns={100} anon={1}/>
</a></p>


---

License

This project is licensed under the Apache2.0 License. See the LICENSE file for details.


---

Contact

If you have any questions or suggestions, feel free to contact:

Md Mehedi Hasan: mdmehedihasansr@gmail.com
