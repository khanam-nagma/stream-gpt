# 🎬 Stream GPT

Stream GPT is a modern, Netflix-inspired movie streaming web app with AI-powered movie recommendations using OpenAI GPT. Built with React, Redux, Firebase Authentication, and TMDB API, it delivers a seamless, responsive, and engaging user experience.

[![Netlify Status](https://api.netlify.com/api/v1/badges/27c9292d-1cdd-4dc5-aea9-7ac0722ed901/deploy-status)](https://app.netlify.com/projects/stream-gpt/deploys)

---

## 🚀 Features

- **User Authentication:** Sign up and sign in with Firebase Auth.
- **Movie Browsing:** Browse trending, popular, upcoming, and now playing movies from TMDB.
- **AI Movie Recommendations:** Get personalized movie suggestions using OpenAI GPT.
- **Multi-language Support:** Switch between English, Hindi, and Spanish.
- **Responsive UI:** Netflix-like design with Tailwind CSS.
- **Profile Management:** User avatars and display names.
- **Trailer Previews:** Watch movie trailers directly in the app.

---

## 🛠️ Tech Stack

- **Frontend:** React, Redux Toolkit, React Router DOM, Tailwind CSS
- **Backend:** Firebase Authentication
- **APIs:** [TMDB API](https://www.themoviedb.org/documentation/api), [OpenAI API](https://platform.openai.com/docs/api-reference)
- **Testing:** Jest, React Testing Library

---

## 📦 Folder Structure

```
src/
  Components/         # React components (Login, Browse, Header, etc.)
  Utils/              # Redux slices, constants, API configs
  hooks/              # Custom React hooks for fetching movies
  index.js            # Entry point
  App.js              # App wrapper with Redux Provider
  index.css           # Tailwind CSS and custom styles
public/
  index.html          # HTML template
```

---

## ⚡ Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/your-username/stream-gpt.git
cd stream-gpt
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your API keys:

```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_MSG_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_ID=your_firebase_app_id
REACT_APP_MEASUREMENT_ID=your_firebase_measurement_id
REACT_APP_TMDB_KEY=your_tmdb_api_key
REACT_APP_OPENAI_KEY=your_openai_api_key
```

### 4. Start the development server

```sh
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

---

## 🌐 Live Demo

[Stream GPT Live](https://your-live-url.com)

---

## 🧠 How It Works

- **Authentication:** Users can sign up or sign in. Auth state is managed via Firebase and Redux.
- **Movie Data:** Movie lists are fetched from TMDB using custom hooks and displayed in categorized carousels.
- **AI Recommendations:** Enter a prompt (e.g., "comedy movies") in the GPT search bar. The app queries OpenAI GPT for movie names, then fetches their details from TMDB.
- **Language Switching:** Change the UI language from the header dropdown (when GPT search is active).

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

---

## 🙋‍♂️ Author

**Nagma Khanam**  
[LinkedIn](https://www.linkedin.com/in/nagma-nk-khanam/)

---

## 🙏 Acknowledgements

- [The Movie Database (TMDB)](https://www.themoviedb.org/)
- [OpenAI](https://openai.com/)
- [Firebase](https://firebase.google.com/)
- [Netflix UI inspiration](https://www.netflix.com/)

---
