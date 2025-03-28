GitHub Candidate Search 🕵️‍♀️🚀
Project Overview
GitHub Candidate Search is a sophisticated web application designed to help recruiters and hiring managers discover and track potential candidates through their GitHub profiles. Leveraging the GitHub API, this React TypeScript application provides an intuitive interface for browsing and saving candidate profiles.
Show Image
🌟 Features

Dynamic Candidate Discovery: Randomly fetch GitHub user profiles
Detailed Candidate Profiles: View comprehensive information including:

Name
Username
Location
Avatar
Email
GitHub Profile Link
Company


Interactive Candidate Management:

Accept candidates to a potential candidates list
Reject candidates and move to the next profile
Persistent storage using localStorage
Remove candidates from the potential list



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

Clone the repository
bashCopygit clone https://github.com/yourusername/github-candidate-search.git
cd github-candidate-search

Create a .env file in the project root
bashCopytouch .env

Add your GitHub Personal Access Token to .env
CopyVITE_GITHUB_TOKEN=your_github_personal_access_token_here

Install dependencies
bashCopynpm install

Start the development server
bashCopynpm run dev

Open http://localhost:3000 in your browser
