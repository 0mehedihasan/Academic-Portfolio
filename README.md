# Academic Portfolio

Visit: [https://0mehedihasan.github.io/Academic-Portfolio/](https://0mehedihasan.github.io/Academic-Portfolio/)

---
## Our Top Contributors 

<p align="center"><a href="https://github.com/0mehedihasan/Academic-Portfolio/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=0mehedihasan/Academic-Portfolio" max={1000} columns={100} anon={1}/>
</a></p>

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

### Backend
- **Node.js**: JavaScript runtime used to build the backend services and APIs.
- **Express.js**: Framework for building fast, scalable web applications and RESTful APIs.
- **MongoDB**: NoSQL database used for storing dynamic content like publications, projects, and user data.
  - **Mongoose**: ODM library for MongoDB that simplifies database interactions.
- **JWT Authentication**: Secure API access for authorized users (optional).
- **Bcrypt.js**: For password hashing and securing sensitive data (optional).

### Frontend
- **HTML5**: For page structure.
- **CSS3**: Styling and layout.
  - **Bootstrap** or **Tailwind CSS**: For responsive and modern UI.
- **JavaScript**: Handles interactivity, light/dark mode, and language switching.
  - **i18next**: For language localization.
  - **LocalStorage**: To save theme and language preferences.

### Deployment Platforms
- **GitHub**: For version control.
- **Deployment**: Hosted on **Heroku** or **Render** (for Node.js backend) and **Netlify** (for static frontend files).

---

## Installation

### Prerequisites
- **Node.js** and **npm** should be installed.
- **MongoDB** instance (local or cloud-based, like MongoDB Atlas).

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/0mehedihasan/Academic-Portfolio.git
   cd Academic-Portfolio

2. Install backend dependencies:
```
npm install
```
3. Create a .env file in the root directory with the following environment variables:
```
PORT=3000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
```

4. Start the application:
```
npm start
```

5. Visit the application at: ```http://localhost:3000```



---

### API Endpoints

#### Publications

```GET /api/publications``` - Retrieves all publications.

```POST /api/publications``` - Adds a new publication (authentication required).


#### Projects

```GET /api/projects``` - Retrieves all projects.

```POST /api/projects``` - Adds a new project (authentication required).


#### Contact Form

```POST /api/contact``` - Sends a message through the contact form.


#### Authentication

```POST /api/auth/login``` - Logs in a user.

```POST /api/auth/registe```r - Registers a new user.



---

### Usage

#### Light/Dark Mode

Users can toggle between light and dark modes from the sidebar. The system will remember the last selected mode.


#### Language Support

Use the language dropdown in the sidebar to switch between English (UK), English (US), German, and French. The content will update automatically to reflect the selected language.


#### Customization

Edit content directly in the respective sections of the code, or use an admin panel (if implemented) for easier updates.



---

### Project Structure
```
├── backend <br>
│   ├── models               # MongoDB models (publications, projects, etc.)<br>
│   ├── routes               # Express routes for handling API requests <br>
│   ├── controllers          # Functions handling business logic <br>
│   └── server.js            # Entry point for the Node.js/Express backend <br>
├── public <br>
│   ├── index.html           # Main HTML page<br>
│   ├── css <br>
│   │   └── styles.css       # Custom CSS styles <br>
│   └── js <br>
│       └── app.js           # JavaScript for frontend interactivity <br>
├── src <br>
│   ├── components           # React or other frontend components <br>
│   ├── pages                # Pages like About, Projects, Publications, etc. <br>
│   └── i18n                 # Language files (JSON) for localization <br>
├── .env                     # Environment variables <br>
├── README.md                # Project documentation <br> 
└── package.json             # Project dependencies and scripts <br>

```
---

### Future Enhancements

#### Admin Panel: A dashboard for managing portfolio content dynamically.

#### Email Integration: Automated email notifications for contact form submissions.

#### Analytics: Track page views and interactions with Google Analytics.



---

License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

This `README.md` now reflects that the project is licensed under the **Apache License 2.0**.

