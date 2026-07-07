# Avadhoot Enterprises Website

An ISO 9001:2015 Certified Organization website built using a decoupled **React (Vite) Frontend** and a **Node.js (Express) Backend**.

This codebase features a clean, minimal light UI theme with industrial deep blue and red accents representing the corporate branding of Avadhoot Enterprises.

---

## Project Structure

The project is structured into two main components:

```text
├── client/                 # React SPA (Vite, CSS)
│   ├── src/
│   │   ├── components/     # Layout Section Components (Navbar, Hero, About, etc.)
│   │   ├── App.jsx         # Root layout assembler & scroll-spy observer
│   │   ├── index.css       # Custom design styles (colors, layouts, animations)
│   │   └── main.jsx        # Entry point
│   ├── index.html          # HTML Shell
│   └── package.json        # Client configuration & dependencies
│
├── server/                 # Express API Server (NodeJS)
│   ├── data/               # Persistent data storage (JSON files)
│   │   ├── inquiries.json  # Saved customer quote requests
│   │   └── applications.json# Saved career applications
│   ├── uploads/            # Stored career CV/Resume files (.pdf, .docx)
│   ├── server.js           # API endpoints, multer config, and server starter
│   └── package.json        # Server configuration & dependencies
│
├── package.json            # Root orchestrator package
└── .gitignore              # Ignored folder settings (node_modules, builds, database writes)
```

---

## Prerequisites

Ensure you have **[Node.js](https://nodejs.org/)** (v18 or higher recommended) and **npm** installed on your machine.

To check if they are installed, run:
```bash
node -v
npm -v
```

---

## Setup & Running Locally

Follow these quick commands to set up the codebase and get it running locally.

### 1. Install Dependencies
Open your terminal in the project root folder and execute:
```bash
# Install root script orchestrator dependencies
npm install

# Installs both React (client) and Express (server) dependencies automatically
npm run install:all
```

### 2. Start the Development Servers
Run the following orchestrator command to spin up the client and server concurrently:
```bash
npm run dev
```

*   **React Frontend** will start on: **`http://localhost:5173`**
*   **Express Backend API** will run on: **`http://localhost:5000`**

The navbar will smooth-scroll, and the VMC/CNC/EDM machinery data tables will be dynamically fetched from the Express API endpoints.

---

## Express Backend API Details

The Express backend handles the following routes:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **`GET`** | `/api/machinery` | Returns the dynamic list of workshop machines and makes (BFW, REIPL, Ace). |
| **`GET`** | `/api/pmi` | Returns the detailed list of Precision Measuring Instruments. |
| **`POST`** | `/api/contact` | Accepts quote request submissions and saves them locally in `server/data/inquiries.json`. |
| **`POST`** | `/api/careers` | Accepts applicant profiles and resume CV uploads. Saves uploaded documents into `server/uploads/` and logs details into `server/data/applications.json`. |

---

## Build for Production

If you want to compile the frontend application for hosting on static servers, run:
```bash
npm run build:client
```
The compiled, production-ready static assets will be output to **`client/dist/`**.
