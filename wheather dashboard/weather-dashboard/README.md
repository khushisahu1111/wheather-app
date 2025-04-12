# Weather Dashboard

A real-time weather dashboard application built with React and Node.js/Express.

## Project Structure

\`\`\`
weather-dashboard/
├── client/           # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── search-bar.tsx
│   │   │   ├── weather-card.tsx
│   │   │   ├── error-message.tsx
│   │   │   └── loading-spinner.tsx
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tailwind.config.js
├── server/           # Node.js Backend
│   ├── routes/
│   │   └── weather.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── .gitignore
└── README.md
\`\`\`

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (get one at https://openweathermap.org/appid)

### Backend Setup

1. Navigate to the server directory:
   \`\`\`
   cd server
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Create a `.env` file in the server directory with your OpenWeatherMap API key:
   \`\`\`
   OPENWEATHER_API_KEY=your_api_key_here
   PORT=5000
   \`\`\`

4. Start the server:
   \`\`\`
   npm run dev
   \`\`\`

### Frontend Setup

1. Navigate to the client directory:
   \`\`\`
   cd client
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Start the React application:
   \`\`\`
   npm start
   \`\`\`

4. Open your browser and go to `http://localhost:3000`

## Features

- Search for weather by city name
- Display current weather conditions
- Show temperature, humidity, wind speed, and feels like temperature
- Responsive design for mobile and desktop
- Search history using localStorage
- Error handling for invalid cities or API issues

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Lucide Icons
- **Backend**: Node.js, Express
- **API**: OpenWeatherMap API
