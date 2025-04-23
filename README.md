# 📦 Link Shortener Server

This is a simple Express + TypeScript backend that integrates with the [CleanURI API](https://cleanuri.com/) to shorten URLs. It's designed to be consumed by a frontend client, and exposes a single POST endpoint for URL shortening.

---

## ✨ Features

- ⚡ Fast and lightweight backend using Express
- 🔗 URL shortening via CleanURI
- 🔒 Basic input validation and error handling
- 🌐 CORS enabled for seamless frontend integration

---

## 🚀 Getting Started

### ✅ Requirements

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm or yarn

### 📥 Installation

```bash
git clone https://github.com/guibbers/link-shortener-server.git
cd link-shortener-server
npm install
```

## ▶️ Run the server
```bash
npm run dev

```
The server will be running at http://localhost:3333

## 📡 API Reference

### POST /
#### Request Body
```json 
{
  "url": "https://example.com"
}
```

#### Successful Response
```json
{
  "shortenedURL": "https://cleanuri.com/xyz123"
}
```

#### Error Response
```json
{
  "error": "Please make sure to type a valid URL!"
}
```

## Project Structure
```perl
link-shortener-server/
├── src/
│   └── index.ts         # Entry point and main route
├── tsconfig.json        # TypeScript config
├── package.json         # Dependencies and scripts
└── README.md

```

## 🔗 Related
* [Frontend (React)](https://github.com/guibbers/react-link-shortener) — Interface for shortening and displaying links.

## 🧾 License
This project is licensed under the MIT License.


Made by [Guilherme Torres](https://github.com/guibbers)
