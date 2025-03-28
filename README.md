GitHub Candidate Search 🕵️‍♀️🚀
Project Overview
GitHub Candidate Search is a web application that helps recruiters and hiring managers discover and track potential candidates through GitHub profiles. Using the GitHub API, this React TypeScript application offers an intuitive interface for browsing and saving candidate profiles.

🌟 Features
Dynamic Candidate Discovery: Randomly fetch GitHub user profiles.

Detailed Candidate Profiles: View comprehensive details including:

Name

Username

Location

Avatar

Email

GitHub Profile Link

Company

Interactive Candidate Management:

Accept candidates to a potential candidates list.

Reject candidates and move to the next profile.

Persistent storage via localStorage.

Remove candidates from the potential list.

🛠 Technologies Used
React 18

TypeScript

React Router

GitHub API

Vite

React Icons

Local Storage

🚀 Getting Started
Prerequisites
Node.js (v18 or later)

npm (v8 or later)

GitHub Personal Access Token

Installation Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/github-candidate-search.git
Navigate to the project folder:

bash
Copy
Edit
cd github-candidate-search
Create a .env file in the project root:

bash
Copy
Edit
touch .env
Add your GitHub Personal Access Token to the .env file:

bash
Copy
Edit
VITE_GITHUB_TOKEN=your_github_personal_access_token_here
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser.
