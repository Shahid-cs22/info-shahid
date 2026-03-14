# Portfolio Contact Server

Express + MongoDB backend for the contact form.

## Setup

1. `cd server && npm install`
2. Copy `.env.example` to `.env` and add your MongoDB URI
3. `npm start`

## Deploy on Render / Railway

1. Push the `server/` folder to a GitHub repo
2. Create a new Web Service on [Render](https://render.com) or [Railway](https://railway.app)
3. Set **Build Command**: `npm install`
4. Set **Start Command**: `npm start`
5. Add environment variable: `MONGODB_URI` = your MongoDB Atlas connection string
6. Once deployed, copy the URL and set it as `VITE_API_URL` in your frontend
